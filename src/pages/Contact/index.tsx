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
      </Container>
    );
  };
  
  export default ContactPage;
