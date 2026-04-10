// src/components/ActivityChart.jsx
import ActivityTooltip from "./ActivityTooltip";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { USER_ACTIVITY } from "../data/activity";

function ActivityChart() {
  const data = USER_ACTIVITY.sessions.map((session, index) => ({
    ...session,
    day: index + 1, // affichage 1 → 7 au lieu de la date
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Activité quotidienne</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="day" />

          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            yAxisId="cal"
            dataKey="calories"
            hide
          />

          <Tooltip content={<ActivityTooltip />} />

          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            radius={[10, 10, 0, 0]}
          />

          <Bar
            yAxisId="cal"
            dataKey="calories"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;