import classNames from "classnames";
import React, { MouseEventHandler, useContext, useEffect, useRef, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import Avatar from "../../components/Avatar/Avatar";
import Button, { BtnType } from "../../components/Button/Button";
import GradText, { TextType } from "../../components/GradText/GradText";
import ProfileBtn from "../../components/ProfileBtn/ProfileBtn";
import { GlobalContext } from "../../Context/GlobalProvider";

import { artistData, AuctionData, auctionData } from "../../utils/data";
import styles from "./auctionsDetails.module.css";
import Bids from "./Bids";

// icons
import linkIcon from "../../images/link.png";
import shareIcon from "../../images/share.png";
import etherscan from "../../images/etherscan.png";
import ipfs from "../../images/ipfs.png";
import ipfsMeta from "../../images/metadata.png";
import expndIcon from "../../images/expand.png";
import dropdownArrow from "../../images/dropdown-arrow.png";
import {
  ClickEvent,
  ControlledMenu,
  Menu,
  MenuButton,
  MenuItem,
  useMenuState,
} from "@szhsin/react-menu";
import { LogoWhite } from "../../components/Logo/Logo";
import useWindowSize from "../../utils/useWindowSize";

interface IDetailsPageProps {
  pageData: AuctionData[];
}

const CurrencySelect = () => (
  <Menu
    offsetX={-80}
    offsetY={10}
    direction="top"
    className={styles.currencySlect}
    transition={true}
    menuButton={
      <MenuButton>
        <img src={dropdownArrow} alt="select arrow" />
      </MenuButton>
    }>
    <MenuItem className={styles.currencyItem}>ETH</MenuItem>
    <MenuItem className={styles.currencyItem}>BBR</MenuItem>
  </Menu>
);

const DetailsPage: React.FC<IDetailsPageProps> = ({ pageData }) => {
  const { state } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { toggleMenu, ...menuProps } = useMenuState({ transition: true });

  const { id } = useParams<{ id: string }>();
  const _id = id.split("_").map((d) => d);
  const [data] = pageData.filter((data) => data.id === _id[1]);

  const location = useLocation();
  const history = useHistory();
  const windowWidth = useWindowSize();

  const [winner] = data?.bids.filter(
    (bid) => bid.isWinner && Object.keys(bid.walletAddress)
  );

  const handleLink = () => {
    window.open("https://www.facebook.com", "_blank")?.focus();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.aspectContainer}>
          <img src={data.nftLink} alt="auction" />
          {isOpen && (
            <Lightbox
              mainSrc={data.nftLink}
              onCloseRequest={() => setIsOpen(false)}
              wrapperClassName="wrapper"
            />
          )}
        </div>
        <span onClick={() => setIsOpen(true)} className={styles.expand}>
          <img src={expndIcon} alt="view full screen icon" />
        </span>
      </div>
      <div className={styles.detailsContaier}>
        {/* author and share button */}
        <div className={styles.authorInfo}>
          <div className={styles.author}>
            <Avatar width="136px" children={data.username} />{" "}
            <GradText
              textType={TextType.ARTTRAINER}
              parentClassName={styles.gradText}>
              Arttrainer
            </GradText>
          </div>
          <button
            className={styles.shareLinkButton}
            disabled={menuProps.state === "open"}
            onClick={() => {
              toggleMenu(true);
              setTimeout(() => {
                toggleMenu(false);
              }, 3000);
            }}
            ref={ref}>
            <img src={shareIcon} alt="share icon" />
            {windowWidth.width < 786 ? "" : "???????????? "}
          </button>
          <ControlledMenu
            {...menuProps}
            anchorRef={ref}
            offsetX={10}
            offsetY={10}
            direction="right"
            className={styles.shareAlert}>
            <MenuItem>????????? ?????????????????????.</MenuItem>
          </ControlledMenu>
        </div>
        {/* flex container - contains auction and bid details*/}
        <div className={styles.details}>
          <div className={styles.first}>
            <div className={styles.headingContainer}>
              <h3>The Other Side</h3>
              <p>?????? ??????</p>
            </div>
            <p className={styles.description}>
              ?????????????????? ???????????? 2001 ??? ???????????? ???????????? ????????? ??????
              ???????????? ??????????????? ??????????????? ???????????? ?????? ?????? ?????? ??? ?????????
              ????????? ????????? ?????? ??????. <br />
              20?????? ?????? ??????, ??? NFT??? ????????? ???????????? ????????? ???????????????.
              ???????????? ????????? GR2 ???????????? ?????? ?????? ???????????? ?????????(?????????
              ??????)??? ???????????????, ??? ??????????????? ??? ???????????? ?????? ??????. <br />
              ?????? ?????? ????????? ????????? ????????? 20??? ??? ????????? ??????????????? ?????????.
            </p>
            <div className={styles.linksContainer}>
              {/* links */}
              <div className={styles.link}>
                <div>
                  <img src={etherscan} alt="etherscan icon" />
                  <span>???????????? ??????</span>
                </div>
                <div onClick={handleLink} className={styles.copyBtn}></div>
              </div>

              <div className={styles.link}>
                <div>
                  <img src={ipfs} alt="etherscan icon" />
                  <span>IPFS ??????</span>
                </div>
                <div onClick={handleLink} className={styles.copyBtn}></div>
              </div>

              <div className={styles.link}>
                <div>
                  <img src={ipfsMeta} alt="etherscan icon" />
                  <span>IPFS ??????????????? ??????</span>
                </div>
                <div onClick={handleLink} className={styles.copyBtn}></div>
              </div>
            </div>
          </div>

          <div className={styles.second}>
            {/* details section start */}
            <div className={styles.auctionDetails}>
              <div
                className={classNames(
                  styles.auctionDetailsContainer,
                  !data.bidingStatus && styles.auctionDetailsContainerEnded
                )}>
                <div className={styles.pricing}>
                  <span>?????? ?????????</span>
                  <h3>0.61 BBR</h3>
                  <small className={styles.small}>1,584,302???</small>
                </div>
                <div className={styles.border}></div>

                {data.bidingStatus ? (
                  <div className={styles.timeLeft}>
                    <span>????????????</span>
                    <div className={styles.time}>
                      {/* day */}
                      <h3>
                        13 <span className={styles.small}>???</span>
                      </h3>
                      {/* hour */}
                      <h3>
                        15 <span className={styles.small}>???</span>
                      </h3>
                      {/* minutes */}
                      <h3>
                        27 <span className={styles.small}>???</span>
                      </h3>
                      {/* seconds */}
                      <h3>
                        19 <span className={styles.small}>???</span>
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className={styles.winnerContainer}>
                    <span>?????????</span>
                    <Avatar width={"200px"}>
                      <span className={styles.address}>
                        {winner["walletAddress"]}
                      </span>
                    </Avatar>
                  </div>
                )}
              </div>
              {/* if biding is end button will  not show */}
              {data.bidingStatus && (
                <Button
                  onClick={() =>
                    history.push({
                      pathname: `/????????????/${id}`,
                      state: location.pathname,
                    })
                  }
                  btnType={BtnType.PRIMARY}>
                  {"?????? ????????????"}
                </Button>
              )}
            </div>

            {/* details section end */}

            {/* --- instant buy --- */}
            <div className={styles.instantBuy}>
              <div className={styles.pricing}>
                <div>
                  <span>?????? ?????????</span>
                  <h3>2,000,000 BBR</h3>
                  <small className={styles.small}>1,584,302???</small>
                </div>
                <span className={styles.dropdown}>
                  <CurrencySelect />
                </span>
              </div>

              <Button
                onClick={() =>
                  history.push({
                    pathname: `/??????????????????/${id}`,
                    state: location.pathname,
                  })
                }
                width="100%"
                btnType={BtnType.PRIMARY}>
                {"??????????????????"}
              </Button>
            </div>
            {/* --- intant buy end --- */}

            <h3 className={styles.status}>?????? ??????</h3>
            <div className={styles.bids}>
              {data.bids.map((bids: any, index) => (
                <Bids
                  key={index}
                  bidingStatus={data.bidingStatus}
                  data={bids}
                />
              ))}
            </div>
          </div>
        </div>
        {/* bottom container start*/}
        <div className={styles.bottomContainer}>
          <h3>????????????</h3>
          <div className={styles.artistDetails}>
            <div className={styles.artistNameAvatar}>
              <div
                className={classNames(
                  styles.avatarContainer,
                  styles.artistAvatar
                )}>
                <img src={artistData[0].imgLink} alt="user avatar" />
              </div>
              <div className={styles.infoContainer}>
                <h3>{artistData[0].username}</h3>
                <GradText
                  textType={TextType.ARTTRAINER}
                  parentClassName={styles.gradText}>
                  {artistData[0].profession}
                </GradText>
              </div>
            </div>
            <p className={styles.about}>{artistData[0].about}</p>
          </div>
        </div>
        {/* bottom container end*/}
      </div>
    </div>
  );
};

export default DetailsPage;
