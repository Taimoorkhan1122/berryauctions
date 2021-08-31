import React, { useContext } from "react";
import { Redirect, Route, useRouteMatch } from "react-router";
import { GlobalContext } from "../Context/GlobalProvider";
import { ActionTypes } from "../Context/Reducer";

const ProtectedRoute: React.FC<{
  component: React.FC;
  exact: boolean;
  path: string;
}> = ({ component: Component, ...rest }) => {
  const match = useRouteMatch(`${rest.path}`);
  console.log(match);
  
    const {state, appDispatch} = useContext(GlobalContext);
    !state.isloggedIn &&  appDispatch({
      type: ActionTypes.SIGNIN,
      payload: {
        isLoggedIn: state.isloggedIn,
        user: {...state.user},
        redirectPath: match?.url
      }
    })
  return (
    <Route
      exact
      path={rest.path}
      render={() =>
        state.isloggedIn ? <Component /> : <Redirect to="/signin" />
      }
    />
  );
};

export default ProtectedRoute;
