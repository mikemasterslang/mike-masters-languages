import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogA1ToA2() {
  useScrollAnimation();
  usePageMeta(
    'Moving From A1 to A2 Spanish: What to Focus On | Mike Masters Languages',
    'A1 and A2 feel close but the gap is significant. Here\'s exactly what changes between the two levels — the grammar to add, vocabulary targets, and how to know when you\'ve crossed the threshold.'
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
            <span className="blog-hero-tag">Tips</span>
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Moving From A1 to A2 Spanish: What to Focus On</h1>
          <p className="blog-hero-intro">
            A1 gets you through very basic greetings and introductions. A2 gets you through a trip to Spain. The gap between them is significant — here's exactly what to work on to cross it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              A lot of people sit at A1–A2 for longer than they need to, not because they lack ability but because they're not sure what specifically to focus on. They keep revising the same basic vocabulary and grammar they already know rather than deliberately targeting the gaps that are keeping them at A1 level.
            </p>
            <p>
              This post is specifically for learners who have covered the basics — greetings, numbers, present tense — and want to know what the A1 to A2 step actually requires.
            </p>

            <h2>What You Can Do at A1 vs A2</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>A1</th><th>A2</th></tr>
                </thead>
                <tbody>
                  <tr><td>Introduce yourself (name, nationality, job)</td><td>Describe yourself and others in more detail (appearance, personality)</td></tr>
                  <tr><td>Count and use basic numbers</td><td>Talk about prices, distances, times, dates confidently</td></tr>
                  <tr><td>Use present tense for basic actions</td><td>Talk about the past (what you did) and near future (what you're going to do)</td></tr>
                  <tr><td>Order basic food and drink</td><td>Navigate a restaurant fully: ask questions, describe preferences, handle problems</td></tr>
                  <tr><td>Ask and give very simple directions</td><td>Give and follow more detailed directions; use transport vocabulary</td></tr>
                  <tr><td>Say what you like and don't like</td><td>Express and explain preferences, make comparisons, give simple opinions</td></tr>
                  <tr><td>Understand very slow, simple speech</td><td>Understand the main point of slow, clear speech on familiar topics</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Grammar Gaps to Fill</h2>

            <h3>Past Tense: Pretérito Indefinido</h3>
            <p>
              This is the single most important step from A1 to A2. Without any past tense, you're limited to talking about what's happening now or what usually happens. Adding the <em>pretérito indefinido</em> (simple past) opens up your ability to talk about what you did, what happened, where you went.
            </p>
            <div className="blog-example">
              <p className="es">Ayer fui al supermercado. — Yesterday I went to the supermarket.</p>
              <p className="es">El fin de semana pasado comí en un restaurante chino. — Last weekend I ate at a Chinese restaurant.</p>
              <p className="es">¿Qué hiciste ayer? — What did you do yesterday?</p>
            </div>
            <p>
              Learn the <em>indefinido</em> forms for the most common verbs first: <em>ser/ir</em> (irregular, same forms: fui, fuiste, fue...), <em>tener, hacer, ver, comer, hablar, volver</em>. The regular patterns are straightforward; it's the irregular verbs that take the most practice.
            </p>

            <h3>Talking About the Near Future</h3>
            <p>
              The <em>ir a + infinitive</em> construction is the most natural and most common way to talk about future plans in everyday Spanish — much more common than the actual future tense at this level.
            </p>
            <div className="blog-example">
              <p className="es">Esta tarde voy a ver una película. — This afternoon I'm going to watch a film.</p>
              <p className="es">El año que viene vamos a ir a España. — Next year we're going to go to Spain.</p>
              <p className="es">¿Qué vas a hacer este fin de semana? — What are you going to do this weekend?</p>
            </div>
            <p>
              You already know <em>ir</em> (to go) from A1. Add <em>ir a + infinitive</em> and you have a fully functional way to discuss future plans without touching the future tense.
            </p>

            <h3>Describing People and Things</h3>
            <p>
              At A1 you might know a few basic adjectives. At A2 you need to describe people and things in enough detail to be useful — physical appearance, personality, what something is like.
            </p>
            <div className="blog-example">
              <p className="es">Mi jefe es alto, delgado y bastante serio. — My boss is tall, slim and quite serious.</p>
              <p className="es">El apartamento es pequeño pero muy cómodo y bien situado. — The apartment is small but very comfortable and well located.</p>
            </div>
            <p>
              Key vocabulary to add: physical descriptions (<em>alto, bajo, delgado, gordo, joven, mayor, rubio, moreno, pelirrojo</em>), personality (<em>simpático, antipático, serio, gracioso, trabajador, perezoso, tímido, extrovertido</em>), and adjectives for things (<em>bonito, feo, cómodo, incómodo, barato, caro, limpio, sucio, moderno, antiguo</em>).
            </p>
            <p>
              Remember gender agreement: adjectives must match the gender and number of the noun they describe. This is A1 grammar, but it gets more important as your adjective vocabulary grows.
            </p>

            <h3>Asking a Full Range of Questions</h3>
            <p>
              At A1 you probably know <em>¿Cómo? ¿Qué? ¿Dónde?</em>. At A2 you need the full question word set and the ability to use them in more complex questions:
            </p>
            <div className="blog-example">
              <p className="es">¿Cuánto cuesta? — How much does it cost?</p>
              <p className="es">¿Cuántos años tienes? — How old are you?</p>
              <p className="es">¿Cuándo llega el tren? — When does the train arrive?</p>
              <p className="es">¿Por qué no viniste ayer? — Why didn't you come yesterday?</p>
              <p className="es">¿Cuál prefieres? — Which do you prefer?</p>
              <p className="es">¿A qué hora abre? — What time does it open?</p>
            </div>

            <h2>Vocabulary Targets</h2>
            <p>
              A solid A2 vocabulary is around <strong>1,000–1,500 words</strong>. That's the high-frequency core you need to handle everyday situations comfortably.
            </p>
            <p>
              Priority vocabulary themes to add between A1 and A2:
            </p>
            <ul>
              <li>Time expressions: <em>ayer, anteayer, la semana pasada, el mes pasado, el año que viene, dentro de, hace tres días</em></li>
              <li>Transport: <em>avión, tren, autobús, metro, taxi, billete, andén, retraso, directo, parada</em></li>
              <li>Food and restaurants: beyond basic items — menu vocabulary, cooking methods, dietary terms</li>
              <li>Accommodation: <em>hotel, habitación, reserva, recepción, llave, ducha, desayuno incluido</em></li>
              <li>Body and health: <em>cabeza, espalda, estómago, fiebre, dolor, médico, farmacia, me duele</em></li>
              <li>Emotions and feelings: <em>contento, triste, nervioso, cansado, aburrido, emocionado, preocupado</em></li>
            </ul>

            <h2>How to Know When You've Crossed the Threshold</h2>
            <p>
              You're at A2 when you can do the following without significant hesitation or needing to look things up:
            </p>
            <ul>
              <li>Describe your daily routine, your weekend, and your recent plans in the past and future</li>
              <li>Have a conversation about yourself, your family, your job and where you live</li>
              <li>Navigate a restaurant, a hotel, a transport situation, and a shopping transaction</li>
              <li>Understand the main point of a slow, simple Spanish audio or video</li>
              <li>Write a short paragraph (6–8 sentences) about a familiar topic with mostly correct grammar</li>
            </ul>
            <div className="blog-tip">
              <p><strong>Test yourself on real situations, not exercises.</strong> Can you call a hotel and make a reservation entirely in Spanish? Can you describe your last holiday in Spanish for two minutes without stopping? These real-world tasks tell you more about your level than a gap-fill exercise.</p>
            </div>

            <div className="blog-highlight">
              <p>The A1 to A2 step is built on three things: adding the simple past tense, learning to describe people and things in detail, and building vocabulary in the practical themes you'll actually need. Focus there and you'll cross the threshold faster than you expect.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to push from A1 to A2?</h3>
              <p>A structured series of lessons focused on exactly the gaps between these levels is the fastest way to get there. Get in touch and let's make it happen.</p>
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
