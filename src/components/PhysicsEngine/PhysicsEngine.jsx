import React, { useEffect, useRef } from 'react';
import usePhysicsSimulation from '/src/hooks/usePhysicsSimulation';
import Circle from './Circle';
import GravityCore from './GravityCore';
import ParticleSystem from './ParticleSystem';


const PhysicsEngine = () => {
  const containerRef = useRef(null);
  const { balls, updatePhysics } = usePhysicsSimulation();

  useEffect(() => {
    let animationId;

    const animate = () => {
      updatePhysics();
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [updatePhysics]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div 
        ref={containerRef}
        className="relative w-[400px] h-[400px]"
      >
        <Circle />
        <GravityCore />
        <ParticleSystem balls={balls} />
      </div>
    </div>
  );
};

export default PhysicsEngine;