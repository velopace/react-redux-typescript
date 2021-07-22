import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { rootReducer } from "store/rootReducer";
import { rootSaga } from "store/rootSaga";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const middlewares: any[] = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(reduxImmutableStateInvariant());
  }

  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), ...middlewares)
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
