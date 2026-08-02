import { useState } from "react";
import { watchlist } from "../data/data";
import WatchlistActions from "./WatchListActions";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: watchlist.map((stock) => stock.price),

        backgroundColor: [
          "#387ed1",
          "#00b386",
          "#f5a623",
          "#ff6384",
          "#36a2eb",
          "#9966ff",
          "#ff9f40",
          "#4bc0c0",
          "#c9cbcf",
          "#8bc34a",
          "#e91e63",
          "#9c27b0",
          "#ff5722",
        ],

        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty..."
          className="search"
        />

        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <div
        style={{
          width: "100%",
          height: "500px",
          maxWidth: "500px",
          margin: "30px auto",
        }}
      >
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchlistActions uid={stock.name} />}
    </li>
  );
};
