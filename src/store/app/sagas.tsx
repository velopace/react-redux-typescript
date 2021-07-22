import { call, takeLatest, put, select, all } from "redux-saga/effects";
import {
  DeleteDashboard,
  DeleteWidget,
  GetDashboard,
  GetEvents,
  GetTagsForMetric,
  PostAmazonOauthState,
  PostDashboard,
  PostWidget,
  PutDashboard,
  PutWidget,
  WidgetDlgData,
} from "types";
import { push } from "connected-react-router";

import * as API from "api";
import { TagUtil } from "utils";
import {
  AppActionType,
  fetchAppStart,
  fetchAppSuccess,
  fetchAppFailure,
  setDashboards,
  setDashboard,
  setMetrics,
  setWidgetDlgData,
  setMetricData,
  setEventData,
  setProducts,
  postWidgetSuccess,
  putWidgetSuccess,
  deleteWidgetSuccess,
} from "./actions";
import {
  selectDashboard,
  selectSearchTerm,
  selectTimeframe,
} from "./selectors";

function* getDashboards() {
  try {
    yield put(fetchAppStart());
    const { data: dashboards } = yield call(API.getDashboards);
    yield put(fetchAppSuccess());
    yield put(setDashboards(dashboards));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* getDashboard(action: GetDashboard) {
  try {
    yield put(fetchAppStart());
    const { data: dashboard } = yield call(API.getDashboard, action.params);
    yield put(fetchAppSuccess());
    yield put(setDashboard(dashboard));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}
function* postDashboard(action: PostDashboard) {
  try {
    yield put(fetchAppStart());
    const { data: newDashboard } = yield call(API.postDashboard, action.params);
    yield put(fetchAppSuccess());
    yield put(push(`/dashboards/${newDashboard.id}/${newDashboard.name}`));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}
function* putDashboard(action: PutDashboard) {
  try {
    yield put(fetchAppStart());
    const { data: updatedDashboard } = yield call(
      API.putDashboard,
      action.params
    );
    yield put(fetchAppSuccess());
    yield put(setDashboard(updatedDashboard));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}
function* deleteDashboard(action: DeleteDashboard) {
  try {
    yield put(fetchAppStart());
    yield call(API.deleteDashboard, action.params);
    yield put(fetchAppSuccess());
    yield put(push("/dashboards/"));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* postWidget(action: PostWidget) {
  try {
    yield put(fetchAppStart());
    const { data: newWidget } = yield call(API.postWidget, action.params);
    yield put(fetchAppSuccess());
    yield put(postWidgetSuccess(newWidget));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* putWidget(action: PutWidget) {
  try {
    yield put(fetchAppStart());
    const { data: updatedWidget } = yield call(API.putWidget, action.params);
    yield put(fetchAppSuccess());
    yield put(putWidgetSuccess(updatedWidget));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* deleteWidget(action: DeleteWidget) {
  try {
    yield put(fetchAppStart());
    yield call(API.deleteWidget, action.params);
    yield put(fetchAppSuccess());
    yield put(deleteWidgetSuccess(action.params.id));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* fetchDashboardData() {
  try {
    const timeframe = yield select(selectTimeframe);
    const searchTerm = yield select(selectSearchTerm);
    const dashboard = yield select(selectDashboard);
    yield put(fetchAppStart());
    const [{ data: metrics }, { data: metricData }, { data: eventData }] =
      yield all([
        call(API.getAvailableMetrics),
        call(API.postBatchWidgetData, {
          timeframe,
          queries: dashboard.widgets,
        }),
        call(API.getEvents, { timeframe, searchTerm }),
      ]);
    yield put(fetchAppSuccess());
    yield put(setMetrics(metrics));
    yield put(setMetricData(metricData));
    yield put(setEventData(eventData.Events));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}
function* getEventData(action: GetEvents) {
  try {
    yield put(fetchAppStart());
    const { data } = yield call(API.getEvents, action.params);
    yield put(fetchAppSuccess());
    yield put(setEventData(data.Events));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* getTagsForMetric(action: GetTagsForMetric) {
  try {
    yield put(fetchAppStart());
    const { data: tags } = yield call(API.getTagsforMetric, action.params);
    yield put(fetchAppSuccess());
    const widgetDlgData: WidgetDlgData = {
      tags: TagUtil.getKeyValueList(tags.tags),
      tagKeys: TagUtil.getKeyList(tags.tags),
    };
    yield put(setWidgetDlgData(widgetDlgData));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* getProducts() {
  try {
    yield put(fetchAppStart());
    const { data: products } = yield call(API.getProducts);
    yield put(fetchAppSuccess());
    yield put(setProducts(products));
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

function* postAmazonOauthState(action: PostAmazonOauthState) {
  try {
    yield put(fetchAppStart());
    const { data } = yield call(API.postAmazonOauthState, action.params);
    yield call(console.log, data);
    yield put(fetchAppSuccess());
  } catch (error) {
    yield put(fetchAppFailure(error));
  }
}

export function* watchGetDashboards() {
  yield takeLatest(AppActionType.GET_DASHBOARDS, getDashboards);
}

export function* watchGetDashboard() {
  yield takeLatest(AppActionType.GET_DASHBOARD, getDashboard);
}
export function* watchPostDashboard() {
  yield takeLatest(AppActionType.POST_DASHBOARD, postDashboard);
}
export function* watchPutDashboard() {
  yield takeLatest(AppActionType.PUT_DASHBOARD, putDashboard);
}
export function* watchDeleteDashboard() {
  yield takeLatest(AppActionType.DELETE_DASHBOARD, deleteDashboard);
}

export function* watchPostWidget() {
  yield takeLatest(AppActionType.POST_WIDGET, postWidget);
}
export function* watchPutWidget() {
  yield takeLatest(AppActionType.PUT_WIDGET, putWidget);
}
export function* watchDeleteWidget() {
  yield takeLatest(AppActionType.DELETE_WIDGET, deleteWidget);
}

export function* watchFetchDashboardData() {
  yield takeLatest(AppActionType.FETCH_DASHBOARD_DATA, fetchDashboardData);
}
export function* watchGetEvents() {
  yield takeLatest(AppActionType.GET_EVENTS, getEventData);
}

export function* watchGetTagsForMetric() {
  yield takeLatest(AppActionType.GET_TAGS_FOR_METRIC, getTagsForMetric);
}

export function* watchGetProducts() {
  yield takeLatest(AppActionType.GET_PRODUCTS, getProducts);
}

export function* watchPostAmazonOauthState() {
  yield takeLatest(AppActionType.POST_AMAZON_OAUTH_STATE, postAmazonOauthState);
}
