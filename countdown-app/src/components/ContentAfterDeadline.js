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
      <Title>My Dearest Khushboo</Title>
      <Paragraph>
        My Dearest Khushbooo❤️ I do not know how this will find you…(Most
        probably it would mean that…..💔) But, I write to tell you that I love
        you, I love you so much my darling❤️ You are the love of my life my
        dearest❤️ My soulmate❤️
        <b />
        My sole regret that i will be away from you…. I want you to grow, to
        become the beautiful lady, i can now only imagine. Please remember you
        are the Piyush’s Khushboo, the one i crave, the one i desire, the only
        one i’ll never stop wanting❤️ You are and always will be my Khushboo❤️
        Kanhaji will always protect, please keep that nazar wala band always
        with you❤️🧿 I’ll find comfort in knowing that Kanji will always be
        there to protect you Dhyaan rakhnaa apnaa❤️My dearest and prettiest lady
        You’re all that matters to me…. All I want is to see us together❤️… I’m
        fighting with every breath, and I will fight until the very end❤️ Jai
        shree Krishna❤️ Always and forever yours, Piyush❤️
        <Image src="utilities/wp6124820.webp" alt="Hug" />
      </Paragraph>
    </ContentContainer>
  );
};

export default ContentAfterDeadline;
