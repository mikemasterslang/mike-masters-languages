import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogTravelVocab() {
  useScrollAnimation();
  usePageMeta(
    'Essential Spanish Travel Vocabulary for Your Trip to Spain | Mike Masters Languages',
    'All the Spanish travel vocabulary you need — transport, hotels, airports, asking for directions and emergencies — to get around Spain with confidence.'
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
          <h1>Essential Spanish Travel Vocabulary for Your Trip to Spain</h1>
          <p className="blog-hero-intro">
            From checking in at the airport to asking for directions in a town centre, having the right vocabulary makes travelling in Spain far less stressful and much more rewarding.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spain has an excellent transport network, world-class hotels and some of the most welcoming locals you'll find anywhere in Europe. This guide gives you the vocabulary and phrases to handle every major travel situation — from the moment you land to the moment you check out.</p>

            <h2>At the Airport (En el Aeropuerto)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el vuelo</td><td>flight</td></tr>
                  <tr><td>la salida</td><td>departure / exit</td></tr>
                  <tr><td>la llegada</td><td>arrival</td></tr>
                  <tr><td>la puerta de embarque</td><td>boarding gate</td></tr>
                  <tr><td>la facturación</td><td>check-in</td></tr>
                  <tr><td>el equipaje de mano</td><td>hand luggage</td></tr>
                  <tr><td>la maleta</td><td>suitcase</td></tr>
                  <tr><td>el pasaporte</td><td>passport</td></tr>
                  <tr><td>la tarjeta de embarque</td><td>boarding pass</td></tr>
                  <tr><td>el control de seguridad</td><td>security check</td></tr>
                  <tr><td>la recogida de equipaje</td><td>baggage reclaim</td></tr>
                  <tr><td>la aduana</td><td>customs</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿A qué hora sale el vuelo? — <span style={{fontWeight:400}}>What time does the flight depart?</span></p>
              <p className="es">¿Dónde está la puerta número ocho? — <span style={{fontWeight:400}}>Where is gate number eight?</span></p>
              <p className="es">He perdido mi maleta. — <span style={{fontWeight:400}}>I've lost my suitcase.</span></p>
            </div>

            <h2>Transport (El Transporte)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el tren</td><td>train</td></tr>
                  <tr><td>el AVE</td><td>high-speed train (Spain's TGV)</td></tr>
                  <tr><td>el autobús / el bus</td><td>bus</td></tr>
                  <tr><td>el metro</td><td>underground / metro</td></tr>
                  <tr><td>el taxi</td><td>taxi</td></tr>
                  <tr><td>el coche de alquiler</td><td>hire car / rental car</td></tr>
                  <tr><td>el billete / el ticket</td><td>ticket</td></tr>
                  <tr><td>el andén</td><td>platform (train)</td></tr>
                  <tr><td>la parada</td><td>stop (bus/metro)</td></tr>
                  <tr><td>la estación</td><td>station</td></tr>
                  <tr><td>el horario</td><td>timetable / schedule</td></tr>
                  <tr><td>ida y vuelta</td><td>return (ticket)</td></tr>
                  <tr><td>solo ida</td><td>single (one-way)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Un billete de ida y vuelta a Madrid, por favor. — <span style={{fontWeight:400}}>A return ticket to Madrid, please.</span></p>
              <p className="es">¿A qué hora llega el próximo tren a Sevilla? — <span style={{fontWeight:400}}>What time does the next train to Seville arrive?</span></p>
              <p className="es">¿En qué andén sale el tren? — <span style={{fontWeight:400}}>Which platform does the train leave from?</span></p>
              <p className="es">¿Cuánto cuesta un taxi al centro? — <span style={{fontWeight:400}}>How much does a taxi to the centre cost?</span></p>
            </div>

            <h2>Accommodation (El Alojamiento)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el hotel</td><td>hotel</td></tr>
                  <tr><td>el hostal</td><td>budget hotel / guesthouse</td></tr>
                  <tr><td>la habitación individual</td><td>single room</td></tr>
                  <tr><td>la habitación doble</td><td>double room</td></tr>
                  <tr><td>la habitación con cama de matrimonio</td><td>room with a double bed</td></tr>
                  <tr><td>el desayuno incluido</td><td>breakfast included</td></tr>
                  <tr><td>la recepción</td><td>reception</td></tr>
                  <tr><td>el check-in / la entrada</td><td>check-in</td></tr>
                  <tr><td>el check-out / la salida</td><td>check-out</td></tr>
                  <tr><td>la llave</td><td>key</td></tr>
                  <tr><td>la tarjeta del hotel</td><td>key card</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Tengo una reserva a nombre de Andrews. — <span style={{fontWeight:400}}>I have a booking in the name of Andrews.</span></p>
              <p className="es">¿A qué hora es el check-out? — <span style={{fontWeight:400}}>What time is check-out?</span></p>
              <p className="es">¿Hay wifi en la habitación? — <span style={{fontWeight:400}}>Is there wifi in the room?</span></p>
              <p className="es">El aire acondicionado no funciona. — <span style={{fontWeight:400}}>The air conditioning isn't working.</span></p>
            </div>

            <h2>Asking for Directions (Pedir Direcciones)</h2>
            <div className="blog-example">
              <p className="es">¿Dónde está la catedral? — <span style={{fontWeight:400}}>Where is the cathedral?</span></p>
              <p className="es">¿Cómo se llega al centro? — <span style={{fontWeight:400}}>How do you get to the centre?</span></p>
              <p className="es">¿Está lejos de aquí? — <span style={{fontWeight:400}}>Is it far from here?</span></p>
              <p className="es">Todo recto. — <span style={{fontWeight:400}}>Straight ahead.</span></p>
              <p className="es">Gire a la derecha / izquierda. — <span style={{fontWeight:400}}>Turn right / left.</span></p>
              <p className="es">En el semáforo. — <span style={{fontWeight:400}}>At the traffic lights.</span></p>
              <p className="es">A dos manzanas de aquí. — <span style={{fontWeight:400}}>Two blocks from here.</span></p>
              <p className="es">Está al lado del banco. — <span style={{fontWeight:400}}>It's next to the bank.</span></p>
            </div>

            <h2>Emergencies (Emergencias)</h2>
            <div className="blog-example">
              <p className="es">¡Llame a la policía! — <span style={{fontWeight:400}}>Call the police!</span></p>
              <p className="es">¡Llame a una ambulancia! — <span style={{fontWeight:400}}>Call an ambulance!</span></p>
              <p className="es">Necesito ayuda. — <span style={{fontWeight:400}}>I need help.</span></p>
              <p className="es">Me han robado el bolso. — <span style={{fontWeight:400}}>My bag has been stolen.</span></p>
              <p className="es">He perdido mi pasaporte. — <span style={{fontWeight:400}}>I've lost my passport.</span></p>
              <p className="es">¿Dónde está el hospital más cercano? — <span style={{fontWeight:400}}>Where is the nearest hospital?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Emergency number in Spain:</strong> The general emergency number in Spain is <strong>112</strong> — it covers police, fire and ambulance. The local police number is 091 and national police is 062.</p>
            </div>

            <div className="blog-highlight">
              <p>Travel vocabulary is some of the most immediately valuable Spanish you can learn. Focus on transport and accommodation phrases first — they come up on every trip — and then build out your directions and emergency language so you feel secure in any situation.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Planning a trip to Spain?</h3>
              <p>There's no better motivation for learning Spanish than an upcoming holiday. Let's make sure you arrive with the confidence to get around, check in and handle anything that comes up.</p>
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
