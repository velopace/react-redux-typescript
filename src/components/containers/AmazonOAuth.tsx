import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import randomstring from "randomstring";

import { SellerCentralUrls } from "constants/selling-partner-api";
import { selectUser } from "store/auth/selectors";
import { PostAmazonOauthStateRequestParams, User } from "types";
import { Box, Button } from "@material-ui/core";
import { postAmazonOauthState } from "store/app/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    subHeader: {
      pointerEvents: "none",
    },
  })
);

const renderSellerCentrals = (classes) => {
  const sellerCentrals: any[] = [];

  Object.keys(SellerCentralUrls).forEach((region, index) => {
    sellerCentrals.push(
      <ListSubheader className={classes.subHeader} key={`${region}_${index}`}>
        {region}
      </ListSubheader>
    );
    SellerCentralUrls[region].forEach((marketplace, indexC) => {
      sellerCentrals.push(
        <MenuItem
          value={`${marketplace.url}_${marketplace.code}`}
          key={`${region}_${marketplace.code}_${indexC}`}
          data-code={marketplace.code}
        >
          {marketplace.country}
        </MenuItem>
      );
    });
  });

  return sellerCentrals;
};

const AmazonOAuthBase = ({
  user,
  onPostAmazonOauthState,
}: AmazonOAuthBaseProps) => {
  const classes = useStyles();
  const [sellerUrl, setSellerUrl] = useState("");
  const [oauthUrl, setOauthUrl] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [oauthState, setOauthState] = useState("");
  const organizations = user?.organizations;
  let orgId;
  if (organizations && organizations.length > 0) {
    orgId = organizations[0].id;
  }

  const updateSellerUrl = (event) => {
    const [url, code] = event.target.value.split("_");
    setSellerUrl(url);
    setCountryCode(code);
  };

  const handleClickAmazonLogin = () => {
    onPostAmazonOauthState({
      state: oauthState,
      org_id: orgId,
      integration_id: 0,
    });
  };

  useEffect(() => {
    setOauthState(randomstring.generate());
    setOauthUrl(
      `${sellerUrl}/apps/authorize/consent?application_id=${process.env.REACT_APP_AMAZON_SELLER_APP_ID}&version=${process.env.REACT_APP_AMAZON_SELLER_APP_VERSION}&state=${oauthState}_${countryCode}_${orgId}`
    );
  }, [sellerUrl, orgId]);

  return (
    <Box display="flex" alignItems="center">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Seller Centrals</InputLabel>
        <Select defaultValue="" id="grouped-select" onChange={updateSellerUrl}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {renderSellerCentrals(classes)}
        </Select>
      </FormControl>
      <Box mt={2}>
        <Button
          target="_blank"
          href={oauthUrl}
          variant="contained"
          onClick={handleClickAmazonLogin}
        >
          LOGIN WITH AMAZON
        </Button>
      </Box>
    </Box>
  );
};

interface AmazonOAuthBaseProps {
  user: User | undefined;
  onPostAmazonOauthState: (params: PostAmazonOauthStateRequestParams) => void;
}

const mapStateToProps = (state) => ({
  user: selectUser(state),
});
const mapDispatchToProps = {
  onPostAmazonOauthState: postAmazonOauthState,
};

export const AmazonOAuth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AmazonOAuthBase);
