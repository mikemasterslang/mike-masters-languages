import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogMoneyPhrases() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Money and Shopping Phrases | Mike Masters Languages',
    'Learn essential Spanish for shopping, paying and handling money — asking prices, paying by card or cash, market phrases, discounts, receipts and comparing prices.'
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
          <h1>Spanish Money and Shopping Phrases</h1>
          <p className="blog-hero-intro">
            Handling money, paying bills and shopping confidently are practical skills you'll use from your first day in Spain.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Shopping is one of the most immediate and practical contexts for using Spanish — from buying a coffee to negotiating at a market stall, from paying a restaurant bill to asking for a discount in a shop. The language involved is relatively simple, but getting it right makes your interactions faster, more natural and far more enjoyable. This guide covers all the essential vocabulary for money, prices and shopping situations in Spain.</p>

            <h2>Asking About Prices</h2>
            <p>The two most important questions are <em>¿cuánto es?</em> (how much is it? — for a total) and <em>¿cuánto cuesta?</em> (how much does it cost? — for a specific item). Both are interchangeable in most situations.</p>

            <div className="blog-example">
              <p className="es">¿Cuánto es? — <span style={{fontWeight: 400}}>How much is it? (asking for a total)</span></p>
              <p className="es">¿Cuánto cuesta esto? — <span style={{fontWeight: 400}}>How much does this cost?</span></p>
              <p className="es">¿A cuánto están los tomates? — <span style={{fontWeight: 400}}>How much are the tomatoes?</span></p>
              <p className="es">¿Qué precio tiene? — <span style={{fontWeight: 400}}>What's the price of this?</span></p>
              <p className="es">¿Cuánto vale? — <span style={{fontWeight: 400}}>How much is it worth / what does it cost?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Numbers and prices:</strong> In Spain, a comma is used as the decimal separator and a full stop (or space) for thousands. So €1.50 is written <em>1,50 €</em> and spoken <em>uno con cincuenta</em> or <em>un euro y cincuenta céntimos</em>. €1,000 is <em>mil euros</em>.</p>
            </div>

            <h2>Paying — Cash or Card</h2>
            <div className="blog-example">
              <p className="es">¿Cómo quiere pagar? — <span style={{fontWeight: 400}}>How would you like to pay? (shop assistant to you)</span></p>
              <p className="es">Voy a pagar en efectivo. — <span style={{fontWeight: 400}}>I'm going to pay cash.</span></p>
              <p className="es">¿Puedo pagar con tarjeta? — <span style={{fontWeight: 400}}>Can I pay by card?</span></p>
              <p className="es">¿Aceptan tarjeta de crédito? — <span style={{fontWeight: 400}}>Do you accept credit cards?</span></p>
              <p className="es">¿Tienen cambio de veinte euros? — <span style={{fontWeight: 400}}>Do you have change for twenty euros?</span></p>
              <p className="es">Quédese con el cambio. — <span style={{fontWeight: 400}}>Keep the change.</span></p>
            </div>

            <h2>In a Restaurant — Paying the Bill</h2>
            <div className="blog-example">
              <p className="es">La cuenta, por favor. — <span style={{fontWeight: 400}}>The bill, please.</span></p>
              <p className="es">¿Está incluido el servicio? — <span style={{fontWeight: 400}}>Is service charge included?</span></p>
              <p className="es">¿Podemos pagar por separado? — <span style={{fontWeight: 400}}>Can we pay separately?</span></p>
              <p className="es">¿Me puede dar un recibo? — <span style={{fontWeight: 400}}>Can you give me a receipt?</span></p>
              <p className="es">¿Me puede dar una factura? — <span style={{fontWeight: 400}}>Can you give me an invoice? (for expenses)</span></p>
              <p className="es">Creo que hay un error en la cuenta. — <span style={{fontWeight: 400}}>I think there's a mistake on the bill.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Tipping in Spain:</strong> Tipping is less expected in Spain than in some countries. In restaurants it's appreciated but not obligatory — rounding up or leaving a few euros is perfectly normal. In bars and cafés, leaving small change is common. Saying <em>quédese con el cambio</em> ("keep the change") is the standard way to tip.</p>
            </div>

            <h2>Shopping in a Shop</h2>
            <div className="blog-example">
              <p className="es">Estoy mirando, gracias. — <span style={{fontWeight: 400}}>I'm just looking, thanks.</span></p>
              <p className="es">¿Me puede ayudar? — <span style={{fontWeight: 400}}>Can you help me?</span></p>
              <p className="es">Busco una camisa de talla M. — <span style={{fontWeight: 400}}>I'm looking for a medium shirt.</span></p>
              <p className="es">¿Lo tienen en otro color? — <span style={{fontWeight: 400}}>Do you have it in another colour?</span></p>
              <p className="es">¿Puedo probármelo? — <span style={{fontWeight: 400}}>Can I try it on?</span></p>
              <p className="es">¿Dónde están los probadores? — <span style={{fontWeight: 400}}>Where are the changing rooms?</span></p>
              <p className="es">Me lo llevo. — <span style={{fontWeight: 400}}>I'll take it.</span></p>
              <p className="es">No me convence. — <span style={{fontWeight: 400}}>I'm not sure about it. / It's not quite right for me.</span></p>
            </div>

            <h2>At the Market</h2>
            <p>Street markets (<em>mercados</em> or <em>mercadillos</em>) are central to Spanish culture. The language is more informal and bargaining is possible at some stalls, though not standard in food markets.</p>

            <div className="blog-example">
              <p className="es">¿A cómo está el kilo de naranjas? — <span style={{fontWeight: 400}}>How much is a kilo of oranges?</span></p>
              <p className="es">Póngame un kilo de tomates, por favor. — <span style={{fontWeight: 400}}>Give me a kilo of tomatoes, please.</span></p>
              <p className="es">¿Están frescos? — <span style={{fontWeight: 400}}>Are they fresh?</span></p>
              <p className="es">Me llevo dos kilos. — <span style={{fontWeight: 400}}>I'll take two kilos.</span></p>
              <p className="es">¿Me pone una bolsa? — <span style={{fontWeight: 400}}>Can you give me a bag?</span></p>
            </div>

            <h2>Comparing Prices and Looking for Deals</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>más barato/a</td><td>cheaper</td></tr>
                  <tr><td>más caro/a</td><td>more expensive</td></tr>
                  <tr><td>una oferta</td><td>a special offer / deal</td></tr>
                  <tr><td>en rebajas</td><td>in the sales</td></tr>
                  <tr><td>precio fijo</td><td>fixed price</td></tr>
                  <tr><td>el descuento</td><td>discount</td></tr>
                  <tr><td>la ganga</td><td>bargain</td></tr>
                  <tr><td>gratuito / gratis</td><td>free (of charge)</td></tr>
                  <tr><td>incluido</td><td>included</td></tr>
                  <tr><td>el IVA</td><td>VAT (value added tax in Spain)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">¿Tienen algo más barato? — <span style={{fontWeight: 400}}>Do you have anything cheaper?</span></p>
              <p className="es">¿Hay descuento por pagar en efectivo? — <span style={{fontWeight: 400}}>Is there a discount for paying cash?</span></p>
              <p className="es">¿Está en oferta? — <span style={{fontWeight: 400}}>Is it on offer?</span></p>
              <p className="es">¿El IVA está incluido? — <span style={{fontWeight: 400}}>Is VAT included?</span></p>
              <p className="es">Es una ganga. — <span style={{fontWeight: 400}}>It's a bargain.</span></p>
            </div>

            <div className="blog-highlight">
              <p>The three phrases you absolutely must know are: <em>¿cuánto cuesta?</em> (how much?), <em>¿puedo pagar con tarjeta?</em> (can I pay by card?) and <em>¿me puede dar un recibo?</em> (can I have a receipt?). With these three, you can handle almost any transaction in Spain.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Handle every transaction with confidence</h3>
              <p>Shopping and money vocabulary is practical Spanish from day one. Let's make sure you're fluent in the language of everyday life in Spain.</p>
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
