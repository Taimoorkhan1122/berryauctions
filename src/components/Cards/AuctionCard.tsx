import classNames from "classnames";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { AuctionData } from "../../utils/data";

import styles from "./card.module.css";
import CardLayout from "./CardLayout";

interface IAuctionProps {
  data: AuctionData;
}

const AuctionCard: React.FC<IAuctionProps> = ({ data }) => {
  const history = useHistory();
  const {path} = useRouteMatch();
  console.log(path);
  
  const route = `진행중인 경매/${data.username}_${data.id}`;
  
  return (
    <CardLayout
      heading={data.heading}
      nftLink={data.nftLink}
      avatar={data.avatar}
      username={data.username}
      onClick={() => history.push(route)}>
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
