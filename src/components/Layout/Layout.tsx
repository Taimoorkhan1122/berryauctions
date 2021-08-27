import React from "react";
import { useParams, useRouteMatch } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./layout.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const links = ["진행중인 경매", "주요작품", "아티스트", "베리옥션 소개"];

  const match = useRouteMatch("/프로필");
  const match2 = useRouteMatch("/아티스트/:id");

  const isDark = match?.path.includes("/프로필")
    ? false
    : match2?.path.includes("/아티스트/")
    ? false
    : true;

  return (
    <main className={styles.container}>
      <Header links={links} dark={isDark} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
