import React from "react";

const Timer = () => {
  // const timeLeft = setInterval(() => {
  //   const timer = "01:00";
  //   const [minLeft, secLeft] = timer.split(":");
  //   console.log(minLeft);
  //   minLeft = +minLeft;
  //   minLeft = minLeft--;
  //   if (secLeft === "00") {
  //     secLeft = 59;
  //   }
  //   secLeft = +secLeft;
  //   secLeft = secLeft--;
  //   timer = `${minLeft}:${seconds}`;
  //   if (timer < 0) {
  //     clearInterval(timeLeft);
  //   }
  //   return;
  // }, 1000);

  return <div className="timer">{timeLeft}</div>;
};

export default Timer;
