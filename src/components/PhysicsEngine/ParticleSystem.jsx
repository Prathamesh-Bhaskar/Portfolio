import React from 'react';
import { BALL_RADIUS } from '../../utils/constants';

const ParticleSystem = ({ balls }) => {
  return (
    <>
      {balls.map((ball, index) => (
        <div
          key={index}
          className="absolute rounded-full transition-transform duration-75"
          style={{
            left: `${ball.x}px`,
            top: `${ball.y}px`,
            width: `${BALL_RADIUS * 2}px`,
            height: `${BALL_RADIUS * 2}px`,
            transform: `translate(-50%, -50%) scale(${0.8 + ball.energy / 200})`,
          }}
        >
          {/* Core ball */}
          <div 
            className="absolute inset-0 rounded-full transition-colors duration-200"
            style={{ backgroundColor: ball.color }}
          />
          
          {/* Inner glow */}
          <div 
            className="absolute inset-[-4px] rounded-full blur-sm opacity-50 transition-colors duration-200"
            style={{ backgroundColor: ball.color }}
          />
          
          {/* Outer glow */}
          <div 
            className="absolute inset-[-8px] rounded-full blur-md opacity-30 transition-colors duration-200"
            style={{ backgroundColor: ball.color }}
          />
        </div>
      ))}
    </>
  );
};

export default ParticleSystem;
