import { Container, Title, Section, SectionTitle, SectionContent, Text } from "./styles";

const ContactPage: React.FC = () => {
    return (
      <Container>
        <Title>Contact</Title>
        <div>
          <div>
            <Section>
              <SectionTitle>Email</SectionTitle>
              <SectionContent>
                abadengo.games@gmail.com
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>Youtube</SectionTitle>
              <SectionContent>
                <a href="https://www.youtube.com/@AbadengoGames" target="_blank">@AbadengoGames</a>
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>Instagram</SectionTitle>
              <SectionContent>
                <a href="https://www.instagram.com/abadengogames/" target="_blank">@abadengogames</a>
              </SectionContent>
            </Section>
          </div>
          <div>
          <Section>
              <SectionTitle>Whatsapp</SectionTitle>
              <SectionContent>
                +48 729 211 814
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>OLX</SectionTitle>
              <SectionContent>
                <a href="https://www.olx.pl/oferty/user/1V9J0O/" target="_blank">AbadengoGames</a>
              </SectionContent>
            </Section>
            <Section>
              <SectionTitle>Facebook</SectionTitle>
              <SectionContent>
                <a href="https://www.facebook.com/profile.php?id=61572424874192" target="_blank">Abadengo Games</a>
              </SectionContent>
            </Section>
          </div>
        </div>
        <div>
          <Text>NIP: 5273148649</Text>
          <Text>Address: ul Nowolipki 14 Warszawa</Text>
        </div>
      </Container>
    );
  };
  
  export default ContactPage;
