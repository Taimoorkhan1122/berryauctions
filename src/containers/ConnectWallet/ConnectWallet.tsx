import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Button, { BtnType } from "../../components/Button/Button";
import Modal from "../Modal/Modal";

import styles from "./connectWallet.module.css";
import Loader from "../../components/Loader/Loader";
import close from "../../images/closeDark.png";
import metamask from "../../images/metamask.png";
import walletConnect from "../../images/walletConnect.png";
import { GlobalContext } from "../../Context/GlobalProvider";
import { ActionTypes } from "../../Context/Reducer";
import MyAuctions from "../../components/MyAuctions/MyAuctions";
import ProfileBtn from "../../components/ProfileBtn/ProfileBtn";
import { artistData, auctionData } from "../../utils/data";
import Bids from "../../Pages/Details/Bids";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

enum Wallet {
  metamask,
  walletConnect,
}

interface ILoadingState {
  walletType: Wallet;
  isActive: boolean;
}

const ConnectWallet: React.FC<{
  dark: boolean;
  forcedOpen?: boolean;
  btnType?: BtnType;
}> = ({ dark, btnType, forcedOpen }) => {
  const { state, appDispatch } = useContext(GlobalContext);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [signContract, setSignContract] = useState(false);
  const [loading, setLoading] = useState<ILoadingState[]>([
    { walletType: Wallet.metamask, isActive: false },
    { walletType: Wallet.walletConnect, isActive: false },
  ]);

  const connectingWallet =
    loading[Wallet.walletConnect].isActive || loading[Wallet.metamask].isActive;

  const listings = auctionData.filter(
    (data) => data.owner === "Taimoor khan" && data
  );
  const artist = artistData.filter(
    (artist) => artist.username === "Taimoor khan"
  )[0];

  const bids = auctionData.filter((data) => {
    for (let i = 0; i < data.bids.length; i++) {
      if (data.bids[i].walletAddress.includes("0x42f3...aaa5")) return true;
    }
    return false;
  });

  const history = useHistory();

  const handleClick = () => {
    appDispatch({
      type: ActionTypes.SIGNIN,
      payload: {
        ...state,
        showModal: !state.showModal,
      },
    });
  };

  const handleConnect = (key: Wallet) => {
    let tmp = [...loading];
    tmp[key].isActive = !tmp[key].isActive;
    setLoading(tmp);

    setTimeout(() => {
      setSignContract(true);
      setTimeout(() => {
        appDispatch({
          type: ActionTypes.SIGNIN,
          payload: {
            user: {
              username: "Taimoor khan",
              walletAddress: "0x42f3...aaa5",
              walletAmount: "0.328 BBR",
              artistData: artist,
              listings,
              bids,
            },
            isLoggedIn: true,
            showModal: false,
          },
        });
        tmp[key].isActive = !tmp[key].isActive;
        history.push(state.redirectPath);
        setLoading(tmp);
      }, 1500);
    }, 1500);
  };

  return (
    <div
      className={state.isLoggedIn ? styles.container : styles.connectWalletBtn}>
      {state.isLoggedIn ? (
        <div className={styles.userProfiler}>
          <MyAuctions count={state.user.bids.length} dark={dark} />
          <ProfileBtn user={state.user} />
        </div>
      ) : (
        <Button
          btnType={btnType !== undefined ? btnType : BtnType.SECONDARY}
          children={"?????? ????????????"}
          width="196px"
          fontSize="16px"
          onClick={handleClick}
        />
      )}
      {/* modal start */}
      {!state.isLoggedIn && forcedOpen
        ? forcedOpen
        : state.showModal && (
            <Modal isOpen={true} handleClick={handleClick}>
              <div className={styles.modal}>
                <div className={styles.close} onClick={handleClick}>
                  {/* <img src={close} alt="modal close button" /> */}
                </div>

                {signContract ? (
                  //  Contract sign container
                  <div className={styles.contractSign}>
                    <h3>????????? ???????????? ????????? ????????? ?????????.</h3>
                    <p>
                      ??????????????? ??? ????????? ???????????? ???????????? ?????? ????????????
                      ????????? ??????????????? ???????????????.
                    </p>
                    <Loader children={""} props={{ color: "#000", size: 55 }} />
                  </div>
                ) : (
                  // Wallet container
                  <div className={styles.walletContainer}>
                    <div className={styles.details}>
                      <h3>?????? ????????????</h3>
                      <p>
                        ????????? ?????????????????? ????????? ????????? <br />
                        <Link to="/????????????">????????????</Link> ???
                        <Link to="/????????????????????????">????????????</Link> ???????????????
                        ???????????????.
                      </p>
                    </div>
                    {/* buttons container */}
                    <div className={styles.walletOptions}>
                      <Button
                        onClick={() => handleConnect(Wallet.metamask)}
                        disabled={connectingWallet}
                        btnType={
                          loading[Wallet.metamask].isActive
                            ? BtnType.PRIMARY
                            : BtnType.SECONDARY
                        }>
                        <div className={styles.loading}>
                          {loading[Wallet.metamask].isActive ? (
                            <Loader
                              children={"?????????..."}
                              props={{ color: "#f0e3e3", size: 30 }}
                            />
                          ) : (
                            <h4>Metamask</h4>
                          )}
                        </div>
                        <img src={metamask} alt="metamask icon" />
                      </Button>
                      <Button
                        disabled={connectingWallet}
                        onClick={() => handleConnect(Wallet.walletConnect)}
                        btnType={
                          loading[Wallet.walletConnect].isActive
                            ? BtnType.PRIMARY
                            : BtnType.SECONDARY
                        }>
                        <div className={styles.loading}>
                          {loading[Wallet.walletConnect].isActive ? (
                            <Loader
                              children={"?????????..."}
                              props={{ color: "#f0e3e3", size: 30 }}
                            />
                          ) : (
                            <h4>WalletConnect</h4>
                          )}
                        </div>
                        <img src={walletConnect} alt="metamask icon" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Modal>
          )}
    </div>
  );
};

export default ConnectWallet;
