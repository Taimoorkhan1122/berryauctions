import React, { useRef, useState } from "react";

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
import { useHistory } from "react-router";
import {
  ControlledMenu,
  MenuItem,
  MenuState,
  useMenuState,
} from "@szhsin/react-menu";

const Alert: React.FC<{
  children: React.ReactNode;
  ref: React.MutableRefObject<null>;
  menuProps: {
    state?: MenuState | undefined;
    endTransition: () => void;
  };
}> = ({ children, ref, menuProps }) => {
  return (
    <ControlledMenu
      {...menuProps}
      anchorRef={ref}
      offsetX={0}
      offsetY={-100}
      direction="left"
      className={styles.shareAlert}>
      <MenuItem>{children}</MenuItem>
    </ControlledMenu>
  );
};
const ProfilePage = () => {
  const { currentPath, user, listings, Works } = useProfile();
  const [copyImg, setCopyImg] = useState(copyIcon);

  const ref = useRef(null);
  const instaRef = useRef(null);
  const fbRef = useRef(null);
  const twitterRef = useRef(null);
  const vLiveRef = useRef(null);
  const { toggleMenu, ...menuProps } = useMenuState({ transition: false, unmountOnClose: true });

  const [instaState, setInstaState] = useState<MenuState>("closed");
  const [fbState, setfbState] = useState<MenuState>("closed");
  const [twitterState, settwitterState] = useState<MenuState>("closed");
  const [vliveState, setvLiveState] = useState<MenuState>("closed");
  // const [instaState, setInstaState] = useState<MenuState>("closed")

  const history = useHistory();

  const imgStyles = {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: 280,
    backgroundImage: `url(${coverImage})`,
  };

  const copyIconsStyle = {
    cursor: "pointer",
    backgroundImage: `url(${copyIcon})`,
    backgroundRepeat: "no-repeat",
    width: "24px",
    height: "24px",
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
            <Button width="90px" btnType={BtnType.PRIMARY}>
              월렛주소
            </Button>
            <span>{user.artistData?.walletAddress}</span>
            {/* copy address button */}
            <div
              ref={ref}
              className={styles.copyBtn}
              onClick={() => {
                toggleMenu(true);
                setTimeout(() => {
                  toggleMenu(false);
                }, 3000);
              }}></div>

            <ControlledMenu
              {...menuProps}
              anchorRef={ref}
              offsetX={-24}
              offsetY={20}
              direction="top"
              className={styles.shareAlert}>
              <MenuItem>주소복사</MenuItem>
            </ControlledMenu>

            {/* copy address button  end*/}
          </div>
          <div className={styles.artistDetails}>
            <div className={styles.infoContainer}>
              <div>
                <h3>{user.artistData?.username}</h3>
                {currentPath === "/프로필" && (
                  <Button
                    width="35%"
                    fontSize="15px"
                    onClick={() => history.push("/프로필 수정")}
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
                      <div
                        ref={instaRef}
                        onClick={() => {
                          setInstaState("open");
                          setTimeout(() => {
                            setInstaState("closed");
                          }, 3000);
                        }}
                        className={styles.copyBtn}></div>
                      <ControlledMenu
                        unmountOnClose={true}
                        anchorRef={instaRef}
                        state={instaState}
                        offsetX={-24}
                        offsetY={20}
                        direction="top"
                        className={styles.shareAlert}>
                        <MenuItem>링크 복사됨</MenuItem>
                      </ControlledMenu>
                    </div>

                    <div className={styles.link}>
                      <div>
                        <img
                          className={styles.linkIcon}
                          src={facebook}
                          alt="instgram icon"
                        />
                        <span>Facebook</span>
                      </div>
                      <div
                        ref={fbRef}
                        onClick={() => {
                          setfbState("open");
                          setTimeout(() => {
                            setfbState("closed");
                          }, 3000);
                        }}
                        className={styles.copyBtn}></div>
                      <ControlledMenu
                        unmountOnClose
                        anchorRef={fbRef}
                        state={fbState}
                        offsetX={-24}
                        offsetY={20}
                        direction="top"
                        className={styles.shareAlert}>
                        <MenuItem>링크 복사됨</MenuItem>
                      </ControlledMenu>
                    </div>

                    <div className={styles.link}>
                      <div>
                        <img
                          className={styles.linkIcon}
                          src={twitter}
                          alt="instgram icon"
                        />
                        <span>Twitter</span>
                      </div>
                      <div
                        ref={twitterRef}
                        onClick={() => {
                          settwitterState("open");
                          setTimeout(() => {
                            settwitterState("closed");
                          }, 3000);
                        }}
                        className={styles.copyBtn}></div>
                      <ControlledMenu
                        unmountOnClose
                        anchorRef={twitterRef}
                        state={twitterState}
                        offsetX={-24}
                        offsetY={20}
                        direction="top"
                        className={styles.shareAlert}>
                        <MenuItem>링크 복사됨</MenuItem>
                      </ControlledMenu>
                    </div>

                    <div className={styles.link}>
                      <div>
                        <img
                          className={styles.linkIcon}
                          src={vlive}
                          alt="instgram icon"
                        />
                        <span>Vlive</span>
                      </div>
                      <div
                        ref={vLiveRef}
                        onClick={() => {
                          setvLiveState("open");
                          setTimeout(() => {
                            setvLiveState("closed");
                          }, 3000);
                        }}
                        className={styles.copyBtn}></div>
                      <ControlledMenu
                        unmountOnClose
                        anchorRef={vLiveRef}
                        state={vliveState}
                        offsetX={-24}
                        offsetY={20}
                        direction="top"
                        className={styles.shareAlert}>
                        <MenuItem>링크 복사됨</MenuItem>
                      </ControlledMenu>
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
