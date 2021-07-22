import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { auth } from "./auth/reducers";
import { app } from "./app/reducers";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    app,
  });
