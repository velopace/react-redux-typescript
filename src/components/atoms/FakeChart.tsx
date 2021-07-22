import React from "react";
import {
  BarChart,
  Bar,
  ReferenceLine,
  ReferenceArea,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

import {
  createMuiTheme,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Grid from "@material-ui/core/Grid";

import { Title } from "./Title";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  menuItemText: {
    fontSize: "1em",
  },
}));

const colorShades = ["#FF9900", "#96BF48", "#041f35", "#5dc5e7"];

const formatBar = (value) => `$${value}`;

export function FakeChart({
  title,
  parentCallback,
  lines,
  chartData,
  showAlert,
  showEvents,
  eventData,
  highlightData,
}: FakeChartProps) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#041f35",
      },
      secondary: {
        main: "#5dc5e7",
      },
    },
  });

  const handlePivot = (event) => {
    console.log(event);
    if (parentCallback) {
      parentCallback(event.target);
    }
  };

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Title>{title}</Title>
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.formControl} size="small">
              <Select
                className={classes.menuItemText}
                defaultValue={0}
                onChange={handlePivot}
              >
                <MenuItem className={classes.menuItemText} value={0}>
                  Quick pivot by:
                </MenuItem>
                <MenuItem className={classes.menuItemText} value="marketplace">
                  Marketplace
                </MenuItem>
                <MenuItem className={classes.menuItemText} value="region">
                  Region
                </MenuItem>
                <MenuItem
                  className={classes.menuItemText}
                  value="product group"
                >
                  Product Group
                </MenuItem>
                <MenuItem className={classes.menuItemText} value="brand">
                  Brand
                </MenuItem>
                <MenuItem className={classes.menuItemText} value="SKU">
                  SKU
                </MenuItem>
                <MenuItem className={classes.menuItemText} value="variant">
                  Variant
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            width={500}
            height={200}
            margin={{
              top: 15,
              right: 5,
              left: 5,
              bottom: 5,
            }}
            syncId="id"
          >
            <XAxis type="category" dataKey="time" minTickGap={3} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend iconType="plainline" />
            {showAlert && (
              <ReferenceArea
                x1="23:20"
                x2="24:00"
                y1={0}
                y2={320}
                stroke="red"
                strokeOpacity={0.3}
              />
            )}
            <CartesianGrid vertical={false} stroke="#d3d3d3" />
            {lines &&
              lines.map((id, index) => {
                const color = id.includes("past")
                  ? colorShades[index % (lines.length / 2)]
                  : colorShades[index];
                const stroke = id.includes("past") ? "5 5" : "";
                return (
                  <Line
                    type="monotone"
                    key={id}
                    dataKey={id}
                    dot={false}
                    strokeWidth={2}
                    stroke={color}
                    strokeDasharray={stroke}
                  />
                );
              })}

            {showEvents &&
              eventData &&
              eventData.map((id) => {
                if (highlightData === id.id)
                  return (
                    <ReferenceLine
                      x={id.timestamp}
                      key={id.id}
                      stroke="#4f6272"
                      strokeWidth={5}
                    />
                  );
                return (
                  <ReferenceLine
                    x={id.timestamp}
                    key={id.id}
                    stroke="#4f6272"
                    strokeWidth={2}
                  />
                );
              })}
          </LineChart>
        </ResponsiveContainer>
      </MuiThemeProvider>
    </>
  );
}

export function FakeTopList({ title, chartData }: FakeTopListProps) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#041f35",
      },
      secondary: {
        main: "#5dc5e7",
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Title>{title}</Title>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            layout="vertical"
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 5,
              left: 60,
              bottom: 5,
            }}
          >
            <Tooltip />
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" />
            <Bar dataKey="value" fill="#5dc5e7" stackId="a">
              <LabelList
                // @ts-ignore
                formatter={formatBar}
                dataKey="value"
                position="insideLeft"
              />
            </Bar>
            {typeof chartData[0].value_past_month !== "undefined" && (
              <Bar dataKey="value_past_month" fill="#041f35" stackId="b">
                <LabelList
                  // @ts-ignore
                  formatter={formatBar}
                  dataKey="value_past_month"
                  position="insideLeft"
                  style={{ fill: "white" }}
                />
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </MuiThemeProvider>
    </>
  );
}

export interface FakeChartProps {
  title: string;
  parentCallback?: (value: any) => void;
  lines?: string[];
  chartData?: any[];
  eventData?: any[];
  showAlert?: boolean;
  showEvents?: boolean;
  highlightData?: string;
}

export interface FakeTopListProps {
  title: string;
  chartData: any[];
  lines?: string[];
}
