import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogVowelSounds() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Vowel Sounds: Pure, Clear and Consistent | Mike Masters Languages',
    'Spanish has five pure vowels that never change. Learn how each one sounds compared to English, how diphthongs work, and why consistent vowels are the foundation of good Spanish pronunciation.'
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
          <h1>Spanish Vowel Sounds: Pure, Clear and Consistent</h1>
          <p className="blog-hero-intro">
            Spanish has just five vowels, and they each make one sound — always. Getting these right is the single most important step toward sounding natural in Spanish.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>English has around 15 to 20 distinct vowel sounds depending on the accent. Spanish has five. That might sound easier — and in one sense it is — but English speakers still need to actively unlearn several habits that make their Spanish vowels sound off. The core principle is this: <strong>every Spanish vowel sounds the same every single time it appears</strong>, regardless of which word it is in, which syllable it falls on, or whether it is stressed or unstressed.</p>

            <h2>The Five Spanish Vowels</h2>
            <p>Each vowel has one fixed, pure sound. There is no equivalent to the English "schwa" — the weak, reduced "uh" sound that English uses in unstressed syllables (think of the A in "about" or the E in "taken"). In Spanish, every vowel is spoken clearly, even if it is not stressed.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Vowel</th><th>Approximate Sound</th><th>English Nearest</th><th>Example Words</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>a</strong></td>
                    <td>open, central</td>
                    <td>"a" in <em>father</em> or <em>bath</em> (RP)</td>
                    <td>casa, hablar, mañana</td>
                  </tr>
                  <tr>
                    <td><strong>e</strong></td>
                    <td>mid-front</td>
                    <td>"e" in <em>bed</em> or <em>met</em></td>
                    <td>este, comer, verde</td>
                  </tr>
                  <tr>
                    <td><strong>i</strong></td>
                    <td>high-front</td>
                    <td>"ee" in <em>feet</em> but shorter and crisper</td>
                    <td>sí, vivir, familia</td>
                  </tr>
                  <tr>
                    <td><strong>o</strong></td>
                    <td>mid-back, rounded</td>
                    <td>"o" in <em>more</em> — but without the glide</td>
                    <td>cosa, color, foto</td>
                  </tr>
                  <tr>
                    <td><strong>u</strong></td>
                    <td>high-back, rounded</td>
                    <td>"oo" in <em>food</em> but shorter</td>
                    <td>uno, mucho, azul</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>The Key Difference: No Gliding</h2>
            <p>English vowels are <strong>diphthongised</strong> — they glide from one position to another. The English word "no" does not stay on a pure O sound; it moves toward "oo" (noh-oo). The English word "day" glides from "eh" toward "ee". This gliding is so natural to English speakers that most do not notice it at all.</p>
            <p>Spanish vowels do not glide. They are short, single-position sounds. When you say the Spanish word <em>no</em>, it is a clean, stable O from start to finish — there is no movement toward another vowel position.</p>

            <div className="blog-example">
              <p className="es"><strong>sí</strong> — yes (pure "ee", not the gliding "ee" of English "see")</p>
              <p className="es"><strong>no</strong> — no (pure "o", not the gliding "oh" of English "no")</p>
              <p className="es"><strong>me llamo</strong> — my name is (the A in <em>llamo</em> is the same open A each time)</p>
              <p className="es"><strong>hablo español</strong> — I speak Spanish (each vowel is its own clean sound)</p>
            </div>

            <div className="blog-tip">
              <p><strong>Exercise:</strong> Say the English word "day". Notice how your mouth moves — it starts at "eh" and glides to "ee". Now say the Spanish word <em>de</em> (of). Freeze your mouth the moment the vowel starts and hold it there — no glide. That fixed position is your Spanish E.</p>
            </div>

            <h2>Unstressed Vowels: Keep Them Full</h2>
            <p>This is where English speakers most often go wrong. In English, any unstressed vowel tends to reduce to a schwa — a neutral, lazy "uh" sound. Consider the word "banana": in English it is pronounced "buh-NA-nuh", with two schwas. In Spanish, <em>banana</em> is "ba-NA-na" — every A is the same clear, open sound.</p>
            <p>This applies to every Spanish vowel in every position. An unstressed E does not become "uh". An unstressed O does not become "uh". Each vowel keeps its full identity throughout.</p>

            <div className="blog-example">
              <p className="es"><strong>importante</strong> — important (all five vowels: i-o-a-e — each one clear)</p>
              <p className="es"><strong>complicado</strong> — complicated (o-i-a-o — no reductions)</p>
              <p className="es"><strong>universidad</strong> — university (u-i-e-i-a — each distinct)</p>
            </div>

            <h2>Spanish Diphthongs: Two Vowels Together</h2>
            <p>When two vowels appear side by side in Spanish, they often combine into a <strong>diphthong</strong> — a single syllable that glides smoothly between the two vowel sounds. This is different from English diphthongs: in Spanish, you can clearly hear both original vowels.</p>
            <p>Diphthongs form when a "weak" vowel (I or U) appears alongside a "strong" vowel (A, E, or O), or when two weak vowels appear together.</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Diphthong</th><th>Sounds Like</th><th>Example</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>ie</strong></td><td>"yeh"</td><td>bien, siete, tiene</td><td>well, seven, he has</td></tr>
                  <tr><td><strong>ue</strong></td><td>"weh"</td><td>bueno, puede, fuego</td><td>good, he can, fire</td></tr>
                  <tr><td><strong>ia</strong></td><td>"yah"</td><td>gracias, familia</td><td>thank you, family</td></tr>
                  <tr><td><strong>ua</strong></td><td>"wah"</td><td>cuando, agua</td><td>when, water</td></tr>
                  <tr><td><strong>io</strong></td><td>"yo"</td><td>radio, idioma</td><td>radio, language</td></tr>
                  <tr><td><strong>ui</strong></td><td>"wee"</td><td>muy, cuidado</td><td>very, careful</td></tr>
                  <tr><td><strong>au</strong></td><td>"ow" (like in <em>cow</em>)</td><td>autobús, causa</td><td>bus, cause</td></tr>
                  <tr><td><strong>ei / ey</strong></td><td>"ey"</td><td>veinte, ley</td><td>twenty, law</td></tr>
                </tbody>
              </table>
            </div>

            <p>When an accent mark appears over a weak vowel next to a strong one, the diphthong is broken and the vowels form <strong>two separate syllables</strong>. This is called a hiatus.</p>

            <div className="blog-example">
              <p className="es"><strong>río</strong> — river (rí-o: two syllables — the accent breaks the diphthong)</p>
              <p className="es"><strong>día</strong> — day (dí-a: two syllables)</p>
              <p className="es"><strong>frío</strong> — cold (frí-o: two syllables)</p>
              <p className="es">Compare: <strong>radio</strong> (ra-dio: two syllables, diphthong) vs <strong>día</strong> (dí-a: two syllables, hiatus)</p>
            </div>

            <h2>Why Getting Vowels Right Changes Everything</h2>
            <p>Spanish speakers use vowel sounds as key anchors for understanding speech. Because Spanish vowels are so consistent, a native speaker's brain is tuned to expect each vowel to sound a specific way. When an English speaker reduces vowels to schwas or glides them, the distortion can make words genuinely difficult to recognise — even if the consonants are perfect.</p>
            <p>Conversely, getting the vowels right has an outsized positive effect. Even with imperfect consonants, clear Spanish vowels make your speech dramatically more intelligible and natural-sounding.</p>

            <div className="blog-tip">
              <p><strong>Daily practice:</strong> Pick five Spanish words you use often and say them aloud, deliberately holding each vowel at its pure position. Common ones to start with: <em>gracias, bueno, hola, cómo, estoy</em>. Do this for one week and notice the difference.</p>
            </div>

            <div className="blog-highlight">
              <p>Spanish has five vowels, each with one fixed, pure sound. Unlike English, vowels never reduce to a schwa and never glide to another position. When two vowels meet, they often combine into a diphthong — but both vowel sounds remain audible. Mastering these five sounds is the single biggest step you can take toward natural Spanish pronunciation.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want cleaner, more natural vowels in Spanish?</h3>
              <p>Pronunciation habits are easiest to build — and hardest to break — early on. Getting personalised feedback from a tutor makes the process much faster.</p>
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
