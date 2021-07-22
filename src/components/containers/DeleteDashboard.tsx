import React from "react";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DashboardType, DeleteDashboardRequestParams } from "types";

import { Button } from "components/atoms";
import { deleteDashboard } from "store/app/actions";

export function DeleteDashboardComponent({
  dashboard,
  onDeleteDashboard,
}: DeleteDashboardComponentProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    onDeleteDashboard({ id: dashboard.id });
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen} tiny destructive>
        Delete Dashboard
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Dashboard</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button destructive onClick={handleClose}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

interface DeleteDashboardComponentProps {
  dashboard: DashboardType;
  onDeleteDashboard: (params: DeleteDashboardRequestParams) => void;
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  onDeleteDashboard: deleteDashboard,
};
export const DeleteDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteDashboardComponent);
