import React from 'react'
import { Link } from 'react-router-dom';
import styles from './home.module.css';

interface ISectionLayoutProps {
  children: React.ReactNode;
  legendEnglish: string;
  legendKorean: string;
  link?: string;
}


const SectionLayout: React.FC<ISectionLayoutProps> = ({
  children,
  legendEnglish,
  legendKorean,
  link,
}) => {
  return (
    <div>
      <div className={styles.legend}>
        <div>
          <h3>{legendEnglish}</h3>
          <h3>{legendKorean}</h3>
        </div>
        {link && (
          <Link to={link}>
            {link}
          </Link>
        )}
      </div>
      <section className={styles.section}>{children}</section>
    </div>
  );
};

export default SectionLayout
