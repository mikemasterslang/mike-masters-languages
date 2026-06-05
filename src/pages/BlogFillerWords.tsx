import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogFillerWords() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Filler Words and Conversational Connectors: Pues, Bueno, O Sea, A Ver | Mike Masters Languages',
    'Native Spanish speakers use filler words and connectors constantly. Learning them is one of the fastest ways to make your Spanish sound natural rather than scripted.'
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
          <h1>Spanish Filler Words and Conversational Connectors</h1>
          <p className="blog-hero-intro">
            Pues, bueno, o sea, a ver, es que — these small words do enormous conversational work. Learn them and your Spanish will immediately sound less scripted.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>One of the clearest differences between a learner's Spanish and a native speaker's Spanish is the use of filler words and discourse markers. These are the small words and phrases that grease the wheels of conversation — giving the speaker time to think, signalling what's coming next, softening statements, or expressing attitude. Textbooks rarely teach them, but they're everywhere in real speech.</p>

            <h2>The Core Fillers</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Word / phrase</th><th>Main uses</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td><strong>pues</strong></td><td>well... / so... / then...</td><td>Pues, no lo sé. — Well, I don't know.</td></tr>
                  <tr><td><strong>bueno</strong></td><td>well... / right... / okay</td><td>Bueno, vamos. — Right, let's go.</td></tr>
                  <tr><td><strong>o sea</strong></td><td>I mean... / that is... / in other words</td><td>O sea, no me gusta. — I mean, I don't like it.</td></tr>
                  <tr><td><strong>a ver</strong></td><td>let's see... / right... / hmm</td><td>A ver, déjame pensar. — Let me see, let me think.</td></tr>
                  <tr><td><strong>es que</strong></td><td>the thing is... / it's just that...</td><td>Es que no puedo venir. — The thing is, I can't come.</td></tr>
                  <tr><td><strong>mira / mira que</strong></td><td>look... / listen... (to draw attention)</td><td>Mira, te explico. — Look, let me explain.</td></tr>
                  <tr><td><strong>venga</strong></td><td>come on / okay / alright (Spain)</td><td>Venga, nos vamos. — Come on, we're going.</td></tr>
                  <tr><td><strong>vamos</strong></td><td>come on / I mean / let's see</td><td>Vamos, no es tan difícil. — Come on, it's not that hard.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Pues — The Spanish "Well"</h2>
            <p><em>Pues</em> is one of the most common words in spoken Spanish. It can mean "well", "so", "then" or simply function as a pause filler:</p>
            <div className="blog-example">
              <p className="es">¿Qué quieres hacer? — <strong>Pues</strong>, no sé. — <span style={{fontWeight:400}}>What do you want to do? — Well, I don't know.</span></p>
              <p className="es"><strong>Pues</strong> eso. — <span style={{fontWeight:400}}>Well, exactly. / So, there you have it. (concluding something)</span></p>
              <p className="es">Pues nada, hasta luego. — <span style={{fontWeight:400}}>So, anyway — see you later.</span></p>
            </div>

            <h2>O Sea — I Mean / That Is</h2>
            <p><em>O sea</em> (literally "or rather") is used constantly in Spanish to clarify, rephrase or emphasise. It's the Spanish equivalent of "I mean" or "in other words":</p>
            <div className="blog-example">
              <p className="es">No me apetece salir. O sea, estoy cansado. — <span style={{fontWeight:400}}>I don't feel like going out. I mean, I'm tired.</span></p>
              <p className="es">O sea, ¿qué quieres decir? — <span style={{fontWeight:400}}>So, what do you mean?</span></p>
            </div>

            <h2>Es Que — The Excuse Introducer</h2>
            <p><em>Es que</em> softens an explanation or excuse. In English we might say "the thing is..." or "it's just that..." — <em>es que</em> does the same job:</p>
            <div className="blog-example">
              <p className="es">No puedo venir — es que tengo que trabajar. — <span style={{fontWeight:400}}>I can't come — it's just that I have to work.</span></p>
              <p className="es">Es que no me gusta mucho el pescado. — <span style={{fontWeight:400}}>The thing is, I don't really like fish.</span></p>
            </div>

            <h2>A Ver — Let's See / Right</h2>
            <p><em>A ver</em> (literally "to see") is used when pausing to think, inviting someone to show something, or introducing a point:</p>
            <div className="blog-example">
              <p className="es">A ver... ¿cómo te lo explico? — <span style={{fontWeight:400}}>Let me see... how do I explain it to you?</span></p>
              <p className="es">A ver, ¿qué tienes ahí? — <span style={{fontWeight:400}}>Come on, what have you got there?</span></p>
            </div>

            <h2>Connectors for Flowing Speech</h2>
            <p>Beyond fillers, these connectors make speech sound coherent and natural:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Connector</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td><strong>además</strong></td><td>furthermore / also / on top of that</td></tr>
                  <tr><td><strong>sin embargo</strong></td><td>however / nevertheless</td></tr>
                  <tr><td><strong>por eso</strong></td><td>that's why / therefore</td></tr>
                  <tr><td><strong>de hecho</strong></td><td>in fact / actually</td></tr>
                  <tr><td><strong>a propósito</strong></td><td>by the way</td></tr>
                  <tr><td><strong>por cierto</strong></td><td>by the way / incidentally</td></tr>
                  <tr><td><strong>al final</strong></td><td>in the end / eventually</td></tr>
                  <tr><td><strong>al principio</strong></td><td>at first / at the beginning</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Learn them by hearing them.</strong> Filler words and connectors are best absorbed through listening to real Spanish — podcasts, films, TV shows. You'll start to notice them everywhere and naturally absorb how they're used before you actively try to use them yourself.</p>
            </div>

            <div className="blog-highlight">
              <p>Filler words are the difference between sounding like you're reciting Spanish and sounding like you're actually speaking it. You don't need many — even just <em>pues, bueno, o sea</em> and <em>es que</em> will transform how natural you sound in conversation.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to sound genuinely natural in Spanish?</h3>
              <p>Filler words and conversational fluency come with real practice. Let's work on them together in conversation.</p>
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
