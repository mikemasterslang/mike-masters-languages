import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogHaceTime() {
  useScrollAnimation();
  usePageMeta(
    'Hacer Time Expressions in Spanish: Hace, Hacía and Llevar | Mike Masters Languages',
    'Master Spanish time expressions with hacer and llevar — how long something has been happening, how long ago it happened, and the llevar + gerund construction.'
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
          <h1>Hacer Time Expressions in Spanish: Hace, Hacía and Llevar</h1>
          <p className="blog-hero-intro">Talking about how long something has been happening — or how long ago it happened — uses structures that don't exist in English.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>When you want to say "I have lived here for two years" or "I arrived two years ago," Spanish doesn't use the perfect tense the way English does. Instead, it relies on the verb hacer — which normally means "to make" or "to do" — in a set of fixed time expressions. These constructions are used constantly in everyday conversation, so getting comfortable with them early pays real dividends.</p>

            <h2>Hace + Time + Que + Present Tense (Ongoing Action)</h2>
            <p>Use this structure when an action started in the past and is still continuing now. The English equivalent uses the present perfect continuous: "I have been living here for two years." Spanish uses the simple present instead.</p>

            <div className="blog-highlight">
              <p>Formula: hace + [time period] + que + [present tense verb]<br/>Translation: "I have been [doing something] for [time]."</p>
            </div>

            <div className="blog-example">
              <p className="es">Hace dos años que vivo aquí. — <span style={{fontWeight: 400}}>I have been living here for two years.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hace tres horas que espero. — <span style={{fontWeight: 400}}>I have been waiting for three hours.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hace seis meses que estudio español. — <span style={{fontWeight: 400}}>I have been studying Spanish for six months.</span></p>
            </div>

            <p>You can also reverse the sentence and drop que. The meaning is identical:</p>

            <div className="blog-example">
              <p className="es">Vivo aquí hace dos años. — <span style={{fontWeight: 400}}>I have been living here for two years.</span></p>
            </div>

            <h2>Hace + Time + Preterite (Time Ago)</h2>
            <p>When the action is finished and you want to say how long ago it happened, use hace with the preterite tense. There is no que in this structure.</p>

            <div className="blog-highlight">
              <p>Formula: hace + [time period] + [preterite verb] (or: [preterite verb] + hace + [time period])<br/>Translation: "[time] ago."</p>
            </div>

            <div className="blog-example">
              <p className="es">Hace dos años llegué a España. — <span style={{fontWeight: 400}}>I arrived in Spain two years ago.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Lo conocí hace una semana. — <span style={{fontWeight: 400}}>I met him a week ago.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hace diez minutos salió. — <span style={{fontWeight: 400}}>She left ten minutes ago.</span></p>
            </div>

            <h2>Hacía + Time + Que + Imperfect (Past Ongoing)</h2>
            <p>This structure is the past equivalent of the first formula. Use it to say how long something had been happening before something else occurred — the past perfect continuous in English. The imperfect tense is used for the main verb.</p>

            <div className="blog-highlight">
              <p>Formula: hacía + [time period] + que + [imperfect tense verb]<br/>Translation: "I had been [doing something] for [time]."</p>
            </div>

            <div className="blog-example">
              <p className="es">Hacía tres años que vivía en Madrid cuando conseguí el trabajo. — <span style={{fontWeight: 400}}>I had been living in Madrid for three years when I got the job.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hacía una hora que esperaba cuando por fin llegó el autobús. — <span style={{fontWeight: 400}}>I had been waiting for an hour when the bus finally arrived.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hacía dos semanas que no dormía bien. — <span style={{fontWeight: 400}}>I hadn't been sleeping well for two weeks.</span></p>
            </div>

            <h2>Llevar + Gerund (Duration in Progress)</h2>
            <p>Llevar (literally "to carry") is used in another time expression that conveys ongoing duration — how long you have been doing something right up to this moment. It works with the gerund (the -ando / -iendo form) and is extremely common in spoken Spanish.</p>

            <div className="blog-highlight">
              <p>Formula: [conjugated llevar] + [time period] + [gerund]<br/>Translation: "I have been [doing something] for [time]."</p>
            </div>

            <div className="blog-example">
              <p className="es">Llevo dos horas trabajando. — <span style={{fontWeight: 400}}>I have been working for two hours.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Lleva diez años viviendo en Barcelona. — <span style={{fontWeight: 400}}>She has been living in Barcelona for ten years.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Llevamos toda la mañana esperando noticias. — <span style={{fontWeight: 400}}>We have been waiting for news all morning.</span></p>
            </div>

            <p>In the negative, llevar + sin + infinitive expresses how long you have gone without doing something:</p>

            <div className="blog-example">
              <p className="es">Llevo tres días sin dormir bien. — <span style={{fontWeight: 400}}>I haven't slept well for three days.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Lleva meses sin llamarme. — <span style={{fontWeight: 400}}>She hasn't called me for months.</span></p>
            </div>

            <h2>Common Mistakes to Avoid</h2>
            <p>The most frequent error is using the present perfect where Spanish uses the present — particularly in the hace + que construction. "I have been living here for two years" is not he vivido aquí durante dos años; it is hace dos años que vivo aquí. Using the present perfect here sounds unnatural to a native speaker.</p>

            <p>Also watch out for confusing the two hace structures. If the action is ongoing, you need que and the present tense. If the action is finished and you're measuring how long ago, you drop que and use the preterite. The presence or absence of que is the key signal.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Structure</th>
                  <th>Use</th>
                  <th>Key tense</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>hace + time + que + verb</td><td>Still happening now</td><td>Present</td></tr>
                <tr><td>hace + time + verb</td><td>Completed, time ago</td><td>Preterite</td></tr>
                <tr><td>hacía + time + que + verb</td><td>Was ongoing in the past</td><td>Imperfect</td></tr>
                <tr><td>llevar + time + gerund</td><td>Still happening now</td><td>Present</td></tr>
              </tbody>
            </table>

          </div>

          <div className="blog-author-cta">
            <p>Want to work on your Spanish grammar with a professional tutor? <Link to="/get-started">Get started with Mike Masters Languages.</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
