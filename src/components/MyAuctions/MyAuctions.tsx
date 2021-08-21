import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./myAuctions.module.css";

const MyAuctions: React.FC<{count: number   }> = ({count}) => {
    return (
      <div className={styles.container}>
        <span className={styles.auctionsCount}>{count}</span>
        <Link to="/나의경매">나의경매</Link>
      </div>
    );
}

export default MyAuctions
