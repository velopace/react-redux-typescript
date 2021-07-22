import {
  DashboardType,
  DashboardWidgetType,
  DeleteDashboardRequestParams,
  DeleteWidgetRequestParams,
  GetDashboardRequestParams,
  GetEventsRequestParams,
  GetTagsforMetricRequestParams,
  IMetricDataValue,
  PostAmazonOauthStateRequestParams,
  PostBatchWidgetDataRequestParams,
  PostDashboardRequestParams,
  PostWidgetRequestParams,
  ProductDataType,
  PutDashboardRequestParams,
  User,
} from "./api";

/**
 * Auth
 */
export interface AuthState {
  loading: boolean;
  error: string | null;
  user?: User;
}
export interface AuthAction {
  type: string;
}

export interface FetchAuthStart extends AuthAction {}
export interface FetchAuthSuccess extends AuthAction {}
export interface FetchAuthFailure extends AuthAction {
  error: string;
}

export interface GetUser extends AuthAction {}
export interface SetUser extends AuthAction {
  user: User;
}

/**
 * Dashboard
 */
export interface AppState {
  loading: boolean;
  error: string | null;
  dashboards: DashboardType[];
  dashboard: DashboardType;
  widgetDlgData: WidgetDlgData;
  availableMetrics: string[];
  timeframe: string;
  searchTerm?: string;
  metricData: IMetricDataValue[];
  eventData: any[];
  products: ProductDataType[];
}
export interface WidgetDlgData {
  tags: string[];
  tagKeys: string[];
}

export interface AppAction {
  type: string;
}

export interface FetchAppStart extends AppAction {}
export interface FetchAppSuccess extends AppAction {}
export interface FetchAppFailure extends AppAction {
  error: string;
}

export interface GetDashboards extends AppAction {}
export interface SetDashboards extends AppAction {
  dashboards: DashboardType[];
}

export interface GetDashboard extends AppAction {
  params: GetDashboardRequestParams;
}
export interface PostDashboard extends AppAction {
  params: PostDashboardRequestParams;
}
export interface PutDashboard extends AppAction {
  params: PutDashboardRequestParams;
}
export interface DeleteDashboard extends AppAction {
  params: DeleteDashboardRequestParams;
}
export interface SetDashboard extends AppAction {
  dashboard: DashboardType;
}

export interface PostWidget extends AppAction {
  params: PostWidgetRequestParams;
}
export interface PostWidgetSuccess extends AppAction {
  widget: DashboardWidgetType;
}
export interface PutWidget extends AppAction {
  params: PostWidgetRequestParams;
}
export interface PutWidgetSuccess extends AppAction {
  widget: DashboardWidgetType;
}
export interface DeleteWidget extends AppAction {
  params: DeleteWidgetRequestParams;
}
export interface DeleteWidgetSuccess extends AppAction {
  id?: string;
}

export interface FetchDashboardData extends AppAction {}
export interface GetAvailableMetrics extends AppAction {}
export interface SetAvailableMetrics extends AppAction {
  metrics: string[];
}
export interface SetTimeframe extends AppAction {
  timeframe: string;
}
export interface SetSearchTerm extends AppAction {
  searchTerm?: string;
}
export interface SetMetricData extends AppAction {
  metricData: IMetricDataValue[];
}
export interface SetEventData extends AppAction {
  eventData: any[];
}

export interface GetTagsForMetric extends AppAction {
  params: GetTagsforMetricRequestParams;
}
export interface SetWidgetDlgData extends AppAction {
  widgetDlgData: WidgetDlgData;
}

export interface PostBatchWidgetData extends AppAction {
  params: PostBatchWidgetDataRequestParams;
}
export interface GetEvents extends AppAction {
  params: GetEventsRequestParams;
}

export interface GetProducts extends AppAction {}
export interface SetProducts extends AppAction {
  products: ProductDataType[];
}

export interface PostAmazonOauthState extends AppAction {
  params: PostAmazonOauthStateRequestParams;
}
