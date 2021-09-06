import classNames from "classnames";
import React from "react";

import styles from "./gradtext.module.css";

export enum TextType {
  ARTTRAINER,
  SPORTSTAR,
  ARTIST,
  CELEBRITY,
  GAMEITEM,
  COLLECTOR,
}
interface IGradTextProps {
  children: React.ReactNode;
  propStyles?: {};
  parentClassName?: string;
  textType: TextType;
}

const GradText: React.FC<IGradTextProps> = ({
  children,
  propStyles,
  parentClassName,
  textType,
}) => {
  const defaultStyles = propStyles ? propStyles : {};
  let textStyle;
  switch (textType) {
    case TextType.ARTTRAINER:
      textStyle = styles.artTrainer;
      break;
    case TextType.ARTIST:
      textStyle = styles.artist;
      break;
    case TextType.CELEBRITY:
      textStyle = styles.celebrity;
      break;
    case TextType.COLLECTOR:
      textStyle = styles.collector;
      break;
    case TextType.GAMEITEM:
      textStyle = styles.gameItem;
      break;
    case TextType.SPORTSTAR:
      textStyle = styles.sportsStar;
      break;

    default:
      textStyle = styles.artTrainer;
      break;
  }
  return (
    <>
      <h3
        className={classNames(
          parentClassName && parentClassName,
          styles.h3,
          textStyle
        )}
        style={defaultStyles}>
        {children}
      </h3>
    </>
  );
};

export default GradText;
