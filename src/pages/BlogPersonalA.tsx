import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPersonalA() {
  useScrollAnimation();
  usePageMeta(
    'The Personal "A" in Spanish: What It Is and When to Use It | Mike Masters Languages',
    'The personal "a" is a small word with a big job in Spanish. Learn when you must use it, when you don\'t, and why Spanish grammar requires it in the first place.'
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
          <h1>The Personal "A" in Spanish: What It Is and When to Use It</h1>
          <p className="blog-hero-intro">
            It's just one letter — but leaving it out is one of the most common grammar errors beginners make. Here's the rule.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The personal <em>a</em> is a preposition that has no direct equivalent in English. It appears before a direct object when that object is a specific person (or something treated as a person). It has no meaning you can translate — its job is purely grammatical: to signal to the listener that what follows is a person being acted upon, not a thing.</p>

            <h2>The Basic Rule</h2>
            <p>When the direct object of a verb is a specific, identifiable person, place <strong>a</strong> before it:</p>

            <div className="blog-example">
              <p className="es wrong">✗ Veo María. (missing personal a)</p>
              <p className="es right">✓ Veo <strong>a</strong> María. — I see María.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Llamo mi madre todos los días.</p>
              <p className="es right">✓ Llamo <strong>a</strong> mi madre todos los días. — I call my mother every day.</p>
            </div>
            <div className="blog-example">
              <p className="es right">✓ Busco <strong>a</strong> mi amigo. — I'm looking for my friend.</p>
              <p className="es right">✓ Escucho <strong>a</strong> los estudiantes. — I listen to the students.</p>
            </div>

            <h2>Why Does Spanish Have This?</h2>
            <p>Spanish word order is more flexible than English — you can often rearrange a sentence without changing its meaning. The personal <em>a</em> helps avoid ambiguity. Without it, "El perro mordió al niño" (The dog bit the boy) and "El niño mordió al perro" (The boy bit the dog) could theoretically be confused if word order were changed. The <em>a</em> marks who the recipient of the action is.</p>

            <h2>When NOT to Use It</h2>
            <p>The personal <em>a</em> is <strong>not</strong> used when the direct object is:</p>
            <ul>
              <li><strong>A thing</strong> (not a person): <em>Veo la película.</em> — I see the film.</li>
              <li><strong>An indefinite / unknown person</strong>: <em>Busco un médico.</em> — I'm looking for a doctor. (any doctor, not a specific one)</li>
              <li><strong>After tener</strong> (to have): <em>Tengo dos hermanos.</em> — I have two brothers.</li>
            </ul>

            <div className="blog-example">
              <p className="es">Busco <strong>a</strong> mi médico. — I'm looking for my doctor. (specific person → personal a)</p>
              <p className="es">Busco un médico. — I'm looking for a doctor. (any doctor → no personal a)</p>
            </div>

            <h2>Pets and Personalised Things</h2>
            <p>The personal <em>a</em> is often used with pets and with places or things that are treated as personal or close:</p>
            <div className="blog-example">
              <p className="es">Quiero mucho <strong>a</strong> mi perro. — I love my dog very much.</p>
              <p className="es">Visité <strong>a</strong> Madrid. — I visited Madrid. (treating the city personally — common with place names)</p>
            </div>

            <h2>With Question Words</h2>
            <p>When asking about a person who is the direct object, the personal <em>a</em> appears before the question word:</p>
            <div className="blog-example">
              <p className="es">¿<strong>A</strong> quién llamas? — Who are you calling?</p>
              <p className="es">¿<strong>A</strong> quién viste ayer? — Who did you see yesterday?</p>
            </div>

            <div className="blog-highlight">
              <p>The personal <em>a</em> is one of those rules that's easy to forget when you're focused on vocabulary and conjugations. The simplest habit: whenever your sentence involves doing something <em>to</em> or <em>with</em> a specific person, pause and check whether an <em>a</em> belongs there.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to speak Spanish accurately from the start?</h3>
              <p>Small details like the personal <em>a</em> make a real difference to how your Spanish sounds. Let's work on them together.</p>
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
