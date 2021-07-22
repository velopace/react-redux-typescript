import produce from "immer";
import {
  AppState,
  AppAction,
  FetchAppFailure,
  SetDashboards,
  SetDashboard,
  SetAvailableMetrics,
  SetWidgetDlgData,
  SetTimeframe,
  SetSearchTerm,
  SetMetricData,
  SetEventData,
  SetProducts,
  PostWidgetSuccess,
  DeleteWidgetSuccess,
  PutWidgetSuccess,
} from "types";
import { AppActionType } from "./actions";

const INITIAL_STATE: AppState = {
  loading: false,
  error: null,
  dashboards: [],
  dashboard: {
    id: "",
    name: "",
    widgets: [],
  },
  widgetDlgData: {
    tags: [],
    tagKeys: [],
  },
  availableMetrics: [],
  timeframe: "-1h",
  searchTerm: "",
  metricData: [],
  eventData: [],
  products: [],
};

export const app = produce((draft, action: AppAction) => {
  switch (action.type) {
    case AppActionType.FETCH_APP_START:
      draft.loading = true;
      break;
    case AppActionType.FETCH_APP_SUCCESS:
      draft.loading = false;
      draft.error = null;
      break;
    case AppActionType.FETCH_APP_FAILURE:
      const { error } = action as FetchAppFailure;
      draft.loading = false;
      draft.error = error;
      break;
    case AppActionType.SET_DASHBOARDS:
      const { dashboards } = action as SetDashboards;
      draft.dashboards = dashboards;
      break;
    case AppActionType.GET_DASHBOARD:
      draft.dashboard = INITIAL_STATE.dashboard;
      break;
    case AppActionType.SET_DASHBOARD:
      draft.dashboard = (action as SetDashboard).dashboard;
      break;
    case AppActionType.POST_WIDGET_SUCCESS:
      draft.dashboard?.widgets.push((action as PostWidgetSuccess).widget);
      break;
    case AppActionType.PUT_WIDGET_SUCCESS:
      const indexU = draft.dashboard?.widgets.findIndex(
        (widget) => widget.id === (action as PutWidgetSuccess).widget.id
      );
      if (indexU !== undefined && indexU !== -1)
        draft.dashboard.widgets[indexU] = (action as PutWidgetSuccess).widget;
      break;
    case AppActionType.DELETE_WIDGET_SUCCESS:
      const indexD = draft.dashboard?.widgets.findIndex(
        (widget) => widget.id === (action as DeleteWidgetSuccess).id
      );
      if (indexD !== undefined && indexD !== -1)
        draft.dashboard?.widgets.splice(indexD, 1);
      break;
    case AppActionType.SET_METRICS:
      draft.availableMetrics = (action as SetAvailableMetrics).metrics;
      break;
    case AppActionType.SET_TIMEFRAME:
      draft.timeframe = (action as SetTimeframe).timeframe;
      break;
    case AppActionType.SET_SEARCH_TERM:
      draft.searchTerm = (action as SetSearchTerm).searchTerm;
      break;
    case AppActionType.SET_METRIC_DATA:
      draft.metricData = (action as SetMetricData).metricData;
      break;
    case AppActionType.SET_EVENT_DATA:
      draft.eventData = (action as SetEventData).eventData;
      break;
    case AppActionType.GET_TAGS_FOR_METRIC:
      draft.widgetDlgData = INITIAL_STATE.widgetDlgData;
      break;
    case AppActionType.SET_WIDGET_DLG_DATA:
      draft.widgetDlgData = (action as SetWidgetDlgData).widgetDlgData;
      break;
    case AppActionType.SET_PRODUCTS:
      draft.products = (action as SetProducts).products;
      break;
    default:
      return draft;
  }
}, INITIAL_STATE);
