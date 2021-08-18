import React from 'react';

import Avatar from './components/Avatar/Avatar';
import Button, { BtnType } from './components/Button/Button';
import ArtistCard from './components/Cards/ArtistCard';
import AuctionCard from './components/Cards/AuctionCard';
import MajorWorkCard from './components/Cards/MajorWorkCard';
import GradText from './components/GradText/GradText';
import  nftimg from './images/nft.png';

function App() {
  const link = "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg"
  const data = {
    heading: "Show me what you got",
    nftLink: nftimg,
    avatar: link,
    username: "박기웅",
    currentBid: "0.555 BBD",
    timeRemaining: "4일 18시 12분 27초",
  };
  const data2 = {
    heading: "Show me what you got",
    nftLink: nftimg,
    avatar: link,
    username: "박기웅",
    price: "0.555 BBD",
    owner: "0x42f3...aaa5",
  };
  const data3 = {
    heading: "Show me what you got",
    imgLink: nftimg,
    avatar: link,
    username: "박기웅",
    profession: "Arttrainer",
    totalWork: 28,
    about: '잘 알려진 작품은 2006년 스카이 휴대폰 CF에서 보여 준 일명 맷돌춤. 춤 출 때의 손의 위치가 돌하르방의 손 의 위치와 비슷해서 돌하르방 춤, 돌하르방 댄스 라고도 하며 배경 음악 가사가 "동충하초 동충하초"로 들린...',
  };
  return (
    <div className="container">
      <h1 className="heading">
        Starting development <span>hello</span>
      </h1>
      <Button btnType={BtnType.PRIMARY} width="285px" text="경매 참여하기" />
      <Button btnType={BtnType.SECONDARY} width="223px" text="작품보기" />
      <Button btnType={BtnType.TERTIARY} width="223px" text="작품보기" />
      <Avatar src={link} username="Taimoor khan" />
      <Avatar />
      <br />
      <GradText>Arttrainer</GradText> <br />
      <AuctionCard data={data} /> <br />
      <MajorWorkCard data={data2} /> <br />
      <ArtistCard {...data3} />
      <br />
    </div>
  );
}

export default App;
