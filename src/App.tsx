import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Componentes de tus páginas
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from './styles';
import Catalog from './pages/Catalog';
import FAQPage from './pages/FAQ';
import AboutUsPage from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Container>
        <Header label='abadengoGames'/>
        <div>    
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
          </Routes>
        </div>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
