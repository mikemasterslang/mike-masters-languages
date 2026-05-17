import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogTripPrep() {
  useScrollAnimation();
  usePageMeta(
    'How to Prepare Your Spanish Before a Trip to Spain | Mike Masters Languages',
    'The key scenarios, scripts and survival phrases to learn before your trip to Spain — plus honest advice on what level you actually need and how to manage speaking anxiety.'
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
          <h1>How to Prepare Your Spanish Before a Trip to Spain</h1>
          <p className="blog-hero-intro">
            You don't need to be fluent to have a genuinely Spanish experience in Spain. But you do need to prepare the right things. Here's what to focus on and what to let go.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              The most common Spanish travel experience is this: you've learned some Spanish, you arrive in Spain, a local speaks to you at speed, you panic, your mind goes blank, and you end up apologetically reverting to English. It's demoralising, even though it's completely normal.
            </p>
            <p>
              The way to avoid it — or at least reduce it significantly — is specific preparation rather than general study. You don't need to study Spanish as a whole for three months before your trip. You need to prepare the specific scenarios you'll actually encounter, practise them until they feel automatic, and manage your expectations about what will go wrong and why that's fine.
            </p>

            <h2>What Level Do You Realistically Need?</h2>
            <p>
              For a holiday to a tourist area of Spain, you can get by with a solid A1–A2 level. Most people working in hospitality will speak at least some English, and patience with attempted Spanish is universal.
            </p>
            <p>
              But getting by and actually using your Spanish are different things. If you want to have real conversations with locals, go off the tourist trail, understand what's on menus and signs, and feel genuinely at ease rather than just managing — you want A2 to B1.
            </p>
            <p>
              For living or working in Spain: you need at least B1, ideally B2. A2 will get you through daily transactions but not professional situations, complex bureaucracy, or conversations with people who don't slow down for you.
            </p>
            <p>
              Whatever level you're at, the best preparation for a trip is scenario-based — not grammar study, not vocabulary lists, but rehearsed situations you know you'll face.
            </p>

            <h2>Key Scenarios to Prepare</h2>

            <h3>Restaurants</h3>
            <p>
              This will be the most frequent situation you face. Learn:
            </p>
            <div className="blog-example">
              <p className="es">Una mesa para dos personas, por favor. — A table for two, please.</p>
              <p className="es">¿Qué me recomienda? — What do you recommend?</p>
              <p className="es">¿Qué lleva este plato? — What does this dish contain?</p>
              <p className="es">Soy alérgico/a a... — I'm allergic to...</p>
              <p className="es">La cuenta, por favor. — The bill, please.</p>
              <p className="es">¿Está incluido el servicio? — Is service included?</p>
            </div>
            <p>
              Also learn the words for common allergens and dietary requirements if relevant: <em>gluten, lactosa, marisco, frutos secos, vegetariano, vegano</em>.
            </p>

            <h3>Transport</h3>
            <div className="blog-example">
              <p className="es">Un billete de ida a Madrid, por favor. — A single to Madrid, please.</p>
              <p className="es">¿A qué hora sale el próximo tren? — What time does the next train leave?</p>
              <p className="es">¿Dónde está la parada de metro más cercana? — Where is the nearest metro stop?</p>
              <p className="es">¿Cuánto cuesta el taxi al centro? — How much is a taxi to the centre?</p>
              <p className="es">¿Para aquí el autobús número...? — Does the number... bus stop here?</p>
            </div>

            <h3>Accommodation</h3>
            <div className="blog-example">
              <p className="es">Tengo una reserva a nombre de... — I have a reservation under the name...</p>
              <p className="es">¿A qué hora es el check-out? — What time is check-out?</p>
              <p className="es">¿Hay wifi? ¿Cuál es la contraseña? — Is there wifi? What's the password?</p>
              <p className="es">El aire acondicionado no funciona. — The air conditioning isn't working.</p>
              <p className="es">¿Puede guardar mi equipaje? — Can you store my luggage?</p>
            </div>

            <h3>Shopping</h3>
            <div className="blog-example">
              <p className="es">¿Cuánto cuesta esto? — How much does this cost?</p>
              <p className="es">¿Tienen esto en una talla más grande/pequeña? — Do you have this in a bigger/smaller size?</p>
              <p className="es">¿Puedo probármelo? — Can I try it on?</p>
              <p className="es">¿Aceptan tarjeta? — Do you take card?</p>
              <p className="es">Me lo llevo. — I'll take it.</p>
            </div>

            <h3>Emergencies</h3>
            <p>
              Learn these by heart before you go — not just know them, but be able to produce them automatically under stress:
            </p>
            <div className="blog-example">
              <p className="es">Llame a la policía. — Call the police.</p>
              <p className="es">Necesito un médico. — I need a doctor.</p>
              <p className="es">Me han robado. — I've been robbed.</p>
              <p className="es">¿Dónde está el hospital más cercano? — Where is the nearest hospital?</p>
              <p className="es">Tengo dolor aquí. — I have pain here.</p>
              <p className="es">Soy alérgico/a a la penicilina. — I'm allergic to penicillin.</p>
            </div>

            <h2>Scripts to Learn by Heart</h2>
            <p>
              The most useful thing you can do for trip preparation is learn a handful of complete scripts — full conversations for the situations you'll face — and practise them until they come automatically. A restaurant order, a hotel check-in, a taxi request.
            </p>
            <p>
              When you know the script, you have a framework. Even if the conversation goes off-script, you know the starting point and the expected shape of the exchange, which hugely reduces panic.
            </p>
            <div className="blog-tip">
              <p><strong>Practise out loud, not just in your head.</strong> Say the scripts aloud repeatedly — while cooking, on your commute, in the shower. Speaking Spanish is a physical skill as well as a mental one. Your mouth needs to be comfortable producing these sounds and sequences. Reading them silently is not the same preparation.</p>
            </div>

            <h2>Managing Anxiety About Speaking</h2>
            <p>
              Speaking anxiety is real and very common, even in learners with good Spanish. The fear of making a fool of yourself, of being misunderstood, of not coping when things go off-script — it's uncomfortable.
            </p>
            <p>
              A few things that genuinely help:
            </p>
            <p>
              <strong>Start with low-stakes interactions.</strong> Don't open with a complicated order at a busy restaurant. Start with something simple — buying a drink, asking the time, saying <em>buenos días</em> to the person at the hotel desk. Each small success builds confidence for the next interaction.
            </p>
            <p>
              <strong>Have a rescue phrase ready.</strong> When you get lost: <em>¿Puede hablar más despacio, por favor?</em> (Can you speak more slowly, please?) or <em>No entiendo muy bien — ¿puede repetir?</em> (I don't quite understand — can you repeat that?). Knowing you have this exit route reduces the panic considerably.
            </p>
            <p>
              <strong>Reframe errors as data.</strong> Every time you get something wrong or can't remember a word, that's useful information — it tells you exactly what to practise. The trip itself is learning, not a test.
            </p>

            <div className="blog-highlight">
              <p>The best trip preparation is scenario-based: know the vocabulary and scripts for the six or seven situations you'll actually face, and practise them out loud until they feel automatic. General Spanish level matters less than being specifically prepared for what's coming.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Trip coming up? Let's get you ready.</h3>
              <p>A few focused sessions before your trip can make an enormous difference to your confidence and enjoyment. Get in touch and we'll work on exactly what you need.</p>
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
