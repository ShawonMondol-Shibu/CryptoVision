// components/CoinChart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CoinChart({ prices }: { prices: [number, number][] }) {
  // API response: [[timestamp, price], ...]
  const data = prices.map(([time, price]) => ({
    date: new Date(time).toLocaleDateString(),
    price,
  }));

  return (
    <div className="bg-white shadow p-6 rounded-lg mt-8">
      <h3 className="text-lg font-semibold mb-4">📈 Price (Last 7 Days)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#16a34a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
