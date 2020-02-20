import React from "react";
import moment from "moment";
import round from "../round";
import {
  LineChart,
  AreaChart,
  Line,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <AreaChart width={1100} height={300} data={formattedData}>
      {/* <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      <XAxis dataKey="date" interval={2} />
      <YAxis dataKey="value" />
      <Tooltip contentStyle={styles.tooltipWrapper}
        labelStyle={styles.tooltip}
        formatter={value => `$${round(value, 2)}`} />

      <Area
        type="natural"
        dataKey="value"
        stroke="none"
        fillOpacity={0.6}
        fill="#00008B"

        activeDot={{ strokeWidth: 0 }}
      />


    </AreaChart>
  );
};

const styles = {
  container: {
    maxWidth: 700,
    margin: "0 auto",
  },
  tooltipWrapper: {
    background: "#444444",
    border: "none"
  },
  tooltip: {
    color: "#ebebeb"
  }
};

export default Chart;
