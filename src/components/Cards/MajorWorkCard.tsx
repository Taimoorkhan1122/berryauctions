import classNames from "classnames";
import React from "react";
import { useHistory } from "react-router";

import styles from "./card.module.css";
import CardLayout from "./CardLayout";

interface IMajorWorkCardProps {
  data: {
    heading: string;
    nftLink: string;
    avatar: string;
    username: string;
    price: string;
    owner: string;
  };
}

const MajorWorkCard: React.FC<IMajorWorkCardProps> = ({ data }) => {
  const history = useHistory();
  return (
    <CardLayout
      heading={data.heading}
      nftLink={data.nftLink}
      avatar={data.avatar}
      username={data.username}
      onClick={() => history.push(`주요작품/${data.username}_${data.price}`)}>
      {/* details container */}
      <div className={classNames(styles.detailsContainer)}>
        <div>
          <h3 style={{ color: "#666666" }}>판매가</h3>
          <span style={{ color: "#000" }}>{data.price}</span>
        </div>
        <div>
          <h3 style={{ color: "#666666" }}>소유자</h3>
          <span style={{ color: "#000" }}>
            <div className={styles.circle}></div> {data.owner}
          </span>
        </div>
      </div>
    </CardLayout>
  );
};

export default MajorWorkCard;
