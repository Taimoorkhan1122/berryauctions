import React from "react";

import Button, { BtnType } from "../../components/Button/Button";
import styles from "./about.module.css";
import GradText from "../../components/GradText/GradText";

import bbrLogo from "../../images/about/BBR-logo.png";
import nftLogo1x from "../../images/about/nftLogo@1x.png";
import nftLogo2x from "../../images/about/nftLogo@2x.png";
import mainImage1x from "../../images/about/mainImage@1x.png";
import mainImage2x from "../../images/about/mainImage@2x.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        {/* details container */}
        <div className={styles.details}>
          <div className={styles.aboutBerry}>
            <div className={styles.headingContainer}>
              <h1>About</h1>
              <GradText
                propStyles={{
                  fontSize: "82px",
                }}>
                BERRYAUCTIONS
              </GradText>
            </div>
            <p>
              베리옥션은 아티스트들이 기존의 작품들을 <br />
              완전히 새로운 방식의가치를 만들고 컬렉터들과 <br />
              더욱 강력한 문화 연결을 구축할 수 있는
              <br />
              새로운 창조 경제 구축을 목표로 하는 플랫폼입니다.
            </p>
          </div>

          <div className={styles.tokenEco}>
            <div className={styles.headingContainer}>
              <h1>Token</h1>
              <GradText parentClassName={styles.economy}>Economy</GradText>
            </div>
            <p>
              베리옥션은 BBR, ETH 두개의 코인으로 경매에 참여하실 수 있습니다.
              BBR은 입찰 및 즉시구매에 사용되며, ETH는 즉시구매에 사용됩니다.
            </p>
            {/* bit berry token */}
            <div className={styles.bottomFlexContainer}>
              <div className={styles.bitberryToken}>
                <div className={styles.tokeImgContainer}>
                  <img src={bbrLogo} alt="bit berry logo" />
                </div>
                <div className={styles.aboutBbr}>
                  <h3>BBR (Bit Berry Token)</h3>
                  <p>
                    BBR 컨트랙트 주소를 복사하여 귀하의 월렛에 BBR 코인을
                    추가해주세요.
                  </p>
                  <Button
                    width="186px"
                    fontSize="15px"
                    btnType={BtnType.PRIMARY}>
                    컨트랙트 주소 복사
                  </Button>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <p>
                  BBR코인은 비트베리파이낸스의 Defi 코인입니다. 현재 채굴이{" "}
                  <br />
                  종료되어, 비트베리스왑에서 타코인과의 교환을 통해 <br />
                  구입하실 수 있습니다.
                </p>
                <Button width="282px" fontSize="15px" btnType={BtnType.PRIMARY}>
                  비트베리스왑(BBR 교환) 바로가기
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* image container */}
        <div className={styles.mainImageContainer}>
          <img
            src={mainImage1x}
            alt="berry auction main"
            srcSet={`${mainImage1x} 1x, ${mainImage2x} 2x`}
          />
        </div>
      </div>
      {/* bottom container */}
      <div className={styles.BottomContainer}>
        {/* image container */}
        <div className={styles.whatIsNFT}>
          <img
            src={nftLogo1x}
            alt=""
            srcSet={`${nftLogo1x} 1x, ${nftLogo2x} 2x`}
          />
        </div>
        <div className={styles.aboutNft}>
          <div className={styles.headingContainer}>
            <h1>WHAT IS </h1>
            <GradText parentClassName={styles.nft}>NFT</GradText>
            <h1>?</h1>
          </div>
          <p>
            <span>
              NFT는 대체 불가능한 토큰(Non-Fungible Token)'이라는 뜻으로 <br />
              희소성을 갖는 디지털 자산을 대표하는 토큰을 말합니다.
            </span>
            <br />
            <span>
              NFT는 블록체인 기술을 활용하지만, 기존의 가상자산과 달리 디지털{" "}
              <br />
              자산에 별도의 고유한 인식 값을 부여하고 있어 <br />
              상호교환이 불가능하다는 특징이 있습니다.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
