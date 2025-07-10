
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';

const TimelineChart = () => {
  const data = [
    { day: 'Week 1', current: 137, target: 300, projected: 137 },
    { day: 'Week 2', current: 137, target: 300, projected: 190 },
    { day: 'Week 3', current: 137, target: 300, projected: 225 },
    { day: 'Final', current: 137, target: 300, projected: 230 }
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="day" 
            fontSize={11}
            stroke="#6b7280"
          />
          <YAxis 
            label={{ value: 'Parts/Day', angle: -90, position: 'insideLeft' }}
            fontSize={11}
            stroke="#6b7280"
          />
          <ReferenceLine 
            y={82} 
            stroke="#16a34a" 
            strokeDasharray="5 5"
            label="Required Pace"
          />
          <Line 
            type="monotone" 
            dataKey="current" 
            stroke="#2563eb" 
            strokeWidth={3}
            name="Current Output"
            dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="projected" 
            stroke="#dc2626" 
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Projected with Optimization"
            dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Status:</strong> Team is exceeding required pace. Projected optimization will create substantial buffer capacity.</p>
      </div>
    </div>
  );
};

export default TimelineChart;
