import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogObjectPronouns() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Object Pronouns: Direct vs Indirect (Lo, La, Le) Explained | Mike Masters Languages',
    'Direct and indirect object pronouns are one of the trickiest parts of Spanish for English speakers. This guide breaks them down clearly with examples and placement rules.'
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
          <h1>Spanish Object Pronouns: Direct vs Indirect (Lo, La, Le) Explained</h1>
          <p className="blog-hero-intro">
            Lo, la, le, les — object pronouns cause more confusion than almost any other part of Spanish grammar. Here's a clear breakdown of what they are and how to use them.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Object pronouns are the words that replace nouns to avoid repetition. In English: "I saw <em>the film</em>" becomes "I saw <em>it</em>." In Spanish the same thing happens — but Spanish distinguishes between <strong>direct</strong> and <strong>indirect</strong> objects, and the pronouns change depending on gender and number. Once you understand the difference, everything else falls into place.</p>

            <h2>Direct vs Indirect Objects</h2>
            <p>Before looking at the pronouns themselves, it helps to understand what direct and indirect objects actually are:</p>
            <ul>
              <li>A <strong>direct object</strong> is the thing being acted upon directly: "I eat <em>the apple</em>", "She reads <em>the book</em>".</li>
              <li>An <strong>indirect object</strong> is the person for or to whom something is done: "I give the book <em>to her</em>", "He tells <em>me</em> the story".</li>
            </ul>

            <h2>Direct Object Pronouns</h2>
            <p>Direct object pronouns replace the direct object and <strong>agree with its gender and number</strong>:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Singular</th><th>Plural</th></tr></thead>
                <tbody>
                  <tr><td>1st</td><td><strong>me</strong> (me)</td><td><strong>nos</strong> (us)</td></tr>
                  <tr><td>2nd</td><td><strong>te</strong> (you)</td><td><strong>os</strong> (you all)</td></tr>
                  <tr><td>3rd masc.</td><td><strong>lo</strong> (him / it)</td><td><strong>los</strong> (them)</td></tr>
                  <tr><td>3rd fem.</td><td><strong>la</strong> (her / it)</td><td><strong>las</strong> (them)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Tienes el libro? — Sí, lo tengo.</p>
              <p className="en">Do you have the book? — Yes, I have it. (libro = masculine, so lo)</p>
            </div>
            <div className="blog-example">
              <p className="es">¿Ves la película? — La vi ayer.</p>
              <p className="en">Are you watching the film? — I watched it yesterday. (película = feminine, so la)</p>
            </div>

            <h2>Indirect Object Pronouns</h2>
            <p>Indirect object pronouns replace the indirect object — the person to or for whom something is done. They do <strong>not</strong> change for gender:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Singular</th><th>Plural</th></tr></thead>
                <tbody>
                  <tr><td>1st</td><td><strong>me</strong> (to/for me)</td><td><strong>nos</strong> (to/for us)</td></tr>
                  <tr><td>2nd</td><td><strong>te</strong> (to/for you)</td><td><strong>os</strong> (to/for you all)</td></tr>
                  <tr><td>3rd</td><td><strong>le</strong> (to/for him/her/you formal)</td><td><strong>les</strong> (to/for them)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Le mandé un mensaje. — <span style={{fontWeight:400}}>I sent him/her a message.</span></p>
              <p className="es">Te compré un regalo. — <span style={{fontWeight:400}}>I bought you a gift.</span></p>
            </div>

            <h2>Where Do They Go?</h2>
            <p>Object pronouns go <strong>before the conjugated verb</strong>:</p>
            <div className="blog-example">
              <p className="es">Lo veo. — I see it.</p>
              <p className="es">Le digo la verdad. — I tell him/her the truth.</p>
            </div>
            <p>With an infinitive or gerund, they can attach to the end or go before the conjugated verb:</p>
            <div className="blog-example">
              <p className="es">Quiero verlo. / Lo quiero ver. — I want to see it.</p>
              <p className="es">Estoy leyéndolo. / Lo estoy leyendo. — I'm reading it.</p>
            </div>

            <h2>Using Both Together: Le Becomes Se</h2>
            <p>When a direct and indirect object pronoun appear together, the indirect comes first. But when both start with "l" — <em>le lo</em> or <em>les los</em> — the indirect pronoun changes to <strong>se</strong> to avoid the awkward sound:</p>

            <div className="blog-example">
              <p className="es wrong">✗ Le lo dí.</p>
              <p className="es right">✓ Se lo dí. — I gave it to him/her.</p>
            </div>
            <div className="blog-example">
              <p className="es">Se la mandé. — <span style={{fontWeight:400}}>I sent it to him/her. (feminine direct object)</span></p>
              <p className="es">Se los expliqué. — <span style={{fontWeight:400}}>I explained them to them.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Remember the order:</strong> Reflexive → Indirect → Direct. A useful mnemonic is <strong>RID</strong>. And when indirect <em>le/les</em> meets any direct "l" pronoun, the indirect becomes <strong>se</strong>.</p>
            </div>

            <h2>Common Mistakes</h2>
            <div className="blog-example">
              <p className="es wrong">✗ Veo lo. (pronoun after conjugated verb)</p>
              <p className="es right">✓ Lo veo. — I see it.</p>
            </div>
            <div className="blog-example">
              <p className="es wrong">✗ Compré la a ella. (using article instead of pronoun)</p>
              <p className="es right">✓ Se la compré. — I bought it for her.</p>
            </div>

            <div className="blog-highlight">
              <p>The best way to get comfortable with object pronouns is through listening and reading — you'll start to notice the patterns in real speech much faster than through memorising tables alone. Pay attention to how native speakers use <em>lo, la, le</em> in films and conversations.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to get object pronouns right in conversation?</h3>
              <p>These take practice in real sentences — let's work on them together.</p>
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
