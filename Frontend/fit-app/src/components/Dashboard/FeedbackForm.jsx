import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit, onClose }) => {
  const [difficulty, setDifficulty] = useState('moderate');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert difficulty to fuzzy score
    const fuzzyScoreMap = {
      'too_easy': 3,
      'moderate': 5,
      'too_hard': 7
    };
    
    onSubmit({
      difficulty,
      fuzzyScore: fuzzyScoreMap[difficulty],
      notes
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">Workout Feedback</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">How did the workout feel?</label>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setDifficulty('too_easy')}
                className={`w-full py-3 rounded-lg transition ${
                  difficulty === 'too_easy'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                😊 Too Easy
              </button>
              <button
                type="button"
                onClick={() => setDifficulty('moderate')}
                className={`w-full py-3 rounded-lg transition ${
                  difficulty === 'moderate'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                💪 Just Right
              </button>
              <button
                type="button"
                onClick={() => setDifficulty('too_hard')}
                className={`w-full py-3 rounded-lg transition ${
                  difficulty === 'too_hard'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                😰 Too Hard
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Additional Notes (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
              placeholder="How did you feel during the workout?"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
