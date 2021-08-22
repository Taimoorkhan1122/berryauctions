import { IGlobalState, User } from "./GlobalProvider";

export enum ActionTypes {
  SIGNIN = "SIGN_IN",
  SINGOUT = "SIGN_OUT",
  REGISTER = "REGISTER",
}

export interface IPayloadType {
  isLoggedIn: boolean;
  user: User
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
        user: {...action.payload.user}
      };

    case ActionTypes.SIGNIN:
      return {
        ...state,
        isloggedIn: action.payload.isLoggedIn,
        user: { ...action.payload.user },
      };

    case ActionTypes.SINGOUT:
      return {
        ...state,
        isloggedIn: action.payload.isLoggedIn,
        user: { ...action.payload.user },
      };

    default:
      return state;
  }
};
