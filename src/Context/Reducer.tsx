import { IGlobalState } from "./GlobalProvider";

export enum ActionTypes {
  SIGNIN = "SIGN_IN",
  SINGOUT = "SIGN_OUT",
  REGISTER = "REGISTER",
}

export interface IPayloadType {
  username: string;
  isLoggedIn: boolean;
}

export interface IActionType {
  type: ActionTypes;
  payload: IPayloadType;
}

export const reducer = (state: IGlobalState, action: IActionType) => {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return {
        ...state,
        isloggedIn: action.payload.isLoggedIn,
        user: {username: action.payload.username}
      };

    case ActionTypes.SIGNIN:
      return {
        ...state,
        isloggedIn: action.payload.isLoggedIn,
        user: { username: action.payload.username },
      };

    case ActionTypes.SINGOUT:
      return {
        ...state,
        isloggedIn: action.payload.isLoggedIn,
        user: { username: action.payload.username },
      };

    default:
      return state;
  }
};
