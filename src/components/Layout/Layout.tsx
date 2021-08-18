import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './layout.module.css';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const links = ["진행중인 경매", "주요작품", "아티스트", "베리옥션 소개"];

  return (
    <main className={styles.container}>
      <Header links={links} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
