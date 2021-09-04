import React, { useContext, useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";

import "./hamburger.css";
import { LogoDark, LogoWhite } from "../../components/Logo/Logo";
import { NavLink } from "react-router-dom";
// import Button, { BtnType } from "../../components/Button/Button";
// import { GlobalContext } from "../../Context/GlobalProvider";
// import { ActionTypes } from "../../Context/Reducer";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { BtnType } from "../../components/Button/Button";
import { GlobalContext } from "../../Context/GlobalProvider";
import ProfileBtn from "../../components/ProfileBtn/ProfileBtn";

const HamburgerMenu: React.FC<{
  pageWrapId: string;
  outerContainerId: string;
  dark: boolean;
  links: string[];
}> = ({ pageWrapId, outerContainerId, dark, links }) => {
  const [isOpen, setOpen] = useState(false);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    var x = window.scrollX;
    var y = window.scrollY;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="hamburger-container">
      {dark ? <LogoDark /> : <LogoWhite />}
      <div className="hamburgerProfileContainer">
        {state.isLoggedIn && <ProfileBtn user={state.user} />}
        <Menu
          outerContainerId={outerContainerId}
          pageWrapId={pageWrapId}
          width="100%"
          onClose={() => setOpen(false)}
          customBurgerIcon={
            <Hamburger
              color={dark ? "#000" : "#fff"}
              size={24}
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
            />
          }
          right
          isOpen={isOpen}
          noOverlay={true}>
          <div className={"linksContainer"}>
            <ul className={"linklist"}>
              {links.map((link, index) => (
                <NavLink
                  onClick={() => setOpen(false)}
                  activeClassName={"active"}
                  // className={dark ? styles.dark : styles.light}
                  key={index + "_link"}
                  to={`/${link}`}>
                  {link}
                </NavLink>
              ))}
            </ul>
            {!state.isLoggedIn && (
              <div
                onClick={() => setOpen(false)}
                className="connectWalletContainer">
                <ConnectWallet dark={dark} btnType={BtnType.PRIMARY} />
              </div>
            )}
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default HamburgerMenu;
