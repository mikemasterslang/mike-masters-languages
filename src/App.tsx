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
import BlogAdjectiveAgreement from './pages/BlogAdjectiveAgreement';
import BlogSpanishArticles from './pages/BlogSpanishArticles';
import BlogTenerExpressions from './pages/BlogTenerExpressions';
import BlogModalVerbs from './pages/BlogModalVerbs';
import BlogPersonalA from './pages/BlogPersonalA';
import BlogComparatives from './pages/BlogComparatives';
import BlogImperative from './pages/BlogImperative';
import BlogFutureTense from './pages/BlogFutureTense';
import BlogHayVsEstar from './pages/BlogHayVsEstar';
import BlogPronunciation from './pages/BlogPronunciation';
import BlogTellingTime from './pages/BlogTellingTime';
import BlogNegation from './pages/BlogNegation';
import BlogPrepositions from './pages/BlogPrepositions';
import BlogCognatePatterns from './pages/BlogCognatePatterns';
import BlogStemChangingVerbs from './pages/BlogStemChangingVerbs';
import BlogPresentPerfect from './pages/BlogPresentPerfect';
import BlogGerunds from './pages/BlogGerunds';
import BlogExpressingOpinions from './pages/BlogExpressingOpinions';
import BlogPassiveVoice from './pages/BlogPassiveVoice';
import BlogNumbers from './pages/BlogNumbers';
import BlogWeatherExpressions from './pages/BlogWeatherExpressions';
import BlogRelativeClauses from './pages/BlogRelativeClauses';
import BlogGreetings from './pages/BlogGreetings';
import BlogFalseBeginners from './pages/BlogFalseBeginners';
import BlogFillerWords from './pages/BlogFillerWords';

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
          <Route path="/blogs/adjective-agreement" element={<BlogAdjectiveAgreement />} />
          <Route path="/blogs/spanish-articles" element={<BlogSpanishArticles />} />
          <Route path="/blogs/tener-expressions" element={<BlogTenerExpressions />} />
          <Route path="/blogs/modal-verbs" element={<BlogModalVerbs />} />
          <Route path="/blogs/personal-a" element={<BlogPersonalA />} />
          <Route path="/blogs/comparatives-and-superlatives" element={<BlogComparatives />} />
          <Route path="/blogs/spanish-commands-imperative" element={<BlogImperative />} />
          <Route path="/blogs/future-tense" element={<BlogFutureTense />} />
          <Route path="/blogs/hay-vs-estar" element={<BlogHayVsEstar />} />
          <Route path="/blogs/spanish-pronunciation" element={<BlogPronunciation />} />
          <Route path="/blogs/telling-time-and-dates" element={<BlogTellingTime />} />
          <Route path="/blogs/negation" element={<BlogNegation />} />
          <Route path="/blogs/prepositions" element={<BlogPrepositions />} />
          <Route path="/blogs/cognate-patterns" element={<BlogCognatePatterns />} />
          <Route path="/blogs/stem-changing-verbs" element={<BlogStemChangingVerbs />} />
          <Route path="/blogs/present-perfect" element={<BlogPresentPerfect />} />
          <Route path="/blogs/gerunds-present-continuous" element={<BlogGerunds />} />
          <Route path="/blogs/expressing-opinions" element={<BlogExpressingOpinions />} />
          <Route path="/blogs/passive-voice-and-se" element={<BlogPassiveVoice />} />
          <Route path="/blogs/spanish-numbers" element={<BlogNumbers />} />
          <Route path="/blogs/weather-expressions" element={<BlogWeatherExpressions />} />
          <Route path="/blogs/relative-clauses" element={<BlogRelativeClauses />} />
          <Route path="/blogs/spanish-greetings" element={<BlogGreetings />} />
          <Route path="/blogs/restart-spanish" element={<BlogFalseBeginners />} />
          <Route path="/blogs/filler-words-and-connectors" element={<BlogFillerWords />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
