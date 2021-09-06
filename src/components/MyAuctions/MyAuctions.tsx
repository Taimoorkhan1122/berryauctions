import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./myAuctions.module.css";

const MyAuctions: React.FC<{ count: number; dark: boolean }> = ({
  count,
  dark,
}) => {
  return (
    <div  className={styles.container}>
      <span
        className={classNames(
          styles.auctionsCount,
          dark ? styles.light : styles.dark
        )}>
        {count}
        {count > 0 && <span className={classNames(styles.notification)}></span>}
      </span>

      <NavLink
        activeClassName={styles.active}
        style={{
          color: dark ? "#666" : "#fff",
        }}
        to="/나의경매">
        나의경매
      </NavLink>
    </div>
  );
};

export default MyAuctions;
