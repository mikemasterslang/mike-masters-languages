import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogClothes() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Clothes and Shopping Vocabulary | Mike Masters Languages',
    'Learn Spanish clothing vocabulary and shopping phrases — asking for sizes, prices, colours, trying on clothes and paying in Spanish shops.'
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
          <h1>Spanish Clothes and Shopping Vocabulary</h1>
          <p className="blog-hero-intro">
            Spanish high streets are wonderful — and being able to ask for a different size, check a price or pay by card makes the whole experience far more enjoyable.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Shopping for clothes is one of the most common real-life situations for travellers in Spain. Whether you're browsing a market, visiting a boutique in Madrid or shopping in El Corte Inglés, this vocabulary will help you navigate the whole experience confidently.</p>

            <h2>Clothing Items (La Ropa)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Article</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la camiseta</td><td>la</td><td>T-shirt</td></tr>
                  <tr><td>la camisa</td><td>la</td><td>shirt (formal / with buttons)</td></tr>
                  <tr><td>el jersey / el suéter</td><td>el</td><td>jumper / sweater</td></tr>
                  <tr><td>la chaqueta</td><td>la</td><td>jacket</td></tr>
                  <tr><td>el abrigo</td><td>el</td><td>coat</td></tr>
                  <tr><td>el vestido</td><td>el</td><td>dress</td></tr>
                  <tr><td>la falda</td><td>la</td><td>skirt</td></tr>
                  <tr><td>los pantalones</td><td>los</td><td>trousers</td></tr>
                  <tr><td>los vaqueros / los jeans</td><td>los</td><td>jeans</td></tr>
                  <tr><td>los pantalones cortos</td><td>los</td><td>shorts</td></tr>
                  <tr><td>el traje</td><td>el</td><td>suit</td></tr>
                  <tr><td>el bañador</td><td>el</td><td>swimsuit / swimming trunks</td></tr>
                  <tr><td>el bikini</td><td>el</td><td>bikini</td></tr>
                  <tr><td>la ropa interior</td><td>la</td><td>underwear</td></tr>
                  <tr><td>los calcetines</td><td>los</td><td>socks</td></tr>
                  <tr><td>las medias</td><td>las</td><td>tights</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Footwear and Accessories (El Calzado y los Complementos)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>Article</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>los zapatos</td><td>los</td><td>shoes</td></tr>
                  <tr><td>las botas</td><td>las</td><td>boots</td></tr>
                  <tr><td>las zapatillas de deporte</td><td>las</td><td>trainers / sports shoes</td></tr>
                  <tr><td>las sandalias</td><td>las</td><td>sandals</td></tr>
                  <tr><td>los tacones</td><td>los</td><td>heels</td></tr>
                  <tr><td>el bolso</td><td>el</td><td>handbag</td></tr>
                  <tr><td>la mochila</td><td>la</td><td>rucksack</td></tr>
                  <tr><td>el cinturón</td><td>el</td><td>belt</td></tr>
                  <tr><td>el sombrero</td><td>el</td><td>hat (with brim)</td></tr>
                  <tr><td>la gorra</td><td>la</td><td>cap (baseball cap)</td></tr>
                  <tr><td>la bufanda</td><td>la</td><td>scarf</td></tr>
                  <tr><td>los guantes</td><td>los</td><td>gloves</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Shopping Phrases — Asking About Price and Size</h2>
            <div className="blog-example">
              <p className="es">¿Cuánto cuesta esta camiseta? — <span style={{fontWeight:400}}>How much does this T-shirt cost?</span></p>
              <p className="es">¿Cuánto cuestan estos zapatos? — <span style={{fontWeight:400}}>How much do these shoes cost?</span></p>
              <p className="es">¿Tiene esto en otra talla? — <span style={{fontWeight:400}}>Do you have this in another size?</span></p>
              <p className="es">¿Lo tiene en una talla más grande / más pequeña? — <span style={{fontWeight:400}}>Do you have it in a larger / smaller size?</span></p>
              <p className="es">¿Tiene esto en otro color? — <span style={{fontWeight:400}}>Do you have this in another colour?</span></p>
              <p className="es">¿Dónde están los probadores? — <span style={{fontWeight:400}}>Where are the changing rooms?</span></p>
              <p className="es">¿Me lo puedo probar? — <span style={{fontWeight:400}}>Can I try it on?</span></p>
            </div>

            <h2>Sizes in Spain</h2>
            <p>Spain uses European sizing. Here's a rough guide for clothing:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>UK Size</th><th>Spain / EU Size</th><th>Spanish term</th></tr></thead>
                <tbody>
                  <tr><td>6</td><td>34</td><td>una talla treinta y cuatro</td></tr>
                  <tr><td>8</td><td>36</td><td>una talla treinta y seis</td></tr>
                  <tr><td>10</td><td>38</td><td>una talla treinta y ocho</td></tr>
                  <tr><td>12</td><td>40</td><td>una talla cuarenta</td></tr>
                  <tr><td>14</td><td>42</td><td>una talla cuarenta y dos</td></tr>
                  <tr><td>16</td><td>44</td><td>una talla cuarenta y cuatro</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Gasto una talla cuarenta. — <span style={{fontWeight:400}}>I'm a size forty.</span></p>
              <p className="es">¿Tienen la talla cuarenta y dos? — <span style={{fontWeight:400}}>Do you have size forty-two?</span></p>
            </div>

            <h2>In the Changing Room and After</h2>
            <div className="blog-example">
              <p className="es">Me queda bien. — <span style={{fontWeight:400}}>It fits well. / It suits me.</span></p>
              <p className="es">No me queda bien. — <span style={{fontWeight:400}}>It doesn't fit well.</span></p>
              <p className="es">Me queda un poco grande / pequeño. — <span style={{fontWeight:400}}>It's a bit big / small on me.</span></p>
              <p className="es">Me lo llevo. — <span style={{fontWeight:400}}>I'll take it.</span></p>
              <p className="es">Lo dejo. — <span style={{fontWeight:400}}>I'll leave it. / I won't take it.</span></p>
            </div>

            <h2>Paying (Pagar)</h2>
            <div className="blog-example">
              <p className="es">¿Puedo pagar con tarjeta? — <span style={{fontWeight:400}}>Can I pay by card?</span></p>
              <p className="es">¿Aceptan pagos contactless? — <span style={{fontWeight:400}}>Do you accept contactless payments?</span></p>
              <p className="es">¿Me da un recibo, por favor? — <span style={{fontWeight:400}}>Can I have a receipt, please?</span></p>
              <p className="es">¿Hay rebajas? — <span style={{fontWeight:400}}>Are there any sales / discounts?</span></p>
              <p className="es">Está de rebajas. — <span style={{fontWeight:400}}>It's in the sale.</span></p>
              <p className="es">¿Se puede cambiar si no me vale? — <span style={{fontWeight:400}}>Can I exchange it if it doesn't fit?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Las rebajas — January and July sales:</strong> Spain has two major sale periods: <em>las rebajas de enero</em> (January sales) and <em>las rebajas de julio</em> (summer sales). Discounts can be substantial — great vocabulary to know before your trip!</p>
            </div>

            <div className="blog-highlight">
              <p>Shopping vocabulary is immediately practical. The key phrases — asking for sizes, trying things on and asking the price — are simple patterns you can use with any item of clothing. Learn <em>¿Lo tiene en...?</em> (Do you have it in...?) and you can ask about any colour, size or style.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Get ready to shop in Spain</h3>
              <p>Shopping, eating out, getting around — practical Spanish for real situations is what we focus on. Book a lesson and we'll practise the conversations you'll actually have.</p>
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
