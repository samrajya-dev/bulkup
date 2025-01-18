import React from "react";
import { Line } from "react-chartjs-2";

function StreakChart() {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Streak Progress",
        data: [1, 2, 3, 4, 5],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div>
      <h2>Streak Progress</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default StreakChart;
