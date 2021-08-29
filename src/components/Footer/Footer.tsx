import React from "react";

import styles from "./footer.module.css";
import monstercube from '../../images/monsterCube.png';
import { LogoWhite } from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerContainer}>
        <section className={styles.footerDetails}>
          <img src={monstercube} alt="monster cube logo" />
          <div>
            <p>서울특별시 강남구 논현로63길 71 (주)몬스터큐브</p>
            <p>
              CEO : 유재범 ｜ 사업자등록 : 441-87-00779｜ 통신판매번호 :
              제2018-서울강남-02815호｜ Tel : 02 1522 9746｜ Fax : 0504 276 3309
            </p>
            <p>Copyright © MONSTER CUBE Corporation. All Rights Reserved.</p>
          </div>
        </section>
        <section className={styles.footerBottom}>
          <LogoWhite /> <Link to="/이용약관">이용약관</Link>{" "}
          <Link to="/개인정보보호정책">개인정보보호정책</Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
