import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Button, { BtnType } from "../../components/Button/Button";
import Modal from "../Modal/Modal";

import styles from "./connectWallet.module.css";
import Loader from "../../components/Loader/Loader";
import close from "../../images/close.png";
import metamask from "../../images/metamask.png";
import walletConnect from "../../images/walletConnect.png";
import { GlobalContext } from "../../Context/GlobalProvider";
import { ActionTypes } from "../../Context/Reducer";
import MyAuctions from "../../components/MyAuctions/MyAuctions";
import ProfileBtn from "../../components/ProfileBtn/ProfileBtn";
import { artistData, auctionData } from "../../utils/data";
import Bids from "../../Pages/Details/Bids";

enum Wallet {
  metamask,
  walletConnect,
}

interface ILoadingState {
  walletType: Wallet;
  isActive: boolean;
}

const ConnectWallet: React.FC<{ dark: boolean; forcedOpen?: boolean }> = ({
  dark,
  forcedOpen,
}) => {
  const {
    state: { isloggedIn, user },
    appDispatch,
  } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleConnect = (key: Wallet) => {
    let tmp = [...loading];
    tmp[key].isActive = !tmp[key].isActive;
    setLoading(tmp);

    setTimeout(() => {
      appDispatch({
        type: ActionTypes.SIGNIN,
        payload: {
          user: {
            username: "Taimoor khan",
            walletAddress: "0x42f3...aaa5",
            walletAmount: "4.16123 BBR",
            artistData: artist,
            listings,
            bids,
          },
          isLoggedIn: true,
        },
      });

      tmp[key].isActive = !tmp[key].isActive;
      setLoading(tmp);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className={isloggedIn ? styles.container : ""}>
      {isloggedIn ? (
        <div className={styles.userProfiler}>
          <MyAuctions count={user.bids.length} dark={dark} />
          <ProfileBtn user={user} />
        </div>
      ) : (
        <Button
          btnType={BtnType.SECONDARY}
          children={"월렛 연결하기"}
          width="196px"
          onClick={handleClick}
        />
      )}

      {/* modal start */}
      {!isloggedIn && forcedOpen
        ? forcedOpen
        : isOpen && (
            <Modal isOpen={true} handleClick={handleClick}>
              <div className={styles.modal}>
                <div className={styles.close} onClick={handleClick}>
                  <img src={close} alt="modal close button" />
                </div>
                <div className={styles.details}>
                  <h3>월렛 연결하기</h3>
                  <p>
                    월렛을 연결함으로써 귀하는 당사의{" "}
                    <Link to="/">이용약관</Link> 및<Link to="/">개인정보</Link>{" "}
                    보호정책에 동의합니다.
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
                          children={"연결중..."}
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
                          children={"연결중..."}
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
            </Modal>
          )}
    </div>
  );
};

export default ConnectWallet;
