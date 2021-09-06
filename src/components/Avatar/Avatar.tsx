import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalProvider';

import defaultAvatar from "../../images/defaultAvatar.png";
import styles from './avatar.module.css';

interface IAvatarProps {
    // src?: string,
    children?: React.ReactNode,
    width?: string,
}

const Avatar: React.FC<IAvatarProps> = ({children, width=""}) => {
    const {state:{user}} = useContext(GlobalContext);
    return (
      <div className={styles.container} style={{ width: width && width }}>
        <img src={user.artistData?.avatar || defaultAvatar} alt="user avatar" />
        <span>{children}</span>
      </div>
    );
}

export default Avatar;

Avatar.defaultProps = {
  // src: "https://www.seekpng.com/png/small/966-9665317_placeholder-image-person-jpg.png",
  // username: "Taimoor khan",
  // width: "",
};
