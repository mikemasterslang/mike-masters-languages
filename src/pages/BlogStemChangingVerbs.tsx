import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogStemChangingVerbs() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Stem-Changing Verbs: E→IE, O→UE and E→I Explained | Mike Masters Languages',
    'Stem-changing verbs are one of the most common verb types in Spanish. This guide explains the three main patterns — e→ie, o→ue and e→i — with conjugation tables and key examples.'
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
          <h1>Spanish Stem-Changing Verbs: E→IE, O→UE and E→I Explained</h1>
          <p className="blog-hero-intro">
            Some of the most common Spanish verbs change their stem vowel in certain forms. Once you know the pattern, they become predictable.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Stem-changing verbs (also called "boot verbs" or "shoe verbs") are verbs where the vowel in the stem changes in five of the six present tense forms. They look irregular at first glance, but they follow very consistent patterns — and many of the most common Spanish verbs belong to this group.</p>

            <h2>What Is the Stem?</h2>
            <p>The stem is what remains when you remove the infinitive ending (-ar, -er, -ir). For <em>hablar</em> the stem is <em>habl-</em>; for <em>comer</em> it's <em>com-</em>; for <em>querer</em> it's <em>quer-</em>. In stem-changing verbs, the last vowel of this stem changes in the stressed forms.</p>

            <h2>Pattern 1: E → IE</h2>
            <p>The <em>e</em> in the stem changes to <em>ie</em> in all forms <strong>except nosotros and vosotros</strong>:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Querer (to want)</th><th>Pensar (to think)</th><th>Empezar (to start)</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>qu<u>ie</u>ro</strong></td><td><strong>p<u>ie</u>nso</strong></td><td><strong>emp<u>ie</u>zo</strong></td></tr>
                  <tr><td>tú</td><td><strong>qu<u>ie</u>res</strong></td><td><strong>p<u>ie</u>nsas</strong></td><td><strong>emp<u>ie</u>zas</strong></td></tr>
                  <tr><td>él/ella</td><td><strong>qu<u>ie</u>re</strong></td><td><strong>p<u>ie</u>nsa</strong></td><td><strong>emp<u>ie</u>za</strong></td></tr>
                  <tr><td>nosotros</td><td>queremos</td><td>pensamos</td><td>empezamos</td></tr>
                  <tr><td>vosotros</td><td>queréis</td><td>pensáis</td><td>empezáis</td></tr>
                  <tr><td>ellos</td><td><strong>qu<u>ie</u>ren</strong></td><td><strong>p<u>ie</u>nsan</strong></td><td><strong>emp<u>ie</u>zan</strong></td></tr>
                </tbody>
              </table>
            </div>

            <p>Other common e→ie verbs: <em>entender, preferir, tener (irregular yo), venir (irregular yo), mentir, sentir, perder</em></p>

            <h2>Pattern 2: O → UE</h2>
            <p>The <em>o</em> in the stem changes to <em>ue</em> — again, in all forms except nosotros and vosotros:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Poder (can)</th><th>Volver (to return)</th><th>Dormir (to sleep)</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>p<u>ue</u>do</strong></td><td><strong>v<u>ue</u>lvo</strong></td><td><strong>d<u>ue</u>rmo</strong></td></tr>
                  <tr><td>tú</td><td><strong>p<u>ue</u>des</strong></td><td><strong>v<u>ue</u>lves</strong></td><td><strong>d<u>ue</u>rmes</strong></td></tr>
                  <tr><td>él/ella</td><td><strong>p<u>ue</u>de</strong></td><td><strong>v<u>ue</u>lve</strong></td><td><strong>d<u>ue</u>rme</strong></td></tr>
                  <tr><td>nosotros</td><td>podemos</td><td>volvemos</td><td>dormimos</td></tr>
                  <tr><td>vosotros</td><td>podéis</td><td>volvéis</td><td>dormís</td></tr>
                  <tr><td>ellos</td><td><strong>p<u>ue</u>den</strong></td><td><strong>v<u>ue</u>lven</strong></td><td><strong>d<u>ue</u>rmen</strong></td></tr>
                </tbody>
              </table>
            </div>

            <p>Other common o→ue verbs: <em>encontrar, mostrar, recordar, contar, costar, jugar (u→ue), llover (weather — only él form)</em></p>

            <h2>Pattern 3: E → I (–IR verbs only)</h2>
            <p>This pattern only occurs in <strong>-ir verbs</strong>. The <em>e</em> changes to <em>i</em> in the same forms:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Pedir (to ask for)</th><th>Servir (to serve)</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td><strong>p<u>i</u>do</strong></td><td><strong>s<u>i</u>rvo</strong></td></tr>
                  <tr><td>tú</td><td><strong>p<u>i</u>des</strong></td><td><strong>s<u>i</u>rves</strong></td></tr>
                  <tr><td>él/ella</td><td><strong>p<u>i</u>de</strong></td><td><strong>s<u>i</u>rve</strong></td></tr>
                  <tr><td>nosotros</td><td>pedimos</td><td>servimos</td></tr>
                  <tr><td>vosotros</td><td>pedís</td><td>servís</td></tr>
                  <tr><td>ellos</td><td><strong>p<u>i</u>den</strong></td><td><strong>s<u>i</u>rven</strong></td></tr>
                </tbody>
              </table>
            </div>

            <p>Other common e→i verbs: <em>seguir, repetir, vestirse, reír, elegir</em></p>

            <div className="blog-tip">
              <p><strong>The boot / shoe pattern:</strong> If you draw a line around the forms that change, it makes a boot shape — leaving nosotros and vosotros outside the boot. That's why these are sometimes called "boot verbs." The two forms inside the boot always change; the two outside never do.</p>
            </div>

            <div className="blog-highlight">
              <p>Stem-changing verbs include many of the most frequently used verbs in Spanish — querer, poder, tener, volver, pedir, dormir. Getting comfortable with these patterns is one of the highest-return things you can do as a beginner.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to get the most common Spanish verbs right?</h3>
              <p>Stem-changing verbs come up constantly. Let's make sure they feel automatic for you.</p>
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
