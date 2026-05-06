import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogNounGender() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Noun Gender Explained: Is It El or La? | Mike Masters Languages',
    'Every Spanish noun is masculine or feminine — but how do you know which? Learn the rules, patterns and exceptions that help you get Spanish noun gender right.'
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
          <h1>Spanish Noun Gender Explained: Is It El or La?</h1>
          <p className="blog-hero-intro">
            Every noun in Spanish is either masculine or feminine. Here's how to work out which — and why it matters more than you might think.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              If you've just started learning Spanish, you've probably already noticed that words come with <em>el</em> or <em>la</em> in front of them. Every single noun in Spanish is either <strong>masculine</strong> or <strong>feminine</strong> — there's no neutral, unlike in German or Latin. For English speakers this can feel strange at first, because English lost grammatical gender centuries ago.
            </p>
            <p>
              But here's the thing: once you understand the patterns, you can make an educated guess about most nouns you've never seen before — and get it right the majority of the time.
            </p>

            <h2>Why Does It Matter?</h2>
            <p>
              Gender isn't just a label — it affects the words around the noun. Articles, adjectives, and some pronouns all change to <strong>agree</strong> with the gender of the noun they relate to. Get the gender wrong and the whole sentence sounds off to a native speaker.
            </p>
            <div className="blog-example">
              <p className="es">El libro rojo — <span style={{fontWeight: 400}}>the red book (masculine)</span></p>
              <p className="es">La casa roja — <span style={{fontWeight: 400}}>the red house (feminine)</span></p>
            </div>
            <p>
              Both sentences use "rojo/roja" (red) — but the adjective changes its ending to match the noun. This is gender agreement in action.
            </p>

            <h2>The Main Patterns</h2>
            <p>The good news is that Spanish noun endings are a reliable guide most of the time.</p>

            <h3>Nouns ending in -o are usually masculine</h3>
            <div className="blog-example">
              <p className="es">el libro (book) &nbsp;·&nbsp; el perro (dog) &nbsp;·&nbsp; el vino (wine) &nbsp;·&nbsp; el tiempo (time / weather)</p>
            </div>

            <h3>Nouns ending in -a are usually feminine</h3>
            <div className="blog-example">
              <p className="es">la casa (house) &nbsp;·&nbsp; la mesa (table) &nbsp;·&nbsp; la cerveza (beer) &nbsp;·&nbsp; la semana (week)</p>
            </div>

            <h3>Feminine endings to recognise</h3>
            <p>These endings are almost always feminine:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Ending</th><th>Examples</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>-ción / -sión</strong></td><td>la nación, la decisión, la televisión</td></tr>
                  <tr><td><strong>-dad / -tad</strong></td><td>la ciudad (city), la libertad (freedom), la verdad (truth)</td></tr>
                  <tr><td><strong>-ez</strong></td><td>la vejez (old age), la timidez (shyness)</td></tr>
                  <tr><td><strong>-umbre</strong></td><td>la costumbre (habit), la cumbre (summit)</td></tr>
                  <tr><td><strong>-ura</strong></td><td>la temperatura, la figura, la cultura</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Masculine endings to recognise</h3>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Ending</th><th>Examples</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>-aje</strong></td><td>el viaje (journey), el garaje, el paisaje (landscape)</td></tr>
                  <tr><td><strong>-or</strong></td><td>el amor (love), el calor (heat), el color</td></tr>
                  <tr><td><strong>-ma (Greek origin)</strong></td><td>el problema, el programa, el idioma, el sistema, el tema</td></tr>
                  <tr><td><strong>Days / months</strong></td><td>el lunes, el martes, el enero, el febrero</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Worth knowing:</strong> Nouns ending in <strong>-ma</strong> that come from Greek are masculine, even though they end in -a. This catches almost every beginner out. El problema, el programa, el idioma — learn these as a group.</p>
            </div>

            <h2>Important Exceptions</h2>
            <p>
              The -o/-a rule is reliable, but there are exceptions you'll come across regularly. These are worth learning by heart:
            </p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Word</th><th>Meaning</th><th>Why it surprises</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>la mano</strong></td><td>the hand</td><td>Ends in -o but is feminine</td></tr>
                  <tr><td><strong>el día</strong></td><td>the day</td><td>Ends in -a but is masculine</td></tr>
                  <tr><td><strong>el mapa</strong></td><td>the map</td><td>Ends in -a but is masculine</td></tr>
                  <tr><td><strong>la foto</strong></td><td>the photo</td><td>Short for fotografía — feminine</td></tr>
                  <tr><td><strong>la moto</strong></td><td>the motorbike</td><td>Short for motocicleta — feminine</td></tr>
                  <tr><td><strong>el agua</strong></td><td>the water</td><td>Feminine noun, but uses el to avoid vowel clash</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              <em>El agua</em> is a special case worth explaining: it's actually a feminine noun, but because it starts with a stressed "a" sound, Spanish uses <em>el</em> to avoid the awkward sound of "la agua". Once you're using adjectives, the feminine agreement comes back: <em>el agua fría</em> (the cold water).
            </p>

            <h2>People and Animals: Natural Gender</h2>
            <p>
              For people and many animals, the gender of the noun reflects the biological sex of the individual:
            </p>
            <div className="blog-example">
              <p className="es">el chico / la chica — boy / girl</p>
              <p className="es">el médico / la médica — male / female doctor</p>
              <p className="es">el gato / la gata — male / female cat</p>
              <p className="es">el perro / la perra — male / female dog</p>
            </div>

            <h2>The Single Best Habit for Getting Gender Right</h2>
            <div className="blog-highlight">
              <p>Never learn a noun without its article. Don't memorise "libro" — memorise "<strong>el libro</strong>". Don't learn "casa" — learn "<strong>la casa</strong>". If you always learn words this way from the beginning, gender becomes automatic. Going back to add it later is much harder.</p>
            </div>
            <p>
              This is exactly what native speakers do from childhood — they don't think about whether a word is masculine or feminine, they just hear it used with the right article thousands of times until it sounds natural. You can replicate that process deliberately.
            </p>

            <h2>Gender Agreement: The Bigger Picture</h2>
            <p>Once you know a noun's gender, you need to make adjectives and articles agree with it. This applies to:</p>
            <ul>
              <li>Definite articles: <strong>el / la</strong> (the) — <strong>los / las</strong> (plural)</li>
              <li>Indefinite articles: <strong>un / una</strong> (a/an)</li>
              <li>Adjectives: <strong>grande, rojo/roja, bonito/bonita</strong></li>
              <li>Demonstratives: <strong>este / esta</strong> (this), <strong>ese / esa</strong> (that)</li>
              <li>Possessives: <strong>mi, tu, su</strong> don't change, but <strong>nuestro/nuestra</strong> does</li>
            </ul>
            <div className="blog-example">
              <p className="es wrong">✗ el casa grande</p>
              <p className="es right">✓ la casa grande — the big house</p>
              <p className="es right">✓ el libro grande — the big book</p>
            </div>

            <div className="blog-author-cta">
              <h3>Struggling with Spanish grammar?</h3>
              <p>Getting the fundamentals right from the start makes everything easier. Let's find the right approach for you.</p>
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
