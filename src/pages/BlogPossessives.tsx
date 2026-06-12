import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPossessives() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Possessives: Mi, Tu, Su and the Long Forms | Mike Masters Languages',
    'Learn how Spanish possessives work — short forms like mi and tu, long forms like mío and tuyo, and when to use each. Includes tips on su ambiguity and body parts.'
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
          <h1>Spanish Possessives: Mi, Tu, Su and the Long Forms</h1>
          <p className="blog-hero-intro">Possession in Spanish has two sets of forms — short and long. Here's how each works and when to use them.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>In English, possessives are simple: my, your, his, her, its, our, their. Spanish has all of these too — but it has them twice. There's a short set that goes before the noun, and a long set that goes after it or stands alone. Understanding both sets, and knowing when to use each, is a key step in sounding natural in Spanish.</p>

            <h2>The Short Possessives (Unstressed Forms)</h2>
            <p>These are the forms you'll use most often. They come directly before the noun they describe, and they agree with the noun in number — and in the case of nuestro and vuestro, in gender too.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Singular noun</th>
                  <th>Plural noun</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I</td><td>mi</td><td>mis</td></tr>
                <tr><td>You (informal)</td><td>tu</td><td>tus</td></tr>
                <tr><td>He / She / You (formal) / It</td><td>su</td><td>sus</td></tr>
                <tr><td>We</td><td>nuestro / nuestra</td><td>nuestros / nuestras</td></tr>
                <tr><td>You all (Spain informal)</td><td>vuestro / vuestra</td><td>vuestros / vuestras</td></tr>
                <tr><td>They / You all</td><td>su</td><td>sus</td></tr>
              </tbody>
            </table>

            <p>Notice that mi and tu have no accent mark — unlike the pronouns mí (me) and tú (you), which do. This is a common source of spelling errors for beginners.</p>

            <div className="blog-highlight">
              <p>Possessives in Spanish agree with the thing owned, not the owner. Mi hermano and mi hermana both use mi — it doesn't change because the owner is female.</p>
            </div>

            <div className="blog-example">
              <p className="es">Tengo mi libro y mis apuntes. — <span style={{fontWeight: 400}}>I have my book and my notes.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Nuestra casa es pequeña pero cómoda. — <span style={{fontWeight: 400}}>Our house is small but comfortable.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Vuestros amigos llegan mañana. — <span style={{fontWeight: 400}}>Your friends arrive tomorrow.</span></p>
            </div>

            <h2>The Long Possessives (Stressed Forms)</h2>
            <p>The long forms are used when you want to emphasise ownership, when the possessive comes after a noun, or when it stands alone without a noun. They agree with the noun in both number and gender.</p>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Masc. sg.</th>
                  <th>Fem. sg.</th>
                  <th>Masc. pl.</th>
                  <th>Fem. pl.</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I</td><td>mío</td><td>mía</td><td>míos</td><td>mías</td></tr>
                <tr><td>You (informal)</td><td>tuyo</td><td>tuya</td><td>tuyos</td><td>tuyas</td></tr>
                <tr><td>He / She / You (formal)</td><td>suyo</td><td>suya</td><td>suyos</td><td>suyas</td></tr>
                <tr><td>We</td><td>nuestro</td><td>nuestra</td><td>nuestros</td><td>nuestras</td></tr>
                <tr><td>You all (Spain)</td><td>vuestro</td><td>vuestra</td><td>vuestros</td><td>vuestras</td></tr>
                <tr><td>They / You all</td><td>suyo</td><td>suya</td><td>suyos</td><td>suyas</td></tr>
              </tbody>
            </table>

            <div className="blog-example">
              <p className="es">Ese coche es mío. — <span style={{fontWeight: 400}}>That car is mine.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Un amigo mío vive en Madrid. — <span style={{fontWeight: 400}}>A friend of mine lives in Madrid.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">¿Es tuya esta chaqueta? — <span style={{fontWeight: 400}}>Is this jacket yours?</span></p>
            </div>

            <p>The long forms can also be used with a definite article to replace the noun entirely — similar to "mine" or "yours" in English.</p>

            <div className="blog-example">
              <p className="es">Mi coche es rojo, pero el tuyo es azul. — <span style={{fontWeight: 400}}>My car is red, but yours is blue.</span></p>
            </div>

            <h2>The Problem with Su and Sus</h2>
            <p>Su is arguably the trickiest word in Spanish possessives. It can mean his, her, its, your (formal), their, or your (plural) — all in one little word. In most situations, context makes the meaning clear. But when there's genuine ambiguity, Spanish speakers use a workaround.</p>

            <div className="blog-highlight">
              <p>To clarify su, replace it with: el/la/los/las + noun + de + pronoun.<br/>Su coche → el coche de él (his car) / el coche de ella (her car) / el coche de usted (your car)</p>
            </div>

            <div className="blog-example">
              <p className="es">El coche de ellos es nuevo. — <span style={{fontWeight: 400}}>Their car is new. (clarifying "their" rather than "his/her")</span></p>
            </div>

            <h2>Possessives with Body Parts</h2>
            <p>One area where Spanish consistently surprises English speakers is body parts. Where English says "I washed my hands," Spanish typically avoids the possessive altogether and uses the definite article instead — because context already makes it clear whose hands they are.</p>

            <div className="blog-example">
              <p className="es">Me lavé las manos. — <span style={{fontWeight: 400}}>I washed my hands. (literally: I washed myself the hands)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Le duele la cabeza. — <span style={{fontWeight: 400}}>His/her head hurts. (literally: the head hurts him/her)</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Ponte los zapatos. — <span style={{fontWeight: 400}}>Put your shoes on.</span></p>
            </div>

            <p>Using a possessive with body parts isn't always wrong — it can add emphasis — but the article construction is far more natural in everyday speech.</p>

            <div className="blog-highlight">
              <p>Key summary: Short possessives go before the noun. Long possessives go after, or stand alone. Both agree with the noun, not the owner. And with body parts, use the definite article instead.</p>
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
