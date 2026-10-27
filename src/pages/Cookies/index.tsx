import { useTranslation } from "react-i18next";
import { Container, Title, Section, SectionTitle, SectionContent } from "./styles";
import Seo from "../../components/Seo";

const CookiesPage: React.FC = () => {
  const { t } = useTranslation();
    return (
      <Container>
        <Seo title={t("seoCookiesTitle")} description={t("seoCookiesDescription")} />
        <Title>Cookies</Title>
        <Section>
          <SectionContent>{t("textCookies")}</SectionContent>
        </Section>
        <Section>
          <SectionTitle>{t("titleWhatAreCookies")}</SectionTitle>
          <SectionContent>{t("textWhatAreCookies")}</SectionContent>
        </Section>
        <Section>
          <SectionTitle>{t("titleWhatUseCookies")}</SectionTitle>
          <SectionContent>{t("textWhatUseCookies")}</SectionContent>
        </Section>
      </Container>
    );
  };
  
  export default CookiesPage;