import { IGlobalState, User } from "./GlobalProvider";

export enum ActionTypes {
  SIGNIN = "SIGN_IN",
  SINGOUT = "SIGN_OUT",
  REGISTER = "REGISTER",
}

export interface IPayloadType {
  isLoggedIn?: boolean;
  user?: User;
  showModal?: boolean;
  redirectPath?: string;
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
        ...action.payload,
      };

    case ActionTypes.SIGNIN:
      return {
        ...state,
       ...action.payload,
      };

    case ActionTypes.SINGOUT:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
