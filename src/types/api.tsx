export interface GetEventsRequestParams {
  timeframe: string;
  searchTerm?: string;
}

export interface PostDashboardRequestParams {
  name: string;
  widgets: any[];
}

export interface GetDashboardRequestParams {
  id: string;
}

export interface PutDashboardRequestParams {
  dashboard: DashboardType;
}

export interface DeleteDashboardRequestParams {
  id?: string;
}

export interface PostWidgetRequestParams {
  dashboard_id: string;
  widget: DashboardWidgetType;
}

export interface DeleteWidgetRequestParams {
  id?: string;
  dashboard_id?: string;
}

export interface GetTagsforMetricRequestParams {
  metric: string | null;
}

export interface DashboardWidgetType {
  id?: string;
  metric_name: string | null;
  filter_tags: string | null;
  group_by_tags: string | null;
}

export interface IMetricDataValue {
  group_by_tags?: string;
  filter_tags?: string;
  metric_name: string;
  id: string;
  data: any;
}

export interface DashboardType {
  id?: string;
  widgets: DashboardWidgetType[];
  name: string;
}

export interface PostBatchWidgetDataRequestParams {
  timeframe: string;
  queries: DashboardWidgetType[];
}

export interface Organization {
  id: string;
  name: string;
  createdAt: string;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  organizations: Organization[];
  createdAt: string;
}

export interface ProductDataType {
  sku: string;
  variant_name: string;
  shopify_price: number;
  custom_tags: {};
  tags: {};
  id: string;
}

export interface Tag {
  key: string;
  values: string[];
}

export interface PostAmazonOauthStateRequestParams {
  state: string;
  org_id: string;
  integration_id: number;
}
