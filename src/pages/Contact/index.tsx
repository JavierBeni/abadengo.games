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
      </Container>
    );
  };
  
  export default ContactPage;
