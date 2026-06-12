import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogPrepositionsPlace() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Prepositions of Place: Encima, Debajo, Delante and More | Mike Masters Languages',
    'A complete guide to Spanish prepositions of place — encima de, debajo de, delante de, detrás de, al lado de and more, with real example sentences.'
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
          <h1>Spanish Prepositions of Place: Encima, Debajo, Delante and More</h1>
          <p className="blog-hero-intro">Describing where things are is one of the first things beginners need — here's all the spatial vocabulary in one place.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Whether you're giving directions, describing a room, or following instructions, prepositions of place are essential from day one. Spanish spatial vocabulary is rich — there are specific phrases for above, below, in front, behind, beside, inside, outside, and more. Most of these phrases end in de, which means they're followed by a noun (or article + noun). Let's go through them all with real examples.</p>

            <h2>The Basics: En, A and De</h2>
            <p>Before getting into compound prepositions, it's worth noting the three most basic spatial prepositions. En is the workhorse for location — it covers "in," "on," and "at" depending on context.</p>

            <div className="blog-example">
              <p className="es">El libro está en la mesa. — <span style={{fontWeight: 400}}>The book is on the table.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Vivo en Madrid. — <span style={{fontWeight: 400}}>I live in Madrid.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Está en la esquina. — <span style={{fontWeight: 400}}>It's on the corner.</span></p>
            </div>

            <h2>Above and Below</h2>

            <div className="blog-example">
              <p className="es">El cuadro está encima de la chimenea. — <span style={{fontWeight: 400}}>The painting is above the fireplace.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">El gato está debajo de la cama. — <span style={{fontWeight: 400}}>The cat is under the bed.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hay una tienda encima de la farmacia. — <span style={{fontWeight: 400}}>There's a shop above the pharmacy.</span></p>
            </div>

            <h2>In Front and Behind</h2>

            <div className="blog-example">
              <p className="es">El coche está delante de la casa. — <span style={{fontWeight: 400}}>The car is in front of the house.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">El jardín está detrás del edificio. — <span style={{fontWeight: 400}}>The garden is behind the building.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Me senté delante de ella en el cine. — <span style={{fontWeight: 400}}>I sat in front of her at the cinema.</span></p>
            </div>

            <p>Note: enfrente de means "opposite" or "facing" rather than simply "in front of." It implies being directly across from something.</p>

            <div className="blog-example">
              <p className="es">El banco está enfrente de la iglesia. — <span style={{fontWeight: 400}}>The bank is opposite the church.</span></p>
            </div>

            <h2>Next To and Between</h2>

            <div className="blog-example">
              <p className="es">El supermercado está al lado del parque. — <span style={{fontWeight: 400}}>The supermarket is next to the park.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Me senté entre Ana y Carlos. — <span style={{fontWeight: 400}}>I sat between Ana and Carlos.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hay una farmacia entre el banco y la panadería. — <span style={{fontWeight: 400}}>There's a pharmacy between the bank and the bakery.</span></p>
            </div>

            <h2>Inside and Outside</h2>

            <div className="blog-example">
              <p className="es">Las llaves están dentro del bolso. — <span style={{fontWeight: 400}}>The keys are inside the bag.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Hay una mesa fuera del café. — <span style={{fontWeight: 400}}>There's a table outside the café.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Los niños están jugando fuera. — <span style={{fontWeight: 400}}>The children are playing outside.</span></p>
            </div>

            <h2>Near and Far</h2>

            <div className="blog-example">
              <p className="es">La estación está cerca de aquí. — <span style={{fontWeight: 400}}>The station is near here.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">El aeropuerto está lejos del centro. — <span style={{fontWeight: 400}}>The airport is far from the centre.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Vivimos bastante cerca del colegio. — <span style={{fontWeight: 400}}>We live quite close to the school.</span></p>
            </div>

            <h2>Left and Right</h2>
            <p>Directions are formed with a + la + derecha/izquierda + de.</p>

            <div className="blog-example">
              <p className="es">La cafetería está a la derecha del museo. — <span style={{fontWeight: 400}}>The café is to the right of the museum.</span></p>
            </div>
            <div className="blog-example">
              <p className="es">Gira a la izquierda en el semáforo. — <span style={{fontWeight: 400}}>Turn left at the traffic lights.</span></p>
            </div>

            <h2>Quick Reference Table</h2>

            <table className="blog-table">
              <thead>
                <tr>
                  <th>Spanish</th>
                  <th>English</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>en</td><td>in / on / at</td></tr>
                <tr><td>encima de</td><td>on top of / above</td></tr>
                <tr><td>debajo de</td><td>under / below</td></tr>
                <tr><td>delante de</td><td>in front of</td></tr>
                <tr><td>detrás de</td><td>behind</td></tr>
                <tr><td>enfrente de</td><td>opposite / facing</td></tr>
                <tr><td>al lado de</td><td>next to / beside</td></tr>
                <tr><td>entre</td><td>between / among</td></tr>
                <tr><td>dentro de</td><td>inside</td></tr>
                <tr><td>fuera de</td><td>outside</td></tr>
                <tr><td>cerca de</td><td>near / close to</td></tr>
                <tr><td>lejos de</td><td>far from</td></tr>
                <tr><td>a la derecha de</td><td>to the right of</td></tr>
                <tr><td>a la izquierda de</td><td>to the left of</td></tr>
              </tbody>
            </table>

            <div className="blog-highlight">
              <p>Remember: de + el always contracts to del. So "in front of the house" is delante de la casa (feminine) but delante del coche (masculine — de + el coche).</p>
            </div>

            <h2>Putting It Together</h2>
            <p>Spatial vocabulary really comes to life when you start combining prepositions in real descriptions. Practise by describing your own surroundings — your room, your street, your local area. The more you connect these phrases to places you know, the faster they'll stick.</p>

            <div className="blog-example">
              <p className="es">La biblioteca está a la derecha del ayuntamiento, justo enfrente del parque. — <span style={{fontWeight: 400}}>The library is to the right of the town hall, right opposite the park.</span></p>
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
