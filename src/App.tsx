import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import Blogs from './pages/Blogs';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
