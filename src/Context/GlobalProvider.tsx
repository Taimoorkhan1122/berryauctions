import React, { createContext, useReducer } from "react";
import { ActionTypes, IActionType, IPayloadType, reducer } from "./Reducer";

type Props = {
    children: React.ReactNode;
}

export interface IGlobalState {
  isloggedIn: boolean;
  user: {
    username: string | undefined;
  };
}

const initialState: IGlobalState = {
  isloggedIn: false,
  user: {
    username: undefined,
  },
};

export const GlobalContext = createContext({
  state: initialState,
  appDispatch: (p: IActionType) : void => {},
});

export const GlobalProvider: React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

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

