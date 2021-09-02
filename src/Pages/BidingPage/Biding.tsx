import React, { EventHandler, useContext, useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { ClickEvent, Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

import Button, { BtnType } from "../../components/Button/Button";
import AuctionCard from "../../components/Cards/AuctionCard";
import { auctionData } from "../../utils/data";

import dropdownArrow from "../../images/dropdownW.png";
import bbrIcon from "../../images/bbrWicon.png";
import EthIcon from "../../images/ethW.png";
import close from "../../images/close.png";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { GlobalContext } from "../../Context/GlobalProvider";
import useIsDisabled from "./useIsDisabled";
import Modal from "../../containers/Modal/Modal";
import styles from "./biding.module.css";
import BidingPage from "./BidingPage";
import InstantBuyPage from "./InstantBuyPage";

type Inputs = {
  bidAmount: number;
  currency: string;
};

export const CurrencySelect: React.FC<{
  currency: string;
  handleClick: EventHandler<any>;
}> = ({ currency, handleClick }) => (
  <Menu
    onClick={(e) => e.preventDefault()}
    offsetX={-15}
    offsetY={25}
    direction="top"
    className={styles.currencySlect}
    transition={true}
    menuButton={
      <MenuButton onClick={(e) => e.preventDefault()}>
        {currency.includes("BBR") ? (
          <img src={bbrIcon} alt="bbr icon" />
        ) : (
          <img src={EthIcon} alt="ether icon" />
        )}
        <h3>{currency}</h3>
        <img src={dropdownArrow} alt="select arrow" />
      </MenuButton>
    }>
    <MenuItem value="ETH" onClick={handleClick} className={styles.currencyItem}>
      <img src={EthIcon} alt="bbr icon" /> ETH
    </MenuItem>
    <MenuItem value="BBR" onClick={handleClick} className={styles.currencyItem}>
      <img src={bbrIcon} alt="bbr icon" /> BBR
    </MenuItem>
  </Menu>
);

const Biding = () => {
  const { id } = useParams<{ id: string }>();
  const _id = id.split("_").map((d) => d);

  const match = useRouteMatch();

  const [data] = auctionData.filter((data) => data.id === _id[1]);
  const {
    state: { user },
  } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      bidAmount: 0,
      currency: "BBR",
    },
  });

  const [currency, setCurrency] = useState("BBR");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentValue = watch("bidAmount");
  const { isDisabled, message } = useIsDisabled(
    user.walletAmount,
    data.currentBid,
    currentValue
  );

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <Modal isOpen={isOpen} handleClick={handleClick}>
        <div className={styles.modal}>
          <div className={styles.close} onClick={handleClick}>
            <img src={close} alt="modal close button" />
          </div>
          <div className={styles.details}>
            {match.path.includes("즉시구매하기") ? (
              <>
                <h3>즉시구매가 완료되었습니다.</h3>
                <p>나의 경매에서 해당 NFT를 요청하세요.</p>
              </>
            ) : (
              <>
                <h3>입찰이 완료되었습니다.</h3>
                <p>경매종료까지 남은시간은 아래와 같습니다.</p>
              </>
            )}
          </div>
          {match.path.includes("즉시구매하기") ? (
            <div className={styles.instantBuy}>
              <h3>
                <span className={styles.small}>즉시구매가</span> 385.24 BBR
              </h3>
            </div>
          ) : (
            <div className={styles.time}>
              {/* day */}
              <h3>
                13 <span className={styles.small}>일</span>
              </h3>
              {/* hour */}
              <h3>
                15 <span className={styles.small}>시</span>
              </h3>
              {/* minutes */}
              <h3>
                27 <span className={styles.small}>분</span>
              </h3>
              {/* seconds */}
              <h3>
                19 <span className={styles.small}>초</span>
              </h3>
            </div>
          )}

          {/* buttons container */}
          <div className={styles.walletOptions}>
            <Button onClick={handleClick} btnType={BtnType.PRIMARY}>
              확 인
            </Button>
          </div>
        </div>
      </Modal>
      <div className={styles.cardContainer}>
        <AuctionCard data={data} />
      </div>
      {/* <BidingPage data={data} user={user} /> */}
      {match.path.includes("즉시구매하기") ? (
        <InstantBuyPage handleClcik={handleClick} data={data} user={user} />
      ) : (
        <BidingPage handleClcik={handleClick} data={data} user={user} />
      )}
    </div>
  );
};

export default Biding;
