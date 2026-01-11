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
  /* Reduced padding for mobile, larger for desktop */
  padding: 15px;
  @media (min-width: 768px) {
    padding: 30px;
  }
  animation: ${fadeIn} 1s ease-out;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 1.8rem; /* Scaled down for mobile */
  margin-bottom: 25px;
  color: #ffcc00;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  /* ... keep your &::after code same ... */
`;

const Paragraph = styled.p`
  font-size: 1rem; /* Slightly smaller for mobile density */
  line-height: 1.7; /* Increased spacing for better readability */
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
  width: 100%;
  max-width: 800px;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;       /* Takes full width of the paragraph */
  max-width: 100%;   /* Ensures it never overflows */
  height: auto;      /* Keeps aspect ratio */
  border-radius: 12px;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
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
        My Dearest Khushbooo ❤️ I don't know when this letter will reach you, or at what moment of your day it will find you....
        <br />
        I love you. I love you so deeply, my darling ❤️ You are the love of my life, my dearest. My soulmate❤️
        <br />
        I carry many regrets within me, but the greatest one of all is this..... that I couldn't love you the way you needed. 
        Not because you lacked anything.......you are the most perfect woman anyone could ever want but because I did.
        <br />
        I wasn't the man I should have been. I was still a boy.....childish, lacking maturity and understanding not yet the man 
        I was meant to become.
        <br />
        Because of that, I couldn't truly be there for you. To love you the way you deserved. To cherish you, hold you in my arms, 
        and tell you again and again how much you mean to me❤️
        <br />
        Now, from afar, all I want is to see you grow......
        to become the beautiful woman I can only imagine
        strong, radiant, and full of life.
        <br />
        Please remember this always you are my Khushboo, the one I crave, the one I desire, the one my heart will never stop wanting❤️
        You are, and you will always remain, my Khushboo ❤️ I pray that Kanha ji always protects you🤍 
        Please keep that nazar wala band with you always 🧿
        It brings me peace knowing that Kanha ji is watching over you, holding you safe when I cannot.
        Dhyaan rakhna apna, my dearest❤️
        My prettiest lady......you are all that truly matters to me.
        <br />
        All I want.....all I have ever wanted is to see us together ❤️
        And one day, I truly hope to live that reality.
        <br />
        I'm fighting with every breath I have,
        and I will keep fighting till the very end❤️
        In this lifetime and beyond....... in every lifetime that follows, I will keep choosing you.
        I will ask Kanha ji to make you mine
        but before that, I will work on myself and become worthy of you.
        <br />
        Jai Shree Krishna❤️
        I will never stop loving you.
        I will never give up on us, my dearest Khushboo ❤️

        Always and forever yours,
        Piyush❤️
        <br />
        <StyledImage src="/wp6124820.webp" alt="Hug" />
      </Paragraph>
    </ContentContainer>
  );
};

export default ContentAfterDeadline;
