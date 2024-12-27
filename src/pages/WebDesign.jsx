import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Audience from "../components/Audience";
import CourseStats from "../components/CourseStats";
import Curriculum from "../components/Curriculum";
import SystemRequirements from "../components/SystemRequirements";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";


const PageWrapper = styled.div`
  height: 100vh;
  background: #6d28d9;
`;

const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  position: relative;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

const Icon = styled.div`
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const PhotoshopIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #001e36;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #31a8ff;
  font-weight: bold;
`;

const UXUIText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  transform: rotate(-15deg);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const FigmaIcon = styled.div`
  width: 80px;
  height: 80px;
  position: relative;

  .circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
  }

  .circle1 {
    background: #ff7262;
    top: 0;
    left: 0;
  }
  .circle2 {
    background: #00cf7f;
    top: 0;
    right: 0;
  }
  .circle3 {
    background: #a259ff;
    bottom: 0;
    left: 0;
  }
  .circle4 {
    background: #1abcfe;
    bottom: 0;
    right: 0;
  }
`;

const WebDesign = () => {
  return (
    <PageWrapper>
      <Navbar />
      <HeroSection>
        <Title>Web & Grafik dizayn</Title>
        <Subtitle>Tajribangizni san'atga aylantiring!</Subtitle>

        <IconsContainer>
          <Icon>
            <PhotoshopIcon>Ps</PhotoshopIcon>
          </Icon>

          <Icon>
            <UXUIText>UX & UI</UXUIText>
          </Icon>

          <Icon>
            <FigmaIcon>
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
              <div className="circle circle4"></div>
            </FigmaIcon>
          </Icon>
        </IconsContainer>
      </HeroSection>
      <Audience />
      <CourseStats />
      <Curriculum />
      <SystemRequirements />
      <FAQ/>
      <ContactForm />
      <Footer />
    </PageWrapper>
  );
};

export default WebDesign;
