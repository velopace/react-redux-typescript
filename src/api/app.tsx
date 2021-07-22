import axios from "axios";
import {
  GetEventsRequestParams,
  PostDashboardRequestParams,
  GetDashboardRequestParams,
  PutDashboardRequestParams,
  GetTagsforMetricRequestParams,
  PostBatchWidgetDataRequestParams,
  DashboardType,
  DeleteDashboardRequestParams,
  DashboardWidgetType,
  PostWidgetRequestParams,
  DeleteWidgetRequestParams,
  PostAmazonOauthStateRequestParams,
} from "types";

const ApiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const getEvents = (params: GetEventsRequestParams) => {
  if (params.searchTerm === "") {
    return axios.get(
      `${process.env.REACT_APP_EVENTS_URI}/query?timeframe=${params.timeframe}`
    );
  }
  return axios.get(
    `${process.env.REACT_APP_EVENTS_URI}/query?timeframe=${params.timeframe}&search_term=${params.searchTerm}`
  );
};

export const getDashboards = () => axios.get(`${ApiEndpoint}/dashboards`);

export const postDashboard = (params: PostDashboardRequestParams) =>
  axios.post<DashboardType>(`${ApiEndpoint}/dashboards`, params);

export const getDashboard = (params: GetDashboardRequestParams) =>
  axios.get<DashboardType>(`${ApiEndpoint}/dashboards/${params.id}`);

export const putDashboard = (params: PutDashboardRequestParams) =>
  axios.put<DashboardType>(
    `${ApiEndpoint}/dashboards/${params.dashboard.id}`,
    params.dashboard
  );

export const deleteDashboard = (params: DeleteDashboardRequestParams) =>
  axios.delete(`${ApiEndpoint}/dashboards/${params.id}`);

export const getWidgets = () =>
  axios.get<DashboardWidgetType[]>(`${ApiEndpoint}/widgets`);

export const postWidget = (params: PostWidgetRequestParams) =>
  axios.post<DashboardWidgetType>(`${ApiEndpoint}/widgets`, params);

export const getWidget = (id: string) =>
  axios.post<DashboardWidgetType>(`${ApiEndpoint}/widgets/${id}`);

export const putWidget = (params: PostWidgetRequestParams) =>
  axios.put<DashboardWidgetType>(
    `${ApiEndpoint}/widgets/${params.widget.id}`,
    params
  );

export const deleteWidget = (params: DeleteWidgetRequestParams) =>
  axios.delete<DashboardWidgetType>(`${ApiEndpoint}/widgets/${params.id}`);

export const getAvailableMetrics = () =>
  axios.get(`${ApiEndpoint}/metrics/get_available_metrics`);

export const getTagsforMetric = (params: GetTagsforMetricRequestParams) =>
  axios.get(
    `${ApiEndpoint}/metrics/get_tags_for_metric?metric=${params.metric}`
  );

// TODO - This is a post request, but it seems like it should be a GET request -JS
export const postBatchWidgetData = (params: PostBatchWidgetDataRequestParams) =>
  axios.post(`${ApiEndpoint}/metrics/batch_query`, params);

export const postAmazonOauthState = (
  params: PostAmazonOauthStateRequestParams
) =>
  axios.post(
    `${process.env.REACT_APP_AMAZON_SERVICE_URI}/dev/oauth_state`,
    params
  );
