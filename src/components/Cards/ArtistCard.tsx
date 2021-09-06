import classNames from "classnames";
import React from "react";
import { useHistory } from "react-router";
import Button, { BtnType } from "../Button/Button";
import GradText, { TextType } from "../GradText/GradText";

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
  const history = useHistory();
  const route = `아티스트/${username}`;
  const type = profession.split(" ").filter(t => t).join('').toUpperCase();
  console.log(type, TextType[type as keyof typeof TextType]);
  

  return (
    <div className={styles.container} onClick={() => history.push(route)}>
      <div className={classNames(styles.imgContainer, styles.artistImg)}>
        <img src={imgLink} alt="nft" />
      </div>
      <div
        className={classNames(
          styles.bottomContainer,
          styles.artistInfoContainer
        )}>
        {/* Avatar container */}
        <div
          className={classNames(styles.avatarContainer, styles.artistAvatar)}>
          <img src={avatar} alt="user avatar" />
        </div>
        <div className={styles.infoContainer}>
          <h3>{username}</h3>
          <GradText textType={TextType[type as keyof typeof TextType]}>
            {profession}
          </GradText>
        </div>
        <p className={styles.about}>{about}</p>
      </div>
      <div
        className={classNames(styles.detailsContainer, styles.artistContainer)}>
        <div>
          <span className={styles.totalWorks} style={{ color: "#000" }}>
            {totalWork}
          </span>
          <h3 style={{ color: "#666666" }}>작품</h3>
        </div>
        <div>
          <Button
            children="작품보기"
            width="123px"
            btnType={BtnType.TERTIARY}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
