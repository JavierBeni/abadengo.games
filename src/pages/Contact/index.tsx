import { Container, Title, Section, SectionTitle, SectionContent } from "./styles";

const ContactPage: React.FC = () => {
    return (
      <Container>
        <Title>Contact</Title>
        <Section>
          <SectionTitle>Email</SectionTitle>
          <SectionContent>
            abadengo.games@gmail.com
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Whatsapp</SectionTitle>
          <SectionContent>
            +48 729 211 814
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Youtube</SectionTitle>
          <SectionContent>
            <a href="https://www.youtube.com/@AbadengoGames" target="_blank">AbadengoGames</a>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>OLX</SectionTitle>
          <SectionContent>
            <a href="https://www.olx.pl/oferty/user/2M8Tpv/" target="_blank">AbadengoGames</a>
          </SectionContent>
        </Section>
      </Container>
    );
  };
  
  export default ContactPage;
