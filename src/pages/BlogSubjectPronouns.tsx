import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSubjectPronouns() {
  useScrollAnimation();
  usePageMeta(
    'Spanish Subject Pronouns: When to Drop Them and Sound More Natural | Mike Masters Languages',
    'In Spanish, you often don\'t need subject pronouns like yo, tú or él. Learn when to drop them, when to keep them, and why this makes you sound far more natural.'
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
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>Spanish Subject Pronouns: When to Drop Them and Sound More Natural</h1>
          <p className="blog-hero-intro">
            In English, you must always say "I", "she" or "they". In Spanish, you often don't — and dropping them is actually what sounds more natural.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              One of the first things Spanish teachers tell beginners is the list of subject pronouns: <em>yo, tú, él, ella, nosotros, vosotros, ellos</em>. You learn them, you practise them, and then you use them — in every single sentence.
            </p>
            <p>
              The problem? Native Spanish speakers don't do that. Over-using subject pronouns is one of the clearest signs that someone has learned Spanish from a textbook rather than real conversation. This post explains why, and what to do instead.
            </p>

            <h2>Why Spanish Doesn't Need Subject Pronouns</h2>
            <p>
              In English, the verb doesn't change much depending on who's doing the action. "I speak", "you speak", "we speak" — the verb stays the same, so we need the pronoun to tell us who's speaking.
            </p>
            <p>
              Spanish is different. Each verb ending changes depending on the subject, which means the verb itself tells you who's doing the action. The pronoun becomes <strong>redundant</strong>.
            </p>

            <p>Look at the verb <em>hablar</em> (to speak) in the present tense:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Pronoun</th><th>Verb</th><th>What it tells you</th></tr>
                </thead>
                <tbody>
                  <tr><td>yo</td><td><strong>hablo</strong></td><td>The -o ending already means "I"</td></tr>
                  <tr><td>tú</td><td><strong>hablas</strong></td><td>The -as ending already means "you"</td></tr>
                  <tr><td>él / ella</td><td><strong>habla</strong></td><td>The -a ending means "he / she / it"</td></tr>
                  <tr><td>nosotros</td><td><strong>hablamos</strong></td><td>The -amos ending means "we"</td></tr>
                  <tr><td>vosotros</td><td><strong>habláis</strong></td><td>The -áis ending means "you all" (Spain)</td></tr>
                  <tr><td>ellos / ellas</td><td><strong>hablan</strong></td><td>The -an ending means "they"</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              Because each ending is distinct, saying "Yo hablo español" is like saying "I-me I speak Spanish" in English — the "yo" is already built into "hablo". It's not wrong exactly, but it sounds unnatural.
            </p>

            <div className="blog-tip">
              <p><strong>Linguists call this "pro-drop"</strong> — Spanish is a pro-drop language, meaning the subject pronoun can be dropped because the verb ending carries the information. Italian, Portuguese and many other languages work the same way.</p>
            </div>

            <h2>In Practice: What This Looks Like</h2>

            <div className="blog-example">
              <p className="es wrong">✗ Yo hablo español y yo vivo en Madrid.</p>
              <p className="es right">✓ Hablo español y vivo en Madrid.</p>
              <p className="en">I speak Spanish and I live in Madrid.</p>
            </div>

            <div className="blog-example">
              <p className="es wrong">✗ Ella se llama Ana y ella trabaja en un hospital.</p>
              <p className="es right">✓ Se llama Ana y trabaja en un hospital.</p>
              <p className="en">Her name is Ana and she works in a hospital.</p>
            </div>

            <p>The second version in each case is what a native speaker would naturally say. The pronoun adds nothing.</p>

            <h2>When You Should Keep the Pronoun</h2>
            <p>
              Dropping the pronoun is the default — but there are situations where keeping it is correct and even important. Here's when to use it:
            </p>

            <h3>1. For Emphasis</h3>
            <p>If you want to stress who did something — especially if there's some ambiguity or surprise involved:</p>
            <div className="blog-example">
              <p className="es">Yo lo hice. — <span style={{fontWeight: 400}}>I did it. (Not someone else — me.)</span></p>
              <p className="es">¿Tú hablas ruso? — <span style={{fontWeight: 400}}>You speak Russian? (Surprised emphasis)</span></p>
            </div>

            <h3>2. For Contrast</h3>
            <p>When comparing two different subjects doing different things:</p>
            <div className="blog-example">
              <p className="es">Tú hablas español pero yo hablo francés.</p>
              <p className="en">You speak Spanish but I speak French.</p>
            </div>

            <h3>3. To Clarify Ambiguity</h3>
            <p>
              The third person forms (él, ella, usted) all use the same verb endings. If it's not clear from context who you're talking about, the pronoun helps:
            </p>
            <div className="blog-example">
              <p className="es">Él trabaja en Londres pero ella trabaja en Madrid.</p>
              <p className="en">He works in London but she works in Madrid.</p>
            </div>
            <p>Without the pronouns here, it would be unclear who's in which city.</p>

            <h3>4. With Usted (Formal "You")</h3>
            <p>
              In formal or polite situations, including <em>usted</em> shows respect. It's common in professional settings, when speaking to someone older, or with strangers:
            </p>
            <div className="blog-example">
              <p className="es">¿Usted habla inglés? — <span style={{fontWeight: 400}}>Do you speak English? (formal)</span></p>
            </div>

            <h3>5. After a Pause or Change of Subject</h3>
            <p>
              In longer conversations, if there's a shift to a new subject or a pause in the dialogue, using the pronoun helps reorient the listener:
            </p>
            <div className="blog-example">
              <p className="es">Ana estudia medicina. Ella quiere ser cirujana.</p>
              <p className="en">Ana studies medicine. She wants to be a surgeon.</p>
            </div>

            <h2>A Note on Yo</h2>
            <p>
              <em>Yo</em> (I) is probably the pronoun beginners overuse most, because it's the first one you learn and it feels anchoring. But native speakers use it sparingly — only when emphasis or contrast requires it.
            </p>
            <div className="blog-highlight">
              <p>A quick exercise: record yourself speaking a few sentences in Spanish and count how many times you say "yo". If it appears in almost every sentence, practise dropping it and see how much more natural it sounds.</p>
            </div>

            <h2>Quick Reference</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Drop the pronoun when...</th><th>Keep the pronoun when...</th></tr>
                </thead>
                <tbody>
                  <tr><td>The subject is clear from the verb ending</td><td>You want to add emphasis</td></tr>
                  <tr><td>You've just mentioned the subject</td><td>You're contrasting two subjects</td></tr>
                  <tr><td>There's no ambiguity</td><td>Él/ella/usted could be confused</td></tr>
                  <tr><td>Speaking at a normal conversational pace</td><td>Using usted in formal contexts</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              Getting comfortable with pro-drop is one of the things that makes your Spanish feel genuinely fluent rather than translated from English. It's a small change with a big impact on how natural you sound.
            </p>

            <div className="blog-author-cta">
              <h3>Ready to speak more natural Spanish?</h3>
              <p>These habits are much easier to build with real conversation practice. Get in touch to find out how I can help.</p>
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
