import React from 'react'

import styles from './avatar.module.css';

interface IAvatarProps {
    src?: string,
    username?: string,
    width?: string,
}

const Avatar: React.FC<IAvatarProps> = ({src, username, width=""}) => {
    
    return (
      <div
        className={styles.container}
        style={{ width: width && width }}>
        <img src={src} alt="user avatar" />
        <span>{username}</span>
      </div>
    );
}

export default Avatar;

Avatar.defaultProps = {
  src: "https://www.seekpng.com/png/small/966-9665317_placeholder-image-person-jpg.png",
  username: "John Doe",
  width: "",
};
