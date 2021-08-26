import React, { useContext } from "react";

import styles from "./profile.module.css";
import Avatar from "../../components/Avatar/Avatar";
import classNames from "classnames";
import { GlobalContext } from "../../Context/GlobalProvider";
import { stat, Stats } from "fs";
import { artistData, auctionData } from "../../utils/data";
import Button, { BtnType } from "../../components/Button/Button";
import GradText from "../../components/GradText/GradText";

import coverImage from "../../images/coverimages/user1.cover.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import vlive from "../../images/vlive.png";
import copyIcon from "../../images/copyIcon.png";
import MajorWorkCard from "../../components/Cards/MajorWorkCard";
import { useParams } from "react-router";
import SectionLayout from "../Home/SectionLayout";

const ProfilePage = () => {
  const { state } = useContext(GlobalContext);

  const user = useParams();

  const Works = auctionData.map((item, index) => (
    <MajorWorkCard key={index + "_01"} data={item} />
  ));

  const imgStyles = {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: 280,
    backgroundImage: `url(${coverImage})`,
  };

  return (
    <div>
      {/* wall image container */}
      <div className={styles.absContainer}>
        <div className={styles.wallimage}>
          <div className={styles.imageContainer}></div>
          <div style={imgStyles}></div>
        </div>
      </div>
      {/* wall image container end */}
      <div style={{ height: imgStyles.height - 88, display: "hidden" }}></div>

      <div className={styles.bottomContainer}>
        {/* asid container start */}
        <div className={styles.asid}>
          {/* avatar container */}
          <div className={styles.avatarContainer}>
            <img src={artistData[3].imgLink} alt="user avatar" />
          </div>
          <div className="addressContainer">
            <Button btnType={BtnType.PRIMARY}>월렛주소</Button>
            <span className="address">{state.user.walletAddress}</span>
          </div>
          <div className={styles.artistDetails}>
            <div className={styles.infoContainer}>
              <h3>{artistData[0].username}</h3>
              <GradText>{artistData[0].profession}</GradText>
            </div>
            <p className={styles.about}>{artistData[0].about}</p>
          </div>
          <div className={styles.linksContainer}>
            {/* social media links */}

            <div className={styles.link}>
              <div>
                <img
                  className={styles.linkIcon}
                  src={instagram}
                  alt="instgram icon"
                />
                <span>Instagram</span>
              </div>
              <img src={copyIcon} alt="bid link" />
            </div>

            <div className={styles.link}>
              <div>
                <img
                  className={styles.linkIcon}
                  src={facebook}
                  alt="instgram icon"
                />
                <span>Instagram</span>
              </div>
              <img src={copyIcon} alt="bid link" />
            </div>

            <div className={styles.link}>
              <div>
                <img
                  className={styles.linkIcon}
                  src={twitter}
                  alt="instgram icon"
                />
                <span>Instagram</span>
              </div>
              <img src={copyIcon} alt="bid link" />
            </div>

            <div className={styles.link}>
              <div>
                <img
                  className={styles.linkIcon}
                  src={vlive}
                  alt="instgram icon"
                />
                <span>Instagram</span>
              </div>
              <img src={copyIcon} alt="bid link" />
            </div>
          </div>
        </div>
        {/* asid container end */}

        <div className={styles.listings}>
          <h3>
            등록된 작품 <span>{artistData[0].totalWork}</span>
          </h3>
          <div className={styles.work}>
            <SectionLayout
              legendEnglish="auction in progress"
              legendKorean="진행중인 경매"
              children={Works}
              hideLegend
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
