// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FAQSection = styled.section`
//   padding: 4rem 2rem;
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 2rem;
//   color: #1f2937;
//   font-weight: 700;
//   text-align: center;
// `;

// const FAQList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const FAQItem = styled.div`
//   border-bottom: 1px solid #e5e7eb;
//   padding-bottom: 1rem;
// `;

// const Question = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
//   padding: 1rem 0;
//   color: #1f2937;
//   font-weight: 500;

//   &:hover {
//     color: #6d28d9;
//   }
// `;

// const Icon = styled.span`
//   transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
//   transition: transform 0.3s ease;
//   display: flex;
//   align-items: center;
  
//   svg {
//     width: 20px;
//     height: 20px;
//     stroke: currentColor;
//   }
// `;

// const Answer = styled.div`
//   max-height: ${props => props.isOpen ? '500px' : '0'};
//   overflow: hidden;
//   transition: max-height 0.3s ease-in-out;
//   color: #6b7280;
//   line-height: 1.6;
//   padding-bottom: ${props => props.isOpen ? '1rem' : '0'};

//   p {
//     margin-bottom: 0.5rem;
//   }

//   ul {
//     list-style: none;
//     padding-left: 1rem;
//   }

//   li {
//     margin-bottom: 0.5rem;
//     position: relative;
    
//     &:before {
//       content: "—";
//       position: absolute;
//       left: -1rem;
//     }
//   }
// `;

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "Kursda o'qishim uchun kompyuterim bo'lishi kerakmi?",
//       answer: (
//         <>
//           <p>Shaxsiy kompyuteringiz bo'lishi lozim, dars davomida va o'tilgan mavzularni mustahkamlash tariqasida sizga uyga vazifalar berib boriladi. Ularni bajarishingizda kerak bo'ladi. Kursni bitirganimgizdan so'ng shaxsiy rivojlanishingiz uchun ham kompyuter kerak bo'ladi.</p>
//           <p>Quyidagi xususiyatlarga ega kompyuter bo'lishi maqsadga muvofiq:</p>
//           <ul>
//             <li>CPU Core i7</li>
//             <li>RAM 8GB</li>
//             <li>GPU 2GB</li>
//           </ul>
//         </>
//       )
//     },
//     {
//       question: "Nima uchun Saidoff Academyda o'qishim kerak?",
//       answer: "Saidoff Academy zamonaviy ta'lim metodikasi, professional o'qituvchilar va amaliy tajribaga asoslangan o'quv dasturi bilan ajralib turadi. Bizda o'qish orqali siz nafaqat nazariy bilimlarni, balki real loyihalarda ishlash tajribasini ham olasiz."
//     }
//   ];

//   return (
//     <FAQSection>
//       <Title>Savollaringiz bormi?</Title>
//       <FAQList>
//         {faqs.map((faq, index) => (
//           <FAQItem key={index}>
//             <Question onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
//               {faq.question}
//               <Icon isOpen={openIndex === index}>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="6 9 12 15 18 9"></polyline>
//                 </svg>
//               </Icon>
//             </Question>
//             <Answer isOpen={openIndex === index}>
//               {faq.answer}
//             </Answer>
//           </FAQItem>
//         ))}
//       </FAQList>
//     </FAQSection>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';
import styled from 'styled-components';

// Form Section Styles
const FormSection = styled.section`
  background: white;
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #1f2937;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: #f9fafb;
  color: #1f2937;

  &:focus {
    outline: none;
    border-color: #6d28d9;
    box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SelectWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #6b7280;
    pointer-events: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: #f9fafb;
  color: #1f2937;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #6d28d9;
    box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #6d28d9;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #5b21b6;
  }
`;

// FAQ Section Styles
const FAQSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1f2937;
  font-weight: 700;
  text-align: center;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
  color: #1f2937;
  font-weight: 500;

  &:hover {
    color: #6d28d9;
  }
`;

const Icon = styled.span`
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }
`;

const Answer = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  color: #6b7280;
  line-height: 1.6;
  padding-bottom: ${props => props.isOpen ? '1rem' : '0'};
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState("");

  const faqs = [
    {
      question: "Kursda o'qishim uchun kompyuterim bo'lishi kerakmi?",
      answer: (
        <p>Shaxsiy kompyuteringiz bo'lishi lozim, dars davomida va o'tilgan mavzularni mustahkamlash tariqasida sizga uyga vazifalar berib boriladi. Ularni bajarishingizda kerak bo'ladi. Kursni bitirganingizdan so'ng shaxsiy rivojlanishingiz uchun ham kompyuter kerak bo'ladi.
        Quyidagi xususiyatlarga ega kompyuter boʻlishi maqsadga muvofiq:
        CPU Core i7, RAM 8GB, GPU 2GB.</p>
      )
    },
    {
      question: "Shahsiy kompyuterim bo;lishi shartmi?",
      answer: "Saidoff Academy zamonaviy ta'lim metodikasi..."
    },
    {
      question: "Nima uchun Saidoff Academyda o'qishim kerak?",
      answer: "Saidoff Academy zamonaviy ta'lim metodikasi..."
    }
  ];

  return (
    <>
      <FormSection>
        <Container>
          <FormTitle>Orzularni haqiqatga aylantiruvchi qadam!</FormTitle>
          <FormGroup>
            <Label>F.I.SH</Label>
            <Input type="text" placeholder="Ismingizni kiriting" />
          </FormGroup>
          <FormGroup>
            <Label>Telefon raqamingiz</Label>
            <Input type="tel" placeholder="+998" />
          </FormGroup>
          <FormGroup>
            <Label>Men shu Kasbdan boshlayman!</Label>
            <SelectWrapper>
              <Select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                <option value="" disabled>Kursni tanlang</option>
                <option value="frontend">FrontEnd dasturlash</option>
                <option value="graphic">Grafik & Branding dizayn</option>
                <option value="backend">BackEnd dasturlash</option>
                <option value="web">Web & Ux/Ui dizayn</option>
              </Select>
            </SelectWrapper>
          </FormGroup>
          <SubmitButton>Yuborish</SubmitButton>
        </Container>
      </FormSection>
      
      <FAQSection>
        <Title>Savollaringiz bormi?</Title>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                {faq.question}
                <Icon isOpen={openIndex === index}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </Icon>
              </Question>
              <Answer isOpen={openIndex === index}>
                {faq.answer}
              </Answer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQSection>
    </>
  );
};

export default FAQ;

