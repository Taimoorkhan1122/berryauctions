import React from "react";

import styles from "./card.module.css";

interface ICardLayoutProps {
  children: React.ReactNode;
  heading: string;
  nftLink: string;
  avatar: string;
  username: string;
  onClick: React.MouseEventHandler,
}

const CardLayout: React.FC<ICardLayoutProps> = ({
  children,
  heading,
  nftLink,
  avatar,
  username,
  onClick, 
}) => {
  const shortHeading  = heading.length > 14 ? heading.slice(0,14) + "...": heading
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imgContainer}>
        <img src={nftLink} alt="nft" loading="lazy" />
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.heading}>{shortHeading}</span>

        {/* Avatar container */}
        <div className={styles.avatarContainer}>
          <img src={avatar} alt="user avatar" />
          <span>{username}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardLayout;
