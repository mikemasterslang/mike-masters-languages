import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const GetStarted = lazy(() => import('./pages/GetStarted'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogSerVsEstar = lazy(() => import('./pages/BlogSerVsEstar'));
const BlogNounGender = lazy(() => import('./pages/BlogNounGender'));
const BlogSubjectPronouns = lazy(() => import('./pages/BlogSubjectPronouns'));
const BlogBeginnerMistakes = lazy(() => import('./pages/BlogBeginnerMistakes'));
const BlogPorVsPara = lazy(() => import('./pages/BlogPorVsPara'));
const BlogPreteriteVsImperfect = lazy(() => import('./pages/BlogPreteriteVsImperfect'));
const BlogReflexiveVerbs = lazy(() => import('./pages/BlogReflexiveVerbs'));
const BlogObjectPronouns = lazy(() => import('./pages/BlogObjectPronouns'));
const BlogFalseCognates = lazy(() => import('./pages/BlogFalseCognates'));
const BlogQuestionFormation = lazy(() => import('./pages/BlogQuestionFormation'));
const BlogSubjunctive = lazy(() => import('./pages/BlogSubjunctive'));
const BlogGustar = lazy(() => import('./pages/BlogGustar'));
const BlogAccentMarks = lazy(() => import('./pages/BlogAccentMarks'));
const BlogSiClauses = lazy(() => import('./pages/BlogSiClauses'));
const BlogAdjectiveAgreement = lazy(() => import('./pages/BlogAdjectiveAgreement'));
const BlogSpanishArticles = lazy(() => import('./pages/BlogSpanishArticles'));
const BlogTenerExpressions = lazy(() => import('./pages/BlogTenerExpressions'));
const BlogModalVerbs = lazy(() => import('./pages/BlogModalVerbs'));
const BlogPersonalA = lazy(() => import('./pages/BlogPersonalA'));
const BlogComparatives = lazy(() => import('./pages/BlogComparatives'));
const BlogImperative = lazy(() => import('./pages/BlogImperative'));
const BlogFutureTense = lazy(() => import('./pages/BlogFutureTense'));
const BlogHayVsEstar = lazy(() => import('./pages/BlogHayVsEstar'));
const BlogPronunciation = lazy(() => import('./pages/BlogPronunciation'));
const BlogTellingTime = lazy(() => import('./pages/BlogTellingTime'));
const BlogNegation = lazy(() => import('./pages/BlogNegation'));
const BlogPrepositions = lazy(() => import('./pages/BlogPrepositions'));
const BlogCognatePatterns = lazy(() => import('./pages/BlogCognatePatterns'));
const BlogStemChangingVerbs = lazy(() => import('./pages/BlogStemChangingVerbs'));
const BlogPresentPerfect = lazy(() => import('./pages/BlogPresentPerfect'));
const BlogGerunds = lazy(() => import('./pages/BlogGerunds'));
const BlogExpressingOpinions = lazy(() => import('./pages/BlogExpressingOpinions'));
const BlogPassiveVoice = lazy(() => import('./pages/BlogPassiveVoice'));
const BlogNumbers = lazy(() => import('./pages/BlogNumbers'));
const BlogWeatherExpressions = lazy(() => import('./pages/BlogWeatherExpressions'));
const BlogRelativeClauses = lazy(() => import('./pages/BlogRelativeClauses'));
const BlogGreetings = lazy(() => import('./pages/BlogGreetings'));
const BlogFalseBeginners = lazy(() => import('./pages/BlogFalseBeginners'));
const BlogFillerWords = lazy(() => import('./pages/BlogFillerWords'));
const BlogConditional = lazy(() => import('./pages/BlogConditional'));
const BlogPeroVsSino = lazy(() => import('./pages/BlogPeroVsSino'));
const BlogDiminutives = lazy(() => import('./pages/BlogDiminutives'));
const BlogSaberVsConocer = lazy(() => import('./pages/BlogSaberVsConocer'));
const BlogPluperfect = lazy(() => import('./pages/BlogPluperfect'));
const BlogIrregularVerbs = lazy(() => import('./pages/BlogIrregularVerbs'));
const BlogBodyParts = lazy(() => import('./pages/BlogBodyParts'));
const BlogFoodDrink = lazy(() => import('./pages/BlogFoodDrink'));
const BlogTravelVocab = lazy(() => import('./pages/BlogTravelVocab'));
const BlogFamilyVocab = lazy(() => import('./pages/BlogFamilyVocab'));
const BlogEmotions = lazy(() => import('./pages/BlogEmotions'));
const BlogColours = lazy(() => import('./pages/BlogColours'));
const BlogDaysMonths = lazy(() => import('./pages/BlogDaysMonths'));
const BlogClothes = lazy(() => import('./pages/BlogClothes'));
const BlogHomeVocab = lazy(() => import('./pages/BlogHomeVocab'));
const BlogMeetingPeople = lazy(() => import('./pages/BlogMeetingPeople'));
const BlogRAndRR = lazy(() => import('./pages/BlogRAndRR'));
const BlogVowelSounds = lazy(() => import('./pages/BlogVowelSounds'));
const BlogBVsV = lazy(() => import('./pages/BlogBVsV'));
const BlogCAndZ = lazy(() => import('./pages/BlogCAndZ'));
const BlogHAndJ = lazy(() => import('./pages/BlogHAndJ'));
const BlogStressRules = lazy(() => import('./pages/BlogStressRules'));
const BlogLinkingWords = lazy(() => import('./pages/BlogLinkingWords'));
const BlogRegionalAccents = lazy(() => import('./pages/BlogRegionalAccents'));
const BlogDailyPractice = lazy(() => import('./pages/BlogDailyPractice'));
const BlogBestApps = lazy(() => import('./pages/BlogBestApps'));
const BlogLanguageExchange = lazy(() => import('./pages/BlogLanguageExchange'));
const BlogSpanishMedia = lazy(() => import('./pages/BlogSpanishMedia'));
const BlogVocabFast = lazy(() => import('./pages/BlogVocabFast'));
const BlogStopTranslating = lazy(() => import('./pages/BlogStopTranslating'));
const BlogPlateau = lazy(() => import('./pages/BlogPlateau'));
const BlogHomeImmersion = lazy(() => import('./pages/BlogHomeImmersion'));
const BlogTripPrep = lazy(() => import('./pages/BlogTripPrep'));
const BlogLearningGoals = lazy(() => import('./pages/BlogLearningGoals'));
const BlogMotivation = lazy(() => import('./pages/BlogMotivation'));
const BlogA1ToA2 = lazy(() => import('./pages/BlogA1ToA2'));
const BlogSpeakSooner = lazy(() => import('./pages/BlogSpeakSooner'));
const BlogPossessives = lazy(() => import('./pages/BlogPossessives'));
const BlogDemonstratives = lazy(() => import('./pages/BlogDemonstratives'));
const BlogAdverbs = lazy(() => import('./pages/BlogAdverbs'));
const BlogHaceTime = lazy(() => import('./pages/BlogHaceTime'));
const BlogPrepositionsPlace = lazy(() => import('./pages/BlogPrepositionsPlace'));
const BlogVerbIr = lazy(() => import('./pages/BlogVerbIr'));
const BlogIndirectSpeech = lazy(() => import('./pages/BlogIndirectSpeech'));
const BlogWorkVocab = lazy(() => import('./pages/BlogWorkVocab'));
const BlogSportsHobbies = lazy(() => import('./pages/BlogSportsHobbies'));
const BlogPhoneMessages = lazy(() => import('./pages/BlogPhoneMessages'));
const BlogHealthVocab = lazy(() => import('./pages/BlogHealthVocab'));
const BlogIdioms = lazy(() => import('./pages/BlogIdioms'));
const BlogNatureVocab = lazy(() => import('./pages/BlogNatureVocab'));
const BlogMoneyPhrases = lazy(() => import('./pages/BlogMoneyPhrases'));
const BlogSchoolVocab = lazy(() => import('./pages/BlogSchoolVocab'));
const BlogLLAndY = lazy(() => import('./pages/BlogLLAndY'));
const BlogNTilde = lazy(() => import('./pages/BlogNTilde'));
const BlogGSound = lazy(() => import('./pages/BlogGSound'));
const BlogDSound = lazy(() => import('./pages/BlogDSound'));
const BlogIntonation = lazy(() => import('./pages/BlogIntonation'));
const BlogSyllableDivision = lazy(() => import('./pages/BlogSyllableDivision'));
const BlogFastSpeech = lazy(() => import('./pages/BlogFastSpeech'));
const BlogPTK = lazy(() => import('./pages/BlogPTK'));
const BlogA2ToB1 = lazy(() => import('./pages/BlogA2ToB1'));
const BlogUseTutor = lazy(() => import('./pages/BlogUseTutor'));
const BlogSpacedRep = lazy(() => import('./pages/BlogSpacedRep'));
const BlogSpeakingAtHome = lazy(() => import('./pages/BlogSpeakingAtHome'));
const BlogIntermediateMistakes = lazy(() => import('./pages/BlogIntermediateMistakes'));
const BlogSelfStudy = lazy(() => import('./pages/BlogSelfStudy'));
const BlogBalancePractice = lazy(() => import('./pages/BlogBalancePractice'));
const BlogGCSETips = lazy(() => import('./pages/BlogGCSETips'));
const BlogHowLong = lazy(() => import('./pages/BlogHowLong'));
const BlogIsSpanishHard = lazy(() => import('./pages/BlogIsSpanishHard'));
const BlogTutorVsApp = lazy(() => import('./pages/BlogTutorVsApp'));
const BlogTutorCost = lazy(() => import('./pages/BlogTutorCost'));
const BlogIrregularVerbsList = lazy(() => import('./pages/BlogIrregularVerbsList'));
const BlogCastilianSpanish = lazy(() => import('./pages/BlogCastilianSpanish'));
const BlogGCSESpeaking = lazy(() => import('./pages/BlogGCSESpeaking'));
const BlogGCSEWriting = lazy(() => import('./pages/BlogGCSEWriting'));
const BlogGCSEReading = lazy(() => import('./pages/BlogGCSEReading'));
const BlogGCSEVocab = lazy(() => import('./pages/BlogGCSEVocab'));
const BlogGCSEGrade9 = lazy(() => import('./pages/BlogGCSEGrade9'));
const BlogALevelSpanish = lazy(() => import('./pages/BlogALevelSpanish'));
const BlogEresVsEstas = lazy(() => import('./pages/BlogEresVsEstas'));
const BlogOtraVez = lazy(() => import('./pages/BlogOtraVez'));
const BlogWouldCouldShould = lazy(() => import('./pages/BlogWouldCouldShould'));
const BlogSolia = lazy(() => import('./pages/BlogSolia'));
const BlogCafeGender = lazy(() => import('./pages/BlogCafeGender'));
const BlogCoger = lazy(() => import('./pages/BlogCoger'));
const BlogPreteriteGuide = lazy(() => import('./pages/BlogPreteriteGuide'));
const BlogSubjunctiveTriggers = lazy(() => import('./pages/BlogSubjunctiveTriggers'));
const BlogTimeExpressionsPreterite = lazy(() => import('./pages/BlogTimeExpressionsPreterite'));
const BlogSonVsEstan = lazy(() => import('./pages/BlogSonVsEstan'));

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={null}>
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
            <Route path="/blogs/spanish-possessives" element={<BlogPossessives />} />
            <Route path="/blogs/demonstratives" element={<BlogDemonstratives />} />
            <Route path="/blogs/spanish-adverbs" element={<BlogAdverbs />} />
            <Route path="/blogs/hace-time-expressions" element={<BlogHaceTime />} />
            <Route path="/blogs/prepositions-of-place" element={<BlogPrepositionsPlace />} />
            <Route path="/blogs/verb-ir" element={<BlogVerbIr />} />
            <Route path="/blogs/indirect-speech" element={<BlogIndirectSpeech />} />
            <Route path="/blogs/work-vocabulary" element={<BlogWorkVocab />} />
            <Route path="/blogs/sports-hobbies-vocabulary" element={<BlogSportsHobbies />} />
            <Route path="/blogs/phone-and-messages" element={<BlogPhoneMessages />} />
            <Route path="/blogs/health-vocabulary" element={<BlogHealthVocab />} />
            <Route path="/blogs/spanish-idioms" element={<BlogIdioms />} />
            <Route path="/blogs/nature-vocabulary" element={<BlogNatureVocab />} />
            <Route path="/blogs/money-and-shopping-phrases" element={<BlogMoneyPhrases />} />
            <Route path="/blogs/school-vocabulary" element={<BlogSchoolVocab />} />
            <Route path="/blogs/ll-and-y-sounds" element={<BlogLLAndY />} />
            <Route path="/blogs/spanish-n-tilde" element={<BlogNTilde />} />
            <Route path="/blogs/spanish-g-sound" element={<BlogGSound />} />
            <Route path="/blogs/spanish-d-sound" element={<BlogDSound />} />
            <Route path="/blogs/spanish-intonation" element={<BlogIntonation />} />
            <Route path="/blogs/syllable-division" element={<BlogSyllableDivision />} />
            <Route path="/blogs/fast-speech-spanish" element={<BlogFastSpeech />} />
            <Route path="/blogs/spanish-p-t-k" element={<BlogPTK />} />
            <Route path="/blogs/a2-to-b1-spanish" element={<BlogA2ToB1 />} />
            <Route path="/blogs/how-to-use-a-tutor" element={<BlogUseTutor />} />
            <Route path="/blogs/spaced-repetition" element={<BlogSpacedRep />} />
            <Route path="/blogs/speaking-at-home" element={<BlogSpeakingAtHome />} />
            <Route path="/blogs/intermediate-spanish-mistakes" element={<BlogIntermediateMistakes />} />
            <Route path="/blogs/self-study-spanish" element={<BlogSelfStudy />} />
            <Route path="/blogs/balance-four-skills" element={<BlogBalancePractice />} />
            <Route path="/blogs/gcse-spanish-tips" element={<BlogGCSETips />} />
            <Route path="/blogs/how-long-to-learn-spanish" element={<BlogHowLong />} />
            <Route path="/blogs/is-spanish-hard-to-learn" element={<BlogIsSpanishHard />} />
            <Route path="/blogs/spanish-tutor-vs-app" element={<BlogTutorVsApp />} />
            <Route path="/blogs/how-much-does-a-spanish-tutor-cost" element={<BlogTutorCost />} />
            <Route path="/blogs/spanish-irregular-verbs-list" element={<BlogIrregularVerbsList />} />
            <Route path="/blogs/castilian-spanish" element={<BlogCastilianSpanish />} />
            <Route path="/blogs/gcse-spanish-speaking-exam" element={<BlogGCSESpeaking />} />
            <Route path="/blogs/gcse-spanish-writing-exam" element={<BlogGCSEWriting />} />
            <Route path="/blogs/gcse-spanish-reading-exam" element={<BlogGCSEReading />} />
            <Route path="/blogs/gcse-spanish-vocabulary" element={<BlogGCSEVocab />} />
            <Route path="/blogs/how-to-get-grade-9-gcse-spanish" element={<BlogGCSEGrade9 />} />
            <Route path="/blogs/a-level-spanish-tips" element={<BlogALevelSpanish />} />
            <Route path="/blogs/eres-vs-estas" element={<BlogEresVsEstas />} />
            <Route path="/blogs/again-in-spanish" element={<BlogOtraVez />} />
            <Route path="/blogs/would-could-should-in-spanish" element={<BlogWouldCouldShould />} />
            <Route path="/blogs/used-to-in-spanish-solia" element={<BlogSolia />} />
            <Route path="/blogs/is-cafe-masculine-or-feminine-in-spanish" element={<BlogCafeGender />} />
            <Route path="/blogs/coger-in-spain-vs-latin-america" element={<BlogCoger />} />
            <Route path="/blogs/spanish-preterite-tense-guide" element={<BlogPreteriteGuide />} />
            <Route path="/blogs/spanish-subjunctive-triggers" element={<BlogSubjunctiveTriggers />} />
            <Route path="/blogs/time-expressions-preterite-or-imperfect" element={<BlogTimeExpressionsPreterite />} />
            <Route path="/blogs/son-vs-estan" element={<BlogSonVsEstan />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
