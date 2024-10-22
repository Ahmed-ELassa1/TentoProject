import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {

  const data = {
    series: [
      {
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1330038000000, 33.41],
          [1330297200000, 33.27],
          [1330383600000, 33.27],
          [1330470000000, 32.89],
          [1335477600000, 33.58],
          [1337724000000, 32.18],
          [1337810400000, 31.54],
          [1356476400000, 37.55],
          [1356562800000, 37.3],
          [1356649200000, 36.9],
          [1356908400000, 37.68],
          [1361487600000, 38.55],
          [1361746800000, 38.11],
          [1361833200000, 38.59],
          [1361919600000, 39.6],
        ],
      },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
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
          show: false,
          showAlways: false,

          labels: {
            show: false,
          },
          lines: {
            show: false,
          },
          tooltip: {
            enabled: false,
            offsetX: 0,
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
      annotations: {
        yaxis: [
          {
            show: false,
            y: 30,
            borderColor: "#999",
            label: {
              show: false,
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396",
              },
            },
          },
        ],
        xaxis: [
          {
            show: false,
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "#999",
            yAxisIndex: 0,
            label: {
              show: false,
              text: "Rally",
              style: {
                color: "#fff",
                background: "#775DD0",
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        show: false,
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6,
      },
      tooltip: {
        show: false,
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },

    selection: "one_year",
  };
  return (
    <div>
      <div id="chart-timeline">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default AreaChart;
