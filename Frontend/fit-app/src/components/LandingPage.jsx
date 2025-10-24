import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-blue-600">💪</span>
              <h1 className="text-2xl font-bold text-gray-900">UFit</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">
                HOME
              </a>
              <a href="#workouts" className="text-gray-700 hover:text-blue-600 font-medium transition">
                WORKOUTS
              </a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 font-medium transition">
                COMMUNITY
              </a>
              <a href="#membership" className="text-gray-700 hover:text-blue-600 font-medium transition">
                MEMBERSHIP
              </a>
              <button
                onClick={() => navigate('/login')}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                SIGN IN
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Welcome to UFit
            </h1>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                Your Fitness. Your Way. Your Time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover workouts that work for you, nutrition advice that's easy to follow, and a
                supportive community cheering you on. Start your journey to a healthier,
                stronger you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Get Started Free
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 text-lg font-semibold rounded-xl border-2 border-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Plans</h3>
              <p className="text-gray-600">
                AI-powered workouts tailored to your goals, fitness level, and daily performance
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Adaptation</h3>
              <p className="text-gray-600">
                Fuzzy logic system adjusts intensity based on your feedback for optimal progress
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Visualize your journey with comprehensive stats, charts, and achievement tracking
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
