import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTime] = useState(59);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTime(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return <div className="timer">00:{`0${timeLeft}`.slice(-2)}</div>;
};

export default Timer;
