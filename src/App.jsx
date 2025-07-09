import React, { useState, useEffect } from 'react';
import CircularProgressBar from './CircularProgressBar/CircularProgressBar';

function App() {
  // Declare a state variable 'percent' to track the progress (0 to 100)
  const [percent, setPercent] = useState(0);

   // useEffect runs after the component mounts
  useEffect(() => {
    // Create an interval that runs every 50 milliseconds
    const interval = setInterval(() => {
      // Update 'percent' by increasing it by 1 each time,
      // but stop at 100 to prevent overflow
      setPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);  // Empty dependency array means this effect runs only once on mount

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Circular Progress Bar</h2>
       {/* Render the CircularProgressBar component and pass the current percentage */}
      <CircularProgressBar percentage={percent} />
    </div>
  );
}

export default App;
