import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogHayVsEstar() {
  useScrollAnimation();
  usePageMeta(
    'Hay vs Estar: "There Is / Are" vs Location in Spanish | Mike Masters Languages',
    'Hay and estar both relate to existence and location in Spanish — but they\'re used differently. This guide explains the distinction with clear examples.'
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
          <h1>Hay vs Estar: "There Is / Are" vs Location in Spanish</h1>
          <p className="blog-hero-intro">
            Both relate to where things are — but hay and estar are used in completely different situations. Here's how to tell them apart.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Beginners often confuse <em>hay</em> and <em>estar</em> because both can be used when talking about the location of things. The distinction is actually quite logical once you understand it: <em>hay</em> announces existence, while <em>estar</em> locates something already known to exist.</p>

            <h2>Hay — There Is / There Are</h2>
            <p><em>Hay</em> comes from the verb <em>haber</em> and means "there is" or "there are." It is <strong>always the same form</strong> — it never changes for singular or plural:</p>

            <div className="blog-example">
              <p className="es">Hay un banco cerca de aquí. — <span style={{fontWeight:400}}>There is a bank near here.</span></p>
              <p className="es">Hay muchos turistas en verano. — <span style={{fontWeight:400}}>There are lots of tourists in summer.</span></p>
              <p className="es">¿Hay una farmacia por aquí? — <span style={{fontWeight:400}}>Is there a pharmacy around here?</span></p>
            </div>

            <p><em>Hay</em> is used when you are <strong>introducing</strong> something — announcing its existence, often with an indefinite article (un, una, unos, unas) or a number:</p>
            <div className="blog-example">
              <p className="es">Hay tres habitaciones. — <span style={{fontWeight:400}}>There are three bedrooms.</span></p>
              <p className="es">No hay problema. — <span style={{fontWeight:400}}>There's no problem.</span></p>
            </div>

            <h2>Estar — To Be (Location)</h2>
            <p><em>Estar</em> locates something <strong>already known or identified</strong> — usually with a definite article (el, la, los, las) or a specific name:</p>

            <div className="blog-example">
              <p className="es">El banco está en la calle Mayor. — <span style={{fontWeight:400}}>The bank is on Calle Mayor.</span></p>
              <p className="es">Los turistas están en la plaza. — <span style={{fontWeight:400}}>The tourists are in the square.</span></p>
              <p className="es">¿Dónde está la farmacia? — <span style={{fontWeight:400}}>Where is the pharmacy?</span></p>
            </div>

            <h2>The Key Distinction</h2>
            <p>A simple way to remember it:</p>
            <ul>
              <li><strong>Hay</strong> = existence (introducing something new): "There's a bank somewhere around here."</li>
              <li><strong>Estar</strong> = location (finding something you know): "The bank — where is it exactly?"</li>
            </ul>

            <div className="blog-example">
              <p className="es">Hay un hotel en esta calle. — <span style={{fontWeight:400}}>There's a hotel on this street. (announcing it exists)</span></p>
              <p className="es">El hotel está al final de la calle. — <span style={{fontWeight:400}}>The hotel is at the end of the street. (locating the known hotel)</span></p>
            </div>

            <h2>Hay in Other Tenses</h2>
            <p><em>Hay</em> can be used in other tenses — it always comes from <em>haber</em> and stays impersonal:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Tense</th><th>Form</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>Present</td><td><strong>hay</strong></td><td>Hay mucho tráfico. — There's a lot of traffic.</td></tr>
                  <tr><td>Preterite</td><td><strong>hubo</strong></td><td>Hubo un accidente. — There was an accident.</td></tr>
                  <tr><td>Imperfect</td><td><strong>había</strong></td><td>Había mucha gente. — There were lots of people.</td></tr>
                  <tr><td>Future</td><td><strong>habrá</strong></td><td>Habrá tiempo. — There will be time.</td></tr>
                  <tr><td>Conditional</td><td><strong>habría</strong></td><td>Habría una solución. — There would be a solution.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Hay el restaurante en la esquina. (definite article with hay)</p>
              <p className="es right">✓ El restaurante está en la esquina. — The restaurant is on the corner.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ ¿Dónde está un supermercado? (using estar for general existence)</p>
              <p className="es right">✓ ¿Hay un supermercado por aquí? — Is there a supermarket around here?</p>
            </div>

            <div className="blog-highlight">
              <p>A quick test: if the noun has a definite article (the) or is a proper name, use <em>estar</em>. If it has an indefinite article (a/some) or a number, use <em>hay</em>. This covers the vast majority of cases.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to navigate Spanish with confidence?</h3>
              <p>Getting hay and estar right is one of those things that makes your Spanish sound natural immediately. Let's practise together.</p>
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
