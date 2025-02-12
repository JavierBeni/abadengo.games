import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Title, Question, Answer, AccordionItem, Arrow } from "./styles";


const FAQPage: React.FC = () => {
    const { t } = useTranslation();
    const faqs = [
      {
        question: t("questionReturnProduct"),
        answer: t("answerReturnProduct"),
      },
      {
        question: t("questionPaymentMethods"),
        answer: t("answerPaymentMethods"),
      },
      {
        question: t("questionShipments"),
        answer: t("answerShipments"),
      },
      {
        question: t("questionShipmentTime"),
        answer: t("answerShipmentTime"),
      },
      {
        question: t("questionWho"),
        answer: t("answerWho"),
      },
      {
        question: t("questionTrust"),
        answer: t("answerTrust"),
      },
      {
        question: t("questionWhyYou"),
        answer: t("answerWhyYou"),
      },
      {
        question: t("questionExpensive"),
        answer: t("answerExpensive"),
      },
    ];
  
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <Container>
        <Title>{t("linkFAQ")}</Title>
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