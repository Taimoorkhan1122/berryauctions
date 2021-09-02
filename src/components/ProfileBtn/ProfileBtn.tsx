import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { User } from "../../Context/GlobalProvider";
import Avatar from "../Avatar/Avatar";
import styles from "./profileBtn.module.css";
import { useHistory } from "react-router";

import arrow from "../../images/arrow.png";
import emailNoti from "../../images/emailNoti.png";
import endSession from "../../images/endSession.png";

const ProfileBtn: React.FC<{ user: User }> = ({ user }) => {
  const history = useHistory();
  return (
    <Menu
      menuButton={
        <MenuButton className={styles.profileBtn}>
          <Avatar width={"196px"}>
            <span className={styles.balance}>{user?.walletAmount} </span>
            <span className={styles.address}>{user?.walletAddress}</span>
          </Avatar>
        </MenuButton>
      }
      className={styles.menuButton}
      align={"end"}
      transition
      offsetX={-10}
      offsetY={20}>
      <MenuItem onClick={() => history.push("/프로필")}>
        {" "}
        <Avatar width={"196px"}>내 프로필 보기</Avatar>
        
          <img src={arrow} alt="arrow" />
      </MenuItem>
      <MenuItem onClick={() => history.push("/이메일 알림 설정")}>
        <span>
          <img src={emailNoti} alt="email settings" />
          이메일 알림 설정
        </span>
        <img src={arrow} alt="arrow" />
      </MenuItem>
      <MenuItem>
        <span>
          <img src={endSession} alt="end session" />
          월렛 연결해제
        </span>
        <img src={arrow} alt="arrow" />
      </MenuItem>
    </Menu>
  );
};

export default ProfileBtn;
