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
            <p className="blogs-toc-label">Jump to section:</p>
            <div className="blogs-toc-links">
              {categories.map((cat) => {
                const count = posts.filter(p => p.tag === cat.tag).length;
                return (
                  <a key={cat.id} href={`#${cat.id}`} className="blogs-toc-link">
                    {cat.label}
                    <span className="blogs-toc-count">{count}</span>
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </section>

      {categories.map((cat) => {
        const catPosts = posts.filter(p => p.tag === cat.tag);
        return (
          <section key={cat.id} id={cat.id} className="section blogs-category-section">
            <div className="container">
              <div className="blogs-category-header fade-in">
                <h2 className="blogs-category-title">{cat.label}</h2>
                <span className="blogs-category-count">{catPosts.length} {catPosts.length === 1 ? 'post' : 'posts'}</span>
              </div>
              <div className="blogs-grid">
                {catPosts.map((post) => (
                  <Link to={post.slug} key={post.slug} className="blog-card card fade-in" style={{ textDecoration: 'none' }}>
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
