import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogCoger() {
  useScrollAnimation();
  usePageMeta(
    'Coger in Spain vs Latin America: What You Need to Know | Mike Masters Languages',
    'Coger means "to grab/take" in Spain but is highly offensive in most of Latin America. Here\'s what it means where, and the safe alternatives to use instead.'
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
            <span className="blog-hero-tag">Vocabulary</span>
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>Coger in Spain vs Latin America: Why This Word Needs Care</h1>
          <p className="blog-hero-intro">Coger is a completely normal, everyday verb in Spain. In most of Latin America, it's vulgar slang. Understanding this difference could save you from a very awkward moment.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Few words illustrate the regional divide in Spanish more vividly than <em>coger</em>. In Spain, it's one of the most useful and common verbs you'll encounter — used dozens of times a day. In most of Latin America, it has an entirely different, highly offensive meaning. Knowing the difference is essential.</p>

            <h2>Coger in Spain</h2>

            <p>In Spain, <em>coger</em> simply means "to take", "to grab" or "to catch". It's completely neutral and used constantly:</p>

            <div className="blog-example">
              <p className="es">Coge el autobús. — <span style={{fontWeight:400}}>Take the bus.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">¿Me coges ese libro? — <span style={{fontWeight:400}}>Can you grab that book for me?</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Cogí un resfriado. — <span style={{fontWeight:400}}>I caught a cold.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Coge la primera calle a la derecha. — <span style={{fontWeight:400}}>Take the first street on the right.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">¿Cogemos un taxi? — <span style={{fontWeight:400}}>Shall we get a taxi?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>In Spain:</strong> <em>coger</em> is as neutral and common as 'take' or 'grab' in English. You'll hear it in shops, on the metro, in conversation — everywhere. There's no hesitation about using it.</p>
            </div>

            <h2>Coger in Latin America</h2>

            <p>In Mexico, Argentina, Colombia, and most other Latin American countries, <em>coger</em> is crude sexual slang. Using it in any of the Spain-style contexts above would cause shock, laughter, or offence — depending on your audience.</p>

            <div className="blog-highlight">
              <p>If you are speaking to Latin American Spanish speakers — or are unsure of your audience — avoid <em>coger</em> entirely. There are safe alternatives for every context.</p>
            </div>

            <h2>Safe Alternatives to Use Instead</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>What you mean</th><th>Safe alternative</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>To take (transport)</td><td>tomar</td><td>Toma el autobús.</td></tr>
                  <tr><td>To grab / pick up</td><td>agarrar</td><td>Agarra ese libro.</td></tr>
                  <tr><td>To catch (illness)</td><td>agarrar / pillar</td><td>Agarré un resfriado.</td></tr>
                  <tr><td>To take / pick up (object)</td><td>tomar / recoger</td><td>Toma la primera calle.</td></tr>
                  <tr><td>To get / catch (general)</td><td>tomar</td><td>¿Tomamos un taxi?</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Tomar</strong> and <strong>agarrar</strong> are your safest substitutes for <em>coger</em> in any context. Tomar works almost everywhere; agarrar is more informal and very natural in Latin America.</p>
            </div>

            <h2>Other Regional Vocabulary Differences Worth Knowing</h2>

            <p>A few other words that differ significantly between Spain and Latin America:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Word</th><th>Spain</th><th>Latin America</th></tr></thead>
                <tbody>
                  <tr><td>el coche</td><td>car</td><td>(rarely used — use el carro or el auto)</td></tr>
                  <tr><td>el móvil</td><td>mobile phone</td><td>el celular</td></tr>
                  <tr><td>el ordenador</td><td>computer</td><td>la computadora</td></tr>
                  <tr><td>coger</td><td>to take/grab</td><td>offensive — avoid</td></tr>
                  <tr><td>vosotros</td><td>you all (informal)</td><td>not used — use ustedes</td></tr>
                  <tr><td>el piso</td><td>flat/apartment</td><td>el apartamento / el departamento</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Regional vocabulary differences are real but rarely cause serious misunderstanding in most cases — because context usually makes meaning clear. <em>Coger</em> is the notable exception where context doesn't rescue you.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>A good tutor will make sure you know which words to use confidently and which to avoid — wherever in the Spanish-speaking world you're heading.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/get-started" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/get-started" className="btn btn-secondary btn-lg">Ask a Question</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
