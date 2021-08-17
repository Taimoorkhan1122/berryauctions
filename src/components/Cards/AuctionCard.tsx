import classNames from "classnames";
import React from "react";

import styles from "./card.module.css";
import CardLayout from "./CardLayout";

interface IAuctionProps {
  data: {
    heading: string;
    nftLink: string;
    avatar: string;
    username: string;
    timeRemaining: string;
    currentBid: string;
  };
}

const AuctionCard: React.FC<IAuctionProps> = ({ data }) => {
  return (
    <CardLayout
      heading={data.heading}
      nftLink={data.nftLink}
      avatar={data.avatar}
      username={data.username}>
      {/* details container */}
      <div className={classNames(styles.detailsContainer, styles.dark)}>
        <div>
          <h3 style={{ color: "#cccccc" }}>현재 입찰 가</h3>
          <span style={{ color: "#cccccc" }}>{data.currentBid}</span>
        </div>
        <div>
          <h3 style={{ color: "#cccccc" }}>남은시간</h3>
          <span style={{ color: "#cccccc" }}>{data.timeRemaining}</span>
        </div>
      </div>
    </CardLayout>
  );
};

export default AuctionCard;
