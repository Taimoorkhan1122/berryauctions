import classNames from 'classnames';
import React from 'react'
import styles from "./button.module.css";

export enum BtnType {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}
interface IBtnProps  {
    btnType: BtnType,
    text: string,
    width?: string,

}

const Button: React.FC<IBtnProps> = ({ btnType, text, width = "" }) => {
  const classname = classNames(
    styles.btn,
    btnType === BtnType.PRIMARY ? styles.PRIMARY : btnType === BtnType.SECONDARY ? styles.SECONDARY : styles.TERTIARY
  );
  
  return (
    <button className={classname} style={{ width: width}}>
      {text}
    </button>
  );
};

export default Button
