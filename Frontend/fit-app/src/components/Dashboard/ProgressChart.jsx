import React from 'react';

const ProgressChart = ({ history }) => {
  const last7Days = history.slice(0, 7).reverse();
  
  return (
    <div className="space-y-4">
      <div className="flex items-end space-x-2 h-48">
        {last7Days.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-t-lg overflow-hidden">
              <div
                className={`w-full transition-all ${
                  day.completed ? 'bg-gradient-to-t from-purple-600 to-purple-400' : 'bg-gray-600'
                }`}
                style={{ height: day.completed ? `${(day.fuzzyScore / 10) * 100}%` : '10%' }}
              />
            </div>
            <div className="text-gray-400 text-xs mt-2">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between text-sm text-gray-400">
        <span>Intensity Level</span>
        <span>Last 7 Days</span>
      </div>
    </div>
  );
};

export default ProgressChart;
