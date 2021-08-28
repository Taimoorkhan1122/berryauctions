import React from 'react'

import styles from "./myAuctionsPage.module.css";
import success from "../../images/bidSuccess.png";
import Button, { BtnType } from '../../components/Button/Button';

type BidStatusProps = {type: BtnType}

const BidStatus: React.FC<BidStatusProps> = ({type}) => {
    return (
      <>
        <div className={styles.message}>
          <img className={styles.linkIcon} src={success} alt="etherscan icon" />
          <span>낙찰되었습니다!</span>
        </div>
        <p>
          축하드립니다. <br />
          귀하는 이 작품의 경매에 낙찰되었습니다. <br />
          귀하의 NFT를 요청하십시오.
        </p>
        <Button width="100%" btnType={type}>
          {}
        </Button>
      </>
    );
}

export default BidStatus
