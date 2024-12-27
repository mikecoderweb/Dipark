import React, { useState } from 'react';
import styled from 'styled-components';

const RequirementsSection = styled.section`
  padding: 4rem 2rem;
  background: #6d28d9;
  color: white;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SpecsCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;

  &:last-child {
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  min-width: 150px;
  font-weight: 500;
  opacity: 0.8;
`;

const SpecValue = styled.span`
  font-weight: 600;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  color: #6d28d9;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SystemRequirements = () => {
  const [copied, setCopied] = useState(false);

  const specs = [
    { label: "Protsessor", value: "Intel core i5 11" },
    { label: "CPU", value: "12/16 GB DDR4" },
    { label: "Video karta", value: "GTX 1650 4GB" },
    { label: "Ekran", value: "13-15 dyuymli Full HD (1920x1080)" }
  ];

  const handleCopy = () => {
    const specText = specs
      .map(spec => `${spec.label}: ${spec.value}`)
      .join('\\n');
    
    navigator.clipboard.writeText(specText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <RequirementsSection>
      <Container>
        <Title>Sizga o'quv jarayonida kerak boladigan</Title>
        <MainTitle>Kompyuter Sozlama RO'YXATI</MainTitle>
        
        <SpecsCard>
          <CopyButton onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </CopyButton>
          
          {specs.map((spec, index) => (
            <SpecItem key={index}>
              <SpecLabel>{spec.label}:</SpecLabel>
              <SpecValue>{spec.value}</SpecValue>
            </SpecItem>
          ))}
        </SpecsCard>
      </Container>
    </RequirementsSection>
  );
};

export default SystemRequirements;
