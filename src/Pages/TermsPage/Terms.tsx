import React from "react";
import { useRouteMatch } from "react-router";

import styles from "./terms.module.css";

const Terms = () => {
  const match = useRouteMatch();

  return (
    <div className={styles.container}>
      <div className={styles.legend}>
        <div>
          {match.path.includes("/이용약관") ? (
            <h3>이용약관</h3>
          ) : (
            <h3>개인정보보호정책</h3>
          )}
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.borderTop}></div>
        <p className={styles.heading}>제1조 일반</p>
        <p>
          본 약관은 (주)몬스터큐브(이하 ”회사”)가 제공하는 베리옥션 및 관련 제반
          플랫폼의 서비스(아래 정의) 이용과 관련하여 회사와 "회원"(아래 정의)의
          권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다
        </p>
        <div className={styles.center}>
          {match.path.includes("/이용약관") ? (
              <p>메타파이 이용약관 - 그대로 가져오시면 됩니다.</p>
              ) : (
              <p>메타파이 서비스 개인정보보호정책 - 그대로 가져오시면 됩니다.</p>
          )}
          <a href="https://metapie.io/">https://metapie.io/</a>
        </div>
      </section>
    </div>
  );
};

export default Terms;
