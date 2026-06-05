import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogNumbers() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Numbers: Cardinals, Ordinals, Big Numbers and Common Mistakes | Mike Masters Languages',
    'Numbers in Spanish are mostly straightforward — but there are a few quirks around gender agreement, large numbers, and ordinals that trip up beginners. This guide covers them all.'
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
          <h1>Spanish Numbers: Cardinals, Ordinals and Big Numbers</h1>
          <p className="blog-hero-intro">
            Numbers are essential from day one — prices, ages, times, addresses. Here's everything you need, including the quirks that catch beginners out.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spanish numbers are easier than many learners expect — the patterns are consistent and predictable. A few things do catch people out: gender agreement with uno/una, the spelling of large numbers, and when to use ordinals vs cardinals. This guide covers the essentials.</p>

            <h2>Cardinal Numbers 1–30</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Number</th><th>Spanish</th><th>Number</th><th>Spanish</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>uno / una</td><td>11</td><td>once</td></tr>
                  <tr><td>2</td><td>dos</td><td>12</td><td>doce</td></tr>
                  <tr><td>3</td><td>tres</td><td>13</td><td>trece</td></tr>
                  <tr><td>4</td><td>cuatro</td><td>14</td><td>catorce</td></tr>
                  <tr><td>5</td><td>cinco</td><td>15</td><td>quince</td></tr>
                  <tr><td>6</td><td>seis</td><td>16</td><td>dieciséis</td></tr>
                  <tr><td>7</td><td>siete</td><td>17</td><td>diecisiete</td></tr>
                  <tr><td>8</td><td>ocho</td><td>18</td><td>dieciocho</td></tr>
                  <tr><td>9</td><td>nueve</td><td>19</td><td>diecinueve</td></tr>
                  <tr><td>10</td><td>diez</td><td>20</td><td>veinte</td></tr>
                  <tr><td>21</td><td>veintiuno</td><td>30</td><td>treinta</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Tens and Combinations</h2>
            <p>From 31 onwards, numbers are formed with <strong>y</strong> (and): <em>treinta y uno, cuarenta y dos, cincuenta y tres</em>. Unlike 16–29 (written as one word), these are always three separate words.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Number</th><th>Spanish</th></tr></thead>
                <tbody>
                  <tr><td>40</td><td>cuarenta</td></tr>
                  <tr><td>50</td><td>cincuenta</td></tr>
                  <tr><td>60</td><td>sesenta</td></tr>
                  <tr><td>70</td><td>setenta</td></tr>
                  <tr><td>80</td><td>ochenta</td></tr>
                  <tr><td>90</td><td>noventa</td></tr>
                  <tr><td>100</td><td>cien (exactly 100) / ciento (100+)</td></tr>
                  <tr><td>200</td><td>doscientos/as</td></tr>
                  <tr><td>1,000</td><td>mil</td></tr>
                  <tr><td>1,000,000</td><td>un millón</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Uno, Una and Gender</h2>
            <p><em>Uno</em> becomes <em>un</em> before a masculine noun and <em>una</em> before a feminine noun. This applies to all compound numbers ending in 1:</p>
            <div className="blog-example">
              <p className="es">Tengo veintiún años. — <span style={{fontWeight:400}}>I am twenty-one years old.</span></p>
              <p className="es">Hay veintiuna páginas. — <span style={{fontWeight:400}}>There are twenty-one pages. (feminine noun)</span></p>
            </div>

            <h2>Hundreds and Gender</h2>
            <p>Hundreds from 200 upwards also agree in gender:</p>
            <div className="blog-example">
              <p className="es">doscientos euros — two hundred euros (masc.)</p>
              <p className="es">doscientas personas — two hundred people (fem.)</p>
            </div>

            <h2>Cien vs Ciento</h2>
            <p><em>Cien</em> is used for exactly 100, or before a noun. <em>Ciento</em> is used for 101–199:</p>
            <div className="blog-example">
              <p className="es">Son cien euros. — <span style={{fontWeight:400}}>It's a hundred euros.</span></p>
              <p className="es">Tiene ciento cincuenta páginas. — <span style={{fontWeight:400}}>It has a hundred and fifty pages.</span></p>
            </div>

            <h2>Ordinal Numbers (1st–10th)</h2>
            <p>Ordinals agree with the noun in gender and number. They're most commonly used for positions, floors and royalty:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Ordinal</th><th>Masc.</th><th>Fem.</th></tr></thead>
                <tbody>
                  <tr><td>1st</td><td>primero (primer)</td><td>primera</td></tr>
                  <tr><td>2nd</td><td>segundo</td><td>segunda</td></tr>
                  <tr><td>3rd</td><td>tercero (tercer)</td><td>tercera</td></tr>
                  <tr><td>4th</td><td>cuarto</td><td>cuarta</td></tr>
                  <tr><td>5th</td><td>quinto</td><td>quinta</td></tr>
                </tbody>
              </table>
            </div>
            <p><em>Primero</em> and <em>tercero</em> shorten to <em>primer</em> and <em>tercer</em> before a masculine noun: <em>el primer piso, el tercer día</em>.</p>

            <div className="blog-tip">
              <p><strong>Dates use cardinals:</strong> For dates, Spanish uses cardinal numbers (not ordinals): <em>el cinco de mayo</em>, not <em>el quinto de mayo</em>. The only exception is the first of the month: <em>el primero de enero</em>.</p>
            </div>

            <div className="blog-highlight">
              <p>Numbers are some of the most immediately practical vocabulary in any language — prices, times, addresses, ages. Invest time in getting them solid early, paying particular attention to the gender agreement rules, which often get overlooked.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to handle real-world Spanish situations?</h3>
              <p>Numbers, prices and times — the practical essentials. Let's make sure you're confident with them all.</p>
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
