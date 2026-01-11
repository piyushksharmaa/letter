import React, { useState } from 'react';
import styled from 'styled-components';

const ProtectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;

const LockIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border: 3px solid #333;
    border-radius: 5px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 3px solid #333;
    border-radius: 50%;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: none;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem; /* Reduced from 2.5rem */
  color: #333;
  margin-bottom: 10px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem; /* Reduced from 1.2rem */
  color: #666;
  margin-bottom: 40px;
  padding: 0 10px; /* Prevents text hitting screen edges */
`;

const PasswordForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 15px;
  /* MUST be 16px to prevent auto-zoom on Android */
  font-size: 16px; 
  border: 1px solid #ddd;
  border-radius: 8px; /* Slightly rounder looks better on mobile */
  margin-bottom: 20px;
  outline: none;
  box-sizing: border-box; /* Ensures padding doesn't push it off screen */
  
  &:focus {
    border-color: #00ccff; /* Match your timer color */
  }
`;

const SubmitButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 1.5rem;
  
  &:hover {
    color: #666;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-top: 10px;
  font-size: 0.9rem;
`;

const PasswordProtection = ({ onCorrectPassword }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const correctPassword = 'piyush01';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      onCorrectPassword();
      // Store in session storage so the user doesn't have to enter the password again if they refresh
      sessionStorage.setItem('passwordEntered', 'true');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <ProtectionContainer>
      <LockIcon />
      <Title>This content is protected.</Title>
      <Subtitle>To view, please enter the password.</Subtitle>
      
      <PasswordForm onSubmit={handleSubmit}>
        <InputContainer>
          <PasswordInput
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton type="submit">→</SubmitButton>
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </PasswordForm>
    </ProtectionContainer>
  );
};

export default PasswordProtection;
