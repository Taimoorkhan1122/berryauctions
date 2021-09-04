import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";

import './hamburger.css';
import { LogoDark, LogoWhite } from "../../components/Logo/Logo";

const HamburgerMenu: React.FC<{
  pageWrapId: string;
  outerContainerId: string;
  dark: boolean,
}> = ({ pageWrapId, outerContainerId, dark }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="hamburger-container">
      {dark ? <LogoDark /> : <LogoWhite />}

      <Menu
        outerContainerId={outerContainerId}
        pageWrapId={pageWrapId}
        width="100%"
        customBurgerIcon={
          <Hamburger color={dark ? "#000" : "#fff"} toggled={isOpen} toggle={setOpen} direction="right" />
        }
        right
        isOpen={isOpen}
        noOverlay={true}>
        <a href="">link 1</a>
        <a href="">link2 </a>
        <a href="">link 3</a>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
