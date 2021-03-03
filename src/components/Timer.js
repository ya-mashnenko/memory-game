import React, { useState, useEffect } from "react";

const Timer = ({ setTimeOver, timeOver, setTimer, showTimer }) => {
  const [timeLeft, setTime] = useState(9);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeOver(!timeOver);
      setTimer(!showTimer);
      return;
    }

    const timer = setInterval(() => {
      setTime(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return <div className="timer">00:{`0${timeLeft}`.slice(-2)}</div>;
};

export default Timer;
