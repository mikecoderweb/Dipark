import React from 'react';
import styled from 'styled-components';

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: #6d28d9;
  color: white;
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Number = styled.div`
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const Label = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.9;
`;

const CourseStats = () => {
  const stats = [
    {
      number: "8",
      label: "OY / MODUL"
    },
    {
      number: "6",
      label: "OY / NAZARIYA"
    },
    {
      number: "2",
      label: "OY / AMALIYOT"
    }
  ];

  return (
    <StatsSection>
      <Title>Kurs rejasi</Title>
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <Number>{stat.number}</Number>
            <Label>{stat.label}</Label>
          </StatCard>
        ))}
      </StatsGrid>
    </StatsSection>
  );
};

export default CourseStats;
