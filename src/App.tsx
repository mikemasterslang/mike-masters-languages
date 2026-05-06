import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import Blogs from './pages/Blogs';
import BlogSerVsEstar from './pages/BlogSerVsEstar';
import BlogNounGender from './pages/BlogNounGender';
import BlogSubjectPronouns from './pages/BlogSubjectPronouns';
import BlogBeginnerMistakes from './pages/BlogBeginnerMistakes';

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
          <Route path="/blogs/ser-vs-estar" element={<BlogSerVsEstar />} />
          <Route path="/blogs/spanish-noun-gender" element={<BlogNounGender />} />
          <Route path="/blogs/drop-subject-pronouns" element={<BlogSubjectPronouns />} />
          <Route path="/blogs/beginner-spanish-mistakes" element={<BlogBeginnerMistakes />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
