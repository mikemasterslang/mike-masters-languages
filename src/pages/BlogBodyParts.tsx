import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogBodyParts() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Body Parts: Essential Vocabulary for Beginners | Mike Masters Languages',
    'Learn essential Spanish body part vocabulary with article forms, example sentences and how to use me duele and me duelen to describe aches and pains.'
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
          <h1>Spanish Body Parts: Essential Vocabulary for Beginners</h1>
          <p className="blog-hero-intro">
            Whether you need to describe a symptom at a pharmacy or follow instructions in a fitness class, knowing your body parts in Spanish is genuinely useful from day one.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Body part vocabulary comes up in medical situations, at the pharmacy, when shopping for clothes, and in everyday conversation. Spanish uses definite articles (<em>el/la/los/las</em>) with body parts far more than English does — you say <em>me duele la cabeza</em> (my head hurts), not <em>mi cabeza</em>. This guide covers the key vocabulary and shows you exactly how to use it.</p>

            <h2>The Head and Face</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Article</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la cabeza</td><td>la</td><td>head</td></tr>
                  <tr><td>la cara</td><td>la</td><td>face</td></tr>
                  <tr><td>el ojo</td><td>el</td><td>eye</td></tr>
                  <tr><td>la oreja</td><td>la</td><td>ear (outer)</td></tr>
                  <tr><td>el oído</td><td>el</td><td>ear (inner / hearing)</td></tr>
                  <tr><td>la nariz</td><td>la</td><td>nose</td></tr>
                  <tr><td>la boca</td><td>la</td><td>mouth</td></tr>
                  <tr><td>el diente</td><td>el</td><td>tooth</td></tr>
                  <tr><td>la muela</td><td>la</td><td>back tooth / molar</td></tr>
                  <tr><td>la lengua</td><td>la</td><td>tongue</td></tr>
                  <tr><td>el labio</td><td>el</td><td>lip</td></tr>
                  <tr><td>la mejilla</td><td>la</td><td>cheek</td></tr>
                  <tr><td>la frente</td><td>la</td><td>forehead</td></tr>
                  <tr><td>el cuello</td><td>el</td><td>neck</td></tr>
                  <tr><td>el pelo / el cabello</td><td>el</td><td>hair</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Oreja vs oído:</strong> Use <em>la oreja</em> for the visible ear you can point to, and <em>el oído</em> when talking about hearing or inner ear pain — <em>Me duele el oído</em> (I have earache).</p>
            </div>

            <h2>The Torso</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Article</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el hombro</td><td>el</td><td>shoulder</td></tr>
                  <tr><td>el pecho</td><td>el</td><td>chest</td></tr>
                  <tr><td>la espalda</td><td>la</td><td>back</td></tr>
                  <tr><td>el estómago</td><td>el</td><td>stomach</td></tr>
                  <tr><td>el vientre / la barriga</td><td>el / la</td><td>belly / tummy</td></tr>
                  <tr><td>la cintura</td><td>la</td><td>waist</td></tr>
                  <tr><td>la cadera</td><td>la</td><td>hip</td></tr>
                  <tr><td>el corazón</td><td>el</td><td>heart</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Arms and Hands</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Article</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el brazo</td><td>el</td><td>arm</td></tr>
                  <tr><td>el codo</td><td>el</td><td>elbow</td></tr>
                  <tr><td>la muñeca</td><td>la</td><td>wrist</td></tr>
                  <tr><td>la mano</td><td>la</td><td>hand</td></tr>
                  <tr><td>el dedo</td><td>el</td><td>finger</td></tr>
                  <tr><td>el pulgar</td><td>el</td><td>thumb</td></tr>
                  <tr><td>la uña</td><td>la</td><td>fingernail</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>La mano is feminine:</strong> Despite ending in <em>-o</em>, <em>la mano</em> is feminine — one of the most common exceptions beginners encounter. Always use <em>la mano</em>, never <em>el mano</em>.</p>
            </div>

            <h2>Legs and Feet</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Article</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la pierna</td><td>la</td><td>leg</td></tr>
                  <tr><td>la rodilla</td><td>la</td><td>knee</td></tr>
                  <tr><td>el tobillo</td><td>el</td><td>ankle</td></tr>
                  <tr><td>el pie</td><td>el</td><td>foot</td></tr>
                  <tr><td>el dedo del pie</td><td>el</td><td>toe</td></tr>
                  <tr><td>el talón</td><td>el</td><td>heel</td></tr>
                  <tr><td>el muslo</td><td>el</td><td>thigh</td></tr>
                  <tr><td>la pantorrilla</td><td>la</td><td>calf</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Me Duele / Me Duelen — Describing Pain</h2>
            <p>To say something hurts in Spanish, use <em>doler</em> — which works just like <em>gustar</em>. Use <strong>me duele</strong> for one body part and <strong>me duelen</strong> for more than one:</p>

            <div className="blog-example">
              <p className="es">Me duele la cabeza. — <span style={{fontWeight:400}}>My head hurts. / I have a headache.</span></p>
              <p className="es">Me duele el estómago. — <span style={{fontWeight:400}}>My stomach hurts.</span></p>
              <p className="es">Me duelen los pies. — <span style={{fontWeight:400}}>My feet hurt.</span></p>
              <p className="es">Me duelen las rodillas. — <span style={{fontWeight:400}}>My knees hurt.</span></p>
              <p className="es">Me duele mucho la espalda. — <span style={{fontWeight:400}}>My back really hurts.</span></p>
            </div>

            <p>You can also use <em>tener dolor de</em> (to have a pain in):</p>
            <div className="blog-example">
              <p className="es">Tengo dolor de cabeza. — <span style={{fontWeight:400}}>I have a headache.</span></p>
              <p className="es">Tengo dolor de garganta. — <span style={{fontWeight:400}}>I have a sore throat.</span></p>
              <p className="es">Tengo dolor de espalda. — <span style={{fontWeight:400}}>I have back pain.</span></p>
            </div>

            <h2>Useful Phrases at the Pharmacy or Doctor</h2>
            <div className="blog-example">
              <p className="es">Me he torcido el tobillo. — <span style={{fontWeight:400}}>I've twisted my ankle.</span></p>
              <p className="es">Me he cortado el dedo. — <span style={{fontWeight:400}}>I've cut my finger.</span></p>
              <p className="es">Tengo fiebre y me duele la garganta. — <span style={{fontWeight:400}}>I have a fever and a sore throat.</span></p>
              <p className="es">¿Puede darme algo para el dolor de cabeza? — <span style={{fontWeight:400}}>Can you give me something for a headache?</span></p>
              <p className="es">Me duele aquí. — <span style={{fontWeight:400}}>It hurts here.</span></p>
            </div>

            <div className="blog-highlight">
              <p>The key pattern to remember: Spanish uses <em>me duele</em> (singular) and <em>me duelen</em> (plural) with the definite article — <em>me duele la cabeza</em>, not <em>mi cabeza duele</em>. Master this pattern and you'll be able to communicate any ache or pain clearly.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to put this vocabulary into practice?</h3>
              <p>Body parts are one of those topics that come up unexpectedly — it's worth being prepared. Book a lesson and we'll practise real-life health and travel scenarios together.</p>
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
