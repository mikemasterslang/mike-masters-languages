import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogFoodDrink() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Food and Drink Vocabulary: Eating Out and Shopping | Mike Masters Languages',
    'Essential Spanish food and drink vocabulary for restaurants, tapas bars and supermarkets — ordering, asking for the bill, food categories and useful phrases.'
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
          <h1>Spanish Food and Drink Vocabulary: Eating Out and Shopping</h1>
          <p className="blog-hero-intro">
            Food is one of the great pleasures of travelling to Spain — and knowing the right vocabulary makes every meal, market visit and tapas bar infinitely more enjoyable.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Whether you're ordering at a restaurant in Seville, browsing a market in Barcelona or buying groceries at a local supermarket, food vocabulary is essential. This guide covers the core categories, key restaurant phrases, and the expressions you'll hear and use most often.</p>

            <h2>At the Restaurant — Key Phrases</h2>
            <p>Spanish restaurants often have a <em>menú del día</em> — a set lunch menu with two courses, bread and a drink, usually excellent value. Here's the language you need:</p>

            <div className="blog-example">
              <p className="es">Una mesa para dos, por favor. — <span style={{fontWeight:400}}>A table for two, please.</span></p>
              <p className="es">¿Tienen mesa libre? — <span style={{fontWeight:400}}>Do you have a free table?</span></p>
              <p className="es">La carta, por favor. — <span style={{fontWeight:400}}>The menu, please.</span></p>
              <p className="es">¿Cuál es el menú del día? — <span style={{fontWeight:400}}>What is the set menu?</span></p>
              <p className="es">¿Qué recomienda? — <span style={{fontWeight:400}}>What do you recommend?</span></p>
              <p className="es">Voy a tomar... — <span style={{fontWeight:400}}>I'll have... (ordering)</span></p>
              <p className="es">Para mí, el gazpacho. — <span style={{fontWeight:400}}>For me, the gazpacho.</span></p>
              <p className="es">La cuenta, por favor. — <span style={{fontWeight:400}}>The bill, please.</span></p>
              <p className="es">¿Está incluido el servicio? — <span style={{fontWeight:400}}>Is service included?</span></p>
              <p className="es">¿Podemos pagar por separado? — <span style={{fontWeight:400}}>Can we pay separately?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Calling the waiter:</strong> In Spain it's perfectly normal and polite to call <em>¡Oiga!</em> or <em>¡Perdone!</em> to get a waiter's attention. You'll also hear <em>¡Disculpe!</em> Avoid clicking your fingers — it's considered rude.</p>
            </div>

            <h2>Meat and Fish (La Carne y el Pescado)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el pollo</td><td>chicken</td></tr>
                  <tr><td>la ternera</td><td>beef / veal</td></tr>
                  <tr><td>el cerdo</td><td>pork</td></tr>
                  <tr><td>el cordero</td><td>lamb</td></tr>
                  <tr><td>el jamón</td><td>ham (cured or cooked)</td></tr>
                  <tr><td>el jamón ibérico / serrano</td><td>cured Iberian / mountain ham</td></tr>
                  <tr><td>el chorizo</td><td>chorizo (cured sausage)</td></tr>
                  <tr><td>el bacalao</td><td>cod (often salt-cured)</td></tr>
                  <tr><td>el atún</td><td>tuna</td></tr>
                  <tr><td>el salmón</td><td>salmon</td></tr>
                  <tr><td>los calamares</td><td>squid</td></tr>
                  <tr><td>las gambas</td><td>prawns</td></tr>
                  <tr><td>los mejillones</td><td>mussels</td></tr>
                  <tr><td>el pulpo</td><td>octopus</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Vegetables and Fruit (Las Verduras y la Fruta)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el tomate</td><td>tomato</td></tr>
                  <tr><td>la cebolla</td><td>onion</td></tr>
                  <tr><td>el ajo</td><td>garlic</td></tr>
                  <tr><td>el pimiento</td><td>pepper (red or green)</td></tr>
                  <tr><td>la lechuga</td><td>lettuce</td></tr>
                  <tr><td>la zanahoria</td><td>carrot</td></tr>
                  <tr><td>el pepino</td><td>cucumber</td></tr>
                  <tr><td>las patatas</td><td>potatoes</td></tr>
                  <tr><td>la manzana</td><td>apple</td></tr>
                  <tr><td>la naranja</td><td>orange</td></tr>
                  <tr><td>el plátano</td><td>banana</td></tr>
                  <tr><td>la uva</td><td>grape</td></tr>
                  <tr><td>el limón</td><td>lemon</td></tr>
                  <tr><td>la fresa</td><td>strawberry</td></tr>
                  <tr><td>el melocotón</td><td>peach</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Drinks (Las Bebidas)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el agua (mineral)</td><td>(mineral) water</td></tr>
                  <tr><td>el agua con gas / sin gas</td><td>sparkling / still water</td></tr>
                  <tr><td>el café solo</td><td>espresso (black coffee)</td></tr>
                  <tr><td>el café con leche</td><td>coffee with milk (half/half)</td></tr>
                  <tr><td>el cortado</td><td>espresso with a dash of milk</td></tr>
                  <tr><td>el té</td><td>tea</td></tr>
                  <tr><td>el zumo de naranja</td><td>orange juice</td></tr>
                  <tr><td>la cerveza</td><td>beer</td></tr>
                  <tr><td>el vino tinto / blanco / rosado</td><td>red / white / rosé wine</td></tr>
                  <tr><td>la sangría</td><td>sangria</td></tr>
                  <tr><td>el refresco</td><td>soft drink</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Ordering a beer in Spain:</strong> Sizes matter. A <em>caña</em> is a small draught beer (the standard choice), a <em>tubo</em> is a tall glass and a <em>jarra</em> is a pint. In some regions it's called differently — just ask for <em>una cerveza de barril</em> if unsure.</p>
            </div>

            <h2>Dietary Requirements and Allergies</h2>
            <div className="blog-example">
              <p className="es">Soy vegetariano/a. — <span style={{fontWeight:400}}>I am vegetarian.</span></p>
              <p className="es">Soy alérgico/a a los frutos secos. — <span style={{fontWeight:400}}>I am allergic to nuts.</span></p>
              <p className="es">¿Tiene gluten? — <span style={{fontWeight:400}}>Does it contain gluten?</span></p>
              <p className="es">¿Hay algo sin carne? — <span style={{fontWeight:400}}>Is there anything without meat?</span></p>
              <p className="es">Sin lactosa, por favor. — <span style={{fontWeight:400}}>Without lactose, please.</span></p>
            </div>

            <h2>At the Supermarket or Market</h2>
            <div className="blog-example">
              <p className="es">¿Dónde están los lácteos? — <span style={{fontWeight:400}}>Where are the dairy products?</span></p>
              <p className="es">¿A cuánto está el kilo de queso? — <span style={{fontWeight:400}}>How much is a kilo of cheese?</span></p>
              <p className="es">Me pone doscientos gramos de jamón, por favor. — <span style={{fontWeight:400}}>Can I have two hundred grams of ham, please?</span></p>
              <p className="es">¿Tiene una bolsa? — <span style={{fontWeight:400}}>Do you have a bag?</span></p>
            </div>

            <div className="blog-highlight">
              <p>Food vocabulary pays dividends immediately when travelling in Spain. Focus first on restaurant phrases and the key food categories — then you'll be able to navigate any menu, market or supermarket with confidence.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Make every meal in Spain a pleasure</h3>
              <p>Food and drink vocabulary is some of the most enjoyable to practise — and it matters from the moment you land. Let's make sure you're ready.</p>
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
