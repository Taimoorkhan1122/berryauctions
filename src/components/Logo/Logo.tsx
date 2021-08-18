import React from "react";

import styles from "./logo.module.css";
import logoW from "../../images/whiteLogo.png";
import logoB from "../../images/blackLogo.png";

export const LogoWhite = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logoW} alt="berry auction logo" />{" "}
      <span style={{ color: "#fff" }}>BerryAuction</span>
    </div>
  );
};

export const LogoDark = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logoB} alt="berry auction logo" />{" "}
      <span style={{ color: "#000" }}>BerryAuction</span>
    </div>
  );
};
