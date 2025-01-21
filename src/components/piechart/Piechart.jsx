import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts';
import './pieChart.css';

const data = [
  { name: 'CAR', value: 120 },
  { name: 'BIKE AND SCOOTER', value: 400 },
  { name: 'TRUCK', value: 120 },
  { name: 'AUTO', value: 300 },
  { name: 'TRACTOR', value: 60 },
];

const COLORS = ['#c272be','#c74a58', '#FFBB28', '#c7c54a' , '#4ac7aa'];

const PieChart = () => {
  return (
    <div className="pie-chart-container">
      <h4 className='container-title'>India &gt; Statewise App Registered Users Count</h4>
      <div className="pie-chart">
        <RechartsPieChart width={400} height={400}>
          <Legend />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </RechartsPieChart>
      </div>
    </div>
  );
};

export default PieChart;
