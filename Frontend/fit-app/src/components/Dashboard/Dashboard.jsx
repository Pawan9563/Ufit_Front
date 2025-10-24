import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import WorkoutCard from './WorkoutCard';
import ProgressChart from './ProgressChart';
import FeedbackForm from './FeedbackForm';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [todayWorkout, setTodayWorkout] = useState(null);
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    weeklyFrequency: 0,
    currentStreak: 0,
    avgIntensity: 0
  });
  const [loading, setLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // ====== FETCH DASHBOARD DATA ======
  const fetchDashboardData = async () => {
    // MOCK DATA - Remove when backend is ready
    setTodayWorkout({
      _id: 'mock-1',
      exercises: [
        { name: 'Push-ups', sets: 3, reps: '12', notes: 'Keep core tight', emoji: '💪' },
        { name: 'Squats', sets: 4, reps: '15', notes: 'Go deep', emoji: '🦵' },
        { name: 'Plank', sets: 3, reps: '30 sec', notes: 'Hold steady', emoji: '🧘' }
      ],
      completed: false
    });

    setWorkoutHistory([
      { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), completed: true, fuzzyScore: 7 },
      { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), completed: true, fuzzyScore: 6 },
      { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), completed: false, fuzzyScore: 0 },
      { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), completed: true, fuzzyScore: 8 },
      { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), completed: true, fuzzyScore: 7 },
      { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), completed: true, fuzzyScore: 5 },
      { date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), completed: true, fuzzyScore: 6 }
    ]);

    setStats({
      totalWorkouts: 42,
      weeklyFrequency: 5,
      currentStreak: 3,
      avgIntensity: 6.8
    });

    setLoading(false);
  };

  // ====== GENERATE NEW WORKOUT ======
  const generateNewWorkout = async () => {
    // MOCK - Replace with actual API call later
    setTodayWorkout({
      _id: 'mock-' + Date.now(),
      exercises: [
        { name: 'Bench Press', sets: 4, reps: '10', notes: 'Moderate weight', emoji: '🏋️' },
        { name: 'Rows', sets: 3, reps: '12', notes: 'Squeeze at top', emoji: '💪' },
        { name: 'Shoulder Press', sets: 3, reps: '10', notes: 'Control descent', emoji: '🦾' }
      ],
      completed: false
    });

    /* UNCOMMENT WHEN BACKEND IS READY:
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/workouts/generate', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setTodayWorkout(data);
    } catch (error) {
      console.error('Failed to generate workout:', error);
    }
    */
  };

  // ====== MARK WORKOUT COMPLETE ======
  const markWorkoutComplete = () => {
    setShowFeedback(true);
  };

  // ====== HANDLE FEEDBACK SUBMIT ======
  const handleFeedbackSubmit = async (feedbackData) => {
    // MOCK - Just close modal for now
    console.log('Feedback submitted:', feedbackData);
    setShowFeedback(false);
    
    // Update mock stats
    setStats(prev => ({
      ...prev,
      totalWorkouts: prev.totalWorkouts + 1
    }));

    /* UNCOMMENT WHEN BACKEND IS READY:
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:5000/api/workouts/feedback', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ workoutId: todayWorkout._id, ...feedbackData })
      });
      setShowFeedback(false);
      fetchDashboardData();
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
    */
  };

  // ====== LOADING STATE ======
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // ====== DASHBOARD UI ======
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation Header */}
      <nav className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">💪</div>
              <h1 className="text-xl font-bold text-white">AI Workout Planner</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 shadow-xl">
            <div className="text-blue-100 text-sm font-medium">Total Workouts</div>
            <div className="text-white text-3xl font-bold mt-2">{stats.totalWorkouts}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 shadow-xl">
            <div className="text-green-100 text-sm font-medium">Weekly Frequency</div>
            <div className="text-white text-3xl font-bold mt-2">{stats.weeklyFrequency}/7</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-xl">
            <div className="text-purple-100 text-sm font-medium">Current Streak</div>
            <div className="text-white text-3xl font-bold mt-2">{stats.currentStreak} days</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 shadow-xl">
            <div className="text-orange-100 text-sm font-medium">Avg Intensity</div>
            <div className="text-white text-3xl font-bold mt-2">{stats.avgIntensity}/10</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Workout Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Today's Workout</h2>
                <button
                  onClick={generateNewWorkout}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition flex items-center space-x-2"
                >
                  <span>🔄</span>
                  <span>Generate New</span>
                </button>
              </div>
              
              {todayWorkout ? (
                <WorkoutCard 
                  workout={todayWorkout} 
                  onComplete={markWorkoutComplete}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">No workout generated yet</p>
                  <button
                    onClick={generateNewWorkout}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                  >
                    Generate Today's Workout
                  </button>
                </div>
              )}
            </div>

            {/* Progress Chart */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Progress Overview</h2>
              <ProgressChart history={workoutHistory} />
            </div>
          </div>

          {/* Sidebar - Recent History */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Recent History</h2>
              <div className="space-y-3">
                {workoutHistory.slice(0, 7).map((workout, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
                  >
                    <div>
                      <div className="text-white font-medium">
                        {new Date(workout.date).toLocaleDateString()}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {workout.completed ? '✅ Completed' : '⏭️ Skipped'}
                      </div>
                    </div>
                    {workout.completed && (
                      <div className="text-purple-400 font-bold">
                        {workout.fuzzyScore}/10
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* User Profile Card */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Your Profile</h2>
              <div className="space-y-3 text-gray-300">
                <div>
                  <span className="text-gray-400">Goal:</span>
                  <span className="ml-2 font-medium">{user?.goals?.join(', ')}</span>
                </div>
                <div>
                  <span className="text-gray-400">Fitness Level:</span>
                  <span className="ml-2 font-medium">{user?.fitnessLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackForm 
          onSubmit={handleFeedbackSubmit} 
          onClose={() => setShowFeedback(false)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
