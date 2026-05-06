import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './Blogs.css';

const posts = [
  {
    id: 1,
    title: 'Coming Soon',
    excerpt: 'Blog posts are on their way. Check back soon for tips, advice and stories about language learning.',
    date: '',
    tag: 'Language Learning',
  },
];

export default function Blogs() {
  useScrollAnimation();
  usePageMeta(
    'Blog | Mike Masters Languages',
    'Language learning tips, travel advice and insights from Mike Masters Languages. Learn Spanish, French and Russian with confidence.'
  );

  return (
    <main className="blogs-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <div className="hero-badge">Blog</div>
            <h1>Language Learning <span className="gradient-text">Insights</span></h1>
            <p>Tips, advice and stories to help you on your language learning journey.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blogs-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card card fade-in">
                <div className="blog-card-body">
                  <span className="blog-tag">{post.tag}</span>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
                {post.date && <p className="blog-date">{post.date}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
