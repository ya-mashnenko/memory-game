import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTime] = useState(59);
  const timeOn = () => {
    setTime(timeLeft - 1);
    if (timeLeft <= 0) {
      clearInterval(timeOn);
    }
  };
  // useEffect(() => {
  //   setInterval(timeOn, 1000);
  //   return clearInterval(timeOn);
  // }, [timeLeft]);
  const timer = setInterval(timeOn, 1000);

  return <div className="timer">00:{timeLeft}</div>;
};

export default Timer;
