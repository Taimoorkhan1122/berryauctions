import React from "react";
import { Route, useRouteMatch } from "react-router";
import ArtistCard from "../../components/Cards/ArtistCard";
import { artistData } from "../../utils/data";
import GoToTop from "../../utils/GoToTop";
import SectionLayout from "../Home/SectionLayout";
import ProfilePage from "../Profile/ProfilePage";

import styles from "./artist.module.css";

const ArtistsCards = artistData.map((item, index) => (
  <ArtistCard key={index + "_01"} {...item} />
));
const Artists = () => {

  const { path } = useRouteMatch();
  console.log("from artist page", path);
  
  return (
    <div className={styles.container}>
      <Route exact path={path}>
        <SectionLayout
          legendEnglish="Artists"
          legendKorean="아티스트"
          children={ArtistsCards}
          parentClassName={styles.artistSection}
        />
      </Route>
      <Route path={`${path}/:id`}>
        <ProfilePage />
      </Route>
      <GoToTop />
    </div>
  );
};

export default Artists;
