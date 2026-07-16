import React, { useState } from 'react';
import axios from '../../../../api/axiosInstance';

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
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  const planContent = typeof plan === 'string' ? plan : plan?.plan || '';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold text-black">Study Plan</h2>
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200">
          <i className="fa fa-file-alt text-xl text-black"></i>
        </div>
      </div>

      {plan ? (
        <div className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-black mb-3 text-base">Your Personalized Plan</h3>
            <div className="space-y-3">
              {formatPlanText(planContent).map((line, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">{line}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleRegenerate}
            disabled={loading}
            className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gray-100 hover:text-black transition-colors disabled:opacity-50 text-base"
          >
            Regenerate Plan
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
            <i className="fa fa-plus text-3xl text-black"></i>
          </div>
          <h3 className="text-xl font-extrabold text-black mb-2">Generate Study Plan</h3>
          <p className="text-gray-600 text-base mb-6">
            Get personalized recommendations based on your performance
          </p>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300 text-base"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <i className="fa fa-spinner fa-spin mr-2"></i>
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