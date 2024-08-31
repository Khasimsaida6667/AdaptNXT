import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './SalesVsOrdersChart.css';

const data = [
  { date: '6/30/2024', orders: 1.6, sales: 1.4 },
  { date: '7/6/2024', orders: 1.2, sales: 1.2 },
  { date: '7/13/2024', orders: 0.8, sales: 0.8 },
  { date: '7/21/2024', orders: 0.8, sales: 0.4 },
];

const SalesVsOrdersChart = () => {
  return (
    <div className="chart-card1 sales-vs-orders">
      <div className="chart-header">
        <h2>Sales vs Orders</h2>
        <span className="info-icon">ⓘ</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#ffa500" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sales" stroke="#66cccc" />
        </LineChart>
      </ResponsiveContainer>
      <div className="chart-details">
        <p>6/30/2024 - 7/6/2024</p>
        <p>• Orders - 4</p>
        <p>• Sales - 1404</p>
        <p>• Avg Order Value - 351.00</p>
      </div>
    </div>
  );
};

export default SalesVsOrdersChart;