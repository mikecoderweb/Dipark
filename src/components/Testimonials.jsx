import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  text-align: left;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    opacity: 0.3;
    font-family: serif;
  }
`;

const Quote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
`;

const ProfileInfo = styled.div`
  text-align: left;
`;

const Name = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 600;
`;

const Role = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  text-transform: uppercase;
`;

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Saidoff akademiyasi haqida aytadigan muammolar bu yerda ularni yaxshi tushular va yetarli darajada yechilar mavjud. Bu joy oson va imkonlari uchun ajoyib joy.",
      name: "Masudbek Mo'minov",
      role: "FLUTTER AMALIYOTCHI",
      initials: "M"
    },
    {
      quote: "Akademiya innovatsion yechimlar va zamonaviy texnologiyalar bilan shug'ullanadi. Kurslar doimiy ravishda yangilanib, texnologiyalardagi so'nggi trendlar bilan tanishish imkoniyatini beradi.",
      name: "Shamsiddin Abdurazzaqov",
      role: "BACKEND AMALIYOTCHI",
      initials: "S"
    }
  ];

  return (
    <TestimonialsSection>
      <Title>O'quvchilarimizdan izohlari</Title>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Quote>{testimonial.quote}</Quote>
            <Profile>
              <Avatar>{testimonial.initials}</Avatar>
              <ProfileInfo>
                <Name>{testimonial.name}</Name>
                <Role>{testimonial.role}</Role>
              </ProfileInfo>
            </Profile>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;
