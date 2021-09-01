import React, { useContext } from "react";
import {
  Redirect,
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router";
import ConnectWallet from "../containers/ConnectWallet/ConnectWallet";
import { GlobalContext } from "../Context/GlobalProvider";
import { ActionTypes } from "../Context/Reducer";

const ProtectedRoute: React.FC<{
  component: React.FC;
  exact: boolean;
  path: string;
}> = ({ component: Component, ...rest }) => {
  const match = useRouteMatch(`${rest.path}`);
  const history = useHistory();
  console.log("inside protected route ", history.location, rest.path);

  const { state, appDispatch } = useContext(GlobalContext);
  const prevLocation = history.location.state as string
  !state.isLoggedIn &&
    appDispatch({
      type: ActionTypes.SIGNIN,
      payload: {
        ...state,
        redirectPath: match?.url,
        showModal: true,
      },
    });
  return (
    <Route
      exact
      path={rest.path}
      render={() =>
        state.isLoggedIn ? <Component /> : <Redirect to={prevLocation} />
      }
    />
  );
};

export default ProtectedRoute;
