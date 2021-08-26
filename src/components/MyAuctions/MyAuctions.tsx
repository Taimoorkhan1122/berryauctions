import classNames from 'classnames';
import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./myAuctions.module.css";

const MyAuctions: React.FC<{count: number, dark: boolean  }> = ({count, dark}) => {
    return (
      <div className={styles.container}>
        <span className={classNames(styles.auctionsCount, dark ? styles.light : styles.dark)}>{count}</span>
        <Link style={{
          color: dark? "#000" : "#fff"
        }} to="/나의경매">나의경매</Link>
      </div>
    );
}

export default MyAuctions
