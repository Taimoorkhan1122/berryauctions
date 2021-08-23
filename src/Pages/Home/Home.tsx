import React from "react";
import { data, data2 } from "../../App";
import AuctionCard from "../../components/Cards/AuctionCard";
import HeroContainer from "./HeroContainer";

import styles from "./home.module.css";
import SectionLayout from "./SectionLayout";
import MajorWorkCard from "../../components/Cards/MajorWorkCard";
import { artistData, auctionData, majorWorksData } from "../../utils/data";
import ArtistCard from "../../components/Cards/ArtistCard";
import GoToTop from "../../utils/GoToTop";
import { Route, Switch } from "react-router";
import AuctionsDetails from "../Auctions/AuctionsDetails";

const arr = [1, 2, 3, 4];

const AuctionInProgress = auctionData
  .slice(0, 4)
  .map((item, index) => <AuctionCard key={index + "_01"} data={item} />);
const MajorWork = majorWorksData
  .slice(0, 4)
  .map((item, index) => <MajorWorkCard key={index + "_02"} data={item} />);
const Artists = artistData
  .slice(0, 4)
  .map((item, index) => <ArtistCard key={index + "_03"} {...item} />);

const Home =() => (
  <div className={styles.container}>
    <HeroContainer />
    <div className={styles.sectionsContainer}>
      <div className={styles.auctionInProgress}>
        <SectionLayout
          legendEnglish="auction in progress"
          legendKorean="진행중인 경매"
          children={AuctionInProgress}
          link="진행중인 경매"
        />
      </div>
      <div className={styles.majorWokrs}>
        <SectionLayout
          legendEnglish="Major work"
          legendKorean="주요작품"
          children={MajorWork}
          link="주요작품"
        />
      </div>
      <div className={styles.majorWokrs}>
        <SectionLayout
          legendEnglish="Major work"
          legendKorean="아티스트"
          children={Artists}
          link="아티스트"
        />
      </div>
    </div>
    <GoToTop />
  </div>
);
const Auctions = () => {

  return (
    <div className={styles.container}>
      <HeroContainer />
      <div className={styles.sectionsContainer}>
        <div className={styles.auctionInProgress}>
          <SectionLayout
            legendEnglish="auction in progress"
            legendKorean="진행중인 경매"
            children={AuctionInProgress}
            link="진행중인 경매"
          />
        </div>
        <div className={styles.majorWokrs}>
          <SectionLayout
            legendEnglish="Major work"
            legendKorean="주요작품"
            children={MajorWork}
            link="주요작품"
          />
        </div>
        <div className={styles.majorWokrs}>
          <SectionLayout
            legendEnglish="Major work"
            legendKorean="아티스트"
            children={Artists}
            link="아티스트"
          />
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Auctions;
