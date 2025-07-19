import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components
const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
  padding: 20px;
  background-color: #1e0a3c; /* Dark purple background */
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #ffffff;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const ClockIcon = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #00ccff;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 2px;
    background-color: #00ccff;
    transform-origin: 0 0;
    transform: rotate(45deg);
  }
`;

const CountdownDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeValue = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const TimeLabel = styled.div`
  font-size: 0.8rem;
  color: white;
  margin-top: 10px;
  letter-spacing: 1px;
`;

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up on unmount
    return () => clearInterval(timer);
  }, [targetDate]);
  
  // Format time with leading zeros
  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };
  
  return (
    <TimerContainer>
      <Title>
        <ClockIcon />
        PLEASE WAIT
      </Title>
      
      <CountdownDisplay>
        <TimeUnit>
          <TimeValue>{formatTime(timeLeft.days)}</TimeValue>
          <TimeLabel>DAYS</TimeLabel>
        </TimeUnit>
        
        <TimeUnit>
          <TimeValue>{formatTime(timeLeft.hours)}</TimeValue>
          <TimeLabel>HRS</TimeLabel>
        </TimeUnit>
        
        <TimeUnit>
          <TimeValue>{formatTime(timeLeft.minutes)}</TimeValue>
          <TimeLabel>MIN</TimeLabel>
        </TimeUnit>
        
        <TimeUnit>
          <TimeValue>{formatTime(timeLeft.seconds)}</TimeValue>
          <TimeLabel>SEC</TimeLabel>
        </TimeUnit>
      </CountdownDisplay>
    </TimerContainer>
  );
};

export default CountdownTimer;