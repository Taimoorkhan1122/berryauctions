import React from "react";

import styles from "./header.module.css";
import Button, { BtnType } from "../Button/Button";
import { LogoDark } from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";

type IHeaderProps = {
  links: string[];
};

const Header: React.FC<IHeaderProps> = ({ links }) => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <LogoDark />

        <div className={styles.linksContainer}>
          <ul className={styles.linklist}>
            {links.map((link, index) => (
              <NavLink
                activeClassName={styles.active}
                key={index + "_link"}
                to={link}>
                {link}
              </NavLink>
            ))}
          </ul>
          <Button
            btnType={BtnType.SECONDARY}
            text="월렛 연결하기"
            width="196px"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
