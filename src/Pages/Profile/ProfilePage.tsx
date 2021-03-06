import React, { useRef, useState } from "react";

import styles from "./profile.module.css";
import Button, { BtnType } from "../../components/Button/Button";
import GradText, { TextType } from "../../components/GradText/GradText";
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
import useWindowSize from "../../utils/useWindowSize";

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
  const { toggleMenu, ...menuProps } = useMenuState({
    transition: false,
    unmountOnClose: true,
  });

  const [instaState, setInstaState] = useState<MenuState>("closed");
  const [fbState, setfbState] = useState<MenuState>("closed");
  const [twitterState, settwitterState] = useState<MenuState>("closed");
  const [vliveState, setvLiveState] = useState<MenuState>("closed");
  // const [instaState, setInstaState] = useState<MenuState>("closed")

  const history = useHistory();
  const { width } = useWindowSize();

  const imgStyles = {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    paddingBottom: width > 850 ? 280 : 180,
    backgroundImage: `url()`,
  };

  const handleLink = () => {
    window.open("https://www.facebook.com", "_blank")?.focus();
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
      <div
        style={{
          height: imgStyles.paddingBottom - 88,
          display: "hidden",
        }}></div>

      <div className={styles.bottomContainer}>
        {/* asid container start */}
        <div className={styles.asid}>
          {/* avatar container */}
          <div className={styles.avatarContainer}>
            {/* if user had updated data */}
            {/* <img src={user.artistData?.avatar} alt="user avatar" /> */}

            {/* default avatar */}
            <img src={user.artistData?.avatar} alt="user avatar" />
          </div>
          <div className={styles.addressContainer}>
            {/* <Button width="90px" btnType={BtnType.PRIMARY}> */}
            <span className={styles.btnName}>????????????</span>
            {/* </Button> */}
            <span>{user.artistData?.walletAddress}</span>
            {/* copy address button */}
            <div
              ref={ref}
              className={styles.copyAddress}
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
              <MenuItem>????????????</MenuItem>
            </ControlledMenu>

            {/* copy address button  end*/}
          </div>
          <div className={styles.artistDetails}>
            <div className={styles.infoContainer}>
              <div>
                <h3>{user.artistData?.username}</h3>
                {currentPath === "/?????????" && (
                  <Button
                    width="35%"
                    fontSize="15px"
                    onClick={() => history.push("/????????? ??????")}
                    btnType={BtnType.TERTIARY}>
                    ????????? ??????
                  </Button>
                )}
              </div>
              <GradText
                textType={TextType.ARTTRAINER}
                parentClassName={styles.gradText}>
                {user.artistData?.profession}
              </GradText>
            </div>
          </div>
        </div>
        {/* asid container end */}
        <div className={styles.listings}>
          <h3>
            ????????? ?????? <span>{listings}</span>
          </h3>
          <div className={styles.work}>
            <SectionLayout
              legendEnglish="auction in progress"
              legendKorean="???????????? ??????"
              children={[Works]}
              hideLegend
            />
          </div>
        </div>
        {/* about container start */}
        <div className={styles.aboutContainer}>
          <h3>???????????? ??????</h3>

          {user.artistData ? (
            <>
              <p className={styles.about}>
                {user.artistData?.about.length !== 0
                  ? user.artistData?.about
                  : "???????????? ????????????."}
              </p>
              {!(user.artistData.links?.length === 0) && (
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
                    <div onClick={handleLink} className={styles.copyBtn}></div>
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
                    <div onClick={handleLink} className={styles.copyBtn}></div>
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
                    <div onClick={handleLink} className={styles.copyBtn}></div>
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
                    <div onClick={handleLink} className={styles.copyBtn}></div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className={styles.about}>???????????? ????????????.</p>
          )}
        </div>
        {/* about container end */}
      </div>
    </div>
  );
};

export default ProfilePage;
