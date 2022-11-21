import { useState } from "react";
import { useEffect } from "react";
 import Styles from "./Time.module.css";

const GoogleTimer = () => {
  const [micro, setMicro] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    var timer = setInterval(() => {
      setMicro(micro + 1);
      if (micro === 99) {
        setSecond(second + 1);
        setMicro(0);
      } else if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      } else if (minute === 59) {
        setHour(hour + 1);
        setMinute(0);
      }
    }, 10);
    return () => clearInterval(timer);
  });
  return (
    <div className={Styles.time}>
      <h2 style={{ color: "green" }}>
        Hour:{hour}:Minute:{minute}:Seconds:{second}:{micro}
      </h2>
    </div>
  );
};
export default GoogleTimer;
