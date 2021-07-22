import axios from "axios";
import { Auth0Client } from "auth0-spa-js";

const auth0 = new Auth0Client({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
});

export const axiosProduct = axios.create();

const opts = {
  audience: process.env.REACT_APP_PRODUCT_AUTH0_AUDIENCE_URI,
  headers: { "content-type": "application/json" },
  method: "GET",
};

const getTokenAndTryAgain = async () => {
  await auth0.getAccessTokenWithPopup(opts);
};

axiosProduct.interceptors.request.use(
  async (config) => {
    const audience = process.env.REACT_APP_PRODUCT_AUTH0_AUDIENCE_URI;
    const accessToken = await auth0.getTokenSilently({ audience });
    const configWithAuthorization = config;
    configWithAuthorization.headers.Authorization = `Bearer ${accessToken}`;
    return configWithAuthorization;
  },
  (error) => {
    if (error.error === "login_required") {
      auth0.loginWithRedirect(opts);
    } else {
      Promise.reject(error);
    }
  }
);

axiosProduct.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.error === "login_required") {
      auth0.loginWithRedirect(opts);
    } else if (error.error === "consent_required") {
      getTokenAndTryAgain();
    } else {
      return Promise.reject(error);
    }
  }
);
