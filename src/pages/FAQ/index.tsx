import { useState } from "react";
import { Container, Title, Question, Answer, AccordionItem, Arrow } from "./styles";


const FAQPage: React.FC = () => {
    const faqs = [
      {
        question: 'What is the estimated shipping time?',
        answer: 'The estimated shipping time is 3 to 5 business days within the peninsula.',
      },
      {
        question: 'Can I return a product?',
        answer: 'Yes, but the returned product will be examined to verify that it has not been manipulated or resealed.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept payments by card, Blik card and PayPal. Blik will be the preferred method.',
      },
      {
        question: 'Do you make shipments?',
        answer: 'Right now, no. In future probably yes.',
      },
      {
        question: 'Who you are?',
        answer: ' I am Spanish worker living in Warsaw with interest in geek and nerd stuff. :)',
      },
    ];
  
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <Container>
        <Title>FAQ</Title>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            <Question isOpen={openIndex === index} onClick={() => toggleAccordion(index)}>
              {faq.question}
              <Arrow isOpen={openIndex === index}>▼</Arrow>
            </Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </AccordionItem>
        ))}
      </Container>
    );
  };
  
  export default FAQPage;