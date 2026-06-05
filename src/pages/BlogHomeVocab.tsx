import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogHomeVocab() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Home Vocabulary: Rooms, Furniture and Household Items | Mike Masters Languages',
    'Learn Spanish vocabulary for rooms in a house, furniture and household items — plus prepositions of place and phrases for describing your home.'
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
          <h1>Spanish Home Vocabulary: Rooms, Furniture and Household Items</h1>
          <p className="blog-hero-intro">
            Talking about your home is one of the most natural topics in Spanish small talk. Here's all the vocabulary you need — from rooms to furniture to household items.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Whether you're describing where you live, giving directions inside a building or following a conversation about someone's house, home vocabulary is essential. This guide takes you through every room, key furniture items and the prepositions you need to say where things are.</p>

            <h2>Rooms in a House (Las Habitaciones)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Article</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el dormitorio / la habitación</td><td>el / la</td><td>bedroom</td></tr>
                  <tr><td>el cuarto de baño / el baño</td><td>el</td><td>bathroom</td></tr>
                  <tr><td>el aseo / el servicio</td><td>el</td><td>toilet / WC</td></tr>
                  <tr><td>la cocina</td><td>la</td><td>kitchen</td></tr>
                  <tr><td>el salón / la sala de estar</td><td>el / la</td><td>living room / lounge</td></tr>
                  <tr><td>el comedor</td><td>el</td><td>dining room</td></tr>
                  <tr><td>el estudio / el despacho</td><td>el</td><td>study / home office</td></tr>
                  <tr><td>el recibidor / la entrada</td><td>el / la</td><td>hallway / entrance</td></tr>
                  <tr><td>el garaje</td><td>el</td><td>garage</td></tr>
                  <tr><td>el jardín</td><td>el</td><td>garden</td></tr>
                  <tr><td>la terraza / el balcón</td><td>la / el</td><td>terrace / balcony</td></tr>
                  <tr><td>el sótano</td><td>el</td><td>basement / cellar</td></tr>
                  <tr><td>el ático</td><td>el</td><td>attic / penthouse flat</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Living Room Furniture (El Salón)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el sofá</td><td>sofa</td></tr>
                  <tr><td>el sillón</td><td>armchair</td></tr>
                  <tr><td>la mesa de centro</td><td>coffee table</td></tr>
                  <tr><td>el televisor / la tele</td><td>television</td></tr>
                  <tr><td>la estantería</td><td>bookcase / shelves</td></tr>
                  <tr><td>la alfombra</td><td>rug / carpet</td></tr>
                  <tr><td>las cortinas</td><td>curtains</td></tr>
                  <tr><td>la lámpara</td><td>lamp</td></tr>
                  <tr><td>el cuadro</td><td>picture / painting (on the wall)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Bedroom Furniture (El Dormitorio)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la cama</td><td>bed</td></tr>
                  <tr><td>la cama de matrimonio</td><td>double bed</td></tr>
                  <tr><td>la mesilla (de noche)</td><td>bedside table</td></tr>
                  <tr><td>el armario</td><td>wardrobe</td></tr>
                  <tr><td>el espejo</td><td>mirror</td></tr>
                  <tr><td>la cómoda</td><td>chest of drawers</td></tr>
                  <tr><td>la almohada</td><td>pillow</td></tr>
                  <tr><td>la manta</td><td>blanket</td></tr>
                  <tr><td>el edredón</td><td>duvet</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Kitchen Items (La Cocina)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la nevera / el frigorífico</td><td>fridge</td></tr>
                  <tr><td>el congelador</td><td>freezer</td></tr>
                  <tr><td>el horno</td><td>oven</td></tr>
                  <tr><td>el microondas</td><td>microwave</td></tr>
                  <tr><td>el lavavajillas</td><td>dishwasher</td></tr>
                  <tr><td>la lavadora</td><td>washing machine</td></tr>
                  <tr><td>el fregadero</td><td>kitchen sink</td></tr>
                  <tr><td>el grifo</td><td>tap</td></tr>
                  <tr><td>la sartén</td><td>frying pan</td></tr>
                  <tr><td>la olla / el cazo</td><td>pot / saucepan</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Prepositions of Place</h2>
            <p>To describe where things are in a home, you need these key prepositions:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>en</td><td>in / on / at</td></tr>
                  <tr><td>encima de</td><td>on top of / above</td></tr>
                  <tr><td>debajo de</td><td>under / below</td></tr>
                  <tr><td>al lado de</td><td>next to / beside</td></tr>
                  <tr><td>delante de</td><td>in front of</td></tr>
                  <tr><td>detrás de</td><td>behind</td></tr>
                  <tr><td>entre</td><td>between</td></tr>
                  <tr><td>a la derecha de</td><td>to the right of</td></tr>
                  <tr><td>a la izquierda de</td><td>to the left of</td></tr>
                  <tr><td>enfrente de</td><td>opposite / facing</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Describing Your Home</h2>
            <div className="blog-example">
              <p className="es">Vivo en un piso en el centro de la ciudad. — <span style={{fontWeight:400}}>I live in a flat in the city centre.</span></p>
              <p className="es">Tenemos una casa con jardín. — <span style={{fontWeight:400}}>We have a house with a garden.</span></p>
              <p className="es">Mi piso tiene dos dormitorios y un salón amplio. — <span style={{fontWeight:400}}>My flat has two bedrooms and a large living room.</span></p>
              <p className="es">La cocina está al lado del comedor. — <span style={{fontWeight:400}}>The kitchen is next to the dining room.</span></p>
              <p className="es">El sofá está delante del televisor. — <span style={{fontWeight:400}}>The sofa is in front of the television.</span></p>
              <p className="es">Las llaves están encima de la mesa. — <span style={{fontWeight:400}}>The keys are on the table.</span></p>
              <p className="es">El baño está al fondo del pasillo. — <span style={{fontWeight:400}}>The bathroom is at the end of the corridor.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Piso vs casa:</strong> In Spain, most people in cities live in a <em>piso</em> (flat). <em>Casa</em> usually refers to a house (detached or semi-detached), though it's also used informally to mean home: <em>estoy en casa</em> (I'm at home). Use <em>el apartamento</em> for a small studio flat.</p>
            </div>

            <div className="blog-highlight">
              <p>Home vocabulary covers two key areas: the room and furniture names, and the prepositions to describe where things are. Master <em>al lado de, encima de</em> and <em>debajo de</em> — they're the building blocks for describing any space.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Talk about your life in Spanish</h3>
              <p>Home, family and daily routine — the foundations of every Spanish conversation. Let's build your vocabulary and confidence together.</p>
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
