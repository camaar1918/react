import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(10);       // waqtiga socda
  const [input, setInput] = useState(10);     // value input
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  // start
  const start = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  // stop
  const stop = () => {
    setIsRunning(false);
  };

  // reset → wuxuu ku noqdaa input value
  const reset = () => {
    setIsRunning(false);
    setTime(input);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Countdown Timer</h1>

      {/* INPUT */}
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(Number(e.target.value));
          setTime(Number(e.target.value)); // isla markiiba update
        }}
      />

      <h2>Time Left: {time} seconds</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;