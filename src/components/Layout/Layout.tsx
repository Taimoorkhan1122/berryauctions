import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import HamburgerMenu from "../../containers/HamburgerMenu/HamburgerMenu";
import useWindowSize from "../../utils/useWindowSize";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./layout.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const links = ["진행중인 경매", "주요작품", "아티스트", "베리옥션 소개"];
  const windowWidth = useWindowSize();
  const [showHamburger, setShowHamburger] = useState(false);

  const match = useRouteMatch("/프로필");
  const match2 = useRouteMatch("/아티스트/:id");

  const isDark = match?.path.includes("/프로필")
    ? false
    : match2?.path.includes("/아티스트/")
    ? false
    : true;

  useEffect(() => {
    windowWidth.width < 1024 ? setShowHamburger(true) : setShowHamburger(false);
  }, [windowWidth.width]);
  console.log(windowWidth.width);
  
  return (
    <main id="outerContainer" className={styles.container}>
      {showHamburger ? (
        <HamburgerMenu
        links={links}
          dark={isDark}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      ) : (
        <Header links={links} dark={isDark} />
      )}
      <div id="page-wrap">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
