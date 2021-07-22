/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import produce from "immer";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  DashboardType,
  DashboardWidgetType,
  GetTagsforMetricRequestParams,
  PostWidgetRequestParams,
  WidgetDlgData,
} from "types";
import { Button } from "components/atoms";
import { getTagsForMetric, putWidget } from "store/app/actions";
import { selectWidgetDlgData } from "store/app/selectors";

export function EditWidgetComponent({
  availableMetrics,
  dashboard,
  widget,
  widgetDlgData,
  onGetTagsForMetric,
  onPutWidget,
}: EditWidgetComponentProps) {
  const [open, setOpen] = React.useState(false);
  const [metric, setMetric] = React.useState(widget.metric_name);
  const [filter, setFilter] = React.useState(widget.filter_tags);
  const [group, setGroup] = React.useState(widget.group_by_tags);
  const [tags, setTags] = React.useState<string[]>([]);
  const [tagKeys, setTagKeys] = React.useState<string[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    if (metric === "" || metric == null || !dashboard.id) {
      setOpen(false);
      return;
    }
    const updatedWidget = produce(widget, (draft) => {
      draft.metric_name = metric;
      draft.filter_tags = filter;
      draft.group_by_tags = group;
    });
    onPutWidget({
      dashboard_id: dashboard.id,
      widget: updatedWidget,
    });
    setOpen(false);
  };

  useEffect(() => {
    if (open && metric !== null && metric !== "") {
      onGetTagsForMetric({ metric });
    }
  }, [open, metric]);

  useEffect(() => {
    if (widgetDlgData != null) {
      setTags(widgetDlgData.tags);
      setTagKeys(widgetDlgData.tagKeys);
    }
  }, [widgetDlgData]);

  return (
    <>
      <Button onClick={handleClickOpen} tiny>
        Edit
      </Button>
      <Dialog
        open={open}
        fullWidth
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Widget</DialogTitle>
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
            options={tags}
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
            options={tagKeys}
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
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleClose} primary>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export interface EditWidgetComponentProps {
  dashboard: DashboardType;
  availableMetrics: any[];
  widget: DashboardWidgetType;
  widgetDlgData: WidgetDlgData;
  onGetTagsForMetric: (params: GetTagsforMetricRequestParams) => void;
  onPutWidget: (params: PostWidgetRequestParams) => void;
}

const mapStateToProps = (state) => ({
  widgetDlgData: selectWidgetDlgData(state),
});
const mapDispatchToProps = {
  onGetTagsForMetric: getTagsForMetric,
  onPutWidget: putWidget,
};
export const EditWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWidgetComponent);
