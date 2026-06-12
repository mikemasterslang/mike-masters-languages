import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogIdioms() {
  useScrollAnimation();
  usePageMeta(
    'Common Spanish Idioms Every Beginner Should Know | Mike Masters Languages',
    'Learn 15+ essential Spanish idioms with clear explanations and example sentences — the expressions native speakers use every day that no dictionary can fully explain.'
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
          <h1>Common Spanish Idioms Every Beginner Should Know</h1>
          <p className="blog-hero-intro">
            Native speakers are full of expressions that no dictionary can fully explain. These are the ones you'll hear most and need to understand.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Idioms (<em>modismos</em> or <em>expresiones idiomáticas</em>) are the expressions that make a language feel alive. You can have excellent grammar and a wide vocabulary, but when a native speaker says <em>estás en las nubes</em>, it helps to know they're telling you you're daydreaming — not that you're literally up in the clouds. This guide covers the most common and useful Spanish idioms, with clear explanations and real example sentences so you can start using them straight away.</p>

            <h2>Everyday Idioms</h2>

            <h3>No hay mal que por bien no venga</h3>
            <p>Literally "there is no bad thing from which something good doesn't come." The Spanish equivalent of "every cloud has a silver lining." Use it to console someone or see the positive in a difficult situation.</p>
            <div className="blog-example">
              <p className="es">Perdí el trabajo, pero encontré uno mejor. No hay mal que por bien no venga. — <span style={{fontWeight: 400}}>I lost my job, but I found a better one. Every cloud has a silver lining.</span></p>
            </div>

            <h3>Estar en las nubes</h3>
            <p>Literally "to be in the clouds." Means to be daydreaming, distracted or not paying attention. Very common in everyday speech.</p>
            <div className="blog-example">
              <p className="es">¡Oye! ¡Estás en las nubes! Te he preguntado tres veces. — <span style={{fontWeight: 400}}>Hey! You're miles away! I've asked you three times.</span></p>
            </div>

            <h3>Costar un ojo de la cara</h3>
            <p>Literally "to cost an eye from your face." Means something is extremely expensive — the Spanish equivalent of "to cost an arm and a leg." A very useful and frequently heard expression.</p>
            <div className="blog-example">
              <p className="es">Ese restaurante es buenísimo, pero cuesta un ojo de la cara. — <span style={{fontWeight: 400}}>That restaurant is excellent, but it costs a fortune.</span></p>
            </div>

            <h3>Tener mala leche</h3>
            <p>Literally "to have bad milk." Means to be in a bad mood, be bad-tempered, or have a nasty character. Slightly informal but very common in Spain. <em>¡Qué mala leche!</em> can also express frustration ("what rotten luck!").</p>
            <div className="blog-example">
              <p className="es">Hoy tiene muy mala leche — mejor no hablarle. — <span style={{fontWeight: 400}}>He's in a foul mood today — better not to talk to him.</span></p>
            </div>

            <h3>Ponerse las pilas</h3>
            <p>Literally "to put in the batteries." Means to get your act together, pull your socks up or start making an effort. Often used as friendly encouragement or mild reproach.</p>
            <div className="blog-example">
              <p className="es">Tienes un examen la semana que viene — ¡ponte las pilas! — <span style={{fontWeight: 400}}>You have an exam next week — get your act together!</span></p>
            </div>

            <h3>Dar en el clavo</h3>
            <p>Literally "to hit the nail (on the head)." Means to get something exactly right or to hit the nail on the head — identical in meaning to the English idiom.</p>
            <div className="blog-example">
              <p className="es">Has dado en el clavo — eso es exactamente el problema. — <span style={{fontWeight: 400}}>You've hit the nail on the head — that's exactly the problem.</span></p>
            </div>

            <h3>No tener pelos en la lengua</h3>
            <p>Literally "to have no hairs on your tongue." Means to be very direct, outspoken or blunt — not afraid to say exactly what you think. Used as either a compliment or a mild criticism depending on context.</p>
            <div className="blog-example">
              <p className="es">Mi abuela no tiene pelos en la lengua — dice lo que piensa siempre. — <span style={{fontWeight: 400}}>My grandmother is very outspoken — she always says what she thinks.</span></p>
            </div>

            <h3>Ser pan comido</h3>
            <p>Literally "to be eaten bread." Means something is very easy — the equivalent of "a piece of cake" or "a doddle." A great idiom to use when reassuring someone.</p>
            <div className="blog-example">
              <p className="es">¿Te preocupa el examen? ¡Es pan comido! — <span style={{fontWeight: 400}}>Are you worried about the exam? It's a piece of cake!</span></p>
            </div>

            <h3>Meter la pata</h3>
            <p>Literally "to put the paw in it." Means to put your foot in it — to make an embarrassing blunder or say the wrong thing. You'll hear this a lot in conversational Spanish.</p>
            <div className="blog-example">
              <p className="es">Metí la pata al preguntarle por su exmarido. — <span style={{fontWeight: 400}}>I put my foot in it by asking about her ex-husband.</span></p>
            </div>

            <h3>Hacer la vista gorda</h3>
            <p>Literally "to do the fat look." Means to turn a blind eye, to deliberately ignore something you've noticed. Used when someone chooses not to get involved or make an issue of something.</p>
            <div className="blog-example">
              <p className="es">El jefe hizo la vista gorda cuando llegamos tarde. — <span style={{fontWeight: 400}}>The boss turned a blind eye when we arrived late.</span></p>
            </div>

            <h3>Echar una mano</h3>
            <p>Literally "to throw a hand." Means to lend a hand or give someone help. Very common and natural — one of the most useful idioms in everyday Spanish.</p>
            <div className="blog-example">
              <p className="es">¿Me puedes echar una mano con las maletas? — <span style={{fontWeight: 400}}>Can you give me a hand with the suitcases?</span></p>
            </div>

            <h3>No pegar ojo</h3>
            <p>Literally "not to glue an eye." Means to not sleep a wink — to have a sleepless night. The image is of not being able to close your eyelids.</p>
            <div className="blog-example">
              <p className="es">Con tanto ruido anoche no pegué ojo. — <span style={{fontWeight: 400}}>With all that noise last night I didn't sleep a wink.</span></p>
            </div>

            <h3>Estar hasta las narices</h3>
            <p>Literally "to be up to the nostrils." Means to be fed up, to have had enough of something. A strong but very common expression of exasperation.</p>
            <div className="blog-example">
              <p className="es">Estoy hasta las narices de trabajar los fines de semana. — <span style={{fontWeight: 400}}>I'm completely fed up with working at weekends.</span></p>
            </div>

            <h3>Tener buena / mala pinta</h3>
            <p>Literally "to have a good / bad look/appearance." Means something looks good or bad — whether food, a plan, the weather or a situation. Extremely common in everyday speech.</p>
            <div className="blog-example">
              <p className="es">Ese pastel tiene muy buena pinta. — <span style={{fontWeight: 400}}>That cake looks really good.</span></p>
              <p className="es">El tiempo tiene mala pinta para el fin de semana. — <span style={{fontWeight: 400}}>The weather looks bad for the weekend.</span></p>
            </div>

            <h3>Matar dos pájaros de un tiro</h3>
            <p>Literally "to kill two birds with one shot." Identical in meaning to the English "kill two birds with one stone" — to solve two problems with one action. One of the most satisfying idioms to use because it maps so directly onto the English equivalent.</p>
            <div className="blog-example">
              <p className="es">Voy al supermercado y paso por el banco — mato dos pájaros de un tiro. — <span style={{fontWeight: 400}}>I'll go to the supermarket and stop by the bank — kill two birds with one stone.</span></p>
            </div>

            <h3>A buenas horas, mangas verdes</h3>
            <p>Literally "at a good hour, green sleeves." This colourful idiom — referring to historical tax collectors in green uniform who always arrived too late — means "better late than never" but with an ironic, sarcastic tone. Use it when help or a solution arrives too late to be useful.</p>
            <div className="blog-example">
              <p className="es">Llegaste cuando ya habíamos terminado todo. ¡A buenas horas, mangas verdes! — <span style={{fontWeight: 400}}>You arrived when we'd already finished everything. Better late than never — not!</span></p>
            </div>

            <div className="blog-highlight">
              <p>The best way to learn idioms is in context. When you hear one in a film, podcast or conversation, note it down with the sentence you heard it in. That way you absorb not just the meaning but the situations in which it's used naturally — which is what makes the difference between knowing an idiom and actually using it.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Sound like a native speaker</h3>
              <p>Idioms are what separate textbook Spanish from real Spanish. Let's work on them together — and make sure you're using them at the right moment.</p>
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
