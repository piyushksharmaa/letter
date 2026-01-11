import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountdownTimer from "./components/CountdownTimer";
import ContentAfterDeadline from "./components/ContentAfterDeadline";
import PasswordProtection from "./components/PasswordProtection";

// Target date: January 11, 2026 in IST (UTC+5:30)
const TARGET_DATE = new Date("2026-01-12T00:00:00+05:30");

const AppContainer = styled.div`
  text-align: center;
  /* Use 15px for tighter mobile edges; use 'view-height' to fill the M30 screen */
  padding: 15px; 
  color: white;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* Support for the "Infinity-U" notch area on M30 */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    // Check if current date is past the target date
    const checkDate = () => {
      const now = new Date();
      setIsDeadlinePassed(now >= TARGET_DATE);
    };

    // Check immediately
    checkDate();

    // Set up interval to check date (once per minute)
    const intervalId = setInterval(checkDate, 60000);

    // Check if password has been entered in this session
    const passwordEntered = sessionStorage.getItem("passwordEntered");
    if (passwordEntered === "true") {
      setIsPasswordCorrect(true);
    }

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleCorrectPassword = () => {
    setIsPasswordCorrect(true);
  };

  // If password hasn't been entered correctly, show password protection screen
  if (!isPasswordCorrect) {
    return <PasswordProtection onCorrectPassword={handleCorrectPassword} />;
  }

  // If password is correct, show the main content
  return (
    <AppContainer>
      {isDeadlinePassed ? (
        <ContentAfterDeadline />
      ) : (
        <CountdownTimer targetDate={TARGET_DATE} />
      )}
    </AppContainer>
  );
}

export default App;
