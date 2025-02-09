import { useTranslation } from "react-i18next";
import { Container, Title, Section, SectionTitle, SectionContent } from "./styles";

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();
    return (
      <Container>
        <Title>{t("titleAboutUs")}</Title>
        <Section>
          <SectionTitle>{t("titleOurMission")}</SectionTitle>
          <SectionContent>{t("textOurMission")}</SectionContent>
        </Section>
        <Section>
          <SectionTitle>{t("titleOurHistory")}</SectionTitle>
          <SectionContent>{t("textOurhistory")}</SectionContent>
        </Section>
        <Section>
          <SectionTitle>{t("titleHowWeDoIt")}</SectionTitle>
          <SectionContent>{t("textHowWeDoIt")}</SectionContent>
        </Section>
      </Container>
    );
  };
  
  export default AboutUsPage;
