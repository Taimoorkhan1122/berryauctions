import React from "react";

import styles from "./logo.module.css";
import logoW from "../../images/whiteLogo.png";
import logoB from "../../images/blackLogo.png";
import { Link } from "react-router-dom";

export const LogoWhite = () => {
  return (
    <div className={styles.logoContainer}>
      <Link to="/">
        <img src={logoW} alt="berry auction logo" />{" "}
        <span className={styles.logoName} style={{ color: "#fff" }}>
          BerryAuction
        </span>
      </Link>
    </div>
  );
};

export const LogoDark = () => {
  return (
    <div className={styles.logoContainer}>
      <Link to="/">
        <img src={logoB} alt="berry auction logo" />{" "}
        <span className={styles.logoName} style={{ color: "#000" }}>
          BerryAuction
        </span>
      </Link>
    </div>
  );
};
