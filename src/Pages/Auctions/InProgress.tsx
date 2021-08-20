import React from 'react'
import AuctionCard from '../../components/Cards/AuctionCard';
import { auctionData } from '../../utils/data';
import GoToTop from '../../utils/GoToTop';
import SectionLayout from '../Home/SectionLayout';

import styles from "./auctions.module.css";

const AuctionInProgress = auctionData.map((item, index) => (
  <AuctionCard key={index + "_01"} data={item} />
));
const InProgress = () => {
    
    return (
      <div className={styles.container}>
        <SectionLayout
          legendEnglish="auction in progress"
          legendKorean="진행중인 경매"
          children={AuctionInProgress}
        />
        <GoToTop />
      </div>
    );
}

export default InProgress
