import { axiosProduct } from "../App";

export const getProducts = () =>
  axiosProduct.get(`${process.env.REACT_APP_PRODUCT_URI}/products`);
