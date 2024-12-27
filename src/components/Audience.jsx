import React from 'react';
import styled from 'styled-components';

const AudienceSection = styled.section`
  padding: 4rem 2rem;
  background: #6d28d9;
  color: white;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
    z-index: 0;
  }
`;

const AudienceCard = styled.div`
  text-align: center;
  position: relative;
  padding: 0 1rem;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const AudienceTitle = styled.h3`
  font-size: 1.1rem;
  margin: 3rem 0 1rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const AudienceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const Audience = () => {
  const audiences = [
    {
      title: "IJODKORLAR UCHUN",
      description: "Vizual va interaktiv tajribalarni yaratishni xohlagan ijodkor va dizaynerlar..."
    },
    {
      title: "BIZNES EGALARI UCHUN",
      description: "O'z brendi yoki kompaniyasining ko'rinish vizualini yaxshilashni maqsad qilgan tadbirkorlarga..."
    },
    {
      title: "HAVASKOR YOSHLAR UCHUN",
      description: "Yangi kasbga kirishni va yangi ko'nikmalarni egallashni istagan yoshlarga..."
    },
    {
      title: "TEXNOLOGIYA ISHQIBOZLARI UCHUN",
      description: "Web va mobil ilovalarni yaratishni va yangi texnologiyalarni o'rganishni istaganlarga..."
    }
  ];

  return (
    <AudienceSection>
      <Title>Bu soha kimlar uchun...</Title>
      <AudienceGrid>
        {audiences.map((audience, index) => (
          <AudienceCard key={index}>
            <AudienceTitle>{audience.title}</AudienceTitle>
            <AudienceDescription>{audience.description}</AudienceDescription>
          </AudienceCard>
        ))}
      </AudienceGrid>
    </AudienceSection>
  );
};

export default Audience;
