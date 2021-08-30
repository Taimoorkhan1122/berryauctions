import classNames from 'classnames';
import React from 'react'

import styles from './styles.module.css';

interface ILayoutProps {
    children: React.ReactNode;
    heading: string;
    className?: string;
}
const PageLayout: React.FC<ILayoutProps> = ({children, heading, className}) => {
    return (
      <div className={classNames(styles.layoutContainer, className)}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.formContainer}>{children}</div>
      </div>
    );
}

export default PageLayout
