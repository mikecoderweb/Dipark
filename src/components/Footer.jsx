import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 0 0 2rem;
  background: white;
  color: #1f2937;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 4rem;
  filter: grayscale(100%) brightness(95%);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const LogoSection = styled.div`
  img {
    width: 180px;
    margin-bottom: 1rem;
  }
`;

const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #4b5563;
  font-size: 0.95rem;
`;

const Address = styled.div`
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Copyright = styled.div`
  text-align: center;
  color: #6b7280;
  font-size: 0.9rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <LogoSection>
            <img src="/images/logo.svg" alt="Saidoff Academy" />
          </LogoSection>
          
          <CoursesList>
            <div>FRONTEND DASTURLASH</div>
            <div>GRAFIK & BRANDING DIZAYN</div>
            <div>BACKEND DASTURLASH</div>
            <div>W EB & UX/UI DIZAYN</div>
          </CoursesList>
          
          <Address>
            <p>Toshkent sh. Shayxontohur tumani,</p>
            <p>Qoratosh 5a</p>
            <p>Mo'ljal: Samarqand Darvoza TЦ</p>
          </Address>
        </FooterContent>

        <Copyright>
          {new Date().getFullYear()} Saidoffgroup
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
