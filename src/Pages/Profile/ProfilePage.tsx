import React from "react";

import styles from "./profile.module.css";
import Button, { BtnType } from "../../components/Button/Button";
import GradText from "../../components/GradText/GradText";
import SectionLayout from "../Home/SectionLayout";
import useProfile from "./useProfile";

import coverImage from "../../images/coverimages/user1.cover.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import vlive from "../../images/vlive.png";
import copyIcon from "../../images/copyIcon.png";
import copyIconDark from "../../images/copyIconDark.png";

const ProfilePage = () => {
  const { currentPath, user, listings, Works } = useProfile();

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
            <img src={user.artistData?.avatar} alt="user avatar" />
          </div>
          <div className={styles.addressContainer}>
            <Button width="35%" btnType={BtnType.PRIMARY}>
              월렛주소
            </Button>
            <span>{user.artistData?.walletAddress}</span>
            <img
              className={styles.copyBtn}
              src={copyIconDark}
              alt="copy wallet address icon"
            />
          </div>
          <div className={styles.artistDetails}>
            <div className={styles.infoContainer}>
              <div>
                <h3>{user.artistData?.username}</h3>
                {currentPath === "/프로필" && (
                  <Button
                    width="35%"
                    fontSize="15px"
                    btnType={BtnType.TERTIARY}>
                    프로필 수정
                  </Button>
                )}
              </div>
              <GradText propStyles={{ fontSize: "36px", margin: 0 }}>
                {user.artistData?.profession}
              </GradText>
            </div>
            <div className={styles.aboutContainer}>
              <h3>아티스트 소개</h3>

              {user.artistData ? (
                <>
                  <p className={styles.about}>
                    {user.artistData?.about
                      ? user.artistData?.about
                      : "소개말이 없습니다."}
                  </p>

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
                </>
              ) : (
                <p className={styles.about}>소개말이 없습니다.</p>
              )}
            </div>
          </div>
        </div>
        {/* asid container end */}

        <div className={styles.listings}>
          <h3>
            등록된 작품 <span>{listings}</span>
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
