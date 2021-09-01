import React, { createContext, useReducer } from "react";
import { AuctionData, IArtistData } from "../utils/data";
import { IActionType, reducer } from "./Reducer";

type Props = {
    children: React.ReactNode;
}

export interface User {
  username: string ,
  walletAddress: string ,
  walletAmount: string ,
  listings: AuctionData[] | undefined,
  artistData : IArtistData | undefined,
  bids: AuctionData[]
}

export interface IGlobalState {
  isLoggedIn: boolean;
  showModal: boolean;
  redirectPath: string;
  user:  User;
}

const initialState: IGlobalState = {
  isLoggedIn: false,
  showModal: false,
  redirectPath: '',
  user: {
    username: "",
    walletAmount: "",
    walletAddress: "",
    listings: undefined,
    artistData: undefined,
    bids: [],
  },
};

export const GlobalContext = createContext({
  state: initialState,
  appDispatch: (p: IActionType) : void => {},
});

export const GlobalProvider: React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const appDispatch = (action: IActionType) => {
      dispatch({
        type: action.type,
        payload: action.payload,
      });
    };
    
    return (
      <GlobalContext.Provider value={{ state, appDispatch }}>
        {children}
      </GlobalContext.Provider>
    );
}

