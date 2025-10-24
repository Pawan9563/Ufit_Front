import React from 'react';

const WorkoutCard = ({ workout, onComplete }) => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-700/50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-3">Exercises</h3>
        <div className="space-y-3">
          {workout.exercises?.map((exercise, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-600/30 rounded-lg">
              <div className="text-2xl">{exercise.emoji || '🏋️'}</div>
              <div className="flex-1">
                <div className="text-white font-medium">{exercise.name}</div>
                <div className="text-gray-400 text-sm">
                  {exercise.sets} sets × {exercise.reps} reps
                </div>
                {exercise.notes && (
                  <div className="text-gray-500 text-xs mt-1">{exercise.notes}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onComplete}
        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
      >
        Mark as Complete
      </button>
    </div>
  );
};

export default WorkoutCard;
