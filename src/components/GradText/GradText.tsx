import classNames from "classnames";
import React from "react";

import styles from "./gradtext.module.css";

interface IGradTextProps {
  children: React.ReactNode;
  propStyles?: {};
  parentClassName?: string;
}

const GradText: React.FC<IGradTextProps> = ({
  children,
  propStyles,
  parentClassName,
}) => {
  const defaultStyles = propStyles ? propStyles : {};
  return (
    <>
      <h3
        className={classNames(parentClassName && parentClassName,styles.h3)}
        style={defaultStyles}>
        {children}
      </h3>
    </>
  );
};

export default GradText;
