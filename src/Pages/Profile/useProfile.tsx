import React, { useContext } from "react";
import {  useRouteMatch } from "react-router";
import MajorWorkCard from "../../components/Cards/MajorWorkCard";
import { GlobalContext } from "../../Context/GlobalProvider";
import { artistData, AuctionData, auctionData, IArtistData } from "../../utils/data";

const useProfile = () => {
  const { state } = useContext(GlobalContext);
  const match = useRouteMatch<any>();
  const currentPath = match.path;
  let Works: (JSX.Element | null)[] | undefined;
  let user: {artistData: IArtistData | undefined, otherDetails: AuctionData[] | undefined};
  let listings = 0;

  // if id matches the user id in data array show those lisings
  if (state.isLoggedIn && match.path === "/프로필") {
    user = {
      artistData: state.user.artistData,
      otherDetails: state.user.listings,
    };
      Works = state.user.listings?.map((item, index) => {
        if (item.owner === state.user.username) {
          listings++;
          // return <MajorWorkCard key={index + "_01"} data={item} />;
          return null;
        }
        return null;
      });
  } else {
    user = {
      artistData:
        artistData.filter(
          (artist) => artist.username === match.params?.id
        )[0] || undefined,
      otherDetails:
        auctionData.filter(
          (artist) => artist.owner === match.params?.id
        ) || undefined,
    };
    Works = auctionData?.map((item, index) => {
      if (item.owner === match.params.id) {
        listings++;
        return <MajorWorkCard key={index + "_01"} data={item} />;
      }
      return null;
    });
  }
  
  return {
    currentPath,
    user,
    listings,
    Works,
  };
};

export default useProfile;
