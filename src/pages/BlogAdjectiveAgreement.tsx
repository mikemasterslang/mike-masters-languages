import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogAdjectiveAgreement() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Adjective Agreement: Gender, Number and Word Order | Mike Masters Languages',
    'In Spanish, adjectives must match the noun they describe in gender and number. This guide explains the rules, the exceptions, and where adjectives go in a sentence.'
  );

  return (
    <main className="blog-post-page">
      <section className="blog-hero">
        <div className="container">
          <Link to="/blogs" className="blog-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Blog
          </Link>
          <div className="blog-hero-meta">
            <span className="blog-hero-tag">Grammar</span>
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Spanish Adjective Agreement: Gender, Number and Word Order</h1>
          <p className="blog-hero-intro">
            In Spanish, adjectives don't just sit next to a noun — they change form to match it. Here's everything you need to know.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the first things that surprises English speakers learning Spanish is that adjectives have to <strong>agree</strong> with the noun they describe. In English, "a tall man" and "a tall woman" use the same word — tall. In Spanish, the adjective changes: <em>un hombre alto</em>, <em>una mujer alta</em>. This is called adjective agreement, and once you understand the pattern, it becomes automatic.</p>

            <h2>The Four Forms of Most Adjectives</h2>
            <p>Most Spanish adjectives have four forms depending on the gender and number of the noun:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th></th><th>Masculine</th><th>Feminine</th></tr></thead>
                <tbody>
                  <tr><td><strong>Singular</strong></td><td>alto</td><td>alta</td></tr>
                  <tr><td><strong>Plural</strong></td><td>altos</td><td>altas</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">un chico alto — a tall boy</p>
              <p className="es">una chica alta — a tall girl</p>
              <p className="es">unos chicos altos — some tall boys</p>
              <p className="es">unas chicas altas — some tall girls</p>
            </div>

            <h2>Adjectives Ending in -e or a Consonant</h2>
            <p>Adjectives ending in <strong>-e</strong> have only two forms — singular and plural — and do not change for gender:</p>
            <div className="blog-example">
              <p className="es">un chico inteligente / una chica inteligente</p>
              <p className="es">unos chicos inteligentes / unas chicas inteligentes</p>
            </div>
            <p>Most adjectives ending in a <strong>consonant</strong> also have only two forms:</p>
            <div className="blog-example">
              <p className="es">un examen fácil / una tarea fácil — an easy exam / an easy task</p>
              <p className="es">unos exámenes fáciles / unas tareas fáciles</p>
            </div>

            <div className="blog-tip">
              <p><strong>Exception:</strong> Adjectives of nationality ending in a consonant do add -a for the feminine: <em>español → española</em>, <em>inglés → inglesa</em>, <em>alemán → alemana</em>.</p>
            </div>

            <h2>Where Do Adjectives Go?</h2>
            <p>In English, adjectives almost always come <strong>before</strong> the noun: "the red car", "a big house." In Spanish, descriptive adjectives typically come <strong>after</strong> the noun:</p>
            <div className="blog-example">
              <p className="es wrong">✗ el rojo coche</p>
              <p className="es right">✓ el coche rojo — the red car</p>
              <p className="es right">✓ una casa grande — a big house</p>
            </div>

            <h2>Adjectives That Go Before the Noun</h2>
            <p>Some adjectives do go before the noun. These include:</p>
            <ul>
              <li><strong>Numbers and quantifiers:</strong> <em>tres libros, muchos amigos, pocos días</em></li>
              <li><strong>Possessives:</strong> <em>mi libro, tu casa, su coche</em></li>
              <li><strong>Indefinite adjectives:</strong> <em>algún día, otro país, cada semana</em></li>
              <li><strong>A small group of common adjectives</strong> that change meaning depending on position (see below)</li>
            </ul>

            <h2>Adjectives That Change Meaning by Position</h2>
            <p>A handful of adjectives mean something different before vs after the noun:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Adjective</th><th>Before noun</th><th>After noun</th></tr></thead>
                <tbody>
                  <tr><td><strong>grande</strong></td><td>great (un gran hombre — a great man)</td><td>big/large (un hombre grande — a big man)</td></tr>
                  <tr><td><strong>viejo</strong></td><td>long-standing (un viejo amigo — an old friend)</td><td>elderly (un amigo viejo — an old/aged friend)</td></tr>
                  <tr><td><strong>nuevo</strong></td><td>another / different (un nuevo coche — a new car)</td><td>brand new (un coche nuevo — a brand-new car)</td></tr>
                  <tr><td><strong>pobre</strong></td><td>unfortunate (el pobre niño — the poor child)</td><td>not wealthy (el niño pobre — the poor child)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ una chica alto (masculine form with feminine noun)</p>
              <p className="es right">✓ una chica alta — a tall girl</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ los coches rojo (singular adjective with plural noun)</p>
              <p className="es right">✓ los coches rojos — the red cars</p>
            </div>

            <div className="blog-highlight">
              <p>Adjective agreement becomes instinctive with practice. The best habit is to always think of a noun and its adjective as a unit — <em>un coche rojo</em> — and to say them together. The matching ending will start to feel automatic before you consciously register the grammar rule.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to get Spanish grammar right from the start?</h3>
              <p>Building solid foundations early means fewer bad habits to correct later. Let's find the right programme for you.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/get-started" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Ask a Question</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
