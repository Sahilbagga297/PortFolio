import React from 'react';
import useCountUp from '../hooks/useCountUp';

const AchievementHighlightCard = ({ icon: Icon, number, label, detail }) => {
  let numericVal = null;
  let suffixVal = '';
  if (number) {
    const match = String(number).match(/^(\d+)(.*)$/);
    if (match) {
      numericVal = parseInt(match[1], 10);
      suffixVal = match[2];
    }
  }

  const { ref, displayValue } = useCountUp(numericVal || 0, 1800, suffixVal);

  return (
    <div className="achievement-card group relative overflow-hidden bg-gray-900/60 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-4 sm:p-5 hover:bg-gray-800/80 hover:border-gray-600/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-700/20">
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-gray-600/10 to-gray-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-gray-800/80 rounded-xl text-gray-300 group-hover:text-white group-hover:bg-gray-700/80 transition-colors duration-300">
            <Icon className="w-5 h-5" />
          </div>
          {number ? (
            <span ref={ref} className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {numericVal !== null ? displayValue : number}
            </span>
          ) : null}
        </div>
        <div>
          <p className="text-gray-200 font-semibold">{label}</p>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AchievementHighlightCard);

