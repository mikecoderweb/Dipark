import React, { useState } from 'react';
import styled from 'styled-components';

const CurriculumSection = styled.section`
  padding: 4rem 2rem;
  background: #6d28d9;
  color: white;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ModuleAccordion = styled.div`
  margin-bottom: 1rem;
`;

const ModuleHeader = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  ${props => props.isOpen && `
    border-radius: 12px 12px 0 0;
    background: rgba(255, 255, 255, 0.15);
  `}
`;

const ModuleTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;

  span.module-number {
    opacity: 0.8;
  }
`;

const Arrow = styled.span`
  transition: transform 0.3s ease;
  ${props => props.isOpen && 'transform: rotate(180deg);'}
`;

const LessonsList = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Lesson = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;

  &:last-child {
    border-bottom: none;
  }

  span.lesson-number {
    opacity: 0.6;
    min-width: 60px;
  }
`;

const Curriculum = () => {
  const [openModule, setOpenModule] = useState(0);

  const modules = [
    {
      title: "Figma va dasturi ustida ishlash",
      lessons: [
        "Figma dasturi bilan tanishish",
        "Shakllar, pentooli, position bilan ishlash",
        "Prototip va Animatsiya",
        "Smart animatsiya asoslari",
        "Parallax, immersiv, carusel slide animatsiya",
        "Komponentlar",
        "Bootstrap va Auto layout bilan ishlash",
        "Amaliy ish va Guruh ishi"
      ]
    },
    {
      title: "Figma va Ux/Ui asoslari",
      lessons: []
    },
    {
      title: "Photoshop va Grafik dizayn",
      lessons: []
    },
    {
      title: "illustrator va Vectorlar",
      lessons: []
    },
    {
      title: "Corel draw va Packaging dizaynlar",
      lessons: []
    },
    {
      title: "Yakuniy Diplom ishi",
      lessons: []
    },
    {
      title: "Real loyihalar bilan ishlash qoidasi",
      lessons: []
    },
    {
      title: "Real loyihalarni Portfolioga joylash",
      lessons: []
    }
  ];

  return (
    <CurriculumSection>
      <Container>
        {modules.map((module, moduleIndex) => (
          <ModuleAccordion key={moduleIndex}>
            <ModuleHeader 
              isOpen={openModule === moduleIndex}
              onClick={() => setOpenModule(openModule === moduleIndex ? -1 : moduleIndex)}
            >
              <ModuleTitle>
                <span className="module-number">{String(moduleIndex + 1).padStart(2, '0')}-modul:</span>
                {module.title}
              </ModuleTitle>
              <Arrow isOpen={openModule === moduleIndex}>↓</Arrow>
            </ModuleHeader>
            
            {openModule === moduleIndex && module.lessons.length > 0 && (
              <LessonsList>
                {module.lessons.map((lesson, lessonIndex) => (
                  <Lesson key={lessonIndex}>
                    <span className="lesson-number">{lessonIndex + 1}-dars:</span>
                    {lesson}
                  </Lesson>
                ))}
              </LessonsList>
            )}
          </ModuleAccordion>
        ))}
      </Container>
    </CurriculumSection>
  );
};

export default Curriculum;
