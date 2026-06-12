import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogNatureVocab() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Nature and Landscape Vocabulary | Mike Masters Languages',
    'Learn Spanish vocabulary for landscapes, weather, animals, plants and the environment — essential words for describing the natural world in Spain.'
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
          <h1>Spanish Nature and Landscape Vocabulary</h1>
          <p className="blog-hero-intro">
            Spain has extraordinary landscapes — and the vocabulary to describe them is both beautiful and useful.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>From the snow-capped peaks of the Pyrenees to the sun-baked plains of Castile, the rugged coastline of Galicia to the volcanic landscapes of the Canary Islands, Spain offers an extraordinary variety of natural scenery. Whether you're hiking, travelling, watching wildlife or simply describing what you see, a solid nature vocabulary will serve you constantly. This guide covers landscapes, weather, animals, plants and the environment — along with useful phrases for putting it all together.</p>

            <h2>Landscape Vocabulary (El Paisaje)</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la montaña</td><td>mountain</td></tr>
                  <tr><td>el valle</td><td>valley</td></tr>
                  <tr><td>el río</td><td>river</td></tr>
                  <tr><td>el lago</td><td>lake</td></tr>
                  <tr><td>el mar</td><td>sea</td></tr>
                  <tr><td>el océano</td><td>ocean</td></tr>
                  <tr><td>la playa</td><td>beach</td></tr>
                  <tr><td>el bosque</td><td>forest / wood</td></tr>
                  <tr><td>el campo</td><td>countryside / field</td></tr>
                  <tr><td>el desierto</td><td>desert</td></tr>
                  <tr><td>la isla</td><td>island</td></tr>
                  <tr><td>la costa</td><td>coast</td></tr>
                  <tr><td>la colina</td><td>hill</td></tr>
                  <tr><td>la llanura</td><td>plain / flatlands</td></tr>
                  <tr><td>el acantilado</td><td>cliff</td></tr>
                  <tr><td>la cueva</td><td>cave</td></tr>
                  <tr><td>el volcán</td><td>volcano</td></tr>
                  <tr><td>la cascada</td><td>waterfall</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Describing Landscapes</h2>
            <div className="blog-example">
              <p className="es">El paisaje es impresionante. — <span style={{fontWeight: 400}}>The landscape is stunning.</span></p>
              <p className="es">Hay montañas nevadas al fondo. — <span style={{fontWeight: 400}}>There are snow-capped mountains in the background.</span></p>
              <p className="es">El río pasa por el valle. — <span style={{fontWeight: 400}}>The river runs through the valley.</span></p>
              <p className="es">La costa es muy rocosa aquí. — <span style={{fontWeight: 400}}>The coastline is very rocky here.</span></p>
              <p className="es">El campo es muy verde en primavera. — <span style={{fontWeight: 400}}>The countryside is very green in spring.</span></p>
            </div>

            <h2>Weather Vocabulary (El Tiempo)</h2>
            <p>Weather and landscape go hand in hand. Here are the core weather words along with useful expressions for describing conditions:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el sol</td><td>sun</td></tr>
                  <tr><td>la lluvia</td><td>rain</td></tr>
                  <tr><td>el viento</td><td>wind</td></tr>
                  <tr><td>la nieve</td><td>snow</td></tr>
                  <tr><td>la tormenta</td><td>storm</td></tr>
                  <tr><td>la niebla</td><td>fog / mist</td></tr>
                  <tr><td>la nube</td><td>cloud</td></tr>
                  <tr><td>el granizo</td><td>hail</td></tr>
                  <tr><td>el rayo / el trueno</td><td>lightning / thunder</td></tr>
                  <tr><td>la brisa</td><td>breeze</td></tr>
                  <tr><td>la sequía</td><td>drought</td></tr>
                  <tr><td>la inundación</td><td>flood</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Hace mucho sol hoy. — <span style={{fontWeight: 400}}>It's very sunny today.</span></p>
              <p className="es">Hay niebla en las montañas. — <span style={{fontWeight: 400}}>There's mist in the mountains.</span></p>
              <p className="es">Esta tarde puede caer una tormenta. — <span style={{fontWeight: 400}}>There could be a storm this afternoon.</span></p>
              <p className="es">El viento es muy fuerte en la costa. — <span style={{fontWeight: 400}}>The wind is very strong on the coast.</span></p>
            </div>

            <h2>Animals (Los Animales)</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el perro</td><td>dog</td></tr>
                  <tr><td>el gato</td><td>cat</td></tr>
                  <tr><td>el caballo</td><td>horse</td></tr>
                  <tr><td>la vaca</td><td>cow</td></tr>
                  <tr><td>el cerdo</td><td>pig</td></tr>
                  <tr><td>el pájaro</td><td>bird</td></tr>
                  <tr><td>el pez</td><td>fish (in water)</td></tr>
                  <tr><td>la serpiente</td><td>snake</td></tr>
                  <tr><td>el oso</td><td>bear</td></tr>
                  <tr><td>el lobo</td><td>wolf</td></tr>
                  <tr><td>el toro</td><td>bull</td></tr>
                  <tr><td>el águila</td><td>eagle</td></tr>
                  <tr><td>la mariposa</td><td>butterfly</td></tr>
                  <tr><td>el jabalí</td><td>wild boar</td></tr>
                  <tr><td>el lince</td><td>lynx (native to Spain)</td></tr>
                  <tr><td>la cigüeña</td><td>stork</td></tr>
                  <tr><td>el delfín</td><td>dolphin</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>El águila is feminine</strong> despite using <em>el</em> as its article. This happens with feminine nouns that begin with a stressed <em>a-</em> sound — the article changes to avoid two vowel sounds clashing. So: <em>el águila</em> (the eagle) but <em>las águilas</em> (the eagles).</p>
            </div>

            <h2>Plants and Vegetation (Las Plantas)</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el árbol</td><td>tree</td></tr>
                  <tr><td>la flor</td><td>flower</td></tr>
                  <tr><td>la hierba</td><td>grass / herb</td></tr>
                  <tr><td>la palmera</td><td>palm tree</td></tr>
                  <tr><td>el olivo</td><td>olive tree</td></tr>
                  <tr><td>el pino</td><td>pine tree</td></tr>
                  <tr><td>la encina</td><td>holm oak (iconic Spanish tree)</td></tr>
                  <tr><td>el roble</td><td>oak tree</td></tr>
                  <tr><td>el arbusto</td><td>bush / shrub</td></tr>
                  <tr><td>el jardín</td><td>garden</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Environmental Vocabulary (El Medio Ambiente)</h2>
            <p>Environmental topics come up increasingly in conversation, news and everyday life. Here are the key words:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el medio ambiente</td><td>the environment</td></tr>
                  <tr><td>la naturaleza</td><td>nature</td></tr>
                  <tr><td>la contaminación</td><td>pollution</td></tr>
                  <tr><td>el reciclaje</td><td>recycling</td></tr>
                  <tr><td>reciclar</td><td>to recycle</td></tr>
                  <tr><td>el cambio climático</td><td>climate change</td></tr>
                  <tr><td>las energías renovables</td><td>renewable energy</td></tr>
                  <tr><td>el calentamiento global</td><td>global warming</td></tr>
                  <tr><td>proteger</td><td>to protect</td></tr>
                  <tr><td>en peligro de extinción</td><td>endangered</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-highlight">
              <p>Spain's natural landscapes are among the most diverse in Europe — from deserts to snow-capped mountains, from Atlantic rainforest to Mediterranean scrubland. Learning this vocabulary doesn't just help you describe what you see; it opens up conversations about geography, travel, wildlife and the environment that any Spanish speaker will love to have.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Explore Spain through its language</h3>
              <p>Nature vocabulary connects beautifully with travel, culture and conversation. Let's build your vocabulary in a way that's relevant to your life and interests.</p>
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
