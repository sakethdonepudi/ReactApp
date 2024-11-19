import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = () => {
  // Define the chart configuration
  const chartOptions = {
    chart: {
      type: "line", // You can change this to "bar", "column", etc.
    },
    title: {
      text: "My Highcharts Example",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"], // X-axis labels
    },
    yAxis: {
      title: {
        text: "Values", // Y-axis title
      },
    },
    series: [
      {
        name: "Data 1",
        data: [1, 3, 2, 4], // Example data for the first series
      },
      {
        name: "Data 2",
        data: [5, 3, 4, 2], // Example data for the second series
      },
    ],
  };

  return (
    <div>
      {/* HighchartsReact renders the chart */}
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
