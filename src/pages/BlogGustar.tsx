import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGustar() {
  useScrollAnimation();
  usePageMeta(
    'How to Use Gustar (and Verbs Like It) in Spanish | Mike Masters Languages',
    'Gustar doesn\'t work like a normal verb — and that trips up almost every beginner. This guide explains the structure of gustar and the other "backwards verbs" in Spanish.'
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
          <h1>How to Use Gustar (and Verbs Like It) in Spanish</h1>
          <p className="blog-hero-intro">
            "Me gusta" is one of the first phrases you learn — but most beginners don't understand why it works the way it does. Here's the full picture.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Almost every Spanish beginner learns <em>me gusta</em> very early on. But most are told it means "I like" and leave it at that — without understanding the structure underneath. That gap causes problems later, because <em>gustar</em> behaves completely differently from English "like", and there's a whole family of Spanish verbs that work the same way.</p>

            <h2>The Problem with "I Like"</h2>
            <p>In English, "I like coffee" has a simple structure: <em>I</em> (subject) <em>like</em> (verb) <em>coffee</em> (object). You are the one doing the liking.</p>
            <p>Spanish thinks about it differently. <em>Gustar</em> literally means "to please" or "to be pleasing to." So instead of "I like coffee", Spanish says "coffee pleases me" — <em>el café</em> is the subject, and <em>me</em> (me) is the indirect object.</p>

            <div className="blog-example">
              <p className="es wrong">✗ Yo gusto el café. (treating gustar like a normal verb)</p>
              <p className="es right">✓ Me gusta el café. — I like coffee. (literally: coffee pleases me)</p>
            </div>

            <h2>The Structure of Gustar</h2>
            <p>The verb agrees with what is doing the pleasing — the thing you like — not with the person who likes it:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>What you like</th><th>Verb form</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>One thing (singular noun)</td><td><strong>gusta</strong></td><td>Me gusta el libro. — I like the book.</td></tr>
                  <tr><td>Multiple things (plural noun)</td><td><strong>gustan</strong></td><td>Me gustan los libros. — I like books.</td></tr>
                  <tr><td>An action (infinitive)</td><td><strong>gusta</strong></td><td>Me gusta leer. — I like reading.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Changing Who Likes It</h2>
            <p>The indirect object pronoun changes to show who is doing the liking. The verb form stays the same — only the pronoun changes:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Pronoun</th><th>Meaning</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td><strong>me</strong></td><td>to me</td><td>Me gusta el fútbol. — I like football.</td></tr>
                  <tr><td><strong>te</strong></td><td>to you</td><td>Te gusta el fútbol. — You like football.</td></tr>
                  <tr><td><strong>le</strong></td><td>to him/her/you (formal)</td><td>Le gusta el fútbol. — He/she likes football.</td></tr>
                  <tr><td><strong>nos</strong></td><td>to us</td><td>Nos gusta el fútbol. — We like football.</td></tr>
                  <tr><td><strong>os</strong></td><td>to you all</td><td>Os gusta el fútbol. — You all like football.</td></tr>
                  <tr><td><strong>les</strong></td><td>to them</td><td>Les gusta el fútbol. — They like football.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Clarifying Who "Le" or "Les" Refers To</h2>
            <p>Because <em>le</em> and <em>les</em> can refer to several different people, Spanish often adds a clarifying phrase with <em>a</em>:</p>
            <div className="blog-example">
              <p className="es">A María le gusta bailar. — María likes dancing.</p>
              <p className="es">A ellos les gustan las películas de terror. — They like horror films.</p>
              <p className="es">A mí me encanta el chocolate. — I love chocolate. (emphatic, not ambiguous — but still common)</p>
            </div>

            <div className="blog-tip">
              <p><strong>Note:</strong> Adding <em>a mí, a ti, a él</em> etc. is used for emphasis or contrast, not as a replacement for the pronoun. You still need <em>me, te, le</em> — the <em>a mí</em> part just adds weight: "I like it (not you)."</p>
            </div>

            <h2>Verbs That Work Like Gustar</h2>
            <p>Once you understand <em>gustar</em>, you've unlocked a whole family of verbs. They all follow the same indirect object + verb structure:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Literal meaning</th><th>English equivalent</th></tr></thead>
                <tbody>
                  <tr><td><strong>encantar</strong></td><td>to enchant</td><td>to love (things)</td></tr>
                  <tr><td><strong>molestar</strong></td><td>to bother</td><td>to bother / to annoy</td></tr>
                  <tr><td><strong>interesar</strong></td><td>to interest</td><td>to interest / to be interested in</td></tr>
                  <tr><td><strong>aburrir</strong></td><td>to bore</td><td>to find boring</td></tr>
                  <tr><td><strong>parecer</strong></td><td>to seem</td><td>to seem / to think (about something)</td></tr>
                  <tr><td><strong>quedar</strong></td><td>to remain / fit</td><td>to suit / to fit (clothing)</td></tr>
                  <tr><td><strong>doler</strong></td><td>to hurt</td><td>to hurt / to ache</td></tr>
                  <tr><td><strong>faltar</strong></td><td>to be lacking</td><td>to need / to be missing</td></tr>
                  <tr><td><strong>sobrar</strong></td><td>to be left over</td><td>to have too much of</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Me encanta la música española. — <span style={{fontWeight:400}}>I love Spanish music.</span></p>
              <p className="es">Le aburren las matemáticas. — <span style={{fontWeight:400}}>He finds maths boring.</span></p>
              <p className="es">Me duele la cabeza. — <span style={{fontWeight:400}}>My head hurts. (literally: the head hurts me)</span></p>
              <p className="es">Nos faltan dos días. — <span style={{fontWeight:400}}>We're two days short. (literally: two days are lacking to us)</span></p>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Me gusta los tacos. (gusta should be gustan — plural subject)</p>
              <p className="es right">✓ Me gustan los tacos. — I like tacos.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Yo gusto nadar. (treating gustar like a regular verb)</p>
              <p className="es right">✓ Me gusta nadar. — I like swimming.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Él gusta el fútbol. (missing indirect object pronoun)</p>
              <p className="es right">✓ Le gusta el fútbol. — He likes football.</p>
            </div>

            <div className="blog-highlight">
              <p>The key insight with <em>gustar</em> is to stop translating from English and start thinking in Spanish: <strong>what is doing the pleasing?</strong> That's your subject, and the verb agrees with it. Once that clicks, the whole structure becomes logical — and you can apply it to every verb in the family.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want gustar to feel natural in conversation?</h3>
              <p>It takes practice with real sentences — but once the structure clicks, it stays with you. Let's work on it together.</p>
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
