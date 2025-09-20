import React from 'react';
import EVTypePieChart from './Charts/EVTypePieChart';
import MakeBarChart from './Charts/MakeBarChart';
import YearTrendLineChart from './Charts/YearTrendLineChart';

const Dashboard = () => {
  return (
    <div>
      <h1>EV Dashboard - Washington</h1>
      <EVTypePieChart />
      <MakeBarChart />
      <YearTrendLineChart />
    </div>
  );
};

export default Dashboard;
