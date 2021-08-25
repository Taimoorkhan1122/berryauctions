import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AuctionCard from "../../components/Cards/AuctionCard";
import { auctionData } from "../../utils/data";
import GoToTop from "../../utils/GoToTop";
import DetailsPage from "../Details/DetailsPage";
import SectionLayout from "../Home/SectionLayout";

import styles from "./auctions.module.css";

const AuctionInProgress = auctionData.map((item, index) => (
  <AuctionCard key={index + "_01"} data={item} />
));
const InProgress = () => {
  const { path } = useRouteMatch();
  
  return (
    <div className={styles.container}>
      <Switch>
        <Route
        exact
          path={path}
          children={
            <SectionLayout
              legendEnglish="auction in progress"
              legendKorean="진행중인 경매"
              children={AuctionInProgress}
            />
          }
        />
        <Route path={`${path}/:id`} children={<DetailsPage pageData={auctionData} />} />
      </Switch>

      <GoToTop />
    </div>
  );
};

export default InProgress;
