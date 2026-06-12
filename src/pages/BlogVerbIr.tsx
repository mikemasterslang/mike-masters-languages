import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogVerbIr() {
  useScrollAnimation();
  usePageMeta(
    'The Verb Ir in Spanish: Going Places and Talking About the Future | Mike Masters Languages',
    'Learn the Spanish verb ir — present tense, near future with ir + a, preterite, imperfect, and essential phrases. One of the most useful verbs in the language.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>The Verb Ir in Spanish: Going Places and Talking About the Future</h1>
          <p className="blog-hero-intro">Ir is one of the most irregular and most useful verbs in Spanish. Master it and you unlock two essential functions at once.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The verb ir means "to go." It's one of the most frequently used verbs in the entire language — and one of the most irregular. Its present tense forms look nothing like the infinitive. Its preterite forms are borrowed from the verb ser (to be). And yet it's absolutely essential, because beyond simply saying where you're going, ir + a + infinitive gives you a simple, natural way to talk about the future. Let's work through it from the ground up.</p>

            <h2>Present Tense of Ir</h2>
            <p>The present tense of ir is completely irregular. There's no shortcut — you simply need to learn these forms. The good news is that they're short and very frequently used, so they become automatic quickly.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Form</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>yo</td><td>voy</td><td>I go / I am going</td></tr>
                <tr><td>tú</td><td>vas</td><td>you go / you are going</td></tr>
                <tr><td>él / ella / usted</td><td>va</td><td>he/she goes / you (formal) go</td></tr>
                <tr><td>nosotros/as</td><td>vamos</td><td>we go / we are going</td></tr>
                <tr><td>vosotros/as</td><td>vais</td><td>you all go (Spain)</td></tr>
                <tr><td>ellos / ellas / ustedes</td><td>van</td><td>they go / you all go</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">¿Adónde vas? — <span style={{fontWeight: 400}}>Where are you going?</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Voy al supermercado. — <span style={{fontWeight: 400}}>I'm going to the supermarket.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Mis padres van a la playa este fin de semana. — <span style={{fontWeight: 400}}>My parents are going to the beach this weekend.</span></p>
            </div>

            <h2>Ir + A + Place</h2>
            <p>To say where someone is going, use ir + a + the destination. Remember that a + el contracts to al.</p>

            <div className="blog-example">
              <p className="es">Vamos al cine esta noche. — <span style={{fontWeight: 400}}>We're going to the cinema tonight.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Va a la oficina todos los días. — <span style={{fontWeight: 400}}>She goes to the office every day.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">¿Vas a casa de tu madre? — <span style={{fontWeight: 400}}>Are you going to your mother's house?</span></p>
            </div>

            <h2>Ir + A + Infinitive (The Near Future)</h2>
            <p>This is one of the most important structures in Spanish. By combining ir + a with an infinitive, you create the near future — equivalent to the English "going to" future. It's used constantly in spoken Spanish, often more than the formal future tense.</p>

            <div className="blog-highlight">
              <p>Formula: [ir conjugated] + a + [infinitive]<br/>This works exactly like English "going to": voy a comer = I'm going to eat.</p>
            </div>

            <div className="blog-example">
              <p className="es">Voy a llamarte esta tarde. — <span style={{fontWeight: 400}}>I'm going to call you this afternoon.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Van a abrir un restaurante nuevo en la plaza. — <span style={{fontWeight: 400}}>They're going to open a new restaurant in the square.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">¿Qué vas a hacer este verano? — <span style={{fontWeight: 400}}>What are you going to do this summer?</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Vamos a ver. — <span style={{fontWeight: 400}}>We'll see. / Let's see. (very common fixed expression)</span></p>
            </div>

            <h2>Preterite of Ir (Completed Actions)</h2>
            <p>Here's one of Spanish's most surprising facts: the preterite (simple past) of ir is identical to the preterite of ser (to be). Context always makes it clear which verb is meant.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Preterite</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>yo</td><td>fui</td></tr>
                <tr><td>tú</td><td>fuiste</td></tr>
                <tr><td>él / ella / usted</td><td>fue</td></tr>
                <tr><td>nosotros/as</td><td>fuimos</td></tr>
                <tr><td>vosotros/as</td><td>fuisteis</td></tr>
                <tr><td>ellos / ellas / ustedes</td><td>fueron</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Fui al médico ayer. — <span style={{fontWeight: 400}}>I went to the doctor yesterday.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">¿Fuiste a la fiesta el sábado? — <span style={{fontWeight: 400}}>Did you go to the party on Saturday?</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Fueron a ver a sus abuelos. — <span style={{fontWeight: 400}}>They went to visit their grandparents.</span></p>
            </div>

            <h2>Imperfect of Ir (Habitual or Ongoing Past)</h2>
            <p>The imperfect of ir is used for habitual past actions ("I used to go") or for a past action that was in progress when something else happened ("I was going to…").</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Imperfect</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>yo</td><td>iba</td></tr>
                <tr><td>tú</td><td>ibas</td></tr>
                <tr><td>él / ella / usted</td><td>iba</td></tr>
                <tr><td>nosotros/as</td><td>íbamos</td></tr>
                <tr><td>vosotros/as</td><td>ibais</td></tr>
                <tr><td>ellos / ellas / ustedes</td><td>iban</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Cuando era pequeño, iba al parque todos los días. — <span style={{fontWeight: 400}}>When I was little, I used to go to the park every day.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Iba a llamarte pero se me olvidó. — <span style={{fontWeight: 400}}>I was going to call you but I forgot.</span></p>
            </div>

            <h2>Essential Phrases with Ir</h2>

            <div className="blog-example">
              <p className="es">¡Vamos! — <span style={{fontWeight: 400}}>Let's go! / Come on!</span></p>
            </div>
            <div className="blog-example">
              <p className="es">¿Cómo te va? — <span style={{fontWeight: 400}}>How's it going? / How are you getting on?</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Me va bien, gracias. — <span style={{fontWeight: 400}}>I'm doing well, thanks.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Voy tirando. — <span style={{fontWeight: 400}}>I'm getting by. / Muddling through.</span></p>
            </div>

            <div className="blog-highlight">
              <p>Ir is irregular in the present (voy, vas, va...) and shares its preterite forms with ser (fui, fuiste, fue...). The near future structure ir + a + infinitive is one of the most productive patterns in everyday Spanish — learn it well and use it often.</p>
            </div>

          </div>

          <div className="blog-author-cta">
            <p>Want to work on your Spanish grammar with a professional tutor? <Link to="/get-started">Get started with Mike Masters Languages.</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
