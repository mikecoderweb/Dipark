import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

const Content = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &.primary {
    background: #2563eb;
    color: white;
  }

  &.secondary {
    background: rgba(255,255,255,0.1);
    color: white;
    border: 2px solid white;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>DPark</Title>
        <Subtitle>Global imkoniyatlarni taqdim etish</Subtitle>
        <CTAButtons>
          <Button href="#courses" className="primary">Start Learning</Button>
          <Button href="#about" className="secondary">Learn More</Button>
        </CTAButtons>
      </Content>
    </HeroSection>
  );
};

export default Hero;
