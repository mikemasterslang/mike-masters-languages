import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogIrregularVerbs() {
  useScrollAnimation();
  usePageMeta(
    'The 10 Most Important Irregular Spanish Verbs | Mike Masters Languages',
    'Master the 10 most essential irregular Spanish verbs — ser, estar, ir, tener, hacer, poder, querer, saber, decir and venir — with full conjugations and real examples.'
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
          <h1>The 10 Most Important Irregular Spanish Verbs</h1>
          <p className="blog-hero-intro">
            The most frequently used Spanish verbs are also the most irregular — but that's precisely why they're worth prioritising. Master these ten and you'll have the building blocks for almost every conversation.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Irregular verbs are irregular for a reason — they are so commonly used that they evolved their own shortened forms over centuries of daily speech. The good news is that because you'll encounter them constantly, they tend to become automatic faster than you might expect. Here are the ten you should focus on first, with full present tense conjugations and practical examples for each.</p>

            <h2>1. Ser — To Be (permanent characteristics)</h2>
            <p><em>Ser</em> is one of two Spanish verbs for "to be". Use it for identity, origin, profession, permanent characteristics, and time. It is completely irregular in the present tense:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Ser</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>soy</td></tr>
                  <tr><td>tú</td><td>eres</td></tr>
                  <tr><td>él/ella/usted</td><td>es</td></tr>
                  <tr><td>nosotros</td><td>somos</td></tr>
                  <tr><td>vosotros</td><td>sois</td></tr>
                  <tr><td>ellos/ustedes</td><td>son</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Soy inglés, pero vivo en España. — <span style={{fontWeight:400}}>I'm English, but I live in Spain.</span></p>
              <p className="es">¿De dónde eres? — <span style={{fontWeight:400}}>Where are you from?</span></p>
              <p className="es">Son las nueve de la mañana. — <span style={{fontWeight:400}}>It's nine in the morning.</span></p>
            </div>

            <h2>2. Estar — To Be (states and locations)</h2>
            <p><em>Estar</em> is the second verb for "to be". Use it for temporary states, emotions, locations, and ongoing actions (with the gerund). It has an irregular yo form and accent marks throughout:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Estar</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>estoy</td></tr>
                  <tr><td>tú</td><td>estás</td></tr>
                  <tr><td>él/ella/usted</td><td>está</td></tr>
                  <tr><td>nosotros</td><td>estamos</td></tr>
                  <tr><td>vosotros</td><td>estáis</td></tr>
                  <tr><td>ellos/ustedes</td><td>están</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Estoy cansado después del viaje. — <span style={{fontWeight:400}}>I'm tired after the journey.</span></p>
              <p className="es">El hotel está cerca de la playa. — <span style={{fontWeight:400}}>The hotel is near the beach.</span></p>
              <p className="es">Estamos comiendo en la terraza. — <span style={{fontWeight:400}}>We're eating on the terrace.</span></p>
            </div>

            <h2>3. Ir — To Go</h2>
            <p><em>Ir</em> is one of the most irregular verbs in Spanish — its present tense forms look nothing like the infinitive. It's also essential for the very common <em>ir a</em> + infinitive (going to do something) structure:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Ir</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>voy</td></tr>
                  <tr><td>tú</td><td>vas</td></tr>
                  <tr><td>él/ella/usted</td><td>va</td></tr>
                  <tr><td>nosotros</td><td>vamos</td></tr>
                  <tr><td>vosotros</td><td>vais</td></tr>
                  <tr><td>ellos/ustedes</td><td>van</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Voy al mercado esta mañana. — <span style={{fontWeight:400}}>I'm going to the market this morning.</span></p>
              <p className="es">¿Vais a la playa mañana? — <span style={{fontWeight:400}}>Are you (all) going to the beach tomorrow?</span></p>
              <p className="es">Van a llegar tarde. — <span style={{fontWeight:400}}>They're going to arrive late.</span></p>
            </div>

            <h2>4. Tener — To Have</h2>
            <p><em>Tener</em> has an irregular yo form (<em>tengo</em>) and stem vowel changes (e → ie) in all forms except nosotros and vosotros. It's also used in many essential fixed expressions:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Tener</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>tengo</td></tr>
                  <tr><td>tú</td><td>tienes</td></tr>
                  <tr><td>él/ella/usted</td><td>tiene</td></tr>
                  <tr><td>nosotros</td><td>tenemos</td></tr>
                  <tr><td>vosotros</td><td>tenéis</td></tr>
                  <tr><td>ellos/ustedes</td><td>tienen</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Tengo una reserva para dos personas. — <span style={{fontWeight:400}}>I have a reservation for two people.</span></p>
              <p className="es">Tengo hambre — ¿dónde comemos? — <span style={{fontWeight:400}}>I'm hungry — where shall we eat?</span></p>
              <p className="es">¿Tenéis habitaciones libres? — <span style={{fontWeight:400}}>Do you have any free rooms?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Tener expressions:</strong> Spanish uses <em>tener</em> where English uses "to be" for many physical and emotional states: <em>tener hambre</em> (to be hungry), <em>tener sed</em> (to be thirsty), <em>tener frío/calor</em> (to be cold/hot), <em>tener sueño</em> (to be sleepy), <em>tener miedo</em> (to be afraid).</p>
            </div>

            <h2>5. Hacer — To Do / To Make</h2>
            <p><em>Hacer</em> only has one irregularity in the present tense: the yo form <em>hago</em>. All other forms follow regular -er patterns. It's used in a wide range of expressions and is also the key verb for weather:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Hacer</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>hago</td></tr>
                  <tr><td>tú</td><td>haces</td></tr>
                  <tr><td>él/ella/usted</td><td>hace</td></tr>
                  <tr><td>nosotros</td><td>hacemos</td></tr>
                  <tr><td>vosotros</td><td>hacéis</td></tr>
                  <tr><td>ellos/ustedes</td><td>hacen</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Qué haces este fin de semana? — <span style={{fontWeight:400}}>What are you doing this weekend?</span></p>
              <p className="es">Hoy hace mucho calor. — <span style={{fontWeight:400}}>It's very hot today.</span></p>
              <p className="es">Hago deporte tres veces a la semana. — <span style={{fontWeight:400}}>I do sport three times a week.</span></p>
            </div>

            <h2>6. Poder — To Be Able To / Can</h2>
            <p><em>Poder</em> is a stem-changing verb (o → ue) plus an irregular yo form. It's essential for asking for help, making requests and expressing ability or permission:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Poder</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>puedo</td></tr>
                  <tr><td>tú</td><td>puedes</td></tr>
                  <tr><td>él/ella/usted</td><td>puede</td></tr>
                  <tr><td>nosotros</td><td>podemos</td></tr>
                  <tr><td>vosotros</td><td>podéis</td></tr>
                  <tr><td>ellos/ustedes</td><td>pueden</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Puedes repetir eso, por favor? — <span style={{fontWeight:400}}>Can you repeat that, please?</span></p>
              <p className="es">No puedo encontrar mi cartera. — <span style={{fontWeight:400}}>I can't find my wallet.</span></p>
              <p className="es">¿Podemos sentarnos aquí? — <span style={{fontWeight:400}}>Can we sit here?</span></p>
            </div>

            <h2>7. Querer — To Want / To Love</h2>
            <p><em>Querer</em> follows the same stem vowel change as <em>poder</em> — except it's e → ie. It's used both for wanting things and (with people) for love:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Querer</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>quiero</td></tr>
                  <tr><td>tú</td><td>quieres</td></tr>
                  <tr><td>él/ella/usted</td><td>quiere</td></tr>
                  <tr><td>nosotros</td><td>queremos</td></tr>
                  <tr><td>vosotros</td><td>queréis</td></tr>
                  <tr><td>ellos/ustedes</td><td>quieren</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Quiero una mesa cerca de la ventana. — <span style={{fontWeight:400}}>I'd like a table near the window.</span></p>
              <p className="es">¿Queréis venir con nosotros? — <span style={{fontWeight:400}}>Do you (all) want to come with us?</span></p>
              <p className="es">Te quiero mucho. — <span style={{fontWeight:400}}>I love you very much.</span></p>
            </div>

            <h2>8. Saber — To Know (facts / skills)</h2>
            <p><em>Saber</em> is only irregular in the yo form. The rest follows regular -er patterns. Use it for facts and the ability to do something (saber + infinitive = know how to):</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Saber</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>sé</td></tr>
                  <tr><td>tú</td><td>sabes</td></tr>
                  <tr><td>él/ella/usted</td><td>sabe</td></tr>
                  <tr><td>nosotros</td><td>sabemos</td></tr>
                  <tr><td>vosotros</td><td>sabéis</td></tr>
                  <tr><td>ellos/ustedes</td><td>saben</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">No sé dónde está la estación. — <span style={{fontWeight:400}}>I don't know where the station is.</span></p>
              <p className="es">¿Sabes hablar catalán? — <span style={{fontWeight:400}}>Do you know how to speak Catalan?</span></p>
              <p className="es">Sabe cocinar muy bien. — <span style={{fontWeight:400}}>She knows how to cook very well.</span></p>
            </div>

            <h2>9. Decir — To Say / To Tell</h2>
            <p><em>Decir</em> combines two irregularities: an irregular yo form (<em>digo</em>) and a stem vowel change (e → i) in most other forms. It's essential for reporting speech and giving information:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Decir</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>digo</td></tr>
                  <tr><td>tú</td><td>dices</td></tr>
                  <tr><td>él/ella/usted</td><td>dice</td></tr>
                  <tr><td>nosotros</td><td>decimos</td></tr>
                  <tr><td>vosotros</td><td>decís</td></tr>
                  <tr><td>ellos/ustedes</td><td>dicen</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Cómo se dice "receipt" en español? — <span style={{fontWeight:400}}>How do you say "receipt" in Spanish?</span></p>
              <p className="es">Dicen que el tiempo va a cambiar. — <span style={{fontWeight:400}}>They say the weather is going to change.</span></p>
              <p className="es">Te digo la verdad. — <span style={{fontWeight:400}}>I'm telling you the truth.</span></p>
            </div>

            <h2>10. Venir — To Come</h2>
            <p><em>Venir</em> has an irregular yo form (<em>vengo</em>) and a stem change (e → ie) in most other forms — very similar to <em>tener</em> in structure. It's the opposite of <em>ir</em> (to go):</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Venir</th></tr></thead>
                <tbody>
                  <tr><td>yo</td><td>vengo</td></tr>
                  <tr><td>tú</td><td>vienes</td></tr>
                  <tr><td>él/ella/usted</td><td>viene</td></tr>
                  <tr><td>nosotros</td><td>venemos</td></tr>
                  <tr><td>vosotros</td><td>venís</td></tr>
                  <tr><td>ellos/ustedes</td><td>vienen</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿De dónde vienes? — <span style={{fontWeight:400}}>Where are you coming from?</span></p>
              <p className="es">Vengo del sur de Inglaterra. — <span style={{fontWeight:400}}>I come from the south of England.</span></p>
              <p className="es">¿Venís a la fiesta el sábado? — <span style={{fontWeight:400}}>Are you (all) coming to the party on Saturday?</span></p>
            </div>

            <h2>Quick Reference: Yo Forms at a Glance</h2>
            <p>The yo form is where most of the irregularity is concentrated. If you memorise these ten yo forms, you'll know the most important deviation for each verb:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Verb</th><th>Yo form</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td>ser</td><td>soy</td><td>I am</td></tr>
                  <tr><td>estar</td><td>estoy</td><td>I am</td></tr>
                  <tr><td>ir</td><td>voy</td><td>I go</td></tr>
                  <tr><td>tener</td><td>tengo</td><td>I have</td></tr>
                  <tr><td>hacer</td><td>hago</td><td>I do/make</td></tr>
                  <tr><td>poder</td><td>puedo</td><td>I can</td></tr>
                  <tr><td>querer</td><td>quiero</td><td>I want</td></tr>
                  <tr><td>saber</td><td>sé</td><td>I know</td></tr>
                  <tr><td>decir</td><td>digo</td><td>I say/tell</td></tr>
                  <tr><td>venir</td><td>vengo</td><td>I come</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>These ten verbs are the backbone of everyday Spanish conversation. They appear in almost every exchange you'll have — in cafés, on the street, in accommodation, with locals. Invest time in them early and they will repay you many times over as your Spanish develops.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to make these verbs second nature?</h3>
              <p>The best way to learn irregular verbs is through real conversation — hearing and using them in context. Let's get started.</p>
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
