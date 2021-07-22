declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AUTH0_DOMAIN: string;
      REACT_APP_AUTH0_CLIENT_ID: string;
      REACT_APP_AUTH0_REDIRECT_URI: string;
      REACT_APP_API_ENDPOINT: string;
      REACT_APP_API_AUTH0_AUDIENCE_URI: string;
      REACT_APP_EVENTS_URI: string;
      REACT_APP_PRODUCT_URI: string;
      REACT_APP_PRODUCT_AUTH0_AUDIENCE_URI: string;
      NODE_ENV: "development" | "production";
      REACT_APP_FACEBOOK_APP_ID: string;
      REACT_APP_GOOGLE_CLIENT_ID: string;
      REACT_APP_AMAZON_SERVICE_URI: string;
      REACT_APP_AMAZON_SELLER_APP_ID: string;
      REACT_APP_AMAZON_SELLER_APP_VERSION: string;
    }
  }
}

export {};
