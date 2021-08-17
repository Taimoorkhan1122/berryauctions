import classNames from 'classnames';
import React from 'react'
import styles from "./button.module.css";

interface IBtnProps  {
    primary: boolean,
    text: string,
    width: string
}

const Button: React.FC<IBtnProps> = ({ primary, text, width }) => {
  const classname = classNames(styles.btn,primary ? styles.primary : styles.secondary);
  return <button className={classname} style={{width: width}}>{text}</button>;
};

export default Button
