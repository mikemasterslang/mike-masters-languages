import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './Blogs.css';

const posts = [
  {
    slug: '/blogs/ser-vs-estar',
    title: 'Ser vs Estar: The Only Guide Beginner Spanish Learners Need',
    excerpt: 'Both mean "to be" — but they work completely differently. Here\'s how to tell them apart, every time, with memory tricks and real examples.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-noun-gender',
    title: 'Spanish Noun Gender Explained: Is It El or La?',
    excerpt: 'Every Spanish noun is masculine or feminine. Learn the patterns, the common exceptions, and the single best habit for getting gender right from day one.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/drop-subject-pronouns',
    title: 'Spanish Subject Pronouns: When to Drop Them and Sound More Natural',
    excerpt: 'Over-using "yo" is one of the clearest signs of a textbook learner. Find out when to drop subject pronouns in Spanish — and when to keep them.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/por-vs-para',
    title: 'Por vs Para: The Complete Guide for Spanish Beginners',
    excerpt: 'Both translate as "for" in English — but they are used in completely different situations. Here\'s a clear breakdown of every main use of por and para.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/preterite-vs-imperfect',
    title: 'Preterite vs Imperfect: How to Choose the Right Past Tense in Spanish',
    excerpt: 'Spanish has two past tenses where English has one. Learning which to use — and when — is one of the biggest steps forward a beginner can take.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/reflexive-verbs',
    title: 'Spanish Reflexive Verbs Explained: Me, Te, Se and When to Use Them',
    excerpt: 'Why do Spanish speakers say "me llamo" instead of "llamo"? What does the "se" on the end of a verb mean? This guide explains reflexive verbs from the ground up.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/object-pronouns',
    title: 'Spanish Object Pronouns: Direct vs Indirect (Lo, La, Le) Explained',
    excerpt: 'Lo, la, le, les — object pronouns cause more confusion than almost any other part of Spanish grammar. Here\'s a clear breakdown of what they are and how to use them.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/question-formation',
    title: 'How to Ask Questions in Spanish: Question Words, Word Order and Accent Rules',
    excerpt: 'Asking questions in Spanish is different to English in several important ways. Learn the question words, word order rules, and the qué vs cuál distinction.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/subjunctive',
    title: 'The Spanish Subjunctive for Beginners: What It Is and When to Use It',
    excerpt: 'The subjunctive has a fearsome reputation — but once you understand what it\'s actually doing, it starts to make a lot more sense. A beginner-friendly introduction.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/si-clauses-conditionals',
    title: 'Spanish Si Clauses and Conditionals: Real, Hypothetical and Impossible',
    excerpt: '"If I had more time, I would..." — conditional sentences are everywhere in everyday language. Here\'s how the three types of si clauses work in Spanish.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/adjective-agreement',
    title: 'Spanish Adjective Agreement: Gender, Number and Word Order',
    excerpt: 'In Spanish, adjectives must match the noun they describe in gender and number — and they usually go after the noun. Here\'s the full guide to getting it right.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/modal-verbs',
    title: 'Spanish Modal Verbs: Poder, Querer, Deber and Tener Que',
    excerpt: 'Can, want, must, should — modal verbs are essential for everyday conversation. Here\'s how Spanish expresses ability, desire and obligation.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/personal-a',
    title: 'The Personal "A" in Spanish: What It Is and When to Use It',
    excerpt: 'It\'s just one letter — but leaving it out is one of the most common grammar errors beginners make. Here\'s the rule, with clear examples.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/comparatives-and-superlatives',
    title: 'Spanish Comparatives and Superlatives: Más, Menos, Tan and El Más',
    excerpt: 'Spanish comparisons follow a clear, consistent pattern. Once you know más que, menos que and tan...como, you can handle almost any comparison.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-commands-imperative',
    title: 'Spanish Commands: How to Use the Imperative',
    excerpt: '"Speak more slowly." "Turn left here." Giving commands is something you need from day one. Here\'s how to do it in Spanish — tú and usted forms.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/future-tense',
    title: 'The Spanish Future Tense: Regular, Irregular and the "Going To" Shortcut',
    excerpt: 'Good news: the Spanish future tense is one of the easiest to form. And there\'s a shortcut for near-future plans you can use from day one.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/hay-vs-estar',
    title: 'Hay vs Estar: "There Is / Are" vs Location in Spanish',
    excerpt: 'Both relate to where things are — but hay and estar are used in completely different situations. A simple test tells you which to use every time.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/negation',
    title: 'Spanish Negation: No, Nunca, Nada, Nadie and Double Negatives',
    excerpt: 'Saying no in Spanish starts simply — but Spanish requires double negatives in a way English doesn\'t. Here\'s the full guide to Spanish negation.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/prepositions',
    title: 'Spanish Prepositions: A, En, De, Con, Sin, Para and More',
    excerpt: 'Prepositions are small words that cause big problems. This guide explains the most common Spanish prepositions and where beginners tend to go wrong.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/stem-changing-verbs',
    title: 'Spanish Stem-Changing Verbs: E→IE, O→UE and E→I Explained',
    excerpt: 'Stem-changing verbs include many of the most common Spanish verbs. Once you know the three patterns, they become completely predictable.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/present-perfect',
    title: 'The Spanish Present Perfect: He Hablado, Has Comido',
    excerpt: '"I have spoken", "she has eaten" — the present perfect looks familiar from English but works differently in Spanish. Here\'s what you need to know.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/gerunds-present-continuous',
    title: 'Spanish Gerunds and the Present Continuous',
    excerpt: '"I am eating", "she is studying" — the present continuous is one of the first tenses beginners want to use. Here\'s how -ando/-iendo works in Spanish.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/passive-voice-and-se',
    title: 'The Passive Voice and "Se" Constructions in Spanish',
    excerpt: 'Spanish has two ways to express the passive — and the se construction is far more common in everyday speech. This guide explains both clearly.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/relative-clauses',
    title: 'Spanish Relative Clauses: Que, Quien, Lo Que and El Que',
    excerpt: '"The book that I\'m reading", "the person who called" — relative clauses let you build more complex sentences. Here\'s how they work in Spanish.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/false-cognates',
    title: 'Spanish False Cognates: 40+ Words That Fool English Speakers Every Time',
    excerpt: 'Spanish and English share thousands of similar-looking words. Most mean the same thing — but the ones that don\'t can lead to some very memorable misunderstandings.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/tener-expressions',
    title: 'Tener Expressions in Spanish: Hunger, Fear, Age and More',
    excerpt: 'Spanish says "I have hunger" where English says "I am hungry." Learn the most important tener expressions and how to use them correctly.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/gustar-and-similar-verbs',
    title: 'How to Use Gustar (and Verbs Like It) in Spanish',
    excerpt: '"Me gusta" is one of the first phrases you learn — but most beginners don\'t understand why it works the way it does. Here\'s the full picture.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/telling-time-and-dates',
    title: 'Telling the Time and Dates in Spanish',
    excerpt: 'Time and dates come up in every conversation. Here\'s everything you need — hours, minutes, days, months and dates — with the key rule that trips beginners up.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/cognate-patterns',
    title: 'Spanish Cognate Patterns: How to Unlock Thousands of Words at Once',
    excerpt: 'English and Spanish share systematic word-ending patterns. Learn -tion→-ción, -ty→-dad, -ly→-mente and more — and gain thousands of Spanish words instantly.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/expressing-opinions',
    title: 'How to Express Opinions in Spanish',
    excerpt: 'Sharing opinions is at the heart of real conversation. Learn the key phrases for agreeing, disagreeing, and giving your view — including the subjunctive rule for no creo que.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-numbers',
    title: 'Spanish Numbers: Cardinals, Ordinals and Big Numbers',
    excerpt: 'Numbers are essential from day one. Here\'s everything — including the gender agreement rules and the cien vs ciento distinction that catch beginners out.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/weather-expressions',
    title: 'Spanish Weather Expressions: Hace, Está, Hay and Weather Verbs',
    excerpt: 'Talking about the weather in Spanish uses three different structures. Here\'s how hace frío, está nublado and hay niebla work — and all the vocabulary you need.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-greetings',
    title: 'Spanish Greetings and Register: Formal vs Informal',
    excerpt: 'Spanish greetings go far beyond "hola". This guide covers formal and informal greetings, regional variations, farewells, and how to get the register right.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/filler-words-and-connectors',
    title: 'Spanish Filler Words and Conversational Connectors',
    excerpt: 'Pues, bueno, o sea, a ver, es que — these small words make the difference between sounding scripted and sounding natural. Here\'s what they mean and how to use them.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-pronunciation',
    title: 'Spanish Pronunciation Guide for English Speakers',
    excerpt: 'Spanish is one of the most phonetically consistent languages in the world. Learn the rules once, and you can read virtually anything aloud correctly.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-accent-marks',
    title: 'Spanish Accent Marks: When to Use Them and Why They Matter',
    excerpt: 'Accent marks in Spanish aren\'t optional decoration — they change pronunciation, meaning, and grammar. The rules every beginner needs to know.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/beginner-spanish-mistakes',
    title: '8 Common Spanish Mistakes Beginners Make (And How to Fix Them)',
    excerpt: 'From false cognates to the gustar structure — these are the errors native speakers notice immediately, and the easiest ones to fix once you know about them.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/restart-spanish',
    title: 'How to Restart Spanish After a Long Break',
    excerpt: 'Studied Spanish years ago but haven\'t used it since? You\'re not starting from zero. Here\'s what\'s still there, what fades, and the fastest path back to confidence.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/conditional-tense',
    title: 'The Spanish Conditional Tense: How to Say "Would"',
    excerpt: 'The conditional tense lets you make polite requests, talk about hypothetical situations, and report what someone said. The good news: it uses the same irregular stems as the future.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/pero-vs-sino',
    title: 'Pero vs Sino: Two Ways to Say "But" in Spanish',
    excerpt: 'Both translate as "but" — but they\'re used in completely different situations. Once you understand the logic, the choice becomes automatic.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/diminutives',
    title: 'Spanish Diminutives: How -ito and -ita Work',
    excerpt: 'Adding -ito or -ita to a word makes it smaller, warmer, or more polite. It\'s one of the most characteristically Spanish habits in everyday speech — here\'s how it works.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/saber-vs-conocer',
    title: 'Saber vs Conocer: Two Verbs for "To Know" in Spanish',
    excerpt: 'Spanish has two verbs where English has one. Saber is for facts and skills; conocer is for people and places. Here\'s the clear breakdown with examples.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/pluperfect-tense',
    title: 'The Spanish Pluperfect: How to Say "Had Done" Something',
    excerpt: '"I had already eaten." "She had never been to Madrid." The pluperfect pushes the action one step further back in the past — here\'s how to form and use it.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/irregular-verbs',
    title: 'The 10 Most Important Irregular Spanish Verbs',
    excerpt: 'Ten verbs — ser, estar, ir, tener, hacer, poder, querer, saber, decir, venir — cover a huge proportion of everyday Spanish. Learn these and you\'ll feel the difference immediately.',
    tag: 'Grammar',
    date: 'May 2026',
  },
  {
    slug: '/blogs/body-parts',
    title: 'Spanish Body Parts: Essential Vocabulary for Beginners',
    excerpt: 'Whether you\'re at a pharmacy, doctor or simply describing how you feel, body part vocabulary is essential. Here\'s the complete guide, including how to say something hurts.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/food-and-drink',
    title: 'Spanish Food and Drink Vocabulary: Eating Out and Shopping',
    excerpt: 'Eating out is one of the great pleasures of being in Spain. Here\'s the vocabulary you need — from ordering a meal to asking for the bill, and everything in between.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/travel-vocabulary',
    title: 'Essential Spanish Travel Vocabulary for Your Trip to Spain',
    excerpt: 'Transport, hotels, airports, directions, emergencies — here\'s the practical vocabulary that will get you through every common travel situation in Spain.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/family-vocabulary',
    title: 'Spanish Family Vocabulary: How to Talk About Your Family',
    excerpt: 'Talking about family comes up in almost every early conversation. Here\'s all the vocabulary you need — immediate family, extended family, in-laws and more.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/expressing-emotions',
    title: 'Expressing Emotions in Spanish: Vocabulary and Key Phrases',
    excerpt: 'Emotions in Spanish use estar, sentirse and ponerse in ways that don\'t map neatly onto English. Here\'s the vocabulary and structure you need to express how you\'re feeling.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/colours-in-spanish',
    title: 'Colours in Spanish: A Complete Guide with Agreement Rules',
    excerpt: 'Colours in Spanish must agree with the noun they describe — but some are invariable. Here\'s the full list with agreement forms and the exceptions worth knowing.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/days-months-seasons',
    title: 'Days, Months and Seasons in Spanish: Complete Guide',
    excerpt: 'Days and months in Spanish don\'t take capital letters — and saying dates works differently to English. Here\'s everything you need, with the key patterns explained clearly.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/clothes-and-shopping',
    title: 'Spanish Clothes and Shopping Vocabulary',
    excerpt: 'From asking for a different size to paying at the till — here\'s the vocabulary you need for clothes shopping in Spain, including all the key phrases.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/home-vocabulary',
    title: 'Spanish Home Vocabulary: Rooms, Furniture and Household Items',
    excerpt: 'Describing where you live, finding your way around someone\'s home, or understanding a rental listing — home vocabulary comes up constantly. Here\'s the full guide.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/meeting-people-phrases',
    title: 'Spanish Phrases for Meeting People and Making Small Talk',
    excerpt: 'The first few minutes of a conversation in Spanish can feel daunting. Here are the phrases that get you through introductions and small talk — naturally and confidently.',
    tag: 'Vocabulary',
    date: 'May 2026',
  },
  {
    slug: '/blogs/r-and-rr-sounds',
    title: 'How to Pronounce the Spanish R and RR',
    excerpt: 'The Spanish R is one of the sounds English speakers find hardest. Here\'s exactly how to produce both the single tap and the full trill — with practical exercises.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-vowel-sounds',
    title: 'Spanish Vowel Sounds: Pure, Clear and Consistent',
    excerpt: 'Spanish has only five vowel sounds, and they never change. Once you get them right, your pronunciation will immediately sound more natural to native speakers.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/b-and-v-sounds',
    title: 'The Spanish B and V: Why They Sound the Same',
    excerpt: 'In Spanish, B and V are pronounced identically. Understanding why — and how the sound changes depending on position in the word — will sharpen your pronunciation noticeably.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/c-and-z-sounds',
    title: 'The Spanish C and Z: Castilian vs Latin American Pronunciation',
    excerpt: 'In Spain, C before E or I and the letter Z are pronounced like the "th" in "think". In Latin America, they sound like "s". Here\'s the full picture.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/h-and-j-sounds',
    title: 'Silent H and the Spanish J: Two Sounds That Confuse Beginners',
    excerpt: 'The H in Spanish is completely silent — but the J is a strong guttural sound that English has no equivalent for. Here\'s how both work, with plenty of examples.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/stress-and-intonation',
    title: 'Spanish Stress Rules: Which Syllable Gets the Emphasis',
    excerpt: 'Spanish stress follows clear, learnable rules — and accent marks only appear when those rules are broken. Master the two default rules and you\'ll stress most words correctly.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/linking-in-speech',
    title: 'How Words Link Together in Natural Spanish Speech',
    excerpt: 'Native speakers don\'t pause between every word — they link them together in ways that can make fast speech hard to follow. Here\'s what\'s happening and how to train your ear.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/regional-accents',
    title: 'A Guide to Regional Spanish Accents: Spain and Latin America',
    excerpt: 'From Castilian to Andalusian to River Plate, Spanish sounds different depending on where it\'s spoken. Here\'s a practical overview of the main regional accents.',
    tag: 'Pronunciation',
    date: 'May 2026',
  },
  {
    slug: '/blogs/daily-spanish-practice',
    title: 'How to Practice Spanish Every Day (Even When You\'re Busy)',
    excerpt: 'Consistent daily practice beats occasional long sessions every time. Here\'s how to build a Spanish habit that actually sticks — even on your busiest days.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/best-apps-for-spanish',
    title: 'The Best Apps for Learning Spanish in 2026',
    excerpt: 'There\'s no shortage of Spanish learning apps — but some are far more useful than others. An honest guide to what each app is actually good for, and where its limits are.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/language-exchange',
    title: 'How to Find and Use a Language Exchange Partner',
    excerpt: 'A language exchange gives you real conversation practice for free. Here\'s how to find a good partner, structure your sessions, and get the most out of every call.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-tv-films-podcasts',
    title: 'How to Use Spanish TV, Films and Podcasts to Improve',
    excerpt: 'Passive watching doesn\'t move the needle much — but active listening does. Here\'s how to turn Spanish media into a genuine learning tool at every level.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/build-vocabulary-fast',
    title: 'How to Build Spanish Vocabulary Fast',
    excerpt: 'The first 500 most common Spanish words cover around 80% of everyday speech. Here\'s a smart, efficient approach to vocabulary learning that actually compounds over time.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/stop-translating-in-your-head',
    title: 'How to Stop Translating in Your Head',
    excerpt: 'Word-for-word translation is the biggest bottleneck for intermediate learners. Here\'s what\'s happening in your brain — and how to start thinking in Spanish instead.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/overcome-language-plateau',
    title: 'Hitting a Spanish Learning Plateau? Here\'s How to Push Through',
    excerpt: 'Progress feels fast at first, then it slows down. That\'s not failure — it\'s a natural phase of language learning. Here\'s what causes plateaus and how to break through them.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/home-immersion-spanish',
    title: 'Home Immersion: How to Surround Yourself With Spanish',
    excerpt: 'You don\'t need to go to Spain to immerse yourself in Spanish. Here are practical ways to bring Spanish into your daily environment — wherever you are.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/prepare-spanish-for-travel',
    title: 'How to Prepare Your Spanish Before a Trip to Spain',
    excerpt: 'Knowing what situations you\'ll face lets you prepare targeted Spanish before you go. Here\'s a practical pre-trip guide covering every common scenario.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-learning-goals',
    title: 'How to Set Realistic Spanish Learning Goals',
    excerpt: '"I want to speak Spanish" is too vague to be useful. Here\'s how to set specific, achievable goals — and how the CEFR levels give you a clear framework to work within.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/stay-motivated-learning-spanish',
    title: 'How to Stay Motivated When Learning Spanish',
    excerpt: 'Motivation dips. It happens to everyone. Here\'s the honest truth about what sustains language learners long-term — and what to do when you feel like giving up.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/a1-to-a2-spanish',
    title: 'Moving From A1 to A2 Spanish: What to Focus On',
    excerpt: 'A1 gets you through basic introductions. A2 is where real conversations start. Here\'s exactly what separates the two levels — and what to prioritise to close the gap.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/start-speaking-spanish-sooner',
    title: 'Why You Should Start Speaking Spanish Sooner Than You Think',
    excerpt: 'Most beginners wait until they feel "ready" to speak. That day rarely comes on its own. Here\'s why output is essential from early on — and how to start without the fear.',
    tag: 'Tips',
    date: 'May 2026',
  },
  {
    slug: '/blogs/spanish-articles',
    title: 'Spanish Articles: El, La, Los, Las and When to Use Them',
    excerpt: 'Every Spanish noun needs an article — and getting the gender right is one of the first habits to build. Here\'s how definite and indefinite articles work.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-possessives',
    title: 'Spanish Possessives: Mi, Tu, Su and the Long Forms',
    excerpt: 'Possession in Spanish has two sets of forms — short and long. Here\'s how each works, when to use them, and the common mistake to avoid with su.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/demonstratives',
    title: 'Demonstratives in Spanish: Este, Ese and Aquel',
    excerpt: 'This, that and that over there — Spanish has three levels of distance where English only has two. Here\'s how all three sets work, including the neuter forms.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-adverbs',
    title: 'Spanish Adverbs: How to Form and Use Them',
    excerpt: 'Adverbs are one of the easiest things to add to your Spanish — and they make your sentences immediately more expressive. Here\'s the full beginner guide.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/hace-time-expressions',
    title: 'Hacer Time Expressions in Spanish: Hace, Hacía and Llevar',
    excerpt: 'Talking about how long something has been happening — or how long ago it happened — uses structures that don\'t exist in English. Here\'s how they all work.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/prepositions-of-place',
    title: 'Spanish Prepositions of Place: Encima, Debajo, Delante and More',
    excerpt: 'Describing where things are is one of the first things beginners need. Here\'s all the spatial vocabulary — encima de, debajo de, al lado de and more — with clear examples.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/verb-ir',
    title: 'The Verb Ir in Spanish: Going Places and Talking About the Future',
    excerpt: 'Ir is one of the most irregular and most useful verbs in Spanish. Master it and you unlock directions, near-future plans and a huge range of everyday phrases.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/indirect-speech',
    title: 'Indirect Speech in Spanish: How to Report What Someone Said',
    excerpt: 'Reporting conversations is something we do constantly in real life. Here\'s how indirect speech works in Spanish — including the tense shifts that catch learners out.',
    tag: 'Grammar',
    date: 'June 2026',
  },
  {
    slug: '/blogs/work-vocabulary',
    title: 'Spanish Work and Jobs Vocabulary',
    excerpt: 'Whether you\'re talking about your own job or asking someone about theirs, work vocabulary is essential for real conversation. Here\'s everything you need.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/sports-hobbies-vocabulary',
    title: 'Spanish Sports and Hobbies Vocabulary',
    excerpt: 'Talking about what you do in your free time is one of the most natural conversation topics — and one of the first places beginners get stuck. Here\'s the vocabulary you need.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/phone-and-messages',
    title: 'Useful Spanish Phrases for Phone Calls and Messages',
    excerpt: 'Phone calls in another language feel more daunting than face-to-face. With the right phrases — and knowing what to say when you don\'t understand — they become manageable.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/health-vocabulary',
    title: 'Spanish Health and Medical Vocabulary',
    excerpt: 'Whether you need to see a doctor or describe how you feel, medical vocabulary is essential — especially when travelling. Here\'s everything from symptoms to pharmacies.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-idioms',
    title: 'Common Spanish Idioms Every Beginner Should Know',
    excerpt: 'Native speakers are full of expressions no dictionary can fully explain. These are the idioms you\'ll hear most — with clear meanings and real example sentences.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/nature-vocabulary',
    title: 'Spanish Nature and Landscape Vocabulary',
    excerpt: 'Spain has extraordinary landscapes — and the vocabulary to describe them is both beautiful and useful. Terrain, weather, animals, plants and environment all covered.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/money-and-shopping-phrases',
    title: 'Spanish Money and Shopping Phrases',
    excerpt: 'Handling money, paying bills and shopping confidently are practical skills you\'ll use from your first day in Spain. Here\'s the essential vocabulary and phrases.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/school-vocabulary',
    title: 'Spanish School and Education Vocabulary',
    excerpt: 'Education comes up constantly in conversation — whether you\'re studying yourself or talking about someone else. Here\'s the vocabulary, plus an overview of the Spanish system.',
    tag: 'Vocabulary',
    date: 'June 2026',
  },
  {
    slug: '/blogs/ll-and-y-sounds',
    title: 'The Spanish LL and Y: Why They Sound the Same',
    excerpt: 'In modern Spanish, ll and y are pronounced identically in most of the world — but that wasn\'t always the case. Here\'s how both sounds work, and where regional differences appear.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-n-tilde',
    title: 'The Spanish Ñ: How to Produce This Iconic Sound',
    excerpt: 'The ñ is one of Spain\'s most recognisable letters — and it\'s easier to pronounce than most beginners expect. Here\'s exactly how to produce it, with plenty of practice words.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-g-sound',
    title: 'The Spanish G Sound: Hard, Soft and the Silent U',
    excerpt: 'The letter G in Spanish behaves very differently depending on what follows it. Here\'s how to get hard G, soft G, the silent U in GUE/GUI, and the diaeresis GÜ right every time.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-d-sound',
    title: 'The Spanish D: Why It Sounds Softer Than You Expect',
    excerpt: 'The Spanish D has two pronunciations — a hard stop and a soft fricative. Knowing when each applies is key to sounding natural and understanding native speech.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-intonation',
    title: 'Spanish Intonation: How Questions and Statements Sound Different',
    excerpt: 'The melody of a language is what makes it sound natural. Here\'s how Spanish intonation works — and why it\'s actually simpler than most learners expect.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/syllable-division',
    title: 'Syllable Division in Spanish: How to Break Words Apart',
    excerpt: 'Understanding how Spanish divides into syllables is the foundation of getting stress, rhythm and pronunciation right. Here\'s the full guide with worked examples.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/fast-speech-spanish',
    title: 'How Fast Spanish Speech Works: What Native Speakers Actually Say',
    excerpt: 'Native speakers don\'t say every sound perfectly — they link, reduce and swallow things. Understanding what they actually do is the key to following natural Spanish.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spanish-p-t-k',
    title: 'Spanish P, T and K: The Sounds English Speakers Over-Aspirate',
    excerpt: 'In English, P, T and K come with a puff of air. In Spanish they don\'t — and this one difference makes a noticeable impact on your accent.',
    tag: 'Pronunciation',
    date: 'June 2026',
  },
  {
    slug: '/blogs/a2-to-b1-spanish',
    title: 'Moving From A2 to B1 Spanish: What to Focus On',
    excerpt: 'A2 gets you through basic conversations. B1 is where Spanish starts to feel like a real skill. Here\'s what separates the two levels — and how to close the gap.',
    tag: 'Tips',
    date: 'June 2026',
  },
  {
    slug: '/blogs/how-to-use-a-tutor',
    title: 'How to Get the Most Out of Your Spanish Lessons',
    excerpt: 'A good tutor opens doors — but what you do between lessons, and how you prepare for them, determines how fast you actually improve.',
    tag: 'Tips',
    date: 'June 2026',
  },
  {
    slug: '/blogs/spaced-repetition',
    title: 'Spaced Repetition for Spanish: The Smarter Way to Learn Vocabulary',
    excerpt: 'Most learners forget 80% of new vocabulary within a week. Spaced repetition fixes that — here\'s how it works and how to use it effectively.',
    tag: 'Tips',
    date: 'June 2026',
  },
  {
    slug: '/blogs/speaking-at-home',
    title: 'How to Improve Your Spanish Speaking When You Live in the UK',
    excerpt: 'You don\'t need to live in Spain to get speaking practice. Here\'s how to build real speaking confidence from home — no travel required.',
    tag: 'Tips',
    date: 'June 2026',
  },
  {
    slug: '/blogs/intermediate-spanish-mistakes',
    title: 'Common Mistakes Intermediate Spanish Learners Make',
    excerpt: 'You\'ve got the basics — but there are patterns that trip up almost every learner at the intermediate stage. Here\'s what to watch for and how to fix each one.',
    tag: 'Tips',
    date: 'June 2026',
  },
  {
    slug: '/blogs/self-study-spanish',
    title: 'How to Self-Study Spanish: A Complete Guide for Beginners',
    excerpt: 'Teaching yourself a language is absolutely possible — but only if you build the right system. Here\'s what actually works, and what self-studiers consistently get wrong.',
    tag: 'Tips',
    date: 'June 2026',
  },
  {
    slug: '/blogs/balance-four-skills',
    title: 'How to Balance the Four Skills in Spanish: Listening, Speaking, Reading and Writing',
    excerpt: 'Most learners over-invest in one or two skills and neglect the others. Here\'s how to build a more balanced practice routine — and why it matters.',
    tag: 'Tips',
    date: 'June 2026',
  },
  {
    slug: '/blogs/gcse-spanish-tips',
    title: 'GCSE Spanish Exam Tips: How to Prepare and Perform',
    excerpt: 'The GCSE Spanish exam tests specific skills in specific ways. Knowing exactly what\'s being assessed — and how — gives you a real advantage.',
    tag: 'Tips',
    date: 'June 2026',
  },
];

const categories = [
  { id: 'grammar', label: 'Grammar', tag: 'Grammar' },
  { id: 'vocabulary', label: 'Vocabulary', tag: 'Vocabulary' },
  { id: 'pronunciation', label: 'Pronunciation', tag: 'Pronunciation' },
  { id: 'tips', label: 'Tips & Strategy', tag: 'Tips' },
];

export default function Blogs() {
  useScrollAnimation();
  usePageMeta(
    'Blog | Mike Masters Languages',
    'Language learning tips, grammar guides and practical advice for beginner Spanish learners. Written by professional language tutor Mike Masters.'
  );

  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setOpenCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  return (
    <main className="blogs-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Blog</div>
            <h1>Language Learning <span className="gradient-text">Insights</span></h1>
            <p>Practical guides and tips to help you on your Spanish learning journey.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <nav className="blogs-toc fade-in">
            <p className="blogs-toc-label">Contents</p>
            {categories.map((cat) => {
              const catPosts = posts.filter(p => p.tag === cat.tag);
              const isOpen = openCategories.includes(cat.id);
              return (
                <div key={cat.id} className="blogs-toc-category">
                  <button
                    className="blogs-toc-heading"
                    onClick={() => toggleCategory(cat.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{cat.label} <span className="blogs-toc-cat-count">({catPosts.length})</span></span>
                    <svg
                      className={`blogs-toc-chevron${isOpen ? ' open' : ''}`}
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {isOpen && (
                    <ul className="blogs-toc-list">
                      {catPosts.map(post => (
                        <li key={post.slug}>
                          <Link to={post.slug} className="blogs-toc-post-link">{post.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </section>

      {categories.map((cat) => {
        const catPosts = posts.filter(p => p.tag === cat.tag);
        return (
          <section key={cat.id} id={cat.id} className="section blogs-category-section">
            <div className="container">
              <div className="blogs-category-header">
                <h2 className="blogs-category-title">{cat.label}</h2>
                <span className="blogs-category-count">{catPosts.length} {catPosts.length === 1 ? 'post' : 'posts'}</span>
              </div>
              <div className="blogs-grid">
                {catPosts.map((post) => (
                  <Link to={post.slug} key={post.slug} className="blog-card card" style={{ textDecoration: 'none' }}>
                    <div className="blog-card-body">
                      <span className="blog-tag">{post.tag}</span>
                      <h2 className="blog-title">{post.title}</h2>
                      <p className="blog-excerpt">{post.excerpt}</p>
                    </div>
                    <div className="blog-card-footer">
                      <span className="blog-date">{post.date}</span>
                      <span className="blog-read-more">Read more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
