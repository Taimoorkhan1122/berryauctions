import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button, { BtnType } from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";

import close from "../../images/close.png";
import styles from "../../containers/ConnectWallet/connectWallet.module.css";
import { GlobalContext } from "../../Context/GlobalProvider";
import { ActionTypes } from "../../Context/Reducer";
import { artistData, auctionData } from "../../utils/data";

import metamask from "../../images/metamask.png";
import walletConnect from "../../images/walletConnect.png";

enum Wallet {
  metamask,
  walletConnect,
}
interface ILoadingState {
  walletType: Wallet;
  isActive: boolean;
}

const LoginFirstPage = () => {
  const { state, appDispatch } = useContext(GlobalContext);
  const shouldRedirect = state.redirectPath && state.redirectPath.length > 0;
  const history = useHistory();

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
      state.redirectPath && shouldRedirect && history.push(state?.redirectPath);
    }, 1500);
  };
  return (
    <div className={styles.container}>
      <h3>You need to login first</h3>
      <div className={styles.modal}>
        <div className={styles.details}>
          <h3>월렛 연결하기</h3>
          <p>
            월렛을 연결함으로써 귀하는 당사의 <Link to="/">이용약관</Link> 및
            <Link to="/">개인정보</Link> 보호정책에 동의합니다.
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
    </div>
  );
};

export default LoginFirstPage;
