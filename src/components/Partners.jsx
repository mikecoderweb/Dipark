import React from 'react';
import styled from 'styled-components';

const PartnersSection = styled.section`
  background: #6d28d9;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartnerCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16/9;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  img {
    max-width: 100%;
    max-height: 60px;
    object-fit: contain;
  }
`;

const Partners = () => {
  const partners = [
    {
      name: "BYD",
      logo: "/images/partners/byd-logo.svg"
    },
    {
      name: "Aston Alliance",
      logo: "/images/partners/aston-alliance-logo.svg"
    },
    {
      name: "Chere",
      logo: "/images/partners/chere-logo.svg"
    },
    {
      name: "Bunen",
      logo: "/images/partners/bunen-logo.svg"
    }
  ];

  return (
    <PartnersSection>
      <Title>Bizning Hamkorlarimiz</Title>
      <PartnersGrid>
        {partners.map((partner, index) => (
          <PartnerCard key={index}>
            <img 
              src={partner.logo} 
              alt={partner.name}
              onError={(e) => {
                e.target.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'><text x='50%' y='50%' font-size='18' text-anchor='middle' alignment-baseline='middle' fill='white'>${partner.name}</text></svg>`;
              }}
            />
          </PartnerCard>
        ))}
      </PartnersGrid>
    </PartnersSection>
  );
};

export default Partners;
