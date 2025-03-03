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
import { useEffect, useState } from 'react';
import { useStore } from './store';


function App() {

  const [, setForceRender] = useState(0);
  const language = useStore((state) => state.language);
  
  useEffect(() => {
    setForceRender((prev) => prev + 1);
  }, [language]);
  return (
    <Router>
      <Container>
        <Header label='abadengoGames'/>
        <Main>    
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="catalog/:game" element={<CatalogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="products/:id" element={<ItemPage />} />
            <Route path="cards" element={<Cards />} />
            <Route path="tips" element={<Tips />} />
          </Routes>
        </Main>
        <Footer/>
      </Container>
    </Router>
  );
}
// {
//   "rewrites": [
//     { "source": "/(.*)", "destination": "/" }
//   ]
// }
// {
//   "redirects": [
//     {
//       "source": "/(.*)",
//       "destination": "https://abadengogames.com/",
//       "permanent": true
//     }
//   ]
// }

export default App;
