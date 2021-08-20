import React from 'react'
import MajorWorkCard from '../../components/Cards/MajorWorkCard';
import { majorWorksData } from '../../utils/data';
import GoToTop from '../../utils/GoToTop';
import SectionLayout from '../Home/SectionLayout';


const MajorWork = majorWorksData.map((item, index) => (
  <MajorWorkCard key={index + "_01"} data={item} />
));

const MajorWorks = () => {
    return (
      <div>
        <SectionLayout
          legendEnglish="Major work"
          legendKorean="주요작품"
          children={MajorWork}
        />
        <GoToTop />
      </div>
    );
}

export default MajorWorks
