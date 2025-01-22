import React from 'react';
import { Atom } from 'lucide-react';

const GravityCore = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
        <Atom className="w-8 h-8 text-purple-400 animate-spin-slow" />
      </div>
    </div>
  );
};

export default GravityCore;