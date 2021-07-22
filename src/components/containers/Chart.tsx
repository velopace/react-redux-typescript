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
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  Legend,
} from "recharts";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { Title } from "components/atoms";

const colorShades = ["#855CF8", "#96BF48", "#041f35", "#5dc5e7"];

const formatBar = (value: string) => `$${value}`;

const formatXAxis = (tick) => {
  const d = new Date(0);
  d.setUTCSeconds(tick);
  const dateString = d.toLocaleString("en-US-u-hc-h24", {
    month: "numeric",
    day: "numeric",
    hour: "numeric", // numeric, 2-digit
    minute: "numeric", // numeric, 2-digit
  });
  return dateString.replace(",", " ");
};

const formatTooltipLabel = (label) => formatXAxis(label);

// Starter code for custom tooltip
/* const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const formattedLabel = formatTooltipLabel(label);
    console.log(payload);
    return (
      <div className="custom-tooltip">
        <p className="label">{`${formattedLabel} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
}; */

export function Chart({
  chartData,
  lines,
  showAlert,
  showEvents,
  eventData,
  highlightData,
}: DashboardChartProps) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#855CF8",
      },
      secondary: {
        main: "#5dc5e7",
      },
    },
  });

  const test = () => {
    console.log("in here");
  };

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            width={500}
            height={200}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
            syncId="id"
          >
            <XAxis
              domain={["dataMin", "dataMax"]}
              type="number"
              dataKey="time"
              interval="preserveEnd"
              tick={{ fontSize: 12 }}
              tickFormatter={formatXAxis}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickCount={6}
              type="number"
            />
            <Tooltip labelFormatter={formatTooltipLabel} />
            <Legend
              iconType="plainline"
              iconSize={10}
              wrapperStyle={{ fontSize: "12px" }}
            />
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
            {lines.map((id, index) => {
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
                      onClick={test}
                      cursor="pointer"
                    />
                  );
                return (
                  <ReferenceLine
                    x={id.timestamp}
                    key={id.id}
                    stroke="#4f6272"
                    strokeWidth={2}
                    onClick={test}
                    cursor="pointer"
                  />
                );
              })}
          </LineChart>
        </ResponsiveContainer>
      </MuiThemeProvider>
    </>
  );
}

export function TopList({ chartData, title }: DashboardTopListProps) {
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

export interface DashboardChartProps {
  chartData: any[];
  showAlert?: boolean;
  lines: string[];
  highlightData?: string;
  showEvents?: boolean;
  eventData?: {
    timestamp: string;
    id: string;
  }[];
}

export interface DashboardTopListProps {
  title: string;
  chartData: any[];
}
