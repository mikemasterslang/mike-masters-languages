import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Spanish from './pages/Spanish';

import BookOnline from './pages/BookOnline';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spanish" element={<Spanish />} />

          <Route path="/book-online" element={<BookOnline />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
    </HelmetProvider>
  );
}
