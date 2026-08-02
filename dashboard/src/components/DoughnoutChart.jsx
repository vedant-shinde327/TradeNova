import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "bottom",
    },

    title: {
      display: true,
      text: "Watchlist Distribution",
      font: {
        size: 18,
      },
    },
  },
};

export function DoughnutChart({ data }) {
  return <Doughnut data={data} options={options} />;
}
