// StudyPlan.jsx
import React, { useState } from 'react';
import axios from '../../../../api/axiosInstance'; // adjust path as needed

const StudyPlan = () => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const formatPlanText = (text) => {
    if (!text) return [];

    // if already array
    if (Array.isArray(text)) return text;

    // if object → convert to string
    if (typeof text === "object") {
      text = JSON.stringify(text);
    }

    return String(text)
      .split('\n')
      .filter(line => line.trim() !== '');
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/user/history/study-plan');
      setPlan(response.data);
    } catch (error) {
      console.error('Failed to generate study plan:', error);
      // Optionally show error toast/message
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = () => {
    handleGenerate(); // same as generate
  };

  const planContent = typeof plan === 'string' ? plan : plan?.plan || '';

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Study Plan</h2>
        <div className="p-2 bg-blue-100 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
      </div>

      {plan ? (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-3">Your Personalized Plan</h3>
            <div className="space-y-3">
              {formatPlanText(planContent).map((line, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-sm text-blue-800">{line}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleRegenerate}
            disabled={loading}
            className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Regenerate Plan
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Generate Study Plan</h3>
          <p className="text-gray-600 text-sm mb-6">
            Get personalized recommendations based on your performance
          </p>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : (
              'Generate Plan'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default StudyPlan;