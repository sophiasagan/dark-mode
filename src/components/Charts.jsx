import React from "react";
import Chart from "./Chart";
import round from "../round";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <div className="chart__info">
            <h2 className="coin__price">Current Price: ${coin.current_price}</h2>
            <h2 className="coin__high">24 Hour High: ${coin.high_24h}</h2>
            <h2 className="coin__low">24 Hour Low: ${coin.low_24h}</h2>
            <h2 className="coin__change">24 Hour Change: {`$${round(coin.price_change_24h, 2)}`}</h2>
            <h2 className="coin__percentage">Price Change Percentage for Last 30 Days: {`${round(coin.price_change_percentage_30d_in_currency, 2)}`}%</h2>
            {/* <h2 className="coin__roi">ROI: {coin.roi.percentage}</h2> */}

          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
