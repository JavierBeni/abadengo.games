import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Title, Question, Answer, AccordionItem, Arrow } from "./styles";


const TipsPage: React.FC = () => {
    const { t } = useTranslation();
    const faqs = [
      {
        question: t("tipProduct"),
        answer: t("answerTipProduct"),
      },
      {
        question: t("tipCollect"),
        answer: t("answerTipCollect"),
      },
      {
        question: t("tipBooster"),
        answer: t("answerTipBooster"),
      },
      {
        question: t("tipWhyBooster"),
        answer: t("answerTipWhyBooster"),
      },
      {
        question: t("tipSealedProduct"),
        answer: t("answerTipSealedProduct"),
      },
      {
        question: t("tipScam"),
        answer: t("answerTipScam"),
      }
    ];
  
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <Container>
        <Title>{t("linkTips")}</Title>
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
  
  export default TipsPage;