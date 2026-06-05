import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogFalseCognates() {
  useScrollAnimation();
  usePageMeta(
    'Spanish False Cognates: 40+ Words That Fool English Speakers Every Time | Mike Masters Languages',
    'Spanish and English share thousands of similar words — but some look alike and mean something completely different. Here are the false cognates every beginner needs to know.'
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
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Spanish False Cognates: 40+ Words That Fool English Speakers Every Time</h1>
          <p className="blog-hero-intro">
            Spanish and English share thousands of similar-looking words. Most mean the same thing — but the ones that don't can lead to some very memorable misunderstandings.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the genuine advantages English speakers have when learning Spanish is the huge number of <strong>cognates</strong> — words that look similar and mean the same thing. <em>Hotel, animal, hospital, natural, important, possible</em> — you already know thousands of Spanish words before you even start.</p>
            <p>But hidden among them are <strong>false cognates</strong> (also called <em>false friends</em>) — words that look reassuringly familiar but mean something completely different. These can cause misunderstandings ranging from mildly embarrassing to spectacularly awkward. Here are the ones every beginner should know.</p>

            <h2>The Most Dangerous Ones</h2>
            <p>These are the false cognates most likely to cause a genuinely embarrassing situation:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish word</th><th>What it actually means</th><th>What you might think it means</th></tr></thead>
                <tbody>
                  <tr><td><strong>embarazada</strong></td><td>pregnant</td><td>embarrassed (avergonzado/a)</td></tr>
                  <tr><td><strong>constipado</strong></td><td>having a cold / congested</td><td>constipated (estreñido)</td></tr>
                  <tr><td><strong>molestar</strong></td><td>to bother / to annoy</td><td>to molest</td></tr>
                  <tr><td><strong>excitado</strong></td><td>excited / worked up</td><td>sexually aroused (in English context)</td></tr>
                  <tr><td><strong>preservativo</strong></td><td>condom</td><td>preservative (conservante)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Everyday False Friends</h2>
            <p>These come up regularly in normal conversation and are easy to mix up:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish word</th><th>What it means</th><th>English false friend</th></tr></thead>
                <tbody>
                  <tr><td><strong>actualmente</strong></td><td>currently / at present</td><td>actually (en realidad / de hecho)</td></tr>
                  <tr><td><strong>actual</strong></td><td>current / present</td><td>actual (real / verdadero)</td></tr>
                  <tr><td><strong>sensible</strong></td><td>sensitive</td><td>sensible (sensato/a)</td></tr>
                  <tr><td><strong>simpático</strong></td><td>friendly / nice</td><td>sympathetic (comprensivo/a)</td></tr>
                  <tr><td><strong>largo</strong></td><td>long</td><td>large (grande)</td></tr>
                  <tr><td><strong>éxito</strong></td><td>success</td><td>exit (salida)</td></tr>
                  <tr><td><strong>librería</strong></td><td>bookshop</td><td>library (biblioteca)</td></tr>
                  <tr><td><strong>pie</strong></td><td>foot</td><td>pie (pastel / tarta)</td></tr>
                  <tr><td><strong>ropa</strong></td><td>clothes</td><td>rope (cuerda)</td></tr>
                  <tr><td><strong>sopa</strong></td><td>soup</td><td>soap (jabón)</td></tr>
                  <tr><td><strong>once</strong></td><td>eleven</td><td>once (una vez)</td></tr>
                  <tr><td><strong>pan</strong></td><td>bread</td><td>pan (sartén)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>False Friends in Adjectives</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish word</th><th>What it means</th><th>English false friend</th></tr></thead>
                <tbody>
                  <tr><td><strong>gracioso</strong></td><td>funny / amusing</td><td>gracious (cortés / amable)</td></tr>
                  <tr><td><strong>genial</strong></td><td>great / brilliant (informal)</td><td>genial (afable / ameno)</td></tr>
                  <tr><td><strong>bizarro</strong></td><td>brave / gallant (old use) or weird (modern slang)</td><td>bizarre (estrafalario)</td></tr>
                  <tr><td><strong>formidable</strong></td><td>wonderful / excellent</td><td>formidable (intimidating)</td></tr>
                  <tr><td><strong>molesto</strong></td><td>annoying / bothersome</td><td>molested</td></tr>
                  <tr><td><strong>fastidioso</strong></td><td>annoying / tiresome</td><td>fastidious (meticuloso)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>False Friends in Verbs</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish verb</th><th>What it means</th><th>English false friend</th></tr></thead>
                <tbody>
                  <tr><td><strong>realizar</strong></td><td>to carry out / to achieve</td><td>to realize (darse cuenta de)</td></tr>
                  <tr><td><strong>recordar</strong></td><td>to remember / to remind</td><td>to record (grabar)</td></tr>
                  <tr><td><strong>asistir</strong></td><td>to attend</td><td>to assist (ayudar)</td></tr>
                  <tr><td><strong>introducir</strong></td><td>to insert / to bring in</td><td>to introduce a person (presentar)</td></tr>
                  <tr><td><strong>pretender</strong></td><td>to aim to / to try to</td><td>to pretend (fingir)</td></tr>
                  <tr><td><strong>discutir</strong></td><td>to argue / to discuss heatedly</td><td>to discuss calmly (hablar de)</td></tr>
                  <tr><td><strong>soportar</strong></td><td>to tolerate / to put up with</td><td>to support emotionally (apoyar)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Why Do False Cognates Exist?</h2>
            <p>Both English and Spanish evolved from Latin and were influenced by French, which means they share thousands of roots. But over centuries, the meanings of words drift in different directions in different languages — a process called <strong>semantic shift</strong>. The words look the same because they share an ancestor, but what they mean today has diverged.</p>
            <p><em>Embarazada</em>, for example, comes from the same Latin root as "embarrass", but in Spanish it evolved to mean "encumbered" — and in the context of pregnancy, that meaning stuck. English went a different way entirely.</p>

            <div className="blog-tip">
              <p><strong>Strategy:</strong> When you see a Spanish word that looks exactly like an English word, don't assume — look it up. True cognates are a massive advantage, but the false ones catch everyone out at least once.</p>
            </div>

            <div className="blog-highlight">
              <p>The silver lining: <strong>false cognates are highly memorable</strong>. Once you've been caught out by <em>embarazada</em> or <em>éxito</em>, you tend not to forget them. They stick precisely because of the surprise.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to build a solid Spanish vocabulary from the start?</h3>
              <p>Learning the pitfalls early saves a lot of confusion later. Get in touch to find the right programme for you.</p>
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
