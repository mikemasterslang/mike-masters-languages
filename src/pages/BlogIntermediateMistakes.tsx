import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogIntermediateMistakes() {
  useScrollAnimation();
  usePageMeta(
    'Common Mistakes Intermediate Spanish Learners Make | Mike Masters Languages',
    'You\'ve got the basics — but there are patterns that trip up almost every intermediate learner. Here\'s what to watch for and how to fix each one.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Common Mistakes Intermediate Spanish Learners Make</h1>
          <p className="blog-hero-intro">
            You've got the basics — but there are patterns that trip up almost every learner at the intermediate stage. Here's what to watch for.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              Intermediate Spanish learners have passed the hardest early stages — they know the present tense, the basics of gender and agreement, the core vocabulary. But certain errors follow almost every learner from A2 through to B2, and they're worth naming directly. Recognising patterns in your own mistakes is the fastest way to eliminate them.
            </p>
            <p>
              These aren't rare edge cases. These are the mistakes I correct most frequently in lessons with learners at the B1–B2 level.
            </p>

            <h2>1. Overusing the Present Tense Instead of the Past</h2>
            <p>
              When speaking under pressure, many intermediate learners default to the present tense even when describing past events. It's a fluency crutch — the present tense feels more automatic, so the brain reaches for it when it needs to move quickly.
            </p>
            <div className="blog-example">
              <p className="es">Incorrect: Ayer voy al supermercado y compro mucho.</p>
              <p className="es">Correct: Ayer fui al supermercado y compré mucho.</p>
            </div>
            <p>
              The fix is deliberate practice in past tense narration. Pick a story — what you did last weekend, a film you watched, a trip you took — and tell it entirely in the preterite and imperfect. Do this in writing first, where you have time to think, and then practice the same narration in speech until the past tense feels as automatic as the present.
            </p>

            <h2>2. Ser and Estar Still Slipping</h2>
            <p>
              Ser and estar are both "to be" — but they're not interchangeable, and intermediate learners still mix them up regularly, especially under pressure. The core distinction: <em>ser</em> for permanent or inherent characteristics; <em>estar</em> for states, conditions, and locations. But the real problem is that the rules have significant exceptions that need to be learned individually.
            </p>
            <div className="blog-example">
              <p className="es">La sopa está fría. — The soup is cold. (current state → estar)</p>
              <p className="es">El hielo es frío. — Ice is cold. (inherent property → ser)</p>
              <p className="es">Está muerto. — He is dead. (state → estar, even though death is permanent)</p>
              <p className="es">Es aburrido. / Está aburrido. — He is boring. / He is bored. (completely different meanings)</p>
            </div>
            <p>
              The ser/estar distinction isn't fully rule-governed — it's also about meaning. The best approach is to learn the cases where one or the other is fixed (locations always use <em>estar</em> except for events; professions use <em>ser</em>; emotional states use <em>estar</em>) and then learn the exceptions and meaning shifts as individual items.
            </p>

            <h2>3. Forgetting Agreement</h2>
            <p>
              Spanish requires agreement in gender and number between nouns, adjectives, determiners, and in compound past tenses, past participles. Intermediate learners often get agreement right in simple sentences and forget it in more complex ones.
            </p>
            <div className="blog-example">
              <p className="es">Incorrect: Las chicas son muy simpático.</p>
              <p className="es">Correct: Las chicas son muy simpáticas.</p>
              <p className="es">Incorrect: Me he puesto los zapatos nuevo.</p>
              <p className="es">Correct: Me he puesto los zapatos nuevos.</p>
            </div>
            <p>
              Agreement errors increase when sentences get longer and the noun is further from the adjective. In writing, slow down and check. In speech, slow down deliberately when using adjectives — rushing through the end of a sentence is where agreement breaks down.
            </p>

            <h2>4. Misusing Por and Para</h2>
            <p>
              Both translate loosely as "for" but they're not interchangeable. The rules are nuanced enough that even advanced learners occasionally mix them up. Here are the patterns that cause the most confusion:
            </p>
            <div className="blog-example">
              <p className="es">Lo hice por ti. — I did it because of you / for your sake. (cause, motive → por)</p>
              <p className="es">Lo hice para ti. — I did it for you. (recipient, intended for → para)</p>
              <p className="es">Estudié por tres horas. — I studied for three hours. (duration → por)</p>
              <p className="es">Estudio para aprender. — I study in order to learn. (purpose → para)</p>
              <p className="es">Te lo cambio por esto. — I'll swap it for this. (exchange → por)</p>
            </div>
            <p>
              The core of the distinction: <em>por</em> looks backwards (causes, reasons, exchanges, duration, means) and <em>para</em> looks forwards (purpose, deadlines, recipients, destinations). When in doubt, ask yourself whether you're describing why something happened (por) or what something is intended for (para).
            </p>
            <div className="blog-highlight">
              <p>Por and para are one of those areas where you genuinely need to learn common uses as fixed patterns rather than trying to apply a single rule. Build a list of the uses you get wrong and review them regularly.</p>
            </div>

            <h2>5. Literal Translation of English Idioms</h2>
            <p>
              Translating English expressions word for word into Spanish produces sentences that are grammatically plausible but idiomatically wrong — sometimes amusingly so. Intermediate learners who think in English and translate as they speak are prone to this.
            </p>
            <div className="blog-example">
              <p className="es">Incorrect: Estoy tomando una ducha. (calque of "taking a shower")</p>
              <p className="es">Correct: Me estoy duchando. / Estoy duchándome.</p>
              <p className="es">Incorrect: Hacer sentido — this doesn't exist in Spanish.</p>
              <p className="es">Correct: Tener sentido. (This makes sense → Esto tiene sentido.)</p>
              <p className="es">Incorrect: Estoy de acuerdo con eso — actually this one is fine.</p>
            </div>
            <p>
              The solution is to learn Spanish idioms and collocations as fixed phrases rather than building them from translation. When you encounter a natural Spanish expression — how a native says something you'd expect to say differently — note it and use it. Gradually, these replace the translated versions.
            </p>

            <h2>6. Ignoring Subjunctive Triggers</h2>
            <p>
              The subjunctive is the structure most intermediate learners know they should use and don't, mainly because they haven't internalised the triggers — the specific verbs, conjunctions, and expressions that require it in the following clause.
            </p>
            <div className="blog-example">
              <p className="es">Incorrect: Quiero que tú vienes mañana.</p>
              <p className="es">Correct: Quiero que tú vengas mañana. — I want you to come tomorrow.</p>
              <p className="es">Incorrect: Es importante que estudias todos los días.</p>
              <p className="es">Correct: Es importante que estudies todos los días. — It's important that you study every day.</p>
              <p className="es">Incorrect: Cuando llego, te llamo.</p>
              <p className="es">Correct: Cuando llegue, te llamo. — When I arrive, I'll call you. (future event → subjunctive)</p>
            </div>
            <p>
              The most reliable way to improve here is to memorise the trigger categories: expressions of wanting/hoping/asking (<em>querer que, esperar que, pedir que</em>), impersonal expressions (<em>es necesario que, es posible que</em>), doubt and denial (<em>no creo que, dudo que</em>), and temporal conjunctions referring to future events (<em>cuando, en cuanto, hasta que</em>). Once you know the triggers, applying the subjunctive becomes more systematic.
            </p>

            <h2>7. Translating "I Like" as "Yo Gusto"</h2>
            <p>
              This is one of the most persistent beginner errors that carries into intermediate level. <em>Gustar</em> works backwards compared to English — the thing you like is the grammatical subject, and the person who likes it is the indirect object.
            </p>
            <div className="blog-example">
              <p className="es">Incorrect: Yo gusto el fútbol.</p>
              <p className="es">Correct: Me gusta el fútbol. — I like football. (Football pleases me.)</p>
              <p className="es">Incorrect: Ellos gustan las películas.</p>
              <p className="es">Correct: Les gustan las películas. — They like films. (Films please them.)</p>
            </div>
            <p>
              The verb agrees with what is liked (<em>gusta</em> for singular, <em>gustan</em> for plural), not with the person who likes it. The same structure applies to <em>encantar, molestar, parecer, doler, interesar, apetecer</em> and several other verbs. Learning them as a group makes the pattern easier to internalise.
            </p>

            <h2>8. Not Using Diminutives or Natural Fillers</h2>
            <p>
              This one is less about error and more about sounding natural. Intermediate learners often produce technically correct Spanish that sounds slightly robotic — because they're not using the small things that make speech feel real: diminutives, fillers, and hedging expressions.
            </p>
            <div className="blog-example">
              <p className="es">Diminutives: un momentito (just a moment), espera un segundito (wait just a second), es un poco pequeñito (it's a little small)</p>
              <p className="es">Fillers: o sea (like / I mean), es que (the thing is), a ver (let's see), bueno (well), pues (well / then)</p>
              <p className="es">Hedging: más o menos, no sé si..., depende, en plan...</p>
            </div>
            <p>
              These won't make or break comprehension, but they make the difference between Spanish that sounds like a textbook and Spanish that sounds like a person. Pick a few natural fillers and work them into your speech deliberately — they'll feel forced at first, then automatic within a few weeks.
            </p>

            <div className="blog-highlight">
              <p>The intermediate stage is where fossilised errors take root — mistakes you've been making long enough that they start to feel correct. The best time to address them is now, with deliberate awareness and targeted practice, before they become permanent habits.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want specific feedback on your Spanish errors?</h3>
              <p>One of the most valuable things a tutor can do is identify the patterns in your errors that you can't see yourself. Get in touch to start working on the things that are actually holding you back.</p>
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
