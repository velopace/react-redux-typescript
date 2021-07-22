import {
  FetchAppStart,
  FetchAppSuccess,
  FetchAppFailure,
  DashboardType,
  GetDashboards,
  SetDashboards,
  GetDashboard,
  SetDashboard,
  PutDashboard,
  GetDashboardRequestParams,
  PutDashboardRequestParams,
  PostDashboardRequestParams,
  PostDashboard,
  GetTagsforMetricRequestParams,
  GetTagsForMetric,
  GetAvailableMetrics,
  WidgetDlgData,
  SetWidgetDlgData,
  DeleteDashboardRequestParams,
  DeleteDashboard,
  PostBatchWidgetDataRequestParams,
  GetEventsRequestParams,
  GetEvents,
  PostBatchWidgetData,
  IMetricDataValue,
  SetEventData,
  SetMetricData,
  SetTimeframe,
  SetSearchTerm,
  FetchDashboardData,
  GetProducts,
  ProductDataType,
  SetProducts,
  PostWidgetRequestParams,
  PutWidget,
  DeleteWidgetRequestParams,
  DeleteWidget,
  PostWidget,
  DashboardWidgetType,
  PostWidgetSuccess,
  PutWidgetSuccess,
  DeleteWidgetSuccess,
  PostAmazonOauthStateRequestParams,
  PostAmazonOauthState,
} from "types";

export const AppActionType = {
  FETCH_APP_START: "@@FETCH_APP_START",
  FETCH_APP_SUCCESS: "@@FETCH_APP_SUCCESS",
  FETCH_APP_FAILURE: "@@FETCH_APP_FAILURE",
  FETCH_WIDGET_START: "@@FETCH_WIDGET_START",
  FETCH_WIDGET_SUCCESS: "@@FETCH_WIDGET_SUCCESS",
  FETCH_WIDGET_FAILURE: "@@FETCH_WIDGET_FAILURE",
  GET_DASHBOARDS: "GET_DASHBOARDS",
  SET_DASHBOARDS: "SET_DASHBOARDS",
  GET_DASHBOARD: "GET_DASHBOARD",
  POST_DASHBOARD: "POST_DASHBOARD",
  PUT_DASHBOARD: "PUT_DASHBOARD",
  DELETE_DASHBOARD: "DELETE_DASHBOARD",
  SET_DASHBOARD: "SET_DASHBOARD",
  POST_WIDGET: "POST_WIDGET",
  POST_WIDGET_SUCCESS: "POST_WIDGET_SUCCESS",
  PUT_WIDGET: "PUT_WIDGET",
  PUT_WIDGET_SUCCESS: "PUT_WIDGET_SUCCESS",
  DELETE_WIDGET: "DELETE_WIDGET",
  DELETE_WIDGET_SUCCESS: "DELETE_WIDGET_SUCCESS",
  GET_AVAILABLE_METRICS: "GET_AVAILABLE_METRICS",
  GET_TAGS_FOR_METRIC: "GET_TAGS_FOR_METRIC",
  SET_METRICS: "SET_METRICS",
  SET_TIMEFRAME: "SET_TIMEFRAME",
  FETCH_DASHBOARD_DATA: "FETCH_DASHBOARD_DATA",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  POST_BATCH_WIDGET_DATA: "POST_BATCH_WIDGET_DATA",
  SET_METRIC_DATA: "SET_METRIC_DATA",
  GET_EVENTS: "GET_EVENTS",
  SET_EVENT_DATA: "SET_EVENT_DATA",
  SET_WIDGET_DLG_DATA: "SET_WIDGET_DLG_DATA",
  GET_PRODUCTS: "GET_PRODUCTS",
  SET_PRODUCTS: "SET_PRODUCTS",
  POST_AMAZON_OAUTH_STATE: "POST_AMAZON_OAUTH_STATE",
};

export const fetchAppStart = (): FetchAppStart => ({
  type: AppActionType.FETCH_APP_START,
});
export const fetchAppSuccess = (): FetchAppSuccess => ({
  type: AppActionType.FETCH_APP_SUCCESS,
});
export const fetchAppFailure = (error: string): FetchAppFailure => ({
  type: AppActionType.FETCH_APP_FAILURE,
  error,
});

export const getDashboards = (): GetDashboards => ({
  type: AppActionType.GET_DASHBOARDS,
});
export const setDashboards = (dashboards: DashboardType[]): SetDashboards => ({
  type: AppActionType.SET_DASHBOARDS,
  dashboards,
});

export const getDashboard = (
  params: GetDashboardRequestParams
): GetDashboard => ({
  type: AppActionType.GET_DASHBOARD,
  params,
});
export const postDashboard = (
  params: PostDashboardRequestParams
): PostDashboard => ({
  type: AppActionType.POST_DASHBOARD,
  params,
});
export const putDashboard = (
  params: PutDashboardRequestParams
): PutDashboard => ({
  type: AppActionType.PUT_DASHBOARD,
  params,
});
export const deleteDashboard = (
  params: DeleteDashboardRequestParams
): DeleteDashboard => ({
  type: AppActionType.DELETE_DASHBOARD,
  params,
});
export const setDashboard = (dashboard: DashboardType): SetDashboard => ({
  type: AppActionType.SET_DASHBOARD,
  dashboard,
});

export const postWidget = (params: PostWidgetRequestParams): PostWidget => ({
  type: AppActionType.POST_WIDGET,
  params,
});
export const postWidgetSuccess = (
  widget: DashboardWidgetType
): PostWidgetSuccess => ({
  type: AppActionType.POST_WIDGET_SUCCESS,
  widget,
});
export const putWidget = (params: PostWidgetRequestParams): PutWidget => ({
  type: AppActionType.PUT_WIDGET,
  params,
});
export const putWidgetSuccess = (
  widget: DashboardWidgetType
): PutWidgetSuccess => ({
  type: AppActionType.PUT_WIDGET_SUCCESS,
  widget,
});
export const deleteWidget = (
  params: DeleteWidgetRequestParams
): DeleteWidget => ({
  type: AppActionType.DELETE_WIDGET,
  params,
});
export const deleteWidgetSuccess = (
  id: string | undefined
): DeleteWidgetSuccess => ({
  type: AppActionType.DELETE_WIDGET_SUCCESS,
  id,
});

export const fetchDashboardData = (): FetchDashboardData => ({
  type: AppActionType.FETCH_DASHBOARD_DATA,
});
export const getAvailableMetrics = (): GetAvailableMetrics => ({
  type: AppActionType.GET_AVAILABLE_METRICS,
});
export const setMetrics = (metrics: string[]) => ({
  type: AppActionType.SET_METRICS,
  metrics,
});
export const postBatchWidgetData = (
  params: PostBatchWidgetDataRequestParams
): PostBatchWidgetData => ({
  type: AppActionType.POST_BATCH_WIDGET_DATA,
  params,
});
export const setMetricData = (
  metricData: IMetricDataValue[]
): SetMetricData => ({
  type: AppActionType.SET_METRIC_DATA,
  metricData,
});
export const getEvents = (params: GetEventsRequestParams): GetEvents => ({
  type: AppActionType.GET_EVENTS,
  params,
});
export const setEventData = (eventData: any[]): SetEventData => ({
  type: AppActionType.SET_EVENT_DATA,
  eventData,
});
export const setTimeframe = (timeframe: string): SetTimeframe => ({
  type: AppActionType.SET_TIMEFRAME,
  timeframe,
});
export const setSearchTerm = (searchTerm?: string): SetSearchTerm => ({
  type: AppActionType.SET_SEARCH_TERM,
  searchTerm,
});

export const getTagsForMetric = (
  params: GetTagsforMetricRequestParams
): GetTagsForMetric => ({
  type: AppActionType.GET_TAGS_FOR_METRIC,
  params,
});
export const setWidgetDlgData = (
  widgetDlgData: WidgetDlgData
): SetWidgetDlgData => ({
  type: AppActionType.SET_WIDGET_DLG_DATA,
  widgetDlgData,
});

export const getProducts = (): GetProducts => ({
  type: AppActionType.GET_PRODUCTS,
});
export const setProducts = (products: ProductDataType[]): SetProducts => ({
  type: AppActionType.SET_PRODUCTS,
  products,
});

export const postAmazonOauthState = (
  params: PostAmazonOauthStateRequestParams
): PostAmazonOauthState => ({
  type: AppActionType.POST_AMAZON_OAUTH_STATE,
  params,
});
