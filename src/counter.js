import React from 'react';
import { useEffect, useMemo, useState } from 'react';

export default function Counter() {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  // show time - h:m:s

  const [timmer, setTimmer] = useState(null);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
    setTimmer(`${hours}:${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };

  var numberOfCards = 8; // or more.
  let aa = 10;
    
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
      {seconds.toString().padStart(2, '0')}
       <div style={{height:20,background:'red'}}></div> 
      {aa}
    </div>
  );
}
