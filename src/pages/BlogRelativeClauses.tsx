import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogRelativeClauses() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Relative Clauses: Que, Quien, Lo Que and El Que Explained | Mike Masters Languages',
    'Relative clauses connect ideas and make your Spanish much more expressive. This guide explains que, quien, lo que and el que — with clear rules for when to use each one.'
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
          <h1>Spanish Relative Clauses: Que, Quien, Lo Que and El Que</h1>
          <p className="blog-hero-intro">
            "The book that I'm reading", "the person who called" — relative clauses let you build more complex sentences. Here's how they work in Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Relative clauses are the structures that connect a main clause to a description of a noun — "the man <em>who</em> lives next door", "the book <em>that</em> I'm reading", "the reason <em>why</em> I came." In Spanish they're essential for expressing yourself beyond simple sentences, and the rules are more consistent than in English.</p>

            <h2>Que — The Workhorse Relative Pronoun</h2>
            <p><em>Que</em> (that / which / who) is by far the most common relative pronoun in Spanish. Unlike English, it cannot be omitted:</p>

            <div className="blog-example">
              <p className="es">El libro <strong>que</strong> estoy leyendo es muy interesante. — <span style={{fontWeight:400}}>The book (that) I'm reading is very interesting.</span></p>
              <p className="es">La chica <strong>que</strong> habla español es mi amiga. — <span style={{fontWeight:400}}>The girl who speaks Spanish is my friend.</span></p>
              <p className="es">El restaurante <strong>que</strong> recomiendo está en el centro. — <span style={{fontWeight:400}}>The restaurant (that) I recommend is in the centre.</span></p>
            </div>

            <p><em>Que</em> is used for both people and things, in both subject and object positions. In English, we can say "the book I'm reading" (dropping "that") — in Spanish, <em>que</em> is always required.</p>

            <h2>Quien / Quienes — For People (After Prepositions)</h2>
            <p><em>Quien</em> (singular) and <em>quienes</em> (plural) refer only to people. They are used mainly after prepositions:</p>

            <div className="blog-example">
              <p className="es">La persona con <strong>quien</strong> hablé es muy interesante. — <span style={{fontWeight:400}}>The person with whom I spoke is very interesting.</span></p>
              <p className="es">Los estudiantes a <strong>quienes</strong> enseño son muy trabajadores. — <span style={{fontWeight:400}}>The students whom I teach are very hardworking.</span></p>
            </div>

            <p>In informal speech, <em>que</em> with the preposition is often used instead: <em>la persona con la que hablé</em>.</p>

            <h2>Lo Que — What / The Thing That</h2>
            <p><em>Lo que</em> refers to a concept, situation or idea rather than a specific noun — it means "what" in the sense of "the thing that":</p>

            <div className="blog-example">
              <p className="es"><strong>Lo que</strong> me gusta de España es la comida. — <span style={{fontWeight:400}}>What I like about Spain is the food.</span></p>
              <p className="es">No entiendo <strong>lo que</strong> dices. — <span style={{fontWeight:400}}>I don't understand what you're saying.</span></p>
              <p className="es">Haz <strong>lo que</strong> quieras. — <span style={{fontWeight:400}}>Do what(ever) you want.</span></p>
            </div>

            <h2>El Que / La Que / Los Que / Las Que — The One(s) Who/Which</h2>
            <p>These forms agree with the noun they refer to and are used after prepositions or to single out one from a group:</p>

            <div className="blog-example">
              <p className="es"><strong>El que</strong> más habla suele saber menos. — <span style={{fontWeight:400}}>The one who talks the most usually knows the least.</span></p>
              <p className="es">La ciudad en <strong>la que</strong> nací se llama Sevilla. — <span style={{fontWeight:400}}>The city in which I was born is called Seville.</span></p>
              <p className="es"><strong>Los que</strong> llegaron tarde no pudieron entrar. — <span style={{fontWeight:400}}>Those who arrived late couldn't get in.</span></p>
            </div>

            <h2>Cuyo — Whose (Advanced)</h2>
            <p><em>Cuyo/a/os/as</em> means "whose" and agrees with the noun that follows it (not the owner). It's used in formal writing:</p>
            <div className="blog-example">
              <p className="es">Es el autor <strong>cuya</strong> novela ganó el premio. — <span style={{fontWeight:400}}>He's the author whose novel won the prize.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Start with que.</strong> In most everyday situations — whether you're talking about a person or a thing — <em>que</em> will work. Add the other relative pronouns gradually as you encounter them in real Spanish.</p>
            </div>

            <div className="blog-highlight">
              <p>Relative clauses are what allow you to move from simple, choppy sentences to flowing, natural Spanish. Mastering even just <em>que</em> and <em>lo que</em> immediately expands your ability to express nuanced ideas.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to express yourself with more sophistication in Spanish?</h3>
              <p>Relative clauses are a key step towards sounding fluent. Let's build your sentence structure together.</p>
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
