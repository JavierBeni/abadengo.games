import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Main } from './styles';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  AboutUsPage,
  CartPage,
  CatalogPage,
  ContactPage,
  FAQPage,
  HomePage,
  ItemPage
} from './pages'


function App() {
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
          </Routes>
        </Main>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
