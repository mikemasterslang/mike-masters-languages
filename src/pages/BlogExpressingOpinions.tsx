import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogExpressingOpinions() {
  useScrollAnimation();
  usePageMeta(
    'How to Express Opinions in Spanish: Creo Que, Me Parece, Pienso Que | Mike Masters Languages',
    'Sharing opinions is at the heart of real conversation. This guide covers all the key phrases for agreeing, disagreeing, and giving your view in Spanish.'
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
          <h1>How to Express Opinions in Spanish</h1>
          <p className="blog-hero-intro">
            Saying what you think, agreeing, disagreeing — these are the phrases that make conversations feel real. Here's how to express opinions naturally in Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Expressing opinions is one of the cornerstones of real conversation. Beyond saying "yes" and "no", you want to be able to share your view, agree or disagree, and explain your reasoning. Spanish has a rich set of phrases for this — and some of them have important grammar rules attached.</p>

            <h2>Giving Your Opinion</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish phrase</th><th>English equivalent</th><th>Followed by</th></tr></thead>
                <tbody>
                  <tr><td><strong>Creo que...</strong></td><td>I think that...</td><td>indicative</td></tr>
                  <tr><td><strong>Pienso que...</strong></td><td>I think that...</td><td>indicative</td></tr>
                  <tr><td><strong>Me parece que...</strong></td><td>It seems to me that...</td><td>indicative</td></tr>
                  <tr><td><strong>En mi opinión...</strong></td><td>In my opinion...</td><td>—</td></tr>
                  <tr><td><strong>Desde mi punto de vista...</strong></td><td>From my point of view...</td><td>—</td></tr>
                  <tr><td><strong>A mi modo de ver...</strong></td><td>The way I see it...</td><td>—</td></tr>
                  <tr><td><strong>Diría que...</strong></td><td>I would say that...</td><td>indicative</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Creo que es una buena idea. — <span style={{fontWeight:400}}>I think it's a good idea.</span></p>
              <p className="es">Me parece que tiene razón. — <span style={{fontWeight:400}}>I think he's right. (it seems to me that)</span></p>
              <p className="es">En mi opinión, es demasiado caro. — <span style={{fontWeight:400}}>In my opinion, it's too expensive.</span></p>
            </div>

            <h2>Important Grammar Note: No Creo Que + Subjunctive</h2>
            <p>When you negate <em>creer</em> or <em>pensar</em>, doubt is introduced — and doubt triggers the subjunctive in the following clause:</p>
            <div className="blog-example">
              <p className="es">Creo que <strong>es</strong> verdad. — <span style={{fontWeight:400}}>I think it's true. (affirmative → indicative)</span></p>
              <p className="es">No creo que <strong>sea</strong> verdad. — <span style={{fontWeight:400}}>I don't think it's true. (negated → subjunctive)</span></p>
            </div>

            <h2>Agreeing</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td><strong>Tienes razón.</strong></td><td>You're right.</td></tr>
                  <tr><td><strong>Estoy de acuerdo.</strong></td><td>I agree.</td></tr>
                  <tr><td><strong>Exactamente. / Exacto.</strong></td><td>Exactly.</td></tr>
                  <tr><td><strong>Desde luego.</strong></td><td>Of course. / Absolutely.</td></tr>
                  <tr><td><strong>Claro que sí.</strong></td><td>Of course.</td></tr>
                  <tr><td><strong>Yo también lo creo.</strong></td><td>I believe so too.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Disagreeing</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td><strong>No estoy de acuerdo.</strong></td><td>I don't agree.</td></tr>
                  <tr><td><strong>No creo que...</strong></td><td>I don't think that...</td></tr>
                  <tr><td><strong>Al contrario.</strong></td><td>On the contrary.</td></tr>
                  <tr><td><strong>Sin embargo...</strong></td><td>However...</td></tr>
                  <tr><td><strong>Pero hay que tener en cuenta que...</strong></td><td>But you have to bear in mind that...</td></tr>
                  <tr><td><strong>No me parece bien.</strong></td><td>I don't think that's right / good.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Softening Your Opinion</h2>
            <div className="blog-example">
              <p className="es">A lo mejor... — <span style={{fontWeight:400}}>Maybe... / Perhaps...</span></p>
              <p className="es">Puede que tengas razón. — <span style={{fontWeight:400}}>You might be right.</span></p>
              <p className="es">Supongo que... — <span style={{fontWeight:400}}>I suppose that...</span></p>
              <p className="es">No estoy seguro/a, pero... — <span style={{fontWeight:400}}>I'm not sure, but...</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Me parece vs me parece que:</strong> <em>Me parece bien/mal/interesante</em> (It seems good/bad/interesting to me) takes an adjective. <em>Me parece que...</em> (It seems to me that...) takes a full clause. Both are extremely common and natural.</p>
            </div>

            <div className="blog-highlight">
              <p>Learning to express opinions is what moves you from basic exchanges to real conversations. Even a handful of these phrases — <em>creo que, estoy de acuerdo, no creo que, me parece</em> — will dramatically expand what you can say and how natural you sound.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to have real conversations in Spanish?</h3>
              <p>Opinion phrases are the engine of natural conversation. Let's practise using them together.</p>
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
