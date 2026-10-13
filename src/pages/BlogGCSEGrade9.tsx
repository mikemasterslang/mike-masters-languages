import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGCSEGrade9() {
  useScrollAnimation();
  usePageMeta(
    'How to Get a Grade 9 in GCSE Spanish | Mike Masters Languages',
    'What does Grade 9 GCSE Spanish actually look like? The specific skills, language choices and exam techniques that separate the top grade from a Grade 7 or 8.'
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
            <span className="blog-hero-tag">Tips</span>
            <span className="blog-hero-date">October 2026</span>
          </div>
          <h1>How to Get a Grade 9 in GCSE Spanish</h1>
          <p className="blog-hero-intro">Grade 9 isn't about knowing more vocabulary than everyone else — it's about demonstrating a specific set of language skills consistently across all four papers. Here's what that means in practice.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>Grade 9 is awarded to roughly the top 3–5% of students in any GCSE subject. In Spanish, this doesn't mean being a near-native speaker — it means demonstrating consistent accuracy, a wide range of language, and the ability to communicate complex ideas clearly. All of this is achievable with the right preparation.</p>

            <h2>What Separates Grade 9 from Grade 7</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Area</th><th>Grade 7</th><th>Grade 9</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Grammar accuracy</td>
                    <td>Mostly accurate, occasional errors</td>
                    <td>Highly accurate, errors are rare and minor</td>
                  </tr>
                  <tr>
                    <td>Tense range</td>
                    <td>3+ tenses used</td>
                    <td>Full range including subjunctive and conditional</td>
                  </tr>
                  <tr>
                    <td>Vocabulary</td>
                    <td>Good range, some repetition</td>
                    <td>Wide and varied, uses synonyms throughout</td>
                  </tr>
                  <tr>
                    <td>Sentence complexity</td>
                    <td>Simple and compound sentences</td>
                    <td>Complex sentences with subordinate clauses</td>
                  </tr>
                  <tr>
                    <td>Speaking</td>
                    <td>Fluent with occasional hesitation</td>
                    <td>Natural rhythm, spontaneous responses</td>
                  </tr>
                  <tr>
                    <td>Writing</td>
                    <td>Communicates clearly</td>
                    <td>Reads like a confident Spanish writer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>The Grammar Structures That Signal Grade 9</h2>
            <p>These are the structures that examiners at all boards reward most heavily at the top of the mark scheme. You don't need to master all of them — you need to use a selection of them reliably and accurately.</p>

            <h3>The Subjunctive</h3>
            <p>The subjunctive appears in Grade 9 writing and speaking. You don't need to master every use — just the most common ones, learned so thoroughly you can deploy them under pressure.</p>

            <div className="blog-example">
              <p className="es">Espero que tengamos más tiempo libre. — <span style={{fontWeight:400}}>I hope we have more free time.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Quiero que la gente recicle más. — <span style={{fontWeight:400}}>I want people to recycle more.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">No creo que sea fácil. — <span style={{fontWeight:400}}>I don't think it's easy.</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Subjunctive shortcut:</strong> You only need two or three reliable subjunctive phrases to impress. Learn them so thoroughly you can use them under pressure. <em>Espero que</em> and <em>no creo que</em> will serve you well across all topics.</p>
            </div>

            <h3>The Conditional</h3>
            <p>The conditional is one of the clearest markers of higher-grade writing and speaking. Use it to express wishes, hypotheticals, and preferences.</p>

            <div className="blog-example">
              <p className="es">Me gustaría vivir en el extranjero algún día. — <span style={{fontWeight:400}}>I would like to live abroad one day.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Sería mejor si hubiera más transporte público. — <span style={{fontWeight:400}}>It would be better if there were more public transport.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Si tuviera la oportunidad, estudiaría en España. — <span style={{fontWeight:400}}>If I had the opportunity, I would study in Spain.</span></p>
            </div>

            <h3>Complex Connectives</h3>
            <p>Move beyond <em>pero</em> and <em>y</em>. Grade 9 students use connectives that add nuance and contrast.</p>

            <div className="blog-example">
              <p className="es">Aunque es caro, creo que merece la pena. — <span style={{fontWeight:400}}>Even though it's expensive, I think it's worth it.</span></p>
            </div>

            <p>Other connectives to master: <em>a pesar de que, sin embargo, no obstante, por lo tanto.</em> Each one adds sophistication and signals to the examiner that you're operating at the top of the range.</p>

            <h3>Relative Clauses</h3>
            <p>Using <em>que, quien, lo que, el/la cual</em> to build longer, more complex sentences is a reliable marker of Grade 9 writing.</p>

            <div className="blog-example">
              <p className="es">El problema que más me preocupa es el cambio climático. — <span style={{fontWeight:400}}>The problem that worries me most is climate change.</span></p>
            </div>

            <h2>Speaking — What Grade 9 Sounds Like</h2>
            <p>Grade 9 speaking is characterised by: responding without long pauses; extending answers unprompted rather than waiting for the next question; using discourse markers naturally (<em>pues, bueno, es que, a ver, la verdad es que</em>); correcting oneself naturally mid-sentence; and giving specific details and examples, not just general statements.</p>

            <div className="blog-highlight">
              <p>The biggest gap between Grade 7 and Grade 9 speaking is spontaneity. Grade 7 students answer the question. Grade 9 students answer the question and add context, an opinion, an example, or a follow-up thought — unprompted. That habit alone can push a score up by several marks across the exam.</p>
            </div>

            <h2>Writing — What Grade 9 Looks Like</h2>
            <p>No sentence sounds like it was translated word-for-word from English. Sentence openers are varied — not every sentence begins with "I" or a subject pronoun. Impersonal expressions are used naturally: <em>hay que, es importante que, se podría decir que.</em> Agreement is checked throughout — adjective gender and number, past participle agreement. And the overall style reads fluently, with a sense that the writer is thinking in Spanish rather than converting from English.</p>

            <h2>Revision Strategy for Grade 9</h2>
            <p>Timed practice under exam conditions should begin from at least October of Year 11 — not just in the weeks before the exam. Get feedback on your writing from someone who marks against the actual mark scheme, not just someone who checks for mistakes. For speaking, do at least two full mock exams before the real one. Identify your weakest paper and weight your revision accordingly — a Grade 4 in listening with a Grade 7 in writing is harder to recover than balanced Grade 6s across all papers.</p>

            <div className="blog-tip">
              <p><strong>The consistency factor:</strong> The difference between a Grade 8 and a Grade 9 is often just consistency. Grade 9 students don't have one brilliant skill — they're solid across everything. If one paper is significantly weaker than the others, that's where to focus.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Need help with your GCSE Spanish?</h3>
              <p>Getting to Grade 9 is about targeted preparation, not just hard work — a tutor who knows the mark scheme can identify the specific gaps holding you back and build a plan around them.</p>
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
