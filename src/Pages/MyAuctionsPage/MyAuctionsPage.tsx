import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button, { BtnType } from "../../components/Button/Button";
import { GlobalContext } from "../../Context/GlobalProvider";
import { ActionTypes } from "../../Context/Reducer";
import { AuctionData, auctionData } from "../../utils/data";
import Bids from "../Details/Bids";

import styles from "./myAuctionsPage.module.css";
import MyBids from "./MyBids";

const MyAuctionsPage = () => {
  const history = useHistory();
  
  const {
    state: { user, isLoggedIn },
    appDispatch
  } = useContext(GlobalContext);

  const [show, setShow] = useState(false);

  // const savedBids = JSON.parse(JSON.stringify(user.bids));
 
  

  return (
    <section className={classNames(styles.section)}>
      <div className={styles.legend}>
        <div>
          <h3>나의 경매</h3>
        </div>
      </div>
      {!show  ? (
        <div className={styles.noAuctoinsContainer}>
          <h3>경매 참여내역이 여기에 표시됩니다.</h3>
          <p>
            귀하가 경매 입찰하거나 낙찰되었을 때, 해당 내역들이 여기에
            표시됩니다.
          </p>
          <Button
            onClick={() => {
              // history.push("/진행중인 경매");
              setShow(true)
            }}
            btnType={BtnType.SECONDARY}
            fontSize="16px"
            width="210px">
            작품 보러가기
          </Button>
        </div>
      ) : (
        user.bids.map((myBid) => <MyBids data={myBid} user={user} />)
      )}
    </section>
  );
};

export default MyAuctionsPage;
