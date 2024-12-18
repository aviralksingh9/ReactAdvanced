import React, { useEffect, useState } from "react";

const TimerApp = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const playTimer = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Timer App</h1>
      <h2>{formatTime(time)}</h2>
      {isRunning ? (
        <button onClick={pauseTimer}>Pause</button>
      ) : (
        <button onClick={playTimer}>Play</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerApp;
