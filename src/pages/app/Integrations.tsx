import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { AmazonOAuth } from "components";

export function Integrations() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = () => {
    console.log("click");
  };
  const appId = process.env.REACT_APP_FACEBOOK_APP_ID;
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <>
      <FacebookLogin
        appId={appId}
        autoLoad={false}
        fields="name,email"
        scope="ads_read,read_insights,instagram_manage_insights"
        onClick={componentClicked}
        callback={responseFacebook}
      />
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        scope="https://www.googleapis.com/auth/adwords"
        accessType="offline"
        responseType="code"
      />
      <AmazonOAuth />
    </>
  );
}
