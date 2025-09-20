import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import data from '../../data/ev-data.json';

const YearTrendLineChart = () => {
  const yearCount = data.reduce((acc, curr) => {
    const year = curr['Model Year'];
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(yearCount)
    .map(([year, count]) => ({ year: parseInt(year), count }))
    .sort((a, b) => a.year - b.year);

  return (
    <div>
      <h2>EV Registrations Over Time</h2>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default YearTrendLineChart;
