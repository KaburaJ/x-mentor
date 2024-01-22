import React, { useState, useRef, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/chart-react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LinePlot = () => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        tweetIndex: [1, 2, 3, 4, 5],
        sentimentScores: [0.5, -0.2, 0.8, -0.1, 0.9],
        volume: [100, 150, 120, 200, 180],
      };

      const formattedData = {
        labels: data.tweetIndex,
        datasets: [
          {
            label: 'Sentiment Score',
            data: data.sentimentScores,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.4)',
            yAxisID: 'y-left',
          },
          {
            label: 'Volume',
            data: data.volume,
            borderColor: 'rgba(255,99,132,1)',
            backgroundColor: 'rgba(255,99,132,0.4)',
            yAxisID: 'y-right',
          },
        ],
      };

      setChartData(formattedData);
    };

    fetchData();
  }, []);

  const options = {
    theme: 'light2',
    animationEnabled: true,
    title: {
      text: 'Units Sold VS Profit',
    },
    subtitles: [
      {
        text: 'Click Legend to Hide or Unhide Data Series',
      },
    ],
    axisX: {
      title: 'States',
    },
    axisY: {
      title: 'Units Sold',
      titleFontColor: '#6D78AD',
      lineColor: '#6D78AD',
      labelFontColor: '#6D78AD',
      tickColor: '#6D78AD',
    },
    axisY2: {
      title: 'Profit in USD',
      titleFontColor: '#51CDA0',
      lineColor: '#51CDA0',
      labelFontColor: '#51CDA0',
      tickColor: '#51CDA0',
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: 'spline',
        name: 'Sentiment Score',
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '#,##0 Units',
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 120 },
          { x: new Date(2017, 1, 1), y: 135 },
          { x: new Date(2017, 2, 1), y: 144 },
          { x: new Date(2017, 3, 1), y: 103 },
          { x: new Date(2017, 4, 1), y: 93 },
          { x: new Date(2017, 5, 1), y: 129 },
          { x: new Date(2017, 6, 1), y: 143 },
          { x: new Date(2017, 7, 1), y: 156 },
          { x: new Date(2017, 8, 1), y: 122 },
          { x: new Date(2017, 9, 1), y: 106 },
          { x: new Date(2017, 10, 1), y: 137 },
          { x: new Date(2017, 11, 1), y: 142 },
        ],
      },
      {
        type: 'spline',
        name: 'Volume',
        axisYType: 'secondary',
        showInLegend: true,
        xValueFormatString: 'MMM YYYY',
        yValueFormatString: '$#,##0.#',
        dataPoints: [
          { x: new Date(2017, 0, 1), y: 19034.5 },
          { x: new Date(2017, 1, 1), y: 20015 },
          { x: new Date(2017, 2, 1), y: 27342 },
          { x: new Date(2017, 3, 1), y: 20088 },
          { x: new Date(2017, 4, 1), y: 20234 },
          { x: new Date(2017, 5, 1), y: 29034 },
          { x: new Date(2017, 6, 1), y: 30487 },
          { x: new Date(2017, 7, 1), y: 32523 },
          { x: new Date(2017, 8, 1), y: 20234 },
          { x: new Date(2017, 9, 1), y: 27234 },
          { x: new Date(2017, 10, 1), y: 33548 },
          { x: new Date(2017, 11, 1), y: 32534 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} onRef={chartRef} />
    </div>
  );
};

export default LinePlot;
