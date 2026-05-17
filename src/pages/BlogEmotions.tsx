import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogEmotions() {
  useScrollAnimation();
  usePageMeta(
    'Expressing Emotions in Spanish: Vocabulary and Key Phrases | Mike Masters Languages',
    'Learn how to express emotions in Spanish using estar, sentirse and ponerse — with a full vocabulary table, intensifiers and natural example sentences.'
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
          <h1>Expressing Emotions in Spanish: Vocabulary and Key Phrases</h1>
          <p className="blog-hero-intro">
            Being able to express how you feel — and understand how others feel — is central to real communication in Spanish. Here's your complete guide to emotions vocabulary.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Emotions in Spanish are mostly expressed with <em>estar</em> + adjective, since they describe temporary states. But there are also useful verbs like <em>sentirse</em> (to feel) and <em>ponerse</em> (to become / to get) that native speakers use constantly. This guide gives you the vocabulary and the grammar patterns to use it naturally.</p>

            <h2>Estar + Emotion Adjectives</h2>
            <p>The most common way to express emotions is <strong>estar + adjective</strong>. Remember that adjectives must agree with the subject in gender and number:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Emotion</th><th>Masculine</th><th>Feminine</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td></td><td>contento</td><td>contenta</td><td>happy / pleased</td></tr>
                  <tr><td></td><td>feliz</td><td>feliz</td><td>happy (deeper happiness)</td></tr>
                  <tr><td></td><td>triste</td><td>triste</td><td>sad</td></tr>
                  <tr><td></td><td>enfadado</td><td>enfadada</td><td>angry</td></tr>
                  <tr><td></td><td>nervioso</td><td>nerviosa</td><td>nervous / anxious</td></tr>
                  <tr><td></td><td>tranquilo</td><td>tranquila</td><td>calm</td></tr>
                  <tr><td></td><td>cansado</td><td>cansada</td><td>tired</td></tr>
                  <tr><td></td><td>aburrido</td><td>aburrida</td><td>bored</td></tr>
                  <tr><td></td><td>sorprendido</td><td>sorprendida</td><td>surprised</td></tr>
                  <tr><td></td><td>emocionado</td><td>emocionada</td><td>excited / moved</td></tr>
                  <tr><td></td><td>preocupado</td><td>preocupada</td><td>worried</td></tr>
                  <tr><td></td><td>asustado</td><td>asustada</td><td>scared / frightened</td></tr>
                  <tr><td></td><td>avergonzado</td><td>avergonzada</td><td>embarrassed / ashamed</td></tr>
                  <tr><td></td><td>orgulloso</td><td>orgullosa</td><td>proud</td></tr>
                  <tr><td></td><td>decepcionado</td><td>decepcionada</td><td>disappointed</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Estoy muy contento hoy. — <span style={{fontWeight:400}}>I'm very happy today. (male speaker)</span></p>
              <p className="es">Estoy muy contenta hoy. — <span style={{fontWeight:400}}>I'm very happy today. (female speaker)</span></p>
              <p className="es">Está bastante preocupado por el trabajo. — <span style={{fontWeight:400}}>He's quite worried about work.</span></p>
              <p className="es">Estamos emocionados por el viaje. — <span style={{fontWeight:400}}>We're excited about the trip.</span></p>
            </div>

            <h2>Sentirse — To Feel</h2>
            <p><em>Sentirse</em> is a reflexive stem-changing verb (e → ie) that works just like <em>estar</em> with adjectives, but sounds more natural in many contexts:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Form</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>me siento</td></tr>
                  <tr><td>tú</td><td>te sientes</td></tr>
                  <tr><td>él/ella/usted</td><td>se siente</td></tr>
                  <tr><td>nosotros</td><td>nos sentimos</td></tr>
                  <tr><td>vosotros</td><td>os sentís</td></tr>
                  <tr><td>ellos/ustedes</td><td>se sienten</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Me siento un poco nervioso. — <span style={{fontWeight:400}}>I feel a bit nervous.</span></p>
              <p className="es">¿Cómo te sientes hoy? — <span style={{fontWeight:400}}>How are you feeling today?</span></p>
              <p className="es">Se siente muy triste desde el lunes. — <span style={{fontWeight:400}}>She's been feeling very sad since Monday.</span></p>
              <p className="es">Nos sentimos orgullosos de vosotros. — <span style={{fontWeight:400}}>We feel proud of you (all).</span></p>
            </div>

            <h2>Ponerse — To Become / To Get</h2>
            <p><em>Ponerse</em> is used when talking about a change in emotional state — getting angry, becoming sad, turning red. Think of it as "to get + emotion":</p>

            <div className="blog-example">
              <p className="es">Se pone muy nervioso antes de los exámenes. — <span style={{fontWeight:400}}>He gets very nervous before exams.</span></p>
              <p className="es">Me pongo triste cuando llueve. — <span style={{fontWeight:400}}>I get sad when it rains.</span></p>
              <p className="es">Se puso muy enfadada. — <span style={{fontWeight:400}}>She got very angry.</span></p>
              <p className="es">¿Por qué te has puesto tan contento? — <span style={{fontWeight:400}}>Why have you got so happy?</span></p>
            </div>

            <h2>Intensifiers</h2>
            <p>Use these words to fine-tune how strongly you express an emotion:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>muy</td><td>very</td><td>Estoy muy cansada.</td></tr>
                  <tr><td>bastante</td><td>quite / fairly</td><td>Me siento bastante bien.</td></tr>
                  <tr><td>un poco</td><td>a little / a bit</td><td>Estoy un poco preocupado.</td></tr>
                  <tr><td>algo</td><td>somewhat / a bit</td><td>Estoy algo triste hoy.</td></tr>
                  <tr><td>nada</td><td>not at all</td><td>No estoy nada aburrido.</td></tr>
                  <tr><td>tan</td><td>so</td><td>¡Estoy tan emocionada!</td></tr>
                  <tr><td>demasiado</td><td>too / excessively</td><td>Estás demasiado nervioso.</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Talking About Others' Emotions</h2>
            <div className="blog-example">
              <p className="es">Parece estar triste. — <span style={{fontWeight:400}}>He/she seems to be sad.</span></p>
              <p className="es">Se le nota que está contento. — <span style={{fontWeight:400}}>You can tell he's happy.</span></p>
              <p className="es">¿Estás bien? Pareces cansado. — <span style={{fontWeight:400}}>Are you OK? You look tired.</span></p>
              <p className="es">¡Qué contenta estás hoy! — <span style={{fontWeight:400}}>You're very happy today!</span></p>
            </div>

            <div className="blog-highlight">
              <p>For emotions, use <em>estar</em> + adjective for states, <em>sentirse</em> when you want to say how you feel more expressively, and <em>ponerse</em> when describing a change of emotional state. Add intensifiers to sound natural and nuanced from early on.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to express yourself in Spanish?</h3>
              <p>Emotions vocabulary brings conversations to life. Book a lesson and we'll practise describing feelings in real conversational contexts.</p>
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
