import React from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import MajorWorkCard from '../../components/Cards/MajorWorkCard';
import { AuctionData, auctionData } from '../../utils/data';
import GoToTop from '../../utils/GoToTop';
import DetailsPage from '../Details/DetailsPage';
import SectionLayout from '../Home/SectionLayout';


const MajorWork = auctionData.map((item, index) => (
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
              legendKorean="μ£Όμμν"
              children={MajorWork}
            />
          }
        />
        <Route path={`${path}/:id`} children={<DetailsPage pageData={auctionData} />} />
      </Switch>
      <GoToTop />
    </div>
  );
}

export default MajorWorks
