import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGCSESpeaking() {
  useScrollAnimation();
  usePageMeta(
    'GCSE Spanish Speaking Exam: What to Expect and How to Prepare | Mike Masters Languages',
    'Everything you need to know about the GCSE Spanish speaking exam — format, mark scheme, photo card tips, conversation topics and how to prepare effectively.'
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
          <h1>GCSE Spanish Speaking Exam: What to Expect and How to Prepare</h1>
          <p className="blog-hero-intro">The speaking exam is the one students dread most — but it's also the one where preparation makes the biggest difference. Here's exactly what happens and how to get ready for it.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The GCSE Spanish speaking exam is conducted by your teacher (not an external examiner) and is recorded. It takes place during the spring term of Year 11. Most students find it more manageable once they know the format — the unknown is usually what causes the nerves.</p>

            <h2>The Format</h2>
            <p>There are two tasks: a photo card task and a general conversation. The total time is approximately 10–12 minutes. The examiner — your teacher — asks questions based on a photo card you see 12 minutes before the exam begins. This is followed by a general conversation covering two themes from the GCSE specification.</p>

            <h2>The Photo Card Task</h2>
            <p>You're given a photo and five bullet point questions. You have 12 minutes to prepare — no dictionary allowed. The first question is always the same across all exam boards:</p>

            <div className="blog-example">
              <p className="es">¿Qué hay en la foto? — <span style={{fontWeight:400}}>What is in the photo?</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Technique:</strong> Describe the photo systematically — who is in it, what they're doing, where they are, what the atmosphere is like. Then speculate: ¿Por qué hacen esto? ¿Cuándo fue tomada? Aim for 5–6 sentences minimum.</p>
            </div>

            <p>The remaining questions extend into opinion, experience, and future plans — so prepare for all three tenses when you're in that preparation room. A photo of people eating in a restaurant could lead to questions about your own eating habits, a memorable meal, or what you'd like to do in the future.</p>

            <div className="blog-example">
              <p className="es">En la foto hay un grupo de jóvenes que están comiendo en un restaurante. Parece que están celebrando algo porque todos están sonriendo. — <span style={{fontWeight:400}}>In the photo there is a group of young people eating in a restaurant. It looks like they are celebrating something because everyone is smiling.</span></p>
            </div>

            <h2>The General Conversation</h2>
            <p>The general conversation covers two themes, chosen partly by you in advance. The GCSE Spanish themes are: Identity and culture; Local area, holiday and travel; School; Future aspirations; International and global dimension; Current and future study and employment. Prepare two of these thoroughly — you can steer the conversation by knowing your material well and volunteering information the examiner hasn't even asked for yet.</p>

            <div className="blog-highlight">
              <p>The examiner is not trying to catch you out — they're trying to give you opportunities to show what you know. If a question confuses you, it's fine to say: <em>No estoy seguro/a, pero creo que...</em> (I'm not sure, but I think...). That phrase alone keeps the conversation moving and shows you can handle uncertainty in the language.</p>
            </div>

            <h2>The Mark Scheme — What Examiners Are Looking For</h2>
            <p>All exam boards assess the same three areas: communication (can the examiner understand you?), range and accuracy of language (variety of tenses, complex structures), and pronunciation and intonation. Here's how that translates into grades:</p>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>What it typically looks like</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Grade 5</td>
                    <td>Mostly present tense, some errors, generally understood, limited range of vocabulary and structure</td>
                  </tr>
                  <tr>
                    <td>Grade 7</td>
                    <td>Uses at least three tenses, mostly accurate, clear pronunciation, some spontaneity in answers</td>
                  </tr>
                  <tr>
                    <td>Grade 9</td>
                    <td>Fluent delivery, wide range of structures, unprompted opinions, near-native rhythm and intonation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>How to Prepare</h2>
            <p>Learn three or four "banker phrases" in each tense and practise inserting them into any answer. Prepare opinions on every theme — agree, disagree, and justify. Record yourself speaking and listen back: most students have pronunciation habits they're entirely unaware of until they hear themselves. And practise with someone who will actually correct you, not just nod along.</p>

            <div className="blog-tip">
              <p><strong>The most effective daily habit:</strong> Talk about yourself in Spanish every day — out loud, alone if necessary. Describe your day, your opinions, your plans. The fluency that comes from this is exactly what the examiner is looking for. Five minutes a day beats one hour once a week.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Need help with your GCSE Spanish?</h3>
              <p>A tutor can run mock speaking exams with you, correct your errors in real time, and help you build the confidence that makes the difference on the day.</p>
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
