import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import data from '../../data/ev-data.json';

const MakeBarChart = () => {
  const makeCount = data.reduce((acc, curr) => {
    acc[curr.Make] = (acc[curr.Make] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(makeCount)
    .map(([make, count]) => ({ make, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div>
      <h2>Top 10 EV Makes</h2>
      <BarChart width={600} height={300} data={chartData}>
        <XAxis dataKey="make" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default MakeBarChart;
