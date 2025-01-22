import React from 'react';

const Circle = () => {
  return (
    <div className="absolute inset-0 rounded-full border-2 border-gray-700 bg-black shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] transition-all duration-500">
      <div className="absolute inset-0 rounded-full border border-gray-800" />
      <div className="absolute inset-2 rounded-full border border-gray-800/50" />
      <div className="absolute inset-4 rounded-full border border-gray-800/30" />
    </div>
  );
};

export default Circle;