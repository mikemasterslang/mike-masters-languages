import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogColours() {
  useScrollAnimation();
  usePageMeta(
    'Colours in Spanish: A Complete Guide with Agreement Rules | Mike Masters Languages',
    'Learn all the colours in Spanish with their full agreement forms, invariable exceptions like rosa and naranja, and how to use colours in context with clothes and descriptions.'
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
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Colours in Spanish: A Complete Guide with Agreement Rules</h1>
          <p className="blog-hero-intro">
            Colours in Spanish are straightforward — but there are agreement rules to follow and a group of invariable colours that never change form. This guide covers everything.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Colours are one of the first vocabulary sets beginners learn — and they come up constantly when describing people, clothes and surroundings. The key grammar rule is that colour adjectives must agree in gender and number with the noun they describe. Most do — but a handful are invariable. Let's cover it all.</p>

            <h2>The Main Colours with Full Agreement Forms</h2>
            <p>These colours change ending to agree with the noun:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>English</th><th>Masc. Sing.</th><th>Fem. Sing.</th><th>Masc. Pl.</th><th>Fem. Pl.</th></tr></thead>
                <tbody>
                  <tr><td>red</td><td>rojo</td><td>roja</td><td>rojos</td><td>rojas</td></tr>
                  <tr><td>blue</td><td>azul</td><td>azul</td><td>azules</td><td>azules</td></tr>
                  <tr><td>yellow</td><td>amarillo</td><td>amarilla</td><td>amarillos</td><td>amarillas</td></tr>
                  <tr><td>green</td><td>verde</td><td>verde</td><td>verdes</td><td>verdes</td></tr>
                  <tr><td>white</td><td>blanco</td><td>blanca</td><td>blancos</td><td>blancas</td></tr>
                  <tr><td>black</td><td>negro</td><td>negra</td><td>negros</td><td>negras</td></tr>
                  <tr><td>grey</td><td>gris</td><td>gris</td><td>grises</td><td>grises</td></tr>
                  <tr><td>brown</td><td>marrón</td><td>marrón</td><td>marrones</td><td>marrones</td></tr>
                  <tr><td>purple</td><td>morado</td><td>morada</td><td>morados</td><td>moradas</td></tr>
                  <tr><td>violet / purple</td><td>violeta</td><td>violeta</td><td>violetas</td><td>violetas</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Azul and verde don't change for gender:</strong> These colours have the same form for masculine and feminine — only the plural adds <em>-es</em>. So it's <em>el coche azul</em> and <em>la casa azul</em> — no change needed for gender.</p>
            </div>

            <h2>Invariable Colours — The Exceptions</h2>
            <p>Some colours in Spanish are <strong>invariable</strong> — they never change form regardless of the gender or number of the noun. These are often borrowed from other languages or from nouns used as colour names:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Colour</th><th>Spanish</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>pink</td><td>rosa</td><td>la camiseta rosa / los zapatos rosa</td></tr>
                  <tr><td>orange</td><td>naranja</td><td>el bolso naranja / las paredes naranja</td></tr>
                  <tr><td>beige</td><td>beige</td><td>el sofá beige / las sillas beige</td></tr>
                  <tr><td>turquoise</td><td>turquesa</td><td>el mar turquesa / las toallas turquesa</td></tr>
                  <tr><td>navy (blue)</td><td>azul marino</td><td>el traje azul marino / las camisas azul marino</td></tr>
                  <tr><td>sky blue</td><td>azul cielo</td><td>el vestido azul cielo</td></tr>
                  <tr><td>cream</td><td>crema</td><td>las cortinas crema</td></tr>
                  <tr><td>burgundy</td><td>burdeos</td><td>el abrigo burdeos</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Lleva una falda rosa. — <span style={{fontWeight:400}}>She's wearing a pink skirt.</span></p>
              <p className="es">Lleva unos zapatos rosa. — <span style={{fontWeight:400}}>She's wearing pink shoes.</span> (rosa stays the same)</p>
              <p className="es">Quiero la bolsa naranja, no la verde. — <span style={{fontWeight:400}}>I want the orange bag, not the green one.</span></p>
            </div>

            <h2>Colours in Context — Describing Clothes</h2>
            <div className="blog-example">
              <p className="es">Lleva una camisa blanca y unos pantalones negros. — <span style={{fontWeight:400}}>He's wearing a white shirt and black trousers.</span></p>
              <p className="es">Me gusta ese vestido azul. — <span style={{fontWeight:400}}>I like that blue dress.</span></p>
              <p className="es">¿Tienes este jersey en rojo? — <span style={{fontWeight:400}}>Do you have this jumper in red?</span></p>
              <p className="es">Las paredes son de color crema. — <span style={{fontWeight:400}}>The walls are cream-coloured.</span></p>
              <p className="es">Tiene los ojos verdes y el pelo castaño. — <span style={{fontWeight:400}}>She has green eyes and brown hair.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Colour + de color:</strong> You can add <em>de color</em> before any colour: <em>un coche de color rojo</em>. This is especially common with invariable colours: <em>de color rosa, de color naranja</em>. It sounds very natural in everyday speech.</p>
            </div>

            <h2>Shades and Combinations</h2>
            <p>To describe shades, Spanish uses <em>claro</em> (light) and <em>oscuro</em> (dark) after the colour:</p>
            <div className="blog-example">
              <p className="es">azul claro — <span style={{fontWeight:400}}>light blue</span></p>
              <p className="es">verde oscuro — <span style={{fontWeight:400}}>dark green</span></p>
              <p className="es">gris claro — <span style={{fontWeight:400}}>light grey</span></p>
              <p className="es">rojo oscuro — <span style={{fontWeight:400}}>dark red</span></p>
            </div>
            <p>Note that <em>claro</em> and <em>oscuro</em> are invariable in this position — <em>una falda azul claro</em>, not <em>azul clara</em>.</p>

            <h2>Describing Hair and Eye Colour</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>rubio / rubia</td><td>blonde</td></tr>
                  <tr><td>moreno / morena</td><td>dark-haired / dark-skinned</td></tr>
                  <tr><td>castaño / castaña</td><td>brown / chestnut (hair)</td></tr>
                  <tr><td>pelirrojo / pelirroja</td><td>red-haired</td></tr>
                  <tr><td>canoso / canosa</td><td>grey-haired</td></tr>
                  <tr><td>azules</td><td>blue (eyes)</td></tr>
                  <tr><td>marrones</td><td>brown (eyes)</td></tr>
                  <tr><td>verdes</td><td>green (eyes)</td></tr>
                  <tr><td>grises</td><td>grey (eyes)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Most colours agree in gender and number — but the key exceptions (rosa, naranja, beige) are invariable and very common. Learn those exceptions early and you'll avoid one of the most frequent beginner slips when talking about clothes and descriptions.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to describe the world around you in Spanish?</h3>
              <p>Colours, descriptions, clothes — these topics connect to so much everyday vocabulary. Let's practise them in real context together.</p>
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
