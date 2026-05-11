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
    slug: '/blogs/beginner-spanish-mistakes',
    title: '8 Common Spanish Mistakes Beginners Make (And How to Fix Them)',
    excerpt: 'From false cognates to the gustar structure — these are the errors native speakers notice immediately, and the easiest ones to fix once you know about them.',
    tag: 'Tips',
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
    slug: '/blogs/false-cognates',
    title: 'Spanish False Cognates: 40+ Words That Fool English Speakers Every Time',
    excerpt: 'Spanish and English share thousands of similar-looking words. Most mean the same thing — but the ones that don\'t can lead to some very memorable misunderstandings.',
    tag: 'Vocabulary',
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
    slug: '/blogs/gustar-and-similar-verbs',
    title: 'How to Use Gustar (and Verbs Like It) in Spanish',
    excerpt: '"Me gusta" is one of the first phrases you learn — but most beginners don\'t understand why it works the way it does. Here\'s the full picture.',
    tag: 'Grammar',
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
    slug: '/blogs/si-clauses-conditionals',
    title: 'Spanish Si Clauses and Conditionals: Real, Hypothetical and Impossible',
    excerpt: '"If I had more time, I would..." — conditional sentences are everywhere in everyday language. Here\'s how the three types of si clauses work in Spanish.',
    tag: 'Grammar',
    date: 'May 2026',
  },
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

      <section className="section">
        <div className="container">
          <div className="blogs-grid">
            {posts.map((post) => (
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
    </main>
  );
}
