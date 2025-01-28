import { useState } from "react";
import { Container, Title, Question, Answer, AccordionItem, Arrow } from "./styles";


const FAQPage: React.FC = () => {
    const faqs = [
      {
        question: '¿Cuál es el tiempo estimado de envío?',
        answer: 'El tiempo estimado de envío es de 3 a 5 días hábiles dentro de la península.',
      },
      {
        question: '¿Puedo devolver un producto?',
        answer: 'Sí, aceptamos devoluciones dentro de los primeros 14 días después de la compra.',
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos pagos con tarjeta de crédito, débito y PayPal.',
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