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
import BlogPorVsPara from './pages/BlogPorVsPara';
import BlogPreteriteVsImperfect from './pages/BlogPreteriteVsImperfect';
import BlogReflexiveVerbs from './pages/BlogReflexiveVerbs';
import BlogObjectPronouns from './pages/BlogObjectPronouns';
import BlogFalseCognates from './pages/BlogFalseCognates';
import BlogQuestionFormation from './pages/BlogQuestionFormation';
import BlogSubjunctive from './pages/BlogSubjunctive';
import BlogGustar from './pages/BlogGustar';
import BlogAccentMarks from './pages/BlogAccentMarks';
import BlogSiClauses from './pages/BlogSiClauses';

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
          <Route path="/blogs/por-vs-para" element={<BlogPorVsPara />} />
          <Route path="/blogs/preterite-vs-imperfect" element={<BlogPreteriteVsImperfect />} />
          <Route path="/blogs/reflexive-verbs" element={<BlogReflexiveVerbs />} />
          <Route path="/blogs/object-pronouns" element={<BlogObjectPronouns />} />
          <Route path="/blogs/false-cognates" element={<BlogFalseCognates />} />
          <Route path="/blogs/question-formation" element={<BlogQuestionFormation />} />
          <Route path="/blogs/subjunctive" element={<BlogSubjunctive />} />
          <Route path="/blogs/gustar-and-similar-verbs" element={<BlogGustar />} />
          <Route path="/blogs/spanish-accent-marks" element={<BlogAccentMarks />} />
          <Route path="/blogs/si-clauses-conditionals" element={<BlogSiClauses />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
