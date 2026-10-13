import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGCSEWriting() {
  useScrollAnimation();
  usePageMeta(
    'GCSE Spanish Writing Exam: Tips for Grade 7, 8 and 9 | Mike Masters Languages',
    'How to approach the GCSE Spanish writing exam. What the mark scheme rewards, how to use tenses effectively, and the specific techniques that push you from Grade 5 to Grade 9.'
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
          <h1>GCSE Spanish Writing Exam: How to Push From Grade 5 to Grade 9</h1>
          <p className="blog-hero-intro">The writing exam rewards preparation more than almost any other part of GCSE Spanish. Here's what the mark scheme actually values — and how to deliver it consistently.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The GCSE Spanish writing exam tests your ability to communicate in writing, use a range of language accurately, and demonstrate grammatical understanding. The same marking criteria apply across all exam boards — AQA, Edexcel, OCR — though the tasks differ slightly in length and format.</p>

            <h2>What the Mark Scheme Values</h2>
            <p>All boards assess three areas: communication and content (did you address the task and provide enough detail?), range and accuracy of language (variety of vocabulary, tenses, structures), and — on the Higher tier — quality of language (grammatical complexity and accuracy under pressure).</p>

            <div className="blog-highlight">
              <p>The fastest way to improve your writing mark is to use a wider range of tenses. Examiners at all boards are explicitly looking for past, present and future in every extended piece. If you're only writing in the present tense, you're capping your grade at around a 4 or 5, regardless of how accurate or fluent that present tense is.</p>
            </div>

            <h2>The Tasks</h2>
            <p>Foundation tier includes two tasks: a short message or note (approximately 40 words) and a longer piece (approximately 90 words). Higher tier also has two tasks — a structured piece (approximately 90 words) and an extended piece (approximately 150 words) — plus a translation from English into Spanish. The translation task is often the hardest part of the Higher paper and requires close grammatical accuracy throughout.</p>

            <h2>How to Use Tenses Effectively</h2>

            <div className="blog-tip">
              <p><strong>Tense toolkit:</strong> Build two or three phrases for each tense that you can drop into any answer on any topic. Practise them until they're automatic — you shouldn't be thinking about how to form the preterite when you're also thinking about what to say.</p>
            </div>

            <div className="blog-example">
              <p className="es">Normalmente me gusta mucho... / En general, creo que... — <span style={{fontWeight:400}}>Present tense openers.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">El año pasado fui a... / La semana pasada comí... — <span style={{fontWeight:400}}>Preterite tense openers.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Cuando era niño/a, solía... / Antes, pensaba que... — <span style={{fontWeight:400}}>Imperfect tense openers.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">El año que viene voy a... / En el futuro me gustaría... — <span style={{fontWeight:400}}>Future tense openers.</span></p>
            </div>

            <div className="blog-example">
              <p className="es">Sería fantástico si... / Me gustaría poder... — <span style={{fontWeight:400}}>Conditional tense openers.</span></p>
            </div>

            <h2>The Translation Task (Higher)</h2>
            <p>Prepare the high-frequency structures that appear most often: relative clauses with <em>que</em>, time expressions (<em>cuando, antes de, después de</em>), and opinion phrases with subjunctive (<em>espero que, no creo que</em>). Common pitfalls include forgetting gender agreement, mixing up <em>ser</em> and <em>estar</em>, and using English word order in Spanish sentences.</p>

            <div className="blog-tip">
              <p><strong>Translation method:</strong> Read the whole passage before starting. Identify the tenses first — one tense error can ripple across several words. Then translate clause by clause, checking agreement as you go. Never translate word by word in sequence without reading ahead.</p>
            </div>

            <h2>Common Mistakes That Cost Grades</h2>
            <p>The most frequent errors examiners see are: writing only in the present tense; using the same vocabulary throughout (repetition is explicitly penalised in the mark scheme); forgetting to check adjective agreement; translating word-for-word from English; and not answering the question that was actually asked. Task completion is marked separately and directly — you can write beautiful Spanish and still lose marks if you've missed the point of the task.</p>

            <h2>What Grade 9 Writing Looks Like</h2>
            <p>Grade 9 writing is accurate across all tenses, including the subjunctive. The vocabulary is wide and varied — synonyms are used, repetition is avoided. Sentences are complex, connected with subordinating conjunctions (<em>aunque, sin embargo, a pesar de</em>). Personal opinion is clearly expressed and justified, not just stated. And crucially, it reads naturally — not like a translated English sentence.</p>

            <div className="blog-author-cta">
              <h3>Need help with your GCSE Spanish?</h3>
              <p>Essay technique and grammar accuracy are exactly what we focus on in writing-focused tuition sessions — even two or three targeted sessions can make a measurable difference to your grade.</p>
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
