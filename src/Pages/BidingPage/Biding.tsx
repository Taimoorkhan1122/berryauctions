import React, {
  EventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { useParams } from "react-router";
import { ClickEvent, Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

import Button, { BtnType } from "../../components/Button/Button";
import AuctionCard from "../../components/Cards/AuctionCard";
import { auctionData } from "../../utils/data";

import dropdownArrow from "../../images/dropdownW.png";
import bbrIcon from "../../images/bbrWicon.png";
import styles from "./biding.module.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { GlobalContext } from "../../Context/GlobalProvider";

type Inputs = {
  bidAmount: number;
  currency: string;
};

const CurrencySelect: React.FC<{
  currency: string;
  handleClick: EventHandler<any>;
}> = ({ currency, handleClick }) => (
  <Menu
    onClick={(e) => e.preventDefault()}
    offsetX={-10}
    offsetY={25}
    direction="bottom"
    className={styles.currencySlect}
    transition={true}
    menuButton={
      <MenuButton onClick={(e) => e.preventDefault()}>
        {currency.includes("BBR") && <img src={bbrIcon} alt="bbr icon" />}
        <h3>{currency}</h3>
        <img src={dropdownArrow} alt="select arrow" />
      </MenuButton>
    }>
    <MenuItem value="ETH" onClick={handleClick} className={styles.currencyItem}>
      ETH
    </MenuItem>
    <MenuItem value="BBR" onClick={handleClick} className={styles.currencyItem}>
      BBR
    </MenuItem>
  </Menu>
);

const Biding = () => {
  const { id } = useParams<{ id: string }>();
  const _id = id.split("_").map((d) => d);

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
  });

  const [currency, setCurrency] = useState("BBR");
  const currentValue = watch("bidAmount");

  const disabled = () => {
    const walletAmount =
      user?.walletAmount && parseFloat(user?.walletAmount.split(" BBR")[0]);
    const currentBid = parseFloat(data.currentBid.split(" BBR")[0]);
    if (walletAmount && walletAmount < currentBid)
      return {
        isDisabled: true,
        message: "잔고가 부족합니다.",
      };
    else if (walletAmount && currentValue < currentBid)
      return {
        isDisabled: true,
        message: "현재 입찰가 이상의 금액을 입력해주세요.",
      };
    else return {
      isDisabled: true,
      message: "입찰하기",
    };
  };

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("submiting form", data);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <AuctionCard data={data} />
      </div>
      <div className={styles.bidContainer}>
        <div className={styles.pricing}>
          <h2>입찰하기</h2>
          <span>현재 입찰가</span>
          <span>{data.currentBid}</span>
        </div>

        <div className={styles.inputContainer}>
          <form
            id="hook-form"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.pricingForm}>
            <input
              {...register("bidAmount", {
                required: {
                  value: true,
                  message: "This is field cannot be empty",
                },
              })}
              type="number"
            />
            <span className={styles.dropdown}>
              <Controller
                render={({ field }) => (
                  <CurrencySelect
                    currency={currency}
                    handleClick={(e) => {
                      console.log("inside controller ", field.value);
                      setCurrency(e.value);
                      setValue("currency", currency);
                    }}
                  />
                )}
                name="currency"
                control={control}
                defaultValue=""
              />
            </span>
          </form>
          <small className={styles.small}>1,584,302원</small>
          <div className={styles.yourBalance}>
            <span className={styles.balance}>Your Balance</span>
            <span className={styles.amount}>0 BBR</span>
          </div>

          <p className={styles.info}>
            입찰 후에는 다시 회수하실 수 없습니다. <br />
            단, 낙찰되지 않으면 해당 입찰금액은 자동으로 입찰자의 월렛으로
            회수됩니다.
          </p>
        </div>

        <Button
          form="hook-form"
          type="submit"
          disabled={disabled().isDisabled}
          width="100%"
          btnType={BtnType.PRIMARY}>
          {disabled().isDisabled && disabled().message}
        </Button>
      </div>
    </div>
  );
};

export default Biding;
