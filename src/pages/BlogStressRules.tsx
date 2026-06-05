import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogStressRules() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Stress Rules: Which Syllable Gets the Emphasis | Mike Masters Languages',
    'Spanish word stress follows clear, learnable rules. Understand the default stress patterns, how accent marks override them, and why stress can change the meaning of a word entirely.'
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
            <span className="blog-hero-tag">Pronunciation</span>
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Spanish Stress Rules: Which Syllable Gets the Emphasis</h1>
          <p className="blog-hero-intro">
            Unlike English, where word stress is largely unpredictable and must be memorised, Spanish follows clear rules. Once you know them, you can read any word aloud with the correct emphasis — even words you have never seen before.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>English word stress is notoriously irregular. Consider "photograph" (PHO-to-graph), "photography" (pho-TOG-ra-phy) and "photographic" (pho-to-GRAPH-ic) — three related words, three different stress patterns, with no rule to explain why. Spanish is far more logical. There are two default rules, and a written accent mark clearly signals every exception. Learn the system once and it works everywhere.</p>

            <h2>Rule 1: Words Ending in a Vowel, N, or S</h2>
            <p>If a Spanish word ends in a vowel (a, e, i, o, u), the letter N, or the letter S, the <strong>stress falls on the second-to-last syllable</strong> (the penultimate syllable). This is the most common pattern in Spanish and covers the vast majority of everyday words.</p>

            <div className="blog-example">
              <p className="es"><strong>ha-BLO</strong> — I speak (ends in vowel O — stress on second-to-last syllable)</p>
              <p className="es"><strong>CO-mo</strong> — how / like (ends in vowel O)</p>
              <p className="es"><strong>ca-SA</strong> — house (ends in vowel A)</p>
              <p className="es"><strong>ha-BLAN</strong> — they speak (ends in N)</p>
              <p className="es"><strong>co-MEN</strong> — they eat (ends in N)</p>
              <p className="es"><strong>ca-SAS</strong> — houses (ends in S)</p>
              <p className="es"><strong>ha-BLAS</strong> — you speak (ends in S)</p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Word</th><th>Syllables</th><th>Stressed syllable</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  <tr><td>hablo</td><td>ha-blo</td><td>HA</td><td>I speak</td></tr>
                  <tr><td>madre</td><td>ma-dre</td><td>MA</td><td>mother</td></tr>
                  <tr><td>importante</td><td>im-por-tan-te</td><td>TAN</td><td>important</td></tr>
                  <tr><td>comen</td><td>co-men</td><td>CO</td><td>they eat</td></tr>
                  <tr><td>hablas</td><td>ha-blas</td><td>HA</td><td>you speak</td></tr>
                  <tr><td>viernes</td><td>vier-nes</td><td>VIER</td><td>Friday</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Rule 2: Words Ending in Any Other Consonant</h2>
            <p>If a Spanish word ends in any consonant other than N or S, the <strong>stress falls on the last syllable</strong>.</p>

            <div className="blog-example">
              <p className="es"><strong>ha-BLAR</strong> — to speak (ends in R)</p>
              <p className="es"><strong>ciu-DAD</strong> — city (ends in D)</p>
              <p className="es"><strong>es-pa-ÑOL</strong> — Spanish (ends in L)</p>
              <p className="es"><strong>re-LOJ</strong> — watch / clock (ends in J)</p>
              <p className="es"><strong>na-RIZ</strong> — nose (ends in Z)</p>
              <p className="es"><strong>co-MER</strong> — to eat (ends in R)</p>
            </div>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Word</th><th>Syllables</th><th>Stressed syllable</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  <tr><td>hablar</td><td>ha-blar</td><td>BLAR</td><td>to speak</td></tr>
                  <tr><td>ciudad</td><td>ciu-dad</td><td>DAD</td><td>city</td></tr>
                  <tr><td>español</td><td>es-pa-ñol</td><td>ÑOL</td><td>Spanish</td></tr>
                  <tr><td>azul</td><td>a-zul</td><td>ZUL</td><td>blue</td></tr>
                  <tr><td>hotel</td><td>ho-tel</td><td>TEL</td><td>hotel</td></tr>
                  <tr><td>feliz</td><td>fe-liz</td><td>LIZ</td><td>happy</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Accent Marks: Overriding the Default Rules</h2>
            <p>A written accent mark (tilde) on a vowel — á, é, í, ó, ú — signals that <strong>the stress falls on that syllable instead of where the rules would normally place it</strong>. This is the only exception mechanism in Spanish stress, and it is completely transparent: wherever you see an accent mark, that syllable is stressed, full stop.</p>

            <div className="blog-example">
              <p className="es"><strong>ca-FÉ</strong> — coffee (ends in vowel, so default rule says stress penultimate — but the accent overrides: stress the last syllable)</p>
              <p className="es"><strong>te-LÉ-fo-no</strong> — telephone (ends in vowel — default would be second-to-last: "teléFOno" — but accent marks the correct syllable: "teLÉfono")</p>
              <p className="es"><strong>MÚ-si-ca</strong> — music (stress is on the third-to-last syllable — two places from default, so accent required)</p>
              <p className="es"><strong>jó-ve-nes</strong> — young people (ends in S — default says penultimate "jo-VE-nes" — accent says stress the one before: "JO-venes")</p>
              <p className="es"><strong>fá-cil</strong> — easy (ends in L — default says last syllable "fa-CIL" — accent marks the first: "FÁ-cil")</p>
            </div>

            <div className="blog-tip">
              <p><strong>Key insight:</strong> The accent mark in Spanish is not decorative. It always and only means one thing: stress goes here, regardless of the default rules. If you see an accent, stress that syllable. If you do not see one, apply the two default rules based on how the word ends.</p>
            </div>

            <h2>Minimal Pairs: When Stress Changes Meaning</h2>
            <p>In some cases, identical spellings with different stress (shown by accent marks) are entirely different words. These are not just pronunciation variants — they mean different things. This shows why getting stress right matters for comprehension, not just sounding polished.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Word</th><th>Stress</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>hablo</strong></td><td>HA-blo</td><td>I speak (present tense)</td></tr>
                  <tr><td><strong>habló</strong></td><td>ha-BLÓ</td><td>He/she spoke (preterite)</td></tr>
                  <tr><td><strong>como</strong></td><td>CO-mo</td><td>like / how / as</td></tr>
                  <tr><td><strong>comó</strong></td><td>co-MÓ</td><td>(this form doesn't exist, but see below)</td></tr>
                  <tr><td><strong>canto</strong></td><td>CAN-to</td><td>I sing (present)</td></tr>
                  <tr><td><strong>cantó</strong></td><td>can-TÓ</td><td>He/she sang (preterite)</td></tr>
                  <tr><td><strong>este</strong></td><td>ES-te</td><td>this (adjective)</td></tr>
                  <tr><td><strong>éste</strong></td><td>ÉS-te</td><td>this one (pronoun — accent now optional in modern Spanish)</td></tr>
                  <tr><td><strong>sí</strong></td><td>SÍ</td><td>yes</td></tr>
                  <tr><td><strong>si</strong></td><td>si</td><td>if</td></tr>
                  <tr><td><strong>más</strong></td><td>MÁS</td><td>more</td></tr>
                  <tr><td><strong>mas</strong></td><td>mas</td><td>but (literary/archaic)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Syllable Counting: Getting It Right</h2>
            <p>To apply the stress rules, you need to count syllables correctly. In Spanish, each vowel (or diphthong) forms the core of a syllable. Two adjacent vowels that form a diphthong count as one syllable; two vowels that form a hiatus (broken by an accent on the weak vowel) count as two.</p>

            <div className="blog-example">
              <p className="es"><strong>bien</strong> — good (one syllable: IE is a diphthong)</p>
              <p className="es"><strong>día</strong> — day (two syllables: DÍ-A — accent breaks diphthong)</p>
              <p className="es"><strong>bueno</strong> — good (two syllables: BUE-no — UE is a diphthong)</p>
              <p className="es"><strong>poeta</strong> — poet (three syllables: po-E-ta — OE is not a diphthong; both are strong vowels)</p>
            </div>

            <div className="blog-tip">
              <p><strong>Practice method:</strong> Take any Spanish word you know and clap once per syllable while saying it. Then check which syllable you naturally stress. Compare that to what the rules predict. This builds intuition faster than memorising abstract rules alone.</p>
            </div>

            <div className="blog-highlight">
              <p>Spanish stress follows two simple rules: words ending in a vowel, N, or S stress the penultimate syllable; words ending in other consonants stress the final syllable. A written accent mark always overrides these defaults, marking exactly where the stress goes. Mastering this system means you can confidently pronounce any Spanish word you encounter in writing.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to speak with natural Spanish rhythm?</h3>
              <p>Stress patterns are one of those things that become second nature with practice and feedback. Let's work through them together.</p>
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
