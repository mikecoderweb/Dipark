import React, { useState } from 'react';
import styled from 'styled-components';
import FAQ from './FAQ';

const CoursesSection = styled.section`
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

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CourseCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  
  const courses = [
    {
      title: "WEB & UX/UI DIZAYN",
      description: "Mutaxassislar bilan amaliy trenigilar yordamida web-sahifalarni kodlash va dizayn qilishni o'rganing. Kursga yoziling yoki Web-dizayn, UX va Vizual Dizayn bo'yicha dasturlarga eshituvchi.",
      icon: "/images/web-design-icon.svg"
    },
    {
      title: "FRONTEND DASTURCHI",
      description: "HTML & CSS, va JavaScript yordamida front-end dasturchi bo'ling va har qanday ekran o'lchamiga mos veb-ilovalarni rivojlantiring.",
      icon: "/images/frontend-icon.svg"
    }
  ];

  return (
    <>
      <CoursesSection>
        <Title>Kelajak kasblari kaftingizda</Title>
        <Description>
          Qisqa muddat ichida serdaromad va eng talabgir kasblardan birini egallang.
          Kelajagingizni bugundan boshlab yaratish uchun biz bilan birga bo'ling!
        </Description>
        <CourseGrid>
          {courses.map((course, index) => (
            <CourseCard key={index}>
              <IconContainer>
                <img 
                  src={course.icon} 
                  alt={course.title}
                  onError={(e) => {
                    e.target.src = '/images/placeholder-icon.svg';
                  }}
                />
              </IconContainer>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseDescription>{course.description}</CourseDescription>
            </CourseCard>
          ))}
        </CourseGrid>
      </CoursesSection>

      <FAQ />
    </>
  );
};

export default Courses;
