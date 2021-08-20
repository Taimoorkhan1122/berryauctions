import React from 'react'
import ArtistCard from '../../components/Cards/ArtistCard';
import { artistData } from '../../utils/data';
import GoToTop from '../../utils/GoToTop';
import SectionLayout from '../Home/SectionLayout';

const ArtistsCards = artistData.map((item, index) => (
  <ArtistCard key={index + "_01"} {...item} />
));
const Artists = () => {
    return (
      <div>
        <SectionLayout
          legendEnglish="Artists"
          legendKorean="아티스트"
          children={ArtistsCards}
        />
        <GoToTop />
      </div>
    );
}

export default Artists
