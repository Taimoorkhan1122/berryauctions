import classNames from "classnames";
import React from "react";
import { useHistory } from "react-router";
import { AuctionData } from "../../utils/data";

import styles from "./card.module.css";
import CardLayout from "./CardLayout";

interface IMajorWorkCardProps {
  data: AuctionData;
}

const MajorWorkCard: React.FC<IMajorWorkCardProps> = ({ data }) => {
  const history = useHistory();
  return (
    <CardLayout
      heading={data.heading}
      nftLink={data.nftLink}
      avatar={data.avatar}
      username={data.username}
      onClick={() => history.push(`주요작품/${data.username}_${data.id}`)}>
      {/* details container */}
      <div className={classNames(styles.detailsContainer)}>
        <div>
          <h3 style={{ color: "#666666" }}>판매가</h3>
          <span style={{ color: "#000" }}>{data.price}</span>
        </div>
        <div>
          <h3 style={{ color: "#666666" }}>소유자</h3>
          <span style={{ color: "#000" }}>
            <div className={styles.circle}></div> {data.bids[0].walletAddress}
          </span>
        </div>
      </div>
    </CardLayout>
  );
};

export default MajorWorkCard;
