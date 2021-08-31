import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "@szhsin/react-menu/dist/transitions/slide.css";

import Layout from "./components/Layout/Layout";
import nftimg from "./images/nft.png";
import nftimg2 from "./images/content_images/park_04.png";
import About from "./Pages/About/About";
import Artists from "./Pages/Artists/Artists";
import Home from "./Pages/Home/Home";
import MajorWorks from "./Pages/MajorWorks/MajorWorks";
import InProgress from "./Pages/Auctions/InProgress";
import { GlobalContext, GlobalProvider } from "./Context/GlobalProvider";
import ProfilePage from "./Pages/Profile/ProfilePage";
import ConnectWallet from "./containers/ConnectWallet/ConnectWallet";
import LoginFirstPage from "./Pages/Helpers/LoginFirstPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import MyAuctionsPage from "./Pages/MyAuctionsPage/MyAuctionsPage";
import Terms from "./Pages/TermsPage/Terms";
import EditProfile from "./Pages/EditingPages/EditProfile";
import Notifications from "./Pages/EditingPages/Notifications";
import Biding from "./Pages/BidingPage/Biding";

const link =
  "https://fiverr-res.cloudinary.com/image/upload/t_profile_thumb,q_auto,f_auto/v1/attachments/profile/photo/2c7ea5a3fefaecf1c80831e2a8b315b8-1541763397614/919d4883-a517-42d4-9cbe-cfac66389679.jpeg";

export const data = {
  heading: "Show me what you got",
  nftLink: nftimg,
  avatar: link,
  username: "박기웅",
  currentBid: "0.555 BBD",
  timeRemaining: "4일 18시 12분 27초",
};
export const data2 = {
  heading: "Show me what you got",
  nftLink: nftimg2,
  avatar: link,
  username: "박기웅",
  price: "0.555 BBD",
  owner: "0x42f3...aaa5",
};
export const data3 = {
  heading: "Show me what you got",
  imgLink: nftimg,
  avatar: link,
  username: "박기웅",
  profession: "Arttrainer",
  totalWork: 28,
  about:
    '잘 알려진 작품은 2006년 스카이 휴대폰 CF에서 보여 준 일명 맷돌춤. 춤 출 때의 손의 위치가 돌하르방의 손 의 위치와 비슷해서 돌하르방 춤, 돌하르방 댄스 라고도 하며 배경 음악 가사가 "동충하초 동충하초"로 들린...',
};

function App() {
  const { state } = useContext(GlobalContext);
  console.log("from app.tsx -> ", state.isloggedIn);

  return (
    <Router>
      <GlobalProvider>
        <Layout>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              {/* in progress */}
              <Route path="/진행중인 경매">
                <InProgress />
              </Route>

              {/* major works */}
              <Route path="/주요작품">
                <MajorWorks />
              </Route>

              {/* artist */}
              <Route path="/아티스트">
                <Artists />
              </Route>

              {/* my auctions */}
              <ProtectedRoute
                exact={false}
                path="/나의경매"
                component={MyAuctionsPage}
              />

              {/* Profile Page */}
              <ProtectedRoute exact path="/프로필" component={ProfilePage} />

              {/* biding Page */}
              <ProtectedRoute
                exact={false}
                path="/입찰하기/:id"
                component={Biding}
              />

              {/* instant buy Page */}
              <ProtectedRoute
                exact={false}
                path="/즉시구매하기/:id"
                component={Biding}
              />

              {/* Edit Profile Page */}
              <ProtectedRoute
                exact
                path="/프로필 수정"
                component={EditProfile}
              />

              {/* Notification Page */}
              <ProtectedRoute
                exact
                path="/이메일 알림 설정"
                component={Notifications}
              />

              <Route path="/signin">
                <LoginFirstPage />
              </Route>

              {/* about beryauctions */}
              <Route path="/베리옥션 소개">
                <About />
              </Route>

              <Route path="/개인정보보호정책">
                <Terms />
              </Route>
              <Route path="/이용약관">
                <Terms />
              </Route>
            </Switch>
          </div>
        </Layout>
      </GlobalProvider>
    </Router>
  );
}

export default App;
