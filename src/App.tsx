import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Main } from './styles';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  AboutUsPage,
  Cards,
  CartPage,
  CatalogPage,
  ContactPage,
  FAQPage,
  HomePage,
  ItemPage,
  Tips
} from './pages'
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const pingBackend = () => {
      fetch("https://abadengo-backend.onrender.com/").catch(() => {
        console.log("Backend is asleep, waking it up...");
      });
    };
  
    // Ping 14 min
    const interval = setInterval(pingBackend, 14 * 60 * 1000);
    pingBackend(); // Ping initial
  
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Container>
        <Header label='abadengoGames'/>
        <Main>    
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog/:game" element={<CatalogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/products/:id" element={<ItemPage />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </Main>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
