import React from "react";
import { data, data2 } from "../../App";
import AuctionCard from "../../components/Cards/AuctionCard";
import HeroContainer from "./HeroContainer";

import styles from "./auctions.module.css";
import SectionLayout from "./SectionLayout";
import MajorWorkCard from "../../components/Cards/MajorWorkCard";
import { artistData, auctionData } from "../../utils/data";
import ArtistCard from "../../components/Cards/ArtistCard";

const Auctions = () => {
  const arr = [1, 2, 3, 4];

  const AuctionInProgress = auctionData.map((item) => <AuctionCard data={item} />);
  const MajorWork = arr.map(item => <MajorWorkCard data={data2}/>)
  const Artists = artistData.map(item => <ArtistCard {...item} />)
  return (
    <div className={styles.container}>
      <HeroContainer />
      <div className={styles.sectionsContainer}>
        <div className={styles.auctionInProgress}>
          <SectionLayout
            legendEnglish="auction in progress"
            legendKorean="진행중인 경매"
            children={AuctionInProgress}
          />
        </div>
        <div className={styles.majorWokrs}>
          <SectionLayout
            legendEnglish="Major work"
            legendKorean="주요작품"
            children={MajorWork}
          />
        </div>
        <div className={styles.majorWokrs}>
          <SectionLayout
            legendEnglish="Major work"
            legendKorean="주요작품"
            children={Artists}
          />
        </div>
      </div>
    </div>
  );
};

export default Auctions;
