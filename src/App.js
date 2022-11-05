import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [time, setTime] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const RunTimer = () => {
    setTime("00");
    setSeconds("00");
    if (!minutes || minutes.includes("-") || minutes === 0) {
      return;
    }
    // Convert to seconds
    var timeoutinseconds = +minutes * 60;
    setInterval(() => {
      if (timeoutinseconds === 0) {
        return
      }
      if ((timeoutinseconds / 60).toFixed() > 1) {
        setTime((timeoutinseconds / 60).toFixed() - 1);
        setSeconds(timeoutinseconds / ((timeoutinseconds / 60).toFixed() - 1));
      } else {
        setTime("00");
        setSeconds(timeoutinseconds-1);
      }
      timeoutinseconds = timeoutinseconds - 1;
    }, intervalTime);
  };

  useEffect(() => {
    return () => {
      clearInterval();
    };
  }, [intervalTime]);

  return (
    <div className="page-center">
      <section>
        <div>
          <h3>Count Down</h3>
        </div>
        <div>
          <label htmlFor="minutes">Enter minutes: </label>
          <input
            id="minutes"
            type="number"
            placeholder="(min)"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min={1}
          ></input>
        </div>
        <div>
          <button onClick={() => RunTimer()}>START</button>
          <button>PAUSE</button>
        </div>
        <div>
          <p className="half">You are half way complete!</p>
          <p className="almost">Alomst done</p>
        </div>
        <div>
          <h1>
            {+time < 10 && +time !== 0 ? "0" : ""}
            {+time}:
            {+seconds < 10 && +seconds !== 0 ? "0" : ""}
            {+seconds}
          </h1>
        </div>
        <div>
          <button onClick={() => setIntervalTime(1000)}>x1</button>
          <button onClick={() => setIntervalTime(1500)}>x1.5</button>
          <button onClick={() => setIntervalTime(2000)}>x2</button>
        </div>
      </section>
    </div>
  );
}

export default App;
