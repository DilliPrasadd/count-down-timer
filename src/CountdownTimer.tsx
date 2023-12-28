import React, { useState, useRef } from 'react';
import './CountdownTimer.css'; 

type CountdownTimerProps = {
  initialTime: number;
}
const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTime * 60);
  const [countdownActive, setCountdownActive] = useState(false);
  const handleInput = useRef<HTMLInputElement>(null);


 
  const startCountdown = () => {
    setCountdownActive(true);
    const inputMinutes = parseInt(handleInput.current?.value!);
    setTimeInSeconds(inputMinutes * 60);
    const interval = setInterval(() => {
      setTimeInSeconds((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      setCountdownActive(false);
      clearInterval(interval);
    };
  };
 
  return (
    <div className="countdown-timer">
      <div className="circle">
        <div className="mask full">
          <div className="fill" ></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
        </div>
        <div className="inside-circle">
          <div>{`${Math.floor(timeInSeconds / 60)} minutes`}</div>
          <div>{`${Math.floor(timeInSeconds % 60)} seconds`}</div>
        </div>
      </div>
      <div className="input-container">
      <h1>Countdown Timer</h1>
      <br/>
         {!countdownActive ? <input placeholder="Enter time in minutes"ref={handleInput}/> : <input type="number"   ref={handleInput} disabled/>} 
        <button onClick={startCountdown}>Start Countdown</button>
      </div>
    </div>
  );
};
 
export default CountdownTimer;