import { BALL_RADIUS, COLLISION_DAMPING } from './constants';

export const checkCollision = (ball1, ball2) => {
  const dx = ball2.x - ball1.x;
  const dy = ball2.y - ball1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < BALL_RADIUS * 2;
};

export const resolveCollision = (ball1, ball2) => {
  const dx = ball2.x - ball1.x;
  const dy = ball2.y - ball1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Normal vector
  const nx = dx / distance;
  const ny = dy / distance;

  // Relative velocity
  const dvx = ball2.vx - ball1.vx;
  const dvy = ball2.vy - ball1.vy;

  // Relative velocity along normal
  const velAlongNormal = dvx * nx + dvy * ny;

  // Don't resolve if balls are moving apart
  if (velAlongNormal > 0) return [ball1, ball2];

  // Collision impulse
  const impulse = -(1 + COLLISION_DAMPING) * velAlongNormal;

  // Update velocities
  const ball1After = {
    ...ball1,
    vx: ball1.vx - impulse * nx,
    vy: ball1.vy - impulse * ny,
  };

  const ball2After = {
    ...ball2,
    vx: ball2.vx + impulse * nx,
    vy: ball2.vy + impulse * ny,
  };

  // Separate balls to prevent sticking
  const overlap = BALL_RADIUS * 2 - distance;
  if (overlap > 0) {
    const separationX = (overlap * nx) / 2;
    const separationY = (overlap * ny) / 2;

    return [
      {
        ...ball1After,
        x: ball1.x - separationX,
        y: ball1.y - separationY,
      },
      {
        ...ball2After,
        x: ball2.x + separationX,
        y: ball2.y + separationY,
      },
    ];
  }

  return [ball1After, ball2After];
};