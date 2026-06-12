import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSportsHobbies() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Sports and Hobbies Vocabulary | Mike Masters Languages',
    'Learn Spanish vocabulary for sports and hobbies — jugar a vs practicar, how to talk about free time, frequency expressions and natural phrases for real conversation.'
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
          <h1>Spanish Sports and Hobbies Vocabulary</h1>
          <p className="blog-hero-intro">
            Talking about what you do in your free time is one of the most natural conversation topics — here's the vocabulary you need.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>After introductions and work, hobbies are one of the first things people ask about. <em>¿Qué haces en tu tiempo libre?</em> ("What do you do in your free time?") is a question you'll hear constantly, and being able to answer it naturally — and ask the same back — is a key milestone for any beginner. This guide covers the essential sports and hobby vocabulary, the all-important <em>jugar a</em> vs <em>practicar</em> distinction, and the frequency phrases that make your answers sound authentic.</p>

            <h2>Sports (Los Deportes)</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el fútbol</td><td>football / soccer</td></tr>
                  <tr><td>el tenis</td><td>tennis</td></tr>
                  <tr><td>la natación</td><td>swimming</td></tr>
                  <tr><td>el ciclismo</td><td>cycling</td></tr>
                  <tr><td>el atletismo</td><td>athletics / running</td></tr>
                  <tr><td>el baloncesto</td><td>basketball</td></tr>
                  <tr><td>el golf</td><td>golf</td></tr>
                  <tr><td>el esquí</td><td>skiing</td></tr>
                  <tr><td>el surf</td><td>surfing</td></tr>
                  <tr><td>el pádel</td><td>padel (hugely popular in Spain)</td></tr>
                  <tr><td>el voleibol</td><td>volleyball</td></tr>
                  <tr><td>la gimnasia</td><td>gymnastics / gym work</td></tr>
                  <tr><td>el boxeo</td><td>boxing</td></tr>
                  <tr><td>el yoga</td><td>yoga</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Jugar a vs Practicar — A Crucial Distinction</h2>
            <p>One of the most common mistakes beginners make is using the wrong verb with sports. Spanish uses two different verbs, and the rule is straightforward:</p>

            <div className="blog-highlight">
              <p>Use <strong>jugar a</strong> for team or competitive sports played with rules (football, tennis, golf). Use <strong>practicar</strong> for physical activities and sports that are more individual or non-competitive (swimming, cycling, yoga). When in doubt, <em>practicar</em> is rarely wrong — but <em>jugar a</em> is more natural for ball sports.</p>
            </div>

            <div className="blog-example">
              <p className="es">Juego al fútbol los domingos. — <span style={{fontWeight: 400}}>I play football on Sundays.</span></p>
              <p className="es">¿Juegas al tenis? — <span style={{fontWeight: 400}}>Do you play tennis?</span></p>
              <p className="es">Practico natación tres veces a la semana. — <span style={{fontWeight: 400}}>I swim three times a week.</span></p>
              <p className="es">Mi hermana practica yoga por las mañanas. — <span style={{fontWeight: 400}}>My sister does yoga in the mornings.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Note on articles:</strong> After <em>jugar a</em>, the article contracts: <em>jugar a + el = jugar al</em>. So it's <em>jugar al fútbol</em>, <em>jugar al tenis</em>, <em>jugar al golf</em> — never <em>jugar a el</em>.</p>
            </div>

            <h2>Hobbies and Free-Time Activities (Los Pasatiempos)</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>leer</td><td>to read / reading</td></tr>
                  <tr><td>cocinar</td><td>to cook / cooking</td></tr>
                  <tr><td>pintar</td><td>to paint / painting</td></tr>
                  <tr><td>tocar la guitarra</td><td>to play the guitar</td></tr>
                  <tr><td>tocar el piano</td><td>to play the piano</td></tr>
                  <tr><td>hacer senderismo</td><td>to go hiking</td></tr>
                  <tr><td>ver películas / series</td><td>to watch films / series</td></tr>
                  <tr><td>viajar</td><td>to travel / travelling</td></tr>
                  <tr><td>bailar</td><td>to dance / dancing</td></tr>
                  <tr><td>la fotografía</td><td>photography</td></tr>
                  <tr><td>la jardinería</td><td>gardening</td></tr>
                  <tr><td>escuchar música</td><td>to listen to music</td></tr>
                  <tr><td>dibujar</td><td>to draw / drawing</td></tr>
                  <tr><td>hacer punto</td><td>to knit / knitting</td></tr>
                  <tr><td>jugar a videojuegos</td><td>to play video games</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Expressing What You Like</h2>
            <p>To say you enjoy a hobby, use <em>me gusta</em> + infinitive (or noun). Remember: <em>me gusta</em> is for one thing; <em>me gustan</em> is for plural nouns.</p>

            <div className="blog-example">
              <p className="es">Me gusta leer. — <span style={{fontWeight: 400}}>I like reading.</span></p>
              <p className="es">Me encanta la fotografía. — <span style={{fontWeight: 400}}>I love photography.</span></p>
              <p className="es">No me gusta mucho el golf. — <span style={{fontWeight: 400}}>I don't like golf much.</span></p>
              <p className="es">Me apasiona el senderismo. — <span style={{fontWeight: 400}}>I'm passionate about hiking.</span></p>
            </div>

            <h2>Frequency Expressions</h2>
            <p>These words turn a basic sentence into a natural, flowing answer. They're essential for sounding like a real speaker rather than a textbook:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>todos los días</td><td>every day</td></tr>
                  <tr><td>los fines de semana</td><td>at weekends</td></tr>
                  <tr><td>a menudo</td><td>often</td></tr>
                  <tr><td>de vez en cuando</td><td>from time to time / occasionally</td></tr>
                  <tr><td>suelo + infinitive</td><td>I usually / I tend to...</td></tr>
                  <tr><td>una vez a la semana</td><td>once a week</td></tr>
                  <tr><td>dos veces al mes</td><td>twice a month</td></tr>
                  <tr><td>casi nunca</td><td>hardly ever</td></tr>
                  <tr><td>nunca</td><td>never</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Suelo ir al gimnasio tres veces a la semana. — <span style={{fontWeight: 400}}>I usually go to the gym three times a week.</span></p>
              <p className="es">De vez en cuando salgo a correr por el parque. — <span style={{fontWeight: 400}}>Occasionally I go running in the park.</span></p>
              <p className="es">Los fines de semana me gusta hacer senderismo. — <span style={{fontWeight: 400}}>At weekends I like to go hiking.</span></p>
            </div>

            <h2>Asking About Hobbies</h2>
            <div className="blog-example">
              <p className="es">¿Qué haces en tu tiempo libre? — <span style={{fontWeight: 400}}>What do you do in your free time?</span></p>
              <p className="es">¿Tienes algún hobby? — <span style={{fontWeight: 400}}>Do you have any hobbies?</span></p>
              <p className="es">¿Practicas algún deporte? — <span style={{fontWeight: 400}}>Do you do any sport?</span></p>
              <p className="es">¿Desde cuándo tocas la guitarra? — <span style={{fontWeight: 400}}>How long have you been playing the guitar?</span></p>
            </div>

            <div className="blog-highlight">
              <p>The key formula for talking about hobbies is: <em>Me gusta/encanta</em> + infinitive or noun, followed by a frequency expression like <em>suelo</em>, <em>a menudo</em> or <em>los fines de semana</em>. This simple combination will carry you through most hobby conversations at any level.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Build real conversational confidence</h3>
              <p>Talking about hobbies is one of the most enjoyable parts of learning Spanish. Let's practise it together in real conversation.</p>
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
