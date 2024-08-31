import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './SalesPieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart = () => {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#ff9999', '#66cccc'],
        hoverBackgroundColor: ['#ff9999', '#66cccc'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        formatter: (value) => {
          return `${value}%`;
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
  };

  return (
    <div className="chart-card sales-pie-chart">
      <div className="chart-header">
        <h2>Portion of Sales</h2>
        <span className="info-icon">ⓘ</span>
      </div>
      <div className="pie-chart-container">
        <Pie data={data}   options={options}/>
        <div className="pie-chart-center">
          <span className="total-label">Total</span>
          <span className="total-value">2659</span>
        </div>
      </div>
      
      <div className="pie-chart-percentages">
        {data.datasets[0].data.map((value, index) => (
          <span key={`percentage-${index}`} className="percentage" style={{ color: data.datasets[0].backgroundColor[index] }}>
            {value}%
          </span>
        ))}
      </div>
    </div>
  );
};

export default SalesPieChart;