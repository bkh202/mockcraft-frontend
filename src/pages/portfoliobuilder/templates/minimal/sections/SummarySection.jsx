import React from "react";

const SummarySection = ({ summary }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -left-4 -top-4 text-6xl text-indigo-100 font-serif leading-none">"</div>
      <p className="relative pl-6 text-lg text-gray-600 italic leading-relaxed font-medium">
        {summary}
      </p>
    </div>
  );
};

export default SummarySection;