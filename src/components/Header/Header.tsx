import React from "react";

import styles from "./header.module.css";
import Button, { BtnType } from "../Button/Button";
import { LogoDark, LogoWhite } from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import ConnectWallet from "../../containers/ConnectWallet/ConnectWallet";

type IHeaderProps = {
  links: string[];
  dark: boolean;
};

const Header: React.FC<IHeaderProps> = ({ links, dark }) => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        {dark ? <LogoDark /> : <LogoWhite />}

        <div className={styles.linksContainer}>
          <ul className={styles.linklist}>
            {links.map((link, index) => (
              <NavLink
                activeClassName={styles.active}
                className={dark ? styles.dark : styles.light}
                key={index + "_link"}
                to={`/${link}`}>
                {link}
              </NavLink>
            ))}
          </ul>
          {/* <Button
            btnType={BtnType.SECONDARY}
            text="월렛 연결하기"
            width="196px"
          /> */}
          <ConnectWallet dark={dark} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
