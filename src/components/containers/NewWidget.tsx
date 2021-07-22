/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  DashboardType,
  GetTagsforMetricRequestParams,
  PostWidgetRequestParams,
  WidgetDlgData,
} from "types";
import { Head, Card } from "components/atoms";
import { getTagsForMetric, postWidget } from "store/app/actions";
import { selectWidgetDlgData } from "store/app/selectors";

export function NewWidgetComponent({
  dashboard,
  availableMetrics,
  widgetDlgData,
  onGetTagsForMetric,
  onPostWidget,
}: NewWidgetComponentProps) {
  const [open, setOpen] = React.useState(false);
  const [metric, setMetric] = React.useState<string | null>("");
  const [filter, setFilter] = React.useState<string | null>("");
  const [group, setGroup] = React.useState<string | null>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setMetric("");
    setFilter("");
    setGroup("");
    setOpen(false);
  };

  const handleClose = () => {
    if (metric === "" || metric == null) {
      handleCancel();
      return;
    }
    onPostWidget({
      dashboard_id: dashboard.id ?? "",
      widget: {
        metric_name: metric,
        filter_tags: filter,
        group_by_tags: group,
      },
    });
    handleCancel();
  };

  useEffect(() => {
    if (open && metric !== null && metric !== "") {
      onGetTagsForMetric({ metric });
    }
  }, [open, metric]);

  return (
    <>
      <Card center height="300px" enabledHover onClick={handleClickOpen}>
        <Head small>New Widget</Head>
      </Card>
      <Dialog
        open={open}
        fullWidth
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Widget</DialogTitle>
        <DialogContent>
          <Autocomplete
            options={availableMetrics}
            id="name"
            value={metric}
            onChange={(event, newValue) => {
              const nullCheck = newValue == null ? "" : newValue;
              setMetric(nullCheck);
              setFilter("");
              setGroup("");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="metric name"
                required
                variant="standard"
              />
            )}
          />
          <Autocomplete
            options={widgetDlgData.tags ?? []}
            id="filter"
            value={filter}
            onChange={(event, newValue) => {
              const nullCheck = newValue == null ? "" : newValue;
              setFilter(nullCheck);
            }}
            renderInput={(params) => (
              <TextField {...params} label="filter" variant="standard" />
            )}
          />
          <Autocomplete
            options={widgetDlgData.tagKeys ?? []}
            id="group_by"
            value={group}
            onChange={(event, newValue) => {
              const nullCheck = newValue == null ? "" : newValue;
              setGroup(nullCheck);
            }}
            renderInput={(params) => (
              <TextField {...params} label="group by" variant="standard" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

interface NewWidgetComponentProps {
  dashboard: DashboardType;
  availableMetrics: string[];
  widgetDlgData: WidgetDlgData;
  onGetTagsForMetric: (params: GetTagsforMetricRequestParams) => void;
  onPostWidget: (params: PostWidgetRequestParams) => void;
}

const mapStateToProps = (state) => ({
  widgetDlgData: selectWidgetDlgData(state),
});
const mapDispatchToProps = {
  onGetTagsForMetric: getTagsForMetric,
  onPostWidget: postWidget,
};
export const NewWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWidgetComponent);
