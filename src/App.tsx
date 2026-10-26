import { BrowserRouter as Router, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
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
  ItemPage,
  Tips
} from './pages'
import { useEffect } from 'react';
import { useStore } from './store';
import { isSupportedLanguage, localizedPath } from './utils/localizedRoutes';
import { useTranslation } from 'react-i18next';


function LocalizedLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const { i18n } = useTranslation();
  const storedLanguage = useStore((state) => state.language);
  const modifyLanguage = useStore((state) => state.modifyLanguage);

  useEffect(() => {
    if (!isSupportedLanguage(lang)) return;
    if (i18n.language !== lang) void i18n.changeLanguage(lang);
    if (storedLanguage !== lang) modifyLanguage(lang);
  }, [i18n, lang, modifyLanguage, storedLanguage]);

  if (!isSupportedLanguage(lang)) {
    return (
      <Navigate
        to={localizedPath(`${location.pathname}${location.search}${location.hash}`, 'en')}
        replace
      />
    );
  }

  return (
    <Container>
        <Header label='abadengoGames'/>
        <Main>    
          <Outlet />
        </Main>
        <Footer/>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<LocalizedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="catalog/:game" element={<CatalogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="product/:game/:id" element={<ItemPage />} />
          <Route path="products/:id" element={<ItemPage />} />
          <Route path="tips" element={<Tips />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
