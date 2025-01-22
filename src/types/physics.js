// Example function to create a ball object
export const createBall = (x, y, vx, vy, energy, color) => {
  return {
    x,       // X-coordinate of the ball
    y,       // Y-coordinate of the ball
    vx,      // Velocity in the x-direction
    vy,      // Velocity in the y-direction
    energy,  // Energy of the ball (used for scaling or other properties)
    color,   // Color of the ball
  };
};
