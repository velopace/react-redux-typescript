import React from "react";

import Chip from "@material-ui/core/Chip";
import { DataGrid, GridColumns } from "@material-ui/data-grid";

const renderSwitch = (param) => {
  switch (param) {
    case "amazon":
      return (
        <img
          alt="Amazon"
          style={{ width: "50%" }}
          src={`${process.env.PUBLIC_URL}/amazon-logo.png`}
        />
      );
    case "shopify":
      return (
        <img
          alt="Shopify"
          style={{ width: "50%" }}
          src={`${process.env.PUBLIC_URL}/shopify-logo.png`}
        />
      );
    case "facebook":
      return (
        <img
          alt="Facebook"
          style={{ width: "50%" }}
          src={`${process.env.PUBLIC_URL}/facebook-logo.png`}
        />
      );
    case "google":
      return (
        <img
          alt="Google"
          style={{ width: "50%" }}
          src={`${process.env.PUBLIC_URL}/google-logo.png`}
        />
      );
    default:
      return (
        <img
          alt="Snowball"
          style={{ width: "50%" }}
          src={`${process.env.PUBLIC_URL}/Snowball_BrandLogoMark.png`}
        />
      );
  }
};

const formatTimestamp = (tick) => {
  const d = new Date(0);
  d.setUTCSeconds(tick);
  const dateString = d.toLocaleString("en-US-u-hc-h24", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric", // numeric, 2-digit
    minute: "numeric", // numeric, 2-digit
    second: "numeric",
  });
  return dateString.replace(",", " ");
};

const renderTags = (param: any) => {
  const items = Object.keys(param).map((keyName, _keyIndex) => (
    <Chip
      size="small"
      key={`${keyName}:${param[keyName]}`}
      label={`${keyName}:${param[keyName]}`}
    />
  ));

  return <div>{items}</div>;
};

const columns: GridColumns = [
  {
    field: "source",
    width: 100,
    headerName: "Source",
    renderCell: ({ value }) => <>{renderSwitch(value)}</>,
  },
  {
    field: "timestamp",
    width: 230,
    headerName: "Timestamp",
    renderCell: ({ value }) => <>{formatTimestamp(value)}</>,
  },
  { field: "message", width: 410, headerName: "Message" },
  {
    field: "tags",
    headerName: "Tags",
    width: 500,
    renderCell: ({ value }) => <>{renderTags(value)}</>,
  },
];

const miniColumns = [
  {
    field: "source",
    width: 100,
    headerName: "Source",
    renderCell: (params) => renderSwitch(params.value),
  },
  { field: "timeStamp", width: 130, headerName: "TimeStamp" },
  { field: "name", width: 210, headerName: "Name" },
];

export function EventTable({
  eventData,
  parentCallback,
  isLoading,
}: EventTableProps) {
  function handleMouseOver(event) {
    if (parentCallback) {
      parentCallback(event.row);
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        loading={isLoading}
        rows={eventData}
        autoHeight
        columns={columns}
        hideFooter
        onRowOver={(event) => handleMouseOver(event)}
      />
    </div>
  );
}

export function MiniTable({ eventData }: MiniTableProps) {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rowHeight={40}
        rows={eventData}
        autoHeight
        columns={miniColumns}
        hideFooter
      />
    </div>
  );
}

export interface EventTableProps {
  eventData: any[];
  isLoading?: boolean;
  parentCallback?: (row: any) => void;
}

export interface MiniTableProps {
  eventData: any[];
}
