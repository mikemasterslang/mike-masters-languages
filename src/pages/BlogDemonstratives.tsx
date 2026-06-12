import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogDemonstratives() {
  useScrollAnimation();
  usePageMeta(
    'Demonstratives in Spanish: Este, Ese and Aquel | Mike Masters Languages',
    'Spanish has three levels of distance — este, ese, and aquel. Learn how demonstrative adjectives and pronouns work, including the neuter forms esto, eso and aquello.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Demonstratives in Spanish: Este, Ese and Aquel</h1>
          <p className="blog-hero-intro">This, that and that over there — Spanish has three levels of distance, not two. Here's how they work.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>In English, you point to things using two words: this (close) and that (further away). Spanish works differently — it has three levels of distance, and each one has its own set of forms that change depending on the gender and number of the noun. Once you grasp the system, it's quite logical. And it gives you real precision when pointing things out in conversation.</p>

            <h2>Este — This (Close to the Speaker)</h2>
            <p>Este refers to something near the person speaking. Think of it as the equivalent of "this" or "these" in English.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Masculine</th>
                  <th>Feminine</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Singular</td><td>este</td><td>esta</td></tr>
                <tr><td>Plural</td><td>estos</td><td>estas</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Este libro es muy interesante. — <span style={{fontWeight: 400}}>This book is very interesting.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Esta chaqueta es mía. — <span style={{fontWeight: 400}}>This jacket is mine.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Estos zapatos son nuevos. — <span style={{fontWeight: 400}}>These shoes are new.</span></p>
            </div>

            <h2>Ese — That (Close to the Listener)</h2>
            <p>Ese refers to something near the person being spoken to, or at a moderate distance from the speaker. It maps roughly to "that" in English — but with the nuance that it's often something within the listener's space rather than fully remote.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Masculine</th>
                  <th>Feminine</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Singular</td><td>ese</td><td>esa</td></tr>
                <tr><td>Plural</td><td>esos</td><td>esas</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Ese restaurante es buenísimo. — <span style={{fontWeight: 400}}>That restaurant is excellent.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">¿Puedes pasarme esa sal? — <span style={{fontWeight: 400}}>Can you pass me that salt?</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Esas ideas son muy creativas. — <span style={{fontWeight: 400}}>Those ideas are very creative.</span></p>
            </div>

            <h2>Aquel — That Over There (Far from Both)</h2>
            <p>Aquel is the form for things that are far from both the speaker and the listener. There's no direct equivalent in modern English — we just say "that" for everything at a distance — but aquel adds a sense of "that one over there" or even a distant memory or time.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Masculine</th>
                  <th>Feminine</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Singular</td><td>aquel</td><td>aquella</td></tr>
                <tr><td>Plural</td><td>aquellos</td><td>aquellas</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">¿Ves aquel edificio al fondo? — <span style={{fontWeight: 400}}>Can you see that building at the far end?</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Aquellos tiempos eran distintos. — <span style={{fontWeight: 400}}>Those times were different. (referring to a distant past)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Aquella película me encantó. — <span style={{fontWeight: 400}}>I loved that film. (a film remembered from long ago)</span></p>
            </div>

            <div className="blog-highlight">
              <p>A useful mental model: este = in my hands, ese = in your hands or nearby, aquel = over there in the distance (physically or in time).</p>
            </div>

            <h2>Demonstrative Pronouns</h2>
            <p>When you want to say "this one" or "that one" — without naming the noun — you simply use the same forms. In modern Spanish, demonstrative pronouns are written identically to demonstrative adjectives (accents are no longer required by the Real Academia Española).</p>

            <div className="blog-example">
              <p className="es">Quiero este. — <span style={{fontWeight: 400}}>I want this one.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">¿Cuál prefieres, ese o aquel? — <span style={{fontWeight: 400}}>Which do you prefer, that one or that one over there?</span></p>
            </div>

            <h2>The Neuter Forms: Esto, Eso, Aquello</h2>
            <p>Here's something that doesn't exist in English at all: neuter demonstratives. These forms — esto, eso, and aquello — refer to things whose identity or gender is unknown, to ideas, to situations, or to something abstract. They never refer to a specific named noun (because if you knew what the noun was, you'd use its gender).</p>

            <div className="blog-example">
              <p className="es">¿Qué es esto? — <span style={{fontWeight: 400}}>What is this? (pointing at an unidentified object)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Eso no me parece bien. — <span style={{fontWeight: 400}}>That doesn't seem right to me. (referring to a situation)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Aquello fue increíble. — <span style={{fontWeight: 400}}>That was incredible. (a distant memory or experience)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Todo esto es muy complicado. — <span style={{fontWeight: 400}}>All of this is very complicated.</span></p>
            </div>

            <div className="blog-highlight">
              <p>Use esto/eso/aquello when you're pointing at something unidentified, or referring to an idea or situation. Once you know the noun and its gender, switch to este/ese/aquel with the correct ending.</p>
            </div>

            <h2>The Key Difference from English</h2>
            <p>The biggest adjustment for English speakers is accepting three levels of distance instead of two. In practice, the difference between ese and aquel is sometimes subtle — native speakers don't always use them with strict geographical precision. But learning all three opens up the full range of natural Spanish, especially in writing and in situations where you want to contrast something nearby with something far away.</p>

          </div>

          <div className="blog-author-cta">
            <p>Want to work on your Spanish grammar with a professional tutor? <Link to="/get-started">Get started with Mike Masters Languages.</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
