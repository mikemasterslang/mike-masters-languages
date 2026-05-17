import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogFamilyVocab() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Family Vocabulary: How to Talk About Your Family | Mike Masters Languages',
    'Learn how to talk about your family in Spanish — immediate and extended family, in-laws, possessive adjectives, and how to introduce family members naturally.'
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
          <h1>Spanish Family Vocabulary: How to Talk About Your Family</h1>
          <p className="blog-hero-intro">
            Family is a central topic in any Spanish conversation — whether you're making small talk or introducing the people closest to you. Here's all the vocabulary you need.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Spaniards love to talk about family, and you'll be asked about yours early in almost any conversation. This guide covers immediate and extended family vocabulary, the in-law terms that always catch learners out, how possessive adjectives work with family members, and the phrases to introduce your relatives naturally.</p>

            <h2>Immediate Family (La Familia Inmediata)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>el padre</td><td>father</td><td>los padres = parents</td></tr>
                  <tr><td>la madre</td><td>mother</td><td></td></tr>
                  <tr><td>el hijo</td><td>son</td><td>los hijos = children (sons and daughters)</td></tr>
                  <tr><td>la hija</td><td>daughter</td><td></td></tr>
                  <tr><td>el hermano</td><td>brother</td><td>los hermanos = siblings</td></tr>
                  <tr><td>la hermana</td><td>sister</td><td></td></tr>
                  <tr><td>el marido / el esposo</td><td>husband</td><td>both are widely used</td></tr>
                  <tr><td>la mujer / la esposa</td><td>wife</td><td>la mujer also means woman</td></tr>
                  <tr><td>la pareja</td><td>partner</td><td>gender-neutral</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-tip">
              <p><strong>Los hijos — a useful trick:</strong> The masculine plural in Spanish often covers a mixed group. <em>Los padres</em> means parents (not just fathers), <em>los hermanos</em> means siblings, and <em>los hijos</em> means children. Context usually makes the meaning clear.</p>
            </div>

            <h2>Extended Family (La Familia Extendida)</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el abuelo</td><td>grandfather</td></tr>
                  <tr><td>la abuela</td><td>grandmother</td></tr>
                  <tr><td>los abuelos</td><td>grandparents</td></tr>
                  <tr><td>el nieto</td><td>grandson</td></tr>
                  <tr><td>la nieta</td><td>granddaughter</td></tr>
                  <tr><td>el tío</td><td>uncle</td></tr>
                  <tr><td>la tía</td><td>aunt</td></tr>
                  <tr><td>el primo</td><td>male cousin</td></tr>
                  <tr><td>la prima</td><td>female cousin</td></tr>
                  <tr><td>el sobrino</td><td>nephew</td></tr>
                  <tr><td>la sobrina</td><td>niece</td></tr>
                </tbody>
              </table>
            </div>

            <h2>In-Laws (Los Parientes Políticos)</h2>
            <p>In-law vocabulary in Spanish follows a logical pattern — add <em>político/a</em> or use dedicated terms:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>el suegro</td><td>father-in-law</td></tr>
                  <tr><td>la suegra</td><td>mother-in-law</td></tr>
                  <tr><td>los suegros</td><td>in-laws (parents-in-law)</td></tr>
                  <tr><td>el yerno</td><td>son-in-law</td></tr>
                  <tr><td>la nuera</td><td>daughter-in-law</td></tr>
                  <tr><td>el cuñado</td><td>brother-in-law</td></tr>
                  <tr><td>la cuñada</td><td>sister-in-law</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Possessive Adjectives with Family</h2>
            <p>Unlike English, Spanish possessive adjectives agree with the noun (the thing possessed), not the owner:</p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Person</th><th>Singular</th><th>Plural</th></tr></thead>
                <tbody>
                  <tr><td>my</td><td>mi</td><td>mis</td></tr>
                  <tr><td>your (tú)</td><td>tu</td><td>tus</td></tr>
                  <tr><td>his / her / your (usted)</td><td>su</td><td>sus</td></tr>
                  <tr><td>our</td><td>nuestro/a</td><td>nuestros/as</td></tr>
                  <tr><td>your (vosotros)</td><td>vuestro/a</td><td>vuestros/as</td></tr>
                  <tr><td>their / your (ustedes)</td><td>su</td><td>sus</td></tr>
                </tbody>
              </table>
            </div>

            <div className="blog-example">
              <p className="es">Mi madre se llama Ana. — <span style={{fontWeight:400}}>My mother is called Ana.</span></p>
              <p className="es">Mis hermanos viven en Londres. — <span style={{fontWeight:400}}>My siblings live in London.</span></p>
              <p className="es">Nuestros hijos tienen cinco y ocho años. — <span style={{fontWeight:400}}>Our children are five and eight years old.</span></p>
              <p className="es">¿Cómo se llama tu pareja? — <span style={{fontWeight:400}}>What's your partner's name?</span></p>
              <p className="es">Vuestros abuelos son muy simpáticos. — <span style={{fontWeight:400}}>Your grandparents are very nice.</span></p>
            </div>

            <h2>Introducing Family Members</h2>
            <div className="blog-example">
              <p className="es">Tengo dos hermanos y una hermana. — <span style={{fontWeight:400}}>I have two brothers and one sister.</span></p>
              <p className="es">Somos una familia de cuatro. — <span style={{fontWeight:400}}>We are a family of four.</span></p>
              <p className="es">Mi padre tiene sesenta años. — <span style={{fontWeight:400}}>My father is sixty years old.</span></p>
              <p className="es">Mis padres viven en el norte de Inglaterra. — <span style={{fontWeight:400}}>My parents live in the north of England.</span></p>
              <p className="es">Te presento a mi mujer, Sarah. — <span style={{fontWeight:400}}>Let me introduce my wife, Sarah.</span></p>
              <p className="es">Ella es mi prima — vivimos muy cerca. — <span style={{fontWeight:400}}>She's my cousin — we live very close.</span></p>
            </div>

            <div className="blog-highlight">
              <p>Family vocabulary is a key part of any introductory Spanish conversation. Learn the immediate family terms first, then in-laws — they come up constantly. Remember that possessive adjectives agree with the noun they describe, not with the owner.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to talk about your life in Spanish?</h3>
              <p>Family, home and personal life — these topics come up in every conversation. Let's practise so you can speak about yourself naturally and confidently.</p>
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
