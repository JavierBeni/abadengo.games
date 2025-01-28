import { Container, Title, Section, SectionTitle, SectionContent } from "./styles";

const AboutUsPage: React.FC = () => {
    return (
      <Container>
        <Title>About Us</Title>
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
          We understand how important it is for our customers to enjoy their hobbies without worrying about excessive costs. That's why we work hard to offer a wide range of quality products at reasonable prices.
          Whether you’re a seasoned collector or just starting out in this wonderful world, AbadengoGames is the perfect place to find what you need.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Our history</SectionTitle>
          <SectionContent>
            Fundada en 2023, AbadengoGames is an online store born out of a passion for collecting and the thrill of opening packs to discover new cards.
            Our mission is to provide an accessible and exciting experience for fans of trading cards and collectibles, helping them find their favorite products at fair prices.
          </SectionContent>
        </Section>
      </Container>
    );
  };
  
  export default AboutUsPage;
