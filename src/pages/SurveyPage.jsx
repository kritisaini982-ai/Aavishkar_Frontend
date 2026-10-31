import React, { useState } from 'react';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

export default function SurveyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState({
    careerClarity: 'Moderate',
    primaryChallenge: 'Skill Gap',
    comments: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blush p-3 rounded-2xl text-plum-600">
            <ClipboardList className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-plum-700">Student Career Survey</h1>
            <p className="text-sm text-slate-500">Help us improve CareerCompass by sharing your career placement insights.</p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl text-center space-y-2">
            <CheckCircle2 className="h-10 w-10 mx-auto text-green-600" />
            <h3 className="font-bold text-lg">Thank You for Your Response!</h3>
            <p className="text-sm text-slate-600">Your feedback helps us refine our AI career recommendations.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">How clear are you about your career goals?</label>
              <select
                value={feedback.careerClarity}
                onChange={(e) => setFeedback({ ...feedback, careerClarity: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-magenta"
              >
                <option value="Very Clear">Very Clear</option>
                <option value="Moderate">Moderate</option>
                <option value="Unsure">Unsure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">What is your primary placement challenge?</label>
              <select
                value={feedback.primaryChallenge}
                onChange={(e) => setFeedback({ ...feedback, primaryChallenge: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-magenta"
              >
                <option value="Skill Gap">Technical Skill Gap</option>
                <option value="Interview Prep">Interview Preparation</option>
                <option value="Finding Opportunities">Finding Relevant Opportunities</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Additional Comments or Suggestions</label>
              <textarea
                rows={4}
                value={feedback.comments}
                onChange={(e) => setFeedback({ ...feedback, comments: e.target.value })}
                placeholder="Share your thoughts..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-magenta"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-plum-600 hover:bg-plum-700 text-white font-semibold py-3 rounded-xl shadow transition text-sm"
            >
              Submit Survey Response
            </button>
          </form>
        )}
      </div>
    </div>
  );
}