import React from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import MajorWorkCard from '../../components/Cards/MajorWorkCard';
import { IMajorWorks, majorWorksData } from '../../utils/data';
import GoToTop from '../../utils/GoToTop';
import AuctionsDetails from '../Auctions/AuctionsDetails';
import SectionLayout from '../Home/SectionLayout';


const MajorWork = majorWorksData.map((item, index) => (
  <MajorWorkCard key={index + "_01"} data={item} />
));

const MajorWorks = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route
          exact
          path={path}
          children={
            <SectionLayout
              legendEnglish="Major work"
              legendKorean="주요작품"
              children={MajorWork}
            />
          }
        />
        <Route path={`${path}/:id`} children={"major work details"} />
      </Switch>

      <GoToTop />
    </div>
  );
}

export default MajorWorks
