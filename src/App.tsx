import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

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
import BlogConditional from './pages/BlogConditional';
import BlogPeroVsSino from './pages/BlogPeroVsSino';
import BlogDiminutives from './pages/BlogDiminutives';
import BlogSaberVsConocer from './pages/BlogSaberVsConocer';
import BlogPluperfect from './pages/BlogPluperfect';
import BlogIrregularVerbs from './pages/BlogIrregularVerbs';
import BlogBodyParts from './pages/BlogBodyParts';
import BlogFoodDrink from './pages/BlogFoodDrink';
import BlogTravelVocab from './pages/BlogTravelVocab';
import BlogFamilyVocab from './pages/BlogFamilyVocab';
import BlogEmotions from './pages/BlogEmotions';
import BlogColours from './pages/BlogColours';
import BlogDaysMonths from './pages/BlogDaysMonths';
import BlogClothes from './pages/BlogClothes';
import BlogHomeVocab from './pages/BlogHomeVocab';
import BlogMeetingPeople from './pages/BlogMeetingPeople';
import BlogRAndRR from './pages/BlogRAndRR';
import BlogVowelSounds from './pages/BlogVowelSounds';
import BlogBVsV from './pages/BlogBVsV';
import BlogCAndZ from './pages/BlogCAndZ';
import BlogHAndJ from './pages/BlogHAndJ';
import BlogStressRules from './pages/BlogStressRules';
import BlogLinkingWords from './pages/BlogLinkingWords';
import BlogRegionalAccents from './pages/BlogRegionalAccents';
import BlogDailyPractice from './pages/BlogDailyPractice';
import BlogBestApps from './pages/BlogBestApps';
import BlogLanguageExchange from './pages/BlogLanguageExchange';
import BlogSpanishMedia from './pages/BlogSpanishMedia';
import BlogVocabFast from './pages/BlogVocabFast';
import BlogStopTranslating from './pages/BlogStopTranslating';
import BlogPlateau from './pages/BlogPlateau';
import BlogHomeImmersion from './pages/BlogHomeImmersion';
import BlogTripPrep from './pages/BlogTripPrep';
import BlogLearningGoals from './pages/BlogLearningGoals';
import BlogMotivation from './pages/BlogMotivation';
import BlogA1ToA2 from './pages/BlogA1ToA2';
import BlogSpeakSooner from './pages/BlogSpeakSooner';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />

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
          <Route path="/blogs/conditional-tense" element={<BlogConditional />} />
          <Route path="/blogs/pero-vs-sino" element={<BlogPeroVsSino />} />
          <Route path="/blogs/diminutives" element={<BlogDiminutives />} />
          <Route path="/blogs/saber-vs-conocer" element={<BlogSaberVsConocer />} />
          <Route path="/blogs/pluperfect-tense" element={<BlogPluperfect />} />
          <Route path="/blogs/irregular-verbs" element={<BlogIrregularVerbs />} />
          <Route path="/blogs/body-parts" element={<BlogBodyParts />} />
          <Route path="/blogs/food-and-drink" element={<BlogFoodDrink />} />
          <Route path="/blogs/travel-vocabulary" element={<BlogTravelVocab />} />
          <Route path="/blogs/family-vocabulary" element={<BlogFamilyVocab />} />
          <Route path="/blogs/expressing-emotions" element={<BlogEmotions />} />
          <Route path="/blogs/colours-in-spanish" element={<BlogColours />} />
          <Route path="/blogs/days-months-seasons" element={<BlogDaysMonths />} />
          <Route path="/blogs/clothes-and-shopping" element={<BlogClothes />} />
          <Route path="/blogs/home-vocabulary" element={<BlogHomeVocab />} />
          <Route path="/blogs/meeting-people-phrases" element={<BlogMeetingPeople />} />
          <Route path="/blogs/r-and-rr-sounds" element={<BlogRAndRR />} />
          <Route path="/blogs/spanish-vowel-sounds" element={<BlogVowelSounds />} />
          <Route path="/blogs/b-and-v-sounds" element={<BlogBVsV />} />
          <Route path="/blogs/c-and-z-sounds" element={<BlogCAndZ />} />
          <Route path="/blogs/h-and-j-sounds" element={<BlogHAndJ />} />
          <Route path="/blogs/stress-and-intonation" element={<BlogStressRules />} />
          <Route path="/blogs/linking-in-speech" element={<BlogLinkingWords />} />
          <Route path="/blogs/regional-accents" element={<BlogRegionalAccents />} />
          <Route path="/blogs/daily-spanish-practice" element={<BlogDailyPractice />} />
          <Route path="/blogs/best-apps-for-spanish" element={<BlogBestApps />} />
          <Route path="/blogs/language-exchange" element={<BlogLanguageExchange />} />
          <Route path="/blogs/spanish-tv-films-podcasts" element={<BlogSpanishMedia />} />
          <Route path="/blogs/build-vocabulary-fast" element={<BlogVocabFast />} />
          <Route path="/blogs/stop-translating-in-your-head" element={<BlogStopTranslating />} />
          <Route path="/blogs/overcome-language-plateau" element={<BlogPlateau />} />
          <Route path="/blogs/home-immersion-spanish" element={<BlogHomeImmersion />} />
          <Route path="/blogs/prepare-spanish-for-travel" element={<BlogTripPrep />} />
          <Route path="/blogs/spanish-learning-goals" element={<BlogLearningGoals />} />
          <Route path="/blogs/stay-motivated-learning-spanish" element={<BlogMotivation />} />
          <Route path="/blogs/a1-to-a2-spanish" element={<BlogA1ToA2 />} />
          <Route path="/blogs/start-speaking-spanish-sooner" element={<BlogSpeakSooner />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
