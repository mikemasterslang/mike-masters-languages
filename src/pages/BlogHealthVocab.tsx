import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogHealthVocab() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Health and Medical Vocabulary | Mike Masters Languages',
    'Essential Spanish for doctors, pharmacies and emergencies — symptoms, body pain, medical phrases, pharmacy vocabulary and the me duele vs tengo dolor distinction.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Spanish Health and Medical Vocabulary</h1>
          <p className="blog-hero-intro">
            Whether you need to see a doctor or simply describe how you feel, medical vocabulary is essential — especially when travelling.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Nobody wants to be unwell in a foreign country, but if it happens, knowing the right vocabulary can make an enormous difference. Spain has an excellent public health system (<em>la sanidad pública</em>), and pharmacies (<em>las farmacias</em>) are widely available and very accessible for minor ailments. This guide gives you everything you need to describe symptoms, communicate with a doctor or pharmacist, and handle a medical situation with confidence.</p>

            <h2>Me Duele vs Tengo Dolor — The Key Distinction</h2>
            <p>This is one of the first things to get right. Spanish has two main ways to say something hurts:</p>

            <div className="blog-highlight">
              <p><strong>Me duele + singular body part</strong> — "my [body part] hurts" (duele agrees with the thing that hurts, not with you). <strong>Me duelen + plural body parts</strong> — "my [body parts] hurt". Alternatively, <strong>tengo dolor de + body part</strong> also works and is very natural at the pharmacy or doctor's.</p>
            </div>

            <div className="blog-example">
              <p className="es">Me duele la cabeza. — <span style={{fontWeight: 400}}>My head hurts. / I have a headache.</span></p>
              <p className="es">Me duelen los pies. — <span style={{fontWeight: 400}}>My feet hurt.</span></p>
              <p className="es">Tengo dolor de espalda. — <span style={{fontWeight: 400}}>I have back pain.</span></p>
              <p className="es">Tengo dolor de garganta. — <span style={{fontWeight: 400}}>I have a sore throat.</span></p>
              <p className="es">Me duele mucho el estómago. — <span style={{fontWeight: 400}}>My stomach hurts a lot.</span></p>
            </div>

            <h2>Describing Symptoms (Los Síntomas)</h2>
            <p>Use <em>tengo</em> (I have) for most symptoms, and <em>me encuentro mal</em> or <em>me siento mal</em> for a general feeling of being unwell:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>tengo fiebre</td><td>I have a temperature / fever</td></tr>
                  <tr><td>tengo tos</td><td>I have a cough</td></tr>
                  <tr><td>tengo náuseas</td><td>I feel nauseous</td></tr>
                  <tr><td>tengo mareo</td><td>I feel dizzy</td></tr>
                  <tr><td>tengo cansancio / estoy cansado/a</td><td>I'm tired / feeling fatigue</td></tr>
                  <tr><td>tengo escalofríos</td><td>I have chills</td></tr>
                  <tr><td>tengo diarrea</td><td>I have diarrhoea</td></tr>
                  <tr><td>me encuentro mal</td><td>I feel unwell</td></tr>
                  <tr><td>me siento débil</td><td>I feel weak</td></tr>
                  <tr><td>me he torcido el tobillo</td><td>I've twisted my ankle</td></tr>
                  <tr><td>me he cortado</td><td>I've cut myself</td></tr>
                  <tr><td>me he quemado</td><td>I've burned myself</td></tr>
                  <tr><td>tengo una alergia</td><td>I have an allergy</td></tr>
                  <tr><td>estoy embarazada</td><td>I am pregnant</td></tr>
                </tbody>
              </table>
            </div>

            <h2>At the Doctor's (En el Médico)</h2>
            <p>The doctor will ask you <em>¿qué le pasa?</em> ("what's the matter?") or <em>¿cuál es el motivo de su consulta?</em> ("what's the reason for your appointment?"). Here are the key phrases you'll need to respond and follow the conversation:</p>

            <div className="blog-example">
              <p className="es">Me duele aquí desde hace tres días. — <span style={{fontWeight: 400}}>It's been hurting here for three days.</span></p>
              <p className="es">Empezó ayer por la mañana. — <span style={{fontWeight: 400}}>It started yesterday morning.</span></p>
              <p className="es">Es un dolor continuo / intermitente. — <span style={{fontWeight: 400}}>It's a constant / intermittent pain.</span></p>
              <p className="es">Soy alérgico/a a la penicilina. — <span style={{fontWeight: 400}}>I'm allergic to penicillin.</span></p>
              <p className="es">Tomo esta medicación regularmente. — <span style={{fontWeight: 400}}>I take this medication regularly.</span></p>
              <p className="es">¿Necesito una receta? — <span style={{fontWeight: 400}}>Do I need a prescription?</span></p>
            </div>

            <p>Common things the doctor might say to you:</p>

            <div className="blog-example">
              <p className="es">¿Qué le pasa? — <span style={{fontWeight: 400}}>What's the matter?</span></p>
              <p className="es">¿Desde cuándo tiene estos síntomas? — <span style={{fontWeight: 400}}>How long have you had these symptoms?</span></p>
              <p className="es">Tome esto tres veces al día. — <span style={{fontWeight: 400}}>Take this three times a day.</span></p>
              <p className="es">Guarde reposo. — <span style={{fontWeight: 400}}>Rest / take it easy.</span></p>
              <p className="es">Vuelva en una semana si no mejora. — <span style={{fontWeight: 400}}>Come back in a week if you don't improve.</span></p>
              <p className="es">Le voy a mandar al especialista. — <span style={{fontWeight: 400}}>I'm going to refer you to a specialist.</span></p>
            </div>

            <h2>At the Pharmacy (En la Farmacia)</h2>
            <p>Spanish pharmacists (<em>farmacéuticos</em>) are highly trained and can advise on and dispense many medicines without a prescription. The pharmacy is often your first port of call for minor issues.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la pastilla / el comprimido</td><td>tablet / pill</td></tr>
                  <tr><td>el jarabe</td><td>syrup</td></tr>
                  <tr><td>la crema / la pomada</td><td>cream / ointment</td></tr>
                  <tr><td>las gotas</td><td>drops</td></tr>
                  <tr><td>la receta</td><td>prescription</td></tr>
                  <tr><td>sin receta</td><td>over the counter (without prescription)</td></tr>
                  <tr><td>el ibuprofeno / el paracetamol</td><td>ibuprofen / paracetamol</td></tr>
                  <tr><td>el antihistamínico</td><td>antihistamine</td></tr>
                  <tr><td>la tiritas</td><td>plasters / sticking plasters</td></tr>
                  <tr><td>el protector solar</td><td>sun cream</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Tiene algo para el dolor de cabeza? — <span style={{fontWeight: 400}}>Do you have anything for a headache?</span></p>
              <p className="es">Necesito algo para la tos. — <span style={{fontWeight: 400}}>I need something for a cough.</span></p>
              <p className="es">¿Cuántas veces al día lo tomo? — <span style={{fontWeight: 400}}>How many times a day do I take it?</span></p>
            </div>

            <h2>Emergencies (Urgencias)</h2>
            <div className="blog-example">
              <p className="es">Llame a urgencias, por favor. — <span style={{fontWeight: 400}}>Please call the emergency services.</span></p>
              <p className="es">Necesito ayuda. — <span style={{fontWeight: 400}}>I need help.</span></p>
              <p className="es">Ha habido un accidente. — <span style={{fontWeight: 400}}>There has been an accident.</span></p>
              <p className="es">Necesito una ambulancia. — <span style={{fontWeight: 400}}>I need an ambulance.</span></p>
              <p className="es">¿Dónde está el hospital más cercano? — <span style={{fontWeight: 400}}>Where is the nearest hospital?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Emergency numbers in Spain:</strong> The general emergency number is <strong>112</strong> (police, fire, ambulance). The number for medical emergencies is also 112. Operators speak English as well as Spanish.</p>
            </div>

            <div className="blog-highlight">
              <p>For medical situations, two structures do most of the work: <em>me duele + body part</em> for pain, and <em>tengo + symptom</em> for general complaints. Add <em>desde hace + time</em> to say how long you've had the problem, and you'll be able to communicate clearly in almost any health situation.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Be prepared for every situation in Spain</h3>
              <p>Medical vocabulary is too important to leave to chance. Let's make sure you have it solid before you travel or need it.</p>
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
