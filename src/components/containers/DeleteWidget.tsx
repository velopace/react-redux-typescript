import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  DashboardType,
  DashboardWidgetType,
  DeleteWidgetRequestParams,
} from "types";
import { Button } from "components/atoms";
import { deleteWidget } from "store/app/actions";

export function DeleteWidgetComponent({
  dashboard,
  widget,
  onDeleteWidget,
}: DeleteWidgetComponentProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    onDeleteWidget({ id: widget.id, dashboard_id: dashboard.id });
    setOpen(false);
  };

  return (
    <>
      <Button tiny destructive onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Widget</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button destructive onClick={handleClose} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

interface DeleteWidgetComponentProps {
  dashboard: DashboardType;
  widget: DashboardWidgetType;
  onDeleteWidget: (params: DeleteWidgetRequestParams) => void;
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  onDeleteWidget: deleteWidget,
};
export const DeleteWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteWidgetComponent);
