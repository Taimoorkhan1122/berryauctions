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

enum Wallet {
  metamask,
  walletConnect,
}
interface ILoadingState {
  walletType: Wallet;
  isActive: boolean;
}



const ConnectWallet: React.FC = () => {
  const {state: {isloggedIn, user}, appDispatch} = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<ILoadingState[]>([
    { walletType: Wallet.metamask, isActive: false },
    { walletType: Wallet.walletConnect, isActive: false },
  ]);
  
  const connectingWallet =
    loading[Wallet.walletConnect].isActive || loading[Wallet.metamask].isActive;

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
          username: "Taimoor",
          isLoggedIn: true,
        },
      });
      // setLoading([
      //   { walletType: Wallet.metamask, isActive: false },
      //   { walletType: Wallet.walletConnect, isActive: false },
      // ]);
       tmp[key].isActive = !tmp[key].isActive;
       setLoading(tmp);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div>
      <Button
        btnType={BtnType.SECONDARY}
        children={user.username ? user.username : "월렛 연결하기"}
        width="196px"
        onClick={handleClick}
      />
      {/* modal start */}
      {!isloggedIn && isOpen && (
        <Modal isOpen={isOpen} handleClick={handleClick}>
          <div className={styles.container}>
            <div className={styles.close} onClick={handleClick}>
              <img src={close} alt="modal close button" />
            </div>
            <div className={styles.details}>
              <h3>월렛 연결하기</h3>
              <p>
                월렛을 연결함으로써 귀하는 당사의 <Link to="/">이용약관</Link>{" "}
                및<Link to="/">개인정보</Link> 보호정책에 동의합니다.
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
              {/* <Loader
                children={""}
                props={{
                  size: 54,
                  color: "#000",
                }}
              /> */}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ConnectWallet;
