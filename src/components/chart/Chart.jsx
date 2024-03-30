import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from "../../firebase";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Chart = ({ aspect, title }) => {
  const [data, setData] = useState([]);
   
  useEffect(() => {
    const q = query(collection(db, "transactions"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const groupedData = new Map();

      querySnapshot.forEach((doc) => {
        const date = doc.data().timestamp.toDate();
        const monthYear = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

        // Initialize or update the total for the month
        groupedData.set(monthYear, (groupedData.get(monthYear) || 0) + doc.data().purchaseQuantity);
      });

      // Create an array from the Map, sorted by month and year
      const chartData = Array.from(groupedData)
        .map(([name, Total]) => ({ name, Total }))
        .sort((a, b) => new Date(a.name.split(' ')[1], monthNames.indexOf(a.name.split(' ')[0])) - new Date(b.name.split(' ')[1], monthNames.indexOf(b.name.split(' ')[0])));
      
      setData(chartData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730} 
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
