import classNames from "classnames";
import React from "react";
import Button, { BtnType } from "../Button/Button";
import GradText from "../GradText/GradText";

import styles from "./card.module.css";

interface IArtistCardProps {
  imgLink: string;
  avatar: string;
  username: string;
  profession: string;
  about: string;
  totalWork: number;
}

const ArtistCard: React.FC<IArtistCardProps> = ({
  imgLink,
  avatar,
  username,
  profession,
  about,
  totalWork,
}) => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.imgContainer, styles.artistImg)}>
        <img src={imgLink} alt="nft" />
      </div>
      <div className={styles.bottomContainer}>
        {/* Avatar container */}
        <div
          className={classNames(styles.avatarContainer, styles.artistAvatar)}>
          <img src={avatar} alt="user avatar" />
        </div>
        <div className={styles.infoContainer}>
          <h3>{username}</h3>
          <GradText>{profession}</GradText>
        </div>
        <p className={styles.about}>{about}</p>
      </div>
      <div className={classNames(styles.detailsContainer)}>
        <div>
          <span style={{ color: "#000" }}>{totalWork}</span>
          <h3 style={{ color: "#666666" }}>작품</h3>
        </div>
        <div>
          <Button text="작품보기" width="150px" btnType={BtnType.TERTIARY} />
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
