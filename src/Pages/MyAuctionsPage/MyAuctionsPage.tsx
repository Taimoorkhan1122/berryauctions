import classNames from "classnames";
import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalProvider";
import { auctionData } from "../../utils/data";

import styles from "./myAuctionsPage.module.css";
import MyBids from "./MyBids";

const MyAuctionsPage = () => {
  const {
    state: { user, isloggedIn },
  } = useContext(GlobalContext);
  
  return (
    <section className={classNames(styles.section)}>
      <div className={styles.legend}>
        <div>
          <h3>My bids</h3>
        </div>
      </div>
      {user.bids.map((myBid) => (
        <MyBids data={myBid} user={user} />
      ))}
    </section>
  );
};

export default MyAuctionsPage;
