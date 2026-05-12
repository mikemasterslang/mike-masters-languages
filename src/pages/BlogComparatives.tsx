import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogComparatives() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Comparatives and Superlatives: Más, Menos, Tan, El Más | Mike Masters Languages',
    'Comparing things in Spanish uses simple patterns — once you know más que, menos que and tan...como, you can handle the vast majority of comparisons you\'ll ever need.'
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
          <h1>Spanish Comparatives and Superlatives: Más, Menos, Tan and El Más</h1>
          <p className="blog-hero-intro">
            Spanish comparisons follow a clear, consistent pattern. Here's everything you need to compare and rank things confidently.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>English changes the adjective to compare things — "tall, taller, tallest." Spanish takes a different approach: the adjective stays the same and you add words around it. This actually makes Spanish comparisons more regular and easier to learn once you know the patterns.</p>

            <h2>Comparative of Superiority (More Than)</h2>
            <p>Use <strong>más + adjective/adverb + que</strong> to say something is more than something else:</p>
            <div className="blog-example">
              <p className="es">Madrid es más grande que Sevilla. — <span style={{fontWeight:400}}>Madrid is bigger than Seville.</span></p>
              <p className="es">Habla más rápido que yo. — <span style={{fontWeight:400}}>She speaks faster than me.</span></p>
              <p className="es">Este libro es más interesante que el otro. — <span style={{fontWeight:400}}>This book is more interesting than the other one.</span></p>
            </div>

            <h2>Comparative of Inferiority (Less Than)</h2>
            <p>Use <strong>menos + adjective/adverb + que</strong>:</p>
            <div className="blog-example">
              <p className="es">El autobús es menos caro que el tren. — <span style={{fontWeight:400}}>The bus is less expensive than the train.</span></p>
              <p className="es">Duermo menos que antes. — <span style={{fontWeight:400}}>I sleep less than before.</span></p>
            </div>

            <h2>Comparative of Equality (As... As)</h2>
            <p>Use <strong>tan + adjective/adverb + como</strong> to say something is as... as something else:</p>
            <div className="blog-example">
              <p className="es">Soy tan alto como mi hermano. — <span style={{fontWeight:400}}>I'm as tall as my brother.</span></p>
              <p className="es">No es tan difícil como parece. — <span style={{fontWeight:400}}>It's not as difficult as it seems.</span></p>
            </div>
            <p>For nouns (as much / as many), use <strong>tanto/a/os/as... como</strong> — it must agree with the noun:</p>
            <div className="blog-example">
              <p className="es">Tengo tanto dinero como tú. — <span style={{fontWeight:400}}>I have as much money as you.</span></p>
              <p className="es">No hay tantos estudiantes como el año pasado. — <span style={{fontWeight:400}}>There aren't as many students as last year.</span></p>
            </div>

            <h2>Superlatives (The Most / The Least)</h2>
            <p>Add the definite article before <em>más</em> or <em>menos</em>. The article agrees with the noun:</p>
            <div className="blog-example">
              <p className="es">Es la ciudad más bonita de España. — <span style={{fontWeight:400}}>It's the most beautiful city in Spain.</span></p>
              <p className="es">Él es el estudiante menos hablador de la clase. — <span style={{fontWeight:400}}>He's the least talkative student in the class.</span></p>
            </div>
            <p>Note: after a superlative, "in" is expressed with <strong>de</strong>, not <em>en</em>: <em>el más alto de la clase</em> (the tallest in the class).</p>

            <h2>Irregular Comparatives</h2>
            <p>A small group of common adjectives have irregular comparative forms:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Adjective</th><th>Comparative</th><th>Superlative</th></tr></thead>
                <tbody>
                  <tr><td><strong>bueno</strong> (good)</td><td>mejor (better)</td><td>el/la mejor (the best)</td></tr>
                  <tr><td><strong>malo</strong> (bad)</td><td>peor (worse)</td><td>el/la peor (the worst)</td></tr>
                  <tr><td><strong>grande</strong> (big/great)</td><td>mayor (greater/older)</td><td>el/la mayor (the greatest/oldest)</td></tr>
                  <tr><td><strong>pequeño</strong> (small)</td><td>menor (lesser/younger)</td><td>el/la menor (the least/youngest)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Este restaurante es mejor que el otro. — <span style={{fontWeight:400}}>This restaurant is better than the other one.</span></p>
              <p className="es">Es el peor día de mi vida. — <span style={{fontWeight:400}}>It's the worst day of my life.</span></p>
              <p className="es">Soy mayor que mi hermana. — <span style={{fontWeight:400}}>I'm older than my sister.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Más bueno</strong> and <strong>más malo</strong> do exist but are used for moral character rather than quality: <em>es más bueno que el pan</em> (he's as good as gold). For quality comparisons, always use <em>mejor/peor</em>.</p>
            </div>

            <div className="blog-highlight">
              <p>The three patterns — <em>más... que, menos... que, tan... como</em> — cover almost every comparative situation you'll encounter. Memorise those three, add the irregular forms, and you'll be comparing confidently in Spanish.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to express yourself more precisely in Spanish?</h3>
              <p>Comparatives and superlatives are essential for natural conversation. Let's practise them together.</p>
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
