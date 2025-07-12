
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const CompletionProgress = () => {
  const data = [
    { name: 'Completed', value: 13775, color: '#2563eb' },
    { name: 'Remaining', value: 11225, color: '#e5e7eb' }
  ];

  const COLORS = ['#2563eb', '#e5e7eb'];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry) => (
              <span style={{ color: entry.color }}>
                {value}: {entry.payload.value.toLocaleString()} parts
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Completion Rate:</span>
          <span className="font-semibold text-blue-600">55.1%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Required Daily Pace:</span>
          <span className="font-semibold">182 parts/day</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Current Gap:</span>
          <span className="font-semibold text-orange-600">-45 parts/day</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Enhanced Surplus:</span>
          <span className="font-semibold text-green-600">+43 parts/day</span>
        </div>
      </div>
    </div>
  );
};

export default CompletionProgress;
