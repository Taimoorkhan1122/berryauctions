import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { GlobalContext } from "../Context/GlobalProvider";

const ProtectedRoute: React.FC<{
  component: React.FC;
  exact: boolean;
  path: string;
}> = ({ component: Component, ...rest }) => {
    const {state} = useContext(GlobalContext);
  return (
    <Route
      exact
      path="/프로필"
      render={() =>
        state.isloggedIn ? <Component /> : <Redirect to="/signin" />
      }
    />
  );
};

export default ProtectedRoute;
