import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPeroVsSino() {
  useScrollAnimation();
  usePageMeta(
    'Pero vs Sino: Two Ways to Say "But" in Spanish | Mike Masters Languages',
    'Confused about when to use pero or sino in Spanish? This guide explains the difference clearly, with real examples showing but/however vs but rather/instead.'
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
          <h1>Pero vs Sino: Two Ways to Say "But" in Spanish</h1>
          <p className="blog-hero-intro">
            Both pero and sino translate as "but" in English, yet they are not interchangeable. Once you understand the logic behind each one, you'll use them confidently every time.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the small but surprisingly tricky points in Spanish grammar is the difference between <em>pero</em> and <em>sino</em>. Both are conjunctions that translate as "but" in English, and both connect two contrasting ideas. The difference is <em>how</em> they contrast: <em>pero</em> simply adds a contrasting or limiting thought, while <em>sino</em> introduces a <strong>replacement</strong> or <strong>correction</strong> after a negative statement.</p>

            <h2>Pero: But / However</h2>
            <p><em>Pero</em> is by far the more common of the two. It works exactly like "but" in most English sentences — it adds a contrasting or qualifying idea without needing a negative before it:</p>

            <div className="blog-example">
              <p className="es">Es caro, pero vale la pena. — <span style={{fontWeight:400}}>It's expensive, but it's worth it.</span></p>
              <p className="es">Habla español, pero con acento inglés. — <span style={{fontWeight:400}}>She speaks Spanish, but with an English accent.</span></p>
              <p className="es">Quiero ir, pero no tengo tiempo. — <span style={{fontWeight:400}}>I want to go, but I don't have time.</span></p>
            </div>

            <p>Notice that the first clause in each example above is <strong>positive</strong> — it makes a statement, and then <em>pero</em> introduces a contrast or limitation. This is the core situation for <em>pero</em>.</p>

            <div className="blog-tip">
              <p><strong>Quick test:</strong> If you can replace "but" with "however" or "although" and the sentence still makes sense, you almost certainly need <em>pero</em>.</p>
            </div>

            <h2>Sino: But Rather / Instead</h2>
            <p><em>Sino</em> is used in a very specific situation: when the first clause is <strong>negative</strong> and the second clause <strong>corrects or replaces</strong> what was negated. It means "but rather", "but instead", or "on the contrary":</p>

            <div className="blog-example">
              <p className="es">No soy inglés, sino escocés. — <span style={{fontWeight:400}}>I'm not English, but (rather) Scottish.</span></p>
              <p className="es">No quiero té, sino café. — <span style={{fontWeight:400}}>I don't want tea, but (rather) coffee.</span></p>
              <p className="es">No llegaron el lunes, sino el martes. — <span style={{fontWeight:400}}>They didn't arrive on Monday, but (rather) on Tuesday.</span></p>
            </div>

            <p>The structure is always: <strong>no + [something] + sino + [the correction]</strong>. The word after <em>sino</em> directly replaces or contradicts what was negated before it. Crucially, both the negated part and the correcting part must refer to the <strong>same grammatical element</strong> (both nouns, both adjectives, both adverbs, etc.).</p>

            <h2>The Three-Way Contrast at a Glance</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Word</th><th>Used when…</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td><strong>pero</strong></td><td>First clause is positive (or a general contrast)</td><td>but, however</td></tr>
                  <tr><td><strong>sino</strong></td><td>First clause is negative + correction follows (no verb)</td><td>but rather, instead</td></tr>
                  <tr><td><strong>sino que</strong></td><td>First clause is negative + correction has a conjugated verb</td><td>but rather (+ verb clause)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Sino que: When the Correction Contains a Verb</h2>
            <p>When the correcting part after <em>sino</em> contains a <strong>conjugated verb</strong> (not just a noun, adjective or infinitive), you must use <em>sino que</em> instead of <em>sino</em> alone:</p>

            <div className="blog-example">
              <p className="es">No quiero que te vayas, sino que te quedes. — <span style={{fontWeight:400}}>I don't want you to leave, but (rather) to stay.</span></p>
              <p className="es">No llamó, sino que envió un mensaje. — <span style={{fontWeight:400}}>She didn't call, but instead sent a message.</span></p>
              <p className="es">No lo compré yo, sino que lo compró mi madre. — <span style={{fontWeight:400}}>I didn't buy it — my mother bought it instead.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Rule of thumb:</strong> After a negative clause, ask yourself what follows "but". If it's just a noun, adjective or phrase — use <em>sino</em>. If there's a new conjugated verb — use <em>sino que</em>.</p>
            </div>

            <h2>Common Mistakes to Avoid</h2>
            <p>The most frequent error is using <em>pero</em> where <em>sino</em> is needed, or vice versa. Here are some examples of each mistake corrected:</p>

            <div className="blog-example">
              <p className="es wrong">No es médico, pero abogado. — <span style={{fontWeight:400}}>INCORRECT — correction after negative needs sino</span></p>
              <p className="es right">No es médico, sino abogado. — <span style={{fontWeight:400}}>He's not a doctor, but a lawyer. CORRECT</span></p>
            </div>

            <div className="blog-example">
              <p className="es wrong">Es inteligente, sino perezoso. — <span style={{fontWeight:400}}>INCORRECT — first clause is positive, use pero</span></p>
              <p className="es right">Es inteligente, pero perezoso. — <span style={{fontWeight:400}}>He's intelligent, but lazy. CORRECT</span></p>
            </div>

            <div className="blog-example">
              <p className="es wrong">No estudió, sino aprobó el examen. — <span style={{fontWeight:400}}>INCORRECT — conjugated verb after sino needs sino que</span></p>
              <p className="es right">No estudió, sino que aprobó el examen. — <span style={{fontWeight:400}}>He didn't study, but he passed the exam anyway. CORRECT</span></p>
            </div>

            <h2>Pero After a Negative Clause</h2>
            <p>It is possible to use <em>pero</em> after a negative clause — but only when you are <em>not</em> directly correcting or replacing what was negated. Instead, you're simply adding a contrasting thought:</p>

            <div className="blog-example">
              <p className="es">No hablo catalán, pero me gustaría aprenderlo. — <span style={{fontWeight:400}}>I don't speak Catalan, but I would like to learn it.</span></p>
              <p className="es">No es fácil, pero es posible. — <span style={{fontWeight:400}}>It's not easy, but it is possible.</span></p>
            </div>

            <p>In the first example, "I would like to learn it" does not directly replace "I don't speak Catalan" — it simply adds a related thought. So <em>pero</em> is correct. In the second example, "possible" does not correct "easy" in a replacement sense — it just contrasts. Again, <em>pero</em> is right.</p>

            <h2>Real-World Practice: Spain Scenarios</h2>
            <p>Here are some natural, everyday sentences you might actually use in Spain:</p>

            <div className="blog-example">
              <p className="es">El apartamento no es grande, pero tiene mucha luz. — <span style={{fontWeight:400}}>The flat isn't big, but it has a lot of light.</span></p>
              <p className="es">No quiero la paella de marisco, sino la de verduras. — <span style={{fontWeight:400}}>I don't want the seafood paella, but the vegetable one.</span></p>
              <p className="es">No fui al Museo del Prado, sino que visité el Reina Sofía. — <span style={{fontWeight:400}}>I didn't go to the Prado, but visited the Reina Sofía instead.</span></p>
              <p className="es">El tren no llegó a tiempo, pero no importa. — <span style={{fontWeight:400}}>The train didn't arrive on time, but it doesn't matter.</span></p>
            </div>

            <div className="blog-highlight">
              <p>Use <em>pero</em> for general contrast ("but, however"). Use <em>sino</em> after a negative clause when you are directly replacing or correcting what was negated — and <em>sino que</em> when the correction contains a conjugated verb. Those three situations cover every case you'll encounter.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to get the small details right in Spanish?</h3>
              <p>Points like pero vs sino are exactly the kind of thing we work through in lessons — with real conversation practice to make them stick.</p>
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
