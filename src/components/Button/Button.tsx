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
  fontSize?: string;
  onClick?: React.MouseEventHandler;
  form?: string;
  type?: any;
  ref?: React.MutableRefObject<any>;
}

const Button: React.FC<IBtnProps> = ({
  disabled,
  btnType,
  children,
  width = "",
  fontSize="",
  onClick,
  form,
  type,
  ref,

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
    <button
      ref={ref}
      form={form}
      type={type}
      className={classname}
      style={{ width: width, fontSize }}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button
