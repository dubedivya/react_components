import React, { useEffect, useState } from "react";
import "./digitalClock.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return clearInterval(interval);
  }, []);

  return (
    <div className="digital-clock ">
      <h1 className="title">DigitalClock</h1>
      <div className="clock">
        <div className="time">
          <span>{time.getHours().toString().padStart(2, 0)}</span>:
          <span>{time.getMinutes().toString().padStart(2, 0)}</span>:
          <span>{time.getSeconds().toString().padStart(2, 0)}</span>
        </div>
        <div className="date">
          {time.toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
