import './App.css';
import React, { useState } from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

const evGrowthData = [
  { year: 2017, evs: 1200 },
  { year: 2018, evs: 3200 },
  { year: 2019, evs: 5400 },
  { year: 2020, evs: 7800 },
  { year: 2021, evs: 10200 },
  { year: 2022, evs: 12345 },
];

const modelPopularityData = [
  { model: "Tesla Model 3", count: 6000 },
  { model: "Nissan Leaf", count: 3000 },
  { model: "Chevy Bolt", count: 2000 },
  { model: "Other", count: 1345 },
];

const regionDistributionData = [
  { name: "California", value: 5000 },
  { name: "New York", value: 3000 },
  { name: "Texas", value: 2000 },
  { name: "Florida", value: 1000 },
  { name: "Other", value: 1345 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

function App() {
  const [yearFilter, setYearFilter] = useState("All");

  const totalEVs = evGrowthData[evGrowthData.length - 1].evs;
  const annualGrowth = Math.round(((evGrowthData[evGrowthData.length - 1].evs - evGrowthData[evGrowthData.length - 2].evs) / evGrowthData[evGrowthData.length - 2].evs) * 100);

  return (
    <div style={{ maxWidth: 900, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Electric Vehicle Population Dashboard</h1>

      {/* Summary Cards */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 30 }}>
        <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8, width: 200, textAlign: "center" }}>
          <h3>Total EVs</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>{totalEVs.toLocaleString()}</p>
        </div>
        <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8, width: 200, textAlign: "center" }}>
          <h3>Annual Growth</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>{annualGrowth}%</p>
        </div>
        <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8, width: 200, textAlign: "center" }}>
          <h3>Top Model</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>Tesla Model 3</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 30, textAlign: "center" }}>
        <label style={{ marginRight: 10 }}>Year:</label>
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          style={{ padding: 5, fontSize: 16 }}
        >
          <option>All</option>
          {evGrowthData.map(({ year }) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Charts */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 40 }}>
        {/* Line Chart */}
        <div>
          <h3>EV Growth Over Years</h3>
          <LineChart
            width={350}
            height={250}
            data={yearFilter === "All" ? evGrowthData : evGrowthData.filter(d => d.year === +yearFilter)}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="evs" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div>
          <h3>Top EV Models</h3>
          <BarChart
            width={350}
            height={250}
            data={modelPopularityData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      {/* Pie Chart */}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <h3>EV Distribution by Region</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={regionDistributionData}
            cx={200}
            cy={150}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {regionDistributionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default App;
