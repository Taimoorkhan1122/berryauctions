import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


import { User } from "../../Context/GlobalProvider";
import Avatar from "../Avatar/Avatar";
import styles from "./profileBtn.module.css"

const ProfileBtn: React.FC<{ user: User }> = ({ user }) => {
  // const [showProfileOptions, setShowProfileOptions] = useState<boolean>(false);
  return (
    <Menu
      menuButton={
        <MenuButton>
          <Avatar width={"196px"}>
            <span className={styles.balance}>{user?.walletAmount} </span>
            <span className={styles.address}>{user?.walletAddress}</span>
          </Avatar>
        </MenuButton>
      }
      className={styles.menuButton}
      align={"end"}
      offsetX={-10}
      offsetY={20}>
      <MenuItem>
        {" "}
        <Avatar width={"196px"}>내 프로필 보기</Avatar>
      </MenuItem>
      <MenuItem>이메일 알림 설정</MenuItem>
      <MenuItem>월렛 연결해제</MenuItem>
    </Menu>
  );
};

export default ProfileBtn;
