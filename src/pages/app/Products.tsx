import React, { useEffect } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ProductDataType } from "types";
import { getProducts } from "store/app/actions";
import { selectLoading, selectProducts } from "store/app/selectors";

const ProductsComponent = ({
  products,
  loading,
  onGetProducts,
}: ProductsComponentProps) => {
  const [openDialog, setOpenDialog] = React.useState("");
  const [addedTags, setAddedTags] = React.useState("");

  useEffect(() => {
    onGetProducts();
  }, []);

  const handleClickOpen = (val) => {
    setOpenDialog(val);
  };

  const handleCancel = () => {
    setOpenDialog("");
  };

  const updateTags = (event) => {
    setAddedTags(event.target.value);
  };

  const handleClose = (product) => {
    (async () => {
      const tagArray = addedTags.split(",");

      tagArray.forEach((value) => {
        const splitTag = value.split(":");
        product.custom_tags[splitTag[0]] = splitTag[1]; // eslint-disable-line
      });

      const url = `https://ox0ytbx0bf.execute-api.us-east-1.amazonaws.com/dev/products/${product.variant_id}`;
      await fetch(url, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "content-type": "application/json",
        },
      });
      // const addTagsResponseJson = await addTagsResponse.json();
    })();
    setOpenDialog("");
  };

  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Products
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sku</TableCell>
              <TableCell>Variant Name</TableCell>
              <TableCell>Shopify Price</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <CircularProgress />
            ) : (
              products.map((p) => (
                <TableRow>
                  <TableCell>{p.sku}</TableCell>
                  <TableCell>{p.variant_name}</TableCell>
                  <TableCell>${p.shopify_price}</TableCell>
                  <TableCell>
                    {p.tags &&
                      Object.keys(p.tags).map((key) => (
                        <div>
                          {key}:{p.tags[key]}
                        </div>
                      ))}
                    {p.custom_tags &&
                      Object.keys(p.custom_tags).map((key) => (
                        <b>
                          {key}:{p.custom_tags[key]}
                        </b>
                      ))}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label="Add Custom Tags"
                      onClick={() => handleClickOpen(p.id)}
                    />
                    <Dialog
                      open={p.id === openDialog}
                      onClose={handleCancel}
                      aria-labelledby={p.id}
                    >
                      <DialogTitle id={p.id}>Add Tags</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Add Tags for {p.sku}
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="name"
                          type="standard"
                          fullWidth
                          onChange={updateTags}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={() => handleClose(p)} color="primary">
                          Add
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

interface ProductsComponentProps {
  products: ProductDataType[];
  loading: boolean;
  onGetProducts: () => void;
}
const mapStateToProps = (state) => ({
  products: selectProducts(state),
  loading: selectLoading(state),
});
const mapDispatchToProps = {
  onGetProducts: getProducts,
};
export const Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsComponent);
