import { useState, useCallback } from 'react';
import { CONTAINER_SIZE, GRAVITY_CONSTANT, FRICTION, INITIAL_BALLS, BALL_RADIUS, INITIAL_VELOCITY, BALL_COLORS } from '../utils/constants';
import { checkCollision, resolveCollision } from '../utils/physics';

const usePhysicsSimulation = () => {
  const [balls, setBalls] = useState(() => 
    Array.from({ length: INITIAL_BALLS }, (_, i) => ({
      x: CONTAINER_SIZE / 2 + Math.cos(i * (2 * Math.PI / INITIAL_BALLS)) * 100,
      y: CONTAINER_SIZE / 2 + Math.sin(i * (2 * Math.PI / INITIAL_BALLS)) * 100,
      vx: (Math.random() * 2 - 1) * INITIAL_VELOCITY,
      vy: (Math.random() * 2 - 1) * INITIAL_VELOCITY,
      energy: 100,
      color: BALL_COLORS[i % BALL_COLORS.length],
    }))
  );

  const updatePhysics = useCallback(() => {
    setBalls(currentBalls => {
      let updatedBalls = [...currentBalls];

      // Update positions and apply gravity
      updatedBalls = updatedBalls.map(ball => {
        const centerX = CONTAINER_SIZE / 2;
        const centerY = CONTAINER_SIZE / 2;
        
        const dx = centerX - ball.x;
        const dy = centerY - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const force = GRAVITY_CONSTANT / (distance * distance);
        
        let newVx = ball.vx + (dx / distance) * force;
        let newVy = ball.vy + (dy / distance) * force;
        
        newVx *= FRICTION;
        newVy *= FRICTION;
        
        let newX = ball.x + newVx;
        let newY = ball.y + newVy;
        
        // Boundary collision
        const maxRadius = CONTAINER_SIZE / 2 - BALL_RADIUS;
        const currentRadius = Math.sqrt(
          Math.pow(newX - centerX, 2) + Math.pow(newY - centerY, 2)
        );
        
        if (currentRadius > maxRadius) {
          const angle = Math.atan2(newY - centerY, newX - centerX);
          newX = centerX + Math.cos(angle) * maxRadius;
          newY = centerY + Math.sin(angle) * maxRadius;
          newVx *= -0.8;
          newVy *= -0.8;
        }
        
        const energy = Math.min(
          100,
          Math.sqrt(newVx * newVx + newVy * newVy) * 50
        );
        
        return {
          ...ball,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          energy,
        };
      });

      // Check and resolve ball collisions
      for (let i = 0; i < updatedBalls.length; i++) {
        for (let j = i + 1; j < updatedBalls.length; j++) {
          if (checkCollision(updatedBalls[i], updatedBalls[j])) {
            const [newBall1, newBall2] = resolveCollision(updatedBalls[i], updatedBalls[j]);
            // Swap colors on collision
            const tempColor = updatedBalls[i].color;
            updatedBalls[i] = { ...newBall1, color: updatedBalls[j].color };
            updatedBalls[j] = { ...newBall2, color: tempColor };
          }
        }
      }

      return updatedBalls;
    });
  }, []);

  return { balls, updatePhysics };
};

export default usePhysicsSimulation;