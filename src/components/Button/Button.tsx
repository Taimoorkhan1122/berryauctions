import classNames from 'classnames';
import React from 'react'
import styles from "./button.module.css";

export enum BtnType {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}
interface IBtnProps {
  disabled?: boolean;
  btnType: BtnType;
  children: React.ReactNode;
  width?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<IBtnProps> = ({
  disabled,
  btnType,
  children,
  width = "",
  onClick,
}) => {
  const classname = classNames(
    styles.btn,
    btnType === BtnType.PRIMARY
      ? styles.PRIMARY
      : btnType === BtnType.SECONDARY
      ? styles.SECONDARY
      : styles.TERTIARY
  );

  return (
    <button className={classname} style={{ width: width }} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button
