import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid, GridColumns } from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TextField } from "@material-ui/core";
import { getDashboards, postDashboard } from "store/app/actions";

import { PostDashboardRequestParams } from "types";
import { selectDashboards } from "store/app/selectors";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const renderTimestamp = (params) => {
  const d = new Date(params.value);
  return d.toLocaleString();
};

const renderLink = (params) => (
  <Link to={`/dashboards/${params.id}/${params.value}`}>{params.value}</Link>
);

const renderUser = (params) => {
  const { firstName, lastName } = params.value;
  return `${firstName} ${lastName}`;
};

const columns: GridColumns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => renderLink(params),
  },
  {
    field: "user",
    width: 200,
    headerName: "Created By",
    renderCell: (params) => <>{renderUser(params)}</>,
  },
  {
    field: "createdAt",
    width: 300,
    headerName: "Created",
    renderCell: (params) => <>{renderTimestamp(params)}</>,
  },
  {
    field: "updatedAt",
    width: 300,
    headerName: "Last Updated",
    renderCell: (params) => <>{renderTimestamp(params)}</>,
  },
];

const DashboardTable = ({ rows }: DashboardTableProps) => (
  <DataGrid rows={rows} autoHeight columns={columns} hideFooter />
);

interface FormDialogPropsType {
  onPostDashboard: (PostDashboardRequestParams) => void;
}
export function FormDialog({ onPostDashboard }: FormDialogPropsType) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");

  const updateInput = (event) => {
    setInput(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    if (input === "") return;
    const params: PostDashboardRequestParams = {
      name: input,
      widgets: [],
    };
    onPostDashboard(params);
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        New Dashboard
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Dashboard</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name for your new Dashboard
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="standard"
            fullWidth
            onChange={updateInput}
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

interface DashboardsComponentProps {
  dashboards: any[];
  onGetDashboards: () => void;
  onPostDashboard: (PostDashboardRequestParams) => void;
}
const DashboardsComponent = ({
  dashboards,
  onGetDashboards,
  onPostDashboard,
}: DashboardsComponentProps) => {
  const classes = useStyles();

  useEffect(() => {
    onGetDashboards();
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography variant="h5">Dashboard List</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormDialog onPostDashboard={onPostDashboard} />
          </Grid>
        </Grid>
      </Container>
      {dashboards.length === 0 ? (
        <CircularProgress />
      ) : (
        <DashboardTable rows={dashboards} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  dashboards: selectDashboards(state),
});

const mapDispatchToProps = {
  onGetDashboards: getDashboards,
  onPostDashboard: postDashboard,
};

export const Dashboards = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardsComponent);

export interface DashboardTableProps {
  rows: any[];
}
