import React from 'react';
import './CircularProgressBar.css'; // Import styles

const CircularProgressBar = ({ percentage }) => {
  const radius = 60; // Radius of the circle
  const stroke = 10; // Thickness of the stroke
   // Adjust radius so stroke is inside the viewBox
  const normalizedRadius = radius - stroke * 0.5;
  // Total circumference of the circle 
  const circumference = 2 * Math.PI * normalizedRadius;

  // Calculate stroke offset based on percentage
   // Calculate how much of the circle should be filled based on percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-wrapper">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circular-progress"
      >
        {/* Background Circle */}
        <circle
          stroke="#e0e0e0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius} //center X
          cy={radius} // center Y
        />

        {/* Foreground Circle (Progress) */}
        <circle
          stroke="#ff0022"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-circle"
        />
      </svg>

      {/* Center Text */}
      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default CircularProgressBar;
