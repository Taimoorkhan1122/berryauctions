import React from "react";

import styles from "./myAuctionsPage.module.css";
import Button, { BtnType } from "../../components/Button/Button";
import { AuctionData, auctionData } from "../../utils/data";
import { User } from "../../Context/GlobalProvider";

import success from "../../images/bidSuccess.png";
import warn from "../../images/warnMsgIcon.png";
import info from "../../images/infoMsgIcon.png";
import classNames from "classnames";

interface IMyBidsProps {
  data: AuctionData;
  user: User;
}

const MyBids: React.FC<IMyBidsProps> = ({ data, user }) => {
  const [{ isWinner, walletAddress, bidingAmount }] = data.bids.filter((bid) =>
    bid.walletAddress.includes(user.walletAddress || "")
  );

  console.log(parseFloat( bidingAmount.split(" BBR")[0]));
  

  return (
    <div className={styles.auctionDetails}>
      {/* image container */}
      <div className={styles.imgContainer}>
        <img src={data.nftLink} alt="nft" loading="lazy" />
      </div>
      <div className={styles.detailsContainer}>
        <h3 className={styles.heading}>{data.heading}</h3>
        <div className={styles.avatarContainer}>
          <img src={data.avatar} alt="user avatar" />
          <span>{data.username}</span>
        </div>
        <div className={styles.timeAndPricing}>
          <div className={styles.pricing}>
            <span>현재 입찰가</span>
            <h3>{data.currentBid}</h3>
            <small className={styles.small}>1,584,302원</small>
          </div>

          <div className={styles.timeLeft}>
            {isWinner ? (
              <>
                <span>경매 종료일시</span>
                <div className={styles.time}>
                  <h3>{data.timeRemaining}</h3>
                  {/* <h3>18:00:00</h3> */}
                </div>
                <span>2021년</span>
              </>
            ) : (
              <>
                <span>남은시간</span>
                <div className={styles.timeRemaining}>
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
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.auctionStates}>
        {isWinner ? (
          <>
            <div className={styles.message}>
              <img className={styles.linkIcon} src={success} alt="check icon" />
              <span>낙찰되었습니다!</span>
            </div>
            <p>
              축하드립니다. <br />
              귀하는 이 작품의 경매에 낙찰되었습니다. <br />
              귀하의 NFT를 요청하십시오.
            </p>
            <Button width="100%" btnType={BtnType.PRIMARY}>
              NFT 요청하기
            </Button>
          </>
        ) : parseFloat(bidingAmount.split(" BBR")[0]) >
          parseFloat(data.currentBid.split(" BBR")[0]) ? (
          <>
            <div className={classNames(styles.message, styles.infoContainer)}>
              <span className={styles.infoMessage}>낙찰되었습니다!</span>
              <img className={styles.linkIcon} src={info} alt="check icon" />
            </div>
            <div className={styles.pricing}>
              <span>현재 입찰가</span>
              <h3>{bidingAmount}</h3>
              <small className={styles.small}>1,584,302원</small>
            </div>
            <Button width="100%" btnType={BtnType.SECONDARY}>
              작품 보러가기
            </Button>
          </>
        ) : (
          <>
            <div className={classNames(styles.message, styles.infoContainer)}>
              <span className={styles.warnMessage}>낙찰되었습니다!</span>
              <img className={styles.linkIcon} src={warn} alt="check icon" />
            </div>
            <div className={styles.pricing}>
              <span>현재 입찰가</span>
              <h3>{bidingAmount}</h3>
              <small className={styles.small}>1,584,302원</small>
            </div>
            <Button width="100%" btnType={BtnType.SECONDARY}>
              작품 보러가기
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyBids;
