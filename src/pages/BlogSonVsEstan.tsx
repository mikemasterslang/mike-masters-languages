import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSonVsEstan() {
  useScrollAnimation();
  usePageMeta(
    'Son vs Están: How to Say "They Are" in Spanish | Mike Masters Languages',
    'Son vs están — both mean "they are" but they come from ser and estar. Here\'s when to use each one, with the same clear logic that applies to all ser/estar choices.'
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
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>Son vs Están: How to Say "They Are" in Spanish</h1>
          <p className="blog-hero-intro">Like eres vs estás for "you are", son and están both translate as "they are" — but the choice between them follows the same ser vs estar logic you already know.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Once you understand ser vs estar, all the individual forms follow the same pattern. <em>Son</em> is the ellos/ellas/ustedes form of <em>ser</em>; <em>están</em> is the ellos/ellas/ustedes form of <em>estar</em>. The same rules that tell you to use <em>eres</em> vs <em>estás</em> for "you are" apply here for "they are".</p>

            <div className="blog-highlight">
              <p><strong>Son</strong> = they are (identity, nationality, characteristics, profession) | <strong>Están</strong> = they are (location, current state, emotion, condition)</p>
            </div>

            <h2>Son — The Ser Form</h2>

            <p>Use <em>son</em> for identity, characteristics, nationality, profession and permanent descriptions:</p>

            <div className="blog-example">
              <p className="es">Son españoles. — <span style={{fontWeight:400}}>They're Spanish.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Son estudiantes. — <span style={{fontWeight:400}}>They're students.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Son muy simpáticos. — <span style={{fontWeight:400}}>They're very friendly.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Son hermanos. — <span style={{fontWeight:400}}>They're brothers/siblings.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Son las tres. — <span style={{fontWeight:400}}>It's three o'clock.</span> (telling the time — always ser)</p>
            </div>

            <div className="blog-example">
              <p className="es">Son de Madrid. — <span style={{fontWeight:400}}>They're from Madrid.</span></p>
            </div>

            <h2>Están — The Estar Form</h2>

            <p>Use <em>están</em> for current states, emotions, location and things that can change:</p>

            <div className="blog-example">
              <p className="es">Están cansados. — <span style={{fontWeight:400}}>They're tired.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">¿Dónde están? — <span style={{fontWeight:400}}>Where are they?</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Están en casa. — <span style={{fontWeight:400}}>They're at home.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Están muy contentos hoy. — <span style={{fontWeight:400}}>They're very happy today.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Están trabajando. — <span style={{fontWeight:400}}>They're working.</span> (present continuous)</p>
            </div>

            <div className="blog-example">
              <p className="es">Las tiendas están cerradas. — <span style={{fontWeight:400}}>The shops are closed.</span></p>
            </div>

            <h2>The Full Ser and Estar Conjugation — All Forms Together</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Ser</th><th>Estar</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>soy</td><td>estoy</td></tr>
                  <tr><td>tú</td><td>eres</td><td>estás</td></tr>
                  <tr><td>él/ella/usted</td><td>es</td><td>está</td></tr>
                  <tr><td>nosotros</td><td>somos</td><td>estamos</td></tr>
                  <tr><td>vosotros</td><td>sois</td><td>estáis</td></tr>
                  <tr><td>ellos/ellas/ustedes</td><td>son</td><td>están</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Notice</strong> that <em>estar</em> has accent marks on several forms: estás, está, estáis, están. These are not optional — they're part of the word and help distinguish it from other uses.</p>
            </div>

            <h2>Son vs Están — Adjectives That Change Meaning</h2>

            <p>Just as with the singular forms, some adjectives change meaning depending on which verb you use:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Adjective</th><th>With SON (ser)</th><th>With ESTÁN (estar)</th></tr></thead>
                <tbody>
                  <tr><td>aburridos</td><td>They're boring (personality)</td><td>They're bored (right now)</td></tr>
                  <tr><td>listos</td><td>They're clever</td><td>They're ready</td></tr>
                  <tr><td>malos</td><td>They're bad people</td><td>They're ill</td></tr>
                  <tr><td>vivos</td><td>They're sharp/lively</td><td>They're alive</td></tr>
                  <tr><td>buenos</td><td>They're good people</td><td>They're attractive/tasty</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Son muy aburridos. — <span style={{fontWeight:400}}>They're such boring people.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Están muy aburridos. — <span style={{fontWeight:400}}>They're really bored right now.</span></p>
            </div>

            <h2>¿Cómo Son? vs ¿Cómo Están?</h2>

            <p>These two questions extend the same pattern from singular to plural:</p>

            <div className="blog-example">
              <p className="es">¿Cómo son tus padres? — Son muy trabajadores y amables. — <span style={{fontWeight:400}}>What are your parents like? — They're very hardworking and kind.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">¿Cómo están tus padres? — Están bien, gracias. — <span style={{fontWeight:400}}>How are your parents? — They're well, thank you.</span></p>
            </div>

            <h2>Common Mistakes</h2>

            <div className="blog-example">
              <p className="es wrong">✗ Están de Madrid. <span style={{fontWeight:400}}>(origin uses ser)</span></p>
            </div>

            <div className="blog-example">
              <p className="es right">✓ Son de Madrid. — <span style={{fontWeight:400}}>They're from Madrid.</span></p>
            </div>

            <div className="blog-example">
              <p className="es wrong">✗ Son muy cansados. <span style={{fontWeight:400}}>(tiredness is a state — use estar)</span></p>
            </div>

            <div className="blog-example">
              <p className="es right">✓ Están muy cansados. — <span style={{fontWeight:400}}>They're very tired.</span></p>
            </div>

            <div className="blog-example">
              <p className="es wrong">✗ Están estudiantes. <span style={{fontWeight:400}}>(profession uses ser)</span></p>
            </div>

            <div className="blog-example">
              <p className="es right">✓ Son estudiantes. — <span style={{fontWeight:400}}>They're students.</span></p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to practise this with a real tutor?</h3>
              <p>Ser and estar become automatic much faster when you practise them in real conversation with correction. Get in touch to start working on them properly.</p>
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
