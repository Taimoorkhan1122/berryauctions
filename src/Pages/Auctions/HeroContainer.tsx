import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import Button, { BtnType } from "../../components/Button/Button";
import GradText from "../../components/GradText/GradText";

import styles from "./heroContainer.module.css";
import heroImage from "../../images/content_images/park_03.jpg";

const HeroContainer = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="hero section nft" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.author}>
          <Avatar /> <GradText>Arttrainer</GradText>
        </div>
        <h2 className={styles.heroHeading}>The other side</h2>
        {/* auction details start */}
        <div className={styles.auctionDetails}>
          <div className={styles.pricing}>
            <span>현재 입찰가</span>
            <h3>0.61 BBR</h3>
            <small className={styles.small}>1,584,302원</small>
          </div>
          <div className={styles.timeLeft}>
            <span>남은시간</span>
            <div className={styles.time}>
              {/* day */}
              <h3>
                13 <span className={styles.small}>일</span>
              </h3>
              {/* hour */}
              <h3>
                15 <span className={styles.small}>시</span>
              </h3>
              {/* minutes */}
              <h3>
                27 <span className={styles.small}>분</span>
              </h3>
              {/* seconds */}
              <h3>
                19 <span className={styles.small}>초</span>
              </h3>
            </div>
          </div>
        </div>
        {/* auction details end */}
        <div className={styles.cta}>
          <Button
            btnType={BtnType.PRIMARY}
            text="경매 참여하기"
            
          />
          <Button btnType={BtnType.SECONDARY} text="작품보기"  />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
