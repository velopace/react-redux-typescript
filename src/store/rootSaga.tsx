import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./auth/sagas";
import {
  watchGetDashboards,
  watchPostDashboard,
  watchGetDashboard,
  watchPutDashboard,
  watchDeleteDashboard,
  watchFetchDashboardData,
  watchGetEvents,
  watchGetTagsForMetric,
  watchGetProducts,
  watchPostWidget,
  watchPutWidget,
  watchDeleteWidget,
  watchPostAmazonOauthState,
} from "./app/sagas";

export function* rootSaga() {
  yield all([
    fork(watchGetUser),

    fork(watchGetDashboards),

    fork(watchPostDashboard),
    fork(watchGetDashboard),
    fork(watchPutDashboard),
    fork(watchDeleteDashboard),

    fork(watchPostWidget),
    fork(watchPutWidget),
    fork(watchDeleteWidget),

    fork(watchFetchDashboardData),
    fork(watchGetEvents),

    fork(watchGetTagsForMetric),

    fork(watchGetProducts),

    fork(watchPostAmazonOauthState),
  ]);
}
