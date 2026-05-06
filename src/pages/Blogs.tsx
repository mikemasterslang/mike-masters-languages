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
