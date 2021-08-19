import React from 'react'
import styles from './auctions.module.css';

interface ISectionLayoutProps {
  children: React.ReactNode;
  legendEnglish: string;
  legendKorean: string;
}


const SectionLayout: React.FC<ISectionLayoutProps> = ({
  children,
  legendEnglish,
  legendKorean
}) => {
  return (
    <div>
      <div className={styles.legend}>
        <h3>{legendEnglish}</h3>
        <h3>{legendKorean}</h3>
      </div>
      <section className={styles.section}>
        {children}
      </section>
    </div>
  );
};

export default SectionLayout
