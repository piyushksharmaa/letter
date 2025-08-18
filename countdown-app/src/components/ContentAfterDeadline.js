import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Styled Components
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffcc00;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ffcc00, transparent);
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
  max-width: 800px;
`;

const ContentAfterDeadline = () => {
  useEffect(() => {
    // This effect can be used to trigger any animations or side effects
    // when the component is first displayed
  }, []);

  return (
    <ContentContainer>
      <Paragraph>adaasdsda</Paragraph>
    </ContentContainer>
  );
};

export default ContentAfterDeadline;
