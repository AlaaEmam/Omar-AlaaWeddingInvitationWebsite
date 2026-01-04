import React, { useState, useEffect } from 'react';
import './Countdown.css';
import Background from '../../assets/test2.png';


const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-28T00:00:00'); 

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown(); 
    const interval = setInterval(updateCountdown, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    
    <div className="countdown-container">
        <img src={Background} alt="Background" className="background-image" />

      <div className='centered-text'>
          <h1 className='countdown-date'>Save The Date</h1>
          <div className='day'>
             Wednesday , 28th of January 2026
        </div>
      <div className='countdown-part' >
          <div className='timer-text' >
            Days : Hours : Minutes : Seconds
          </div>
          <div className='countdown-timer'>
            {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
          </div>
      </div>
          
      </div>
    </div>
  );
};

export default Countdown;
