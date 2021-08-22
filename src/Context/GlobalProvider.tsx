import React, { createContext, useReducer } from "react";
import { IActionType, reducer } from "./Reducer";

type Props = {
    children: React.ReactNode;
}

export interface User {
  username: string | undefined,
  walletAddress: string | undefined,
  walletAmount: string | undefined,
}

export interface IGlobalState {
  isloggedIn: boolean;
  user:  User;
}

const initialState: IGlobalState = {
  isloggedIn: false,
  user: {
    username: undefined,
    walletAmount: undefined,
    walletAddress: undefined,
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

