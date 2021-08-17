import React from 'react';
import Avatar from './components/Avatar/Avatar';
import Button from './components/Button/Button';

function App() {
  const link = "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg"
  return (
    <div className="container">
      <h1 className="heading">
        Starting development <span>hello</span>
      </h1>
      <Button primary={true} width="285px" text="경매 참여하기" />
      <Button primary={false} width="223px" text="작품보기" />
      <Avatar src={link} username="Taimoor khan" />
      <Avatar />
    </div>
  );
}

export default App;
