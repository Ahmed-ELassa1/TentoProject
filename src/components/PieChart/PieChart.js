import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const data = {
    series: [44, 55, 41, 17, 15],
    chartOptions: {
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
    },
    options: {
      fill: {
        colors: ['#739ccb', '#06c', '#1c75bc']
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false
        }
      },
      grid: {
        show: true,
        borderColor: "#90A4AE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      chart: {
        type: "donut",
      },

      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="donut"
      />
    </div>
  );
};

export default PieChart;
