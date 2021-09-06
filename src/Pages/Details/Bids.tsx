import React from "react";

import styles from "./auctionsDetails.module.css";
import Avatar from "../../components/Avatar/Avatar";
import linkIcon from "../../images/link.png";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface IBidsProps {
  data: {
    isWinner: boolean;
    walletAddress: string;
    bidingAmount: string;
  };
  bidingStatus: boolean;
}

const Bids: React.FC<IBidsProps> = ({ data, bidingStatus }) => {

  if (!bidingStatus && data.isWinner)
    return (
      <div className={styles.successfulBid}>
        {/* winning bidder */}
        <div className={styles.pseudo}>
          <div className={styles.winnerStatus}>
            <Avatar width={"196px"}>
              <h4 className={styles.light}>낙찰자</h4>
              <span className={classNames(styles.balance, styles.heavy)}>
                {data.walletAddress}{" "}
              </span>
            </Avatar>
            <div className={styles.winningBidAmount}>
              <div>
                <span className={styles.light}>낙찰금액</span>
                <span className={styles.heavy}>0.524 BBR</span>
                <span className={styles.light}>1,585,302원</span>
              </div>
              <span className={styles.dateAndTime}>2021.08.31 18:04:01</span>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className={styles.lastBids}>
      <Avatar width={"auto"}></Avatar>
      <div className={styles.flexContainer}>
        <div className={styles.bidDetails}>
          <div className={styles.bidinfo}>
            <h4 className={styles.light}>낙찰자</h4>
            <span className={styles.address}>{data?.walletAddress}</span>
          </div>
          <span className={styles.bidDate}>2021.08.31 18:04:01</span>
        </div>
        <div className={styles.bidAmount}>
          <span className={styles.cryptoValue}>0.524 BBR</span>
          <span className={styles.currencyValue}>1,585,302원</span>
        </div>
      </div>
      <Link className={styles.bidlink} to="../">
        {/* <img src={linkIcon} alt="bid link" /> */}

        <div className={styles.copyBtn}></div>
      </Link>
    </div>
  );
};

export default Bids;
