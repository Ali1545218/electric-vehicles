import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import data from '../../data/ev-data.json';

const COLORS = ['#0088FE', '#00C49F'];

const EVTypePieChart = () => {
  const chartData = [
    { name: 'BEV', value: data.filter(d => d['Electric Vehicle Type'].includes('Battery')).length },
    { name: 'PHEV', value: data.filter(d => d['Electric Vehicle Type'].includes('Plug-in')).length }
  ];

  return (
    <div>
      <h2>Electric Vehicle Types</h2>
      <PieChart width={400} height={300}>
        <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default EVTypePieChart;
