import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  background: #6d28d9;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.9;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const Features = () => {
  const features = [
    {
      title: "Sifatli Ta'lim",
      description: "HAR BIR KURS PROFESSIONAL IT MUTAXASSISLARI TOMONIDAN O'QITILADI VA DARS REJALAR AMALIYOT SIFATI YUQORI BO'LIB, ZAMONAVIY TEXNOLOGIYALARGA ASOSLANGAN",
      image: "/images/feature1.jpg"
    },
    {
      title: "Moslashuvchan O'qish",
      description: "HAR BIR KURS PROFESSIONAL IT MUTAXASSISLARI TOMONIDAN O'QITILADI VA DARS REJALAR AMALIYOT SIFATI YUQORI BO'LIB, ZAMONAVIY TEXNOLOGIYALARGA ASOSLANGAN",
      image: "/images/feature2.jpg"
    },
    {
      title: "Eng So'ngi Texnogiyalar",
      description: "HAR BIR KURS PROFESSIONAL IT MUTAXASSISLARI TOMONIDAN O'QITILADI VA DARS REJALAR AMALIYOT SIFATI YUQORI BO'LIB, ZAMONAVIY TEXNOLOGIYALARGA ASOSLANGAN",
      image: "/images/feature3.jpg"
    }
  ];

  return (
    <FeaturesSection>
      <Title>Nega bizni tanlashadi?</Title>
      <Description>
        Bizning maqsadimiz zamonaviy IT kasblarini qisqa muddatda, sifatli 
        va samarali ta'lim berish. Har biringizdan professional IT mutaxassis 
        bo'lishga shoshiling!
      </Description>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureImage 
              src={feature.image} 
              alt={feature.title}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
              }}
            />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesSection>
  );
};

export default Features;
