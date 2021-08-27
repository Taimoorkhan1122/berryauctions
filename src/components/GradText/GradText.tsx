import React from "react";

import styles from "./gradtext.module.css";

interface IGradTextProps {
  children: React.ReactNode;
  propStyles?: {};
}

const GradText: React.FC<IGradTextProps> = ({ children, propStyles }) => {
  const defaultStyles = propStyles
    ? propStyles
    : {
        fontSize: "24px",
      };
  return (
    <>
      <h3 className={styles.h3} style={defaultStyles}>
        {children}
      </h3>
    </>
  );
};

export default GradText;
