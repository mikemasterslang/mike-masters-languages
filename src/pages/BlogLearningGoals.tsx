import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogLearningGoals() {
  useScrollAnimation();
  usePageMeta(
    'How to Set Realistic Spanish Learning Goals | Mike Masters Languages',
    'Vague goals like "get better at Spanish" don\'t work. Learn how CEFR levels work, what realistic timelines look like, and how to set process goals that actually drive progress.'
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
            <span className="blog-hero-date">May 2026</span>
          </div>
          <h1>How to Set Realistic Spanish Learning Goals</h1>
          <p className="blog-hero-intro">
            "Get better at Spanish" is not a goal — it's a wish. Here's how to set goals that actually drive progress, and what realistic timelines look like for adult learners.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              One of the most common conversations I have with new students goes like this: I ask what they want to achieve with Spanish, and they say something like "I just want to be conversational" or "I want to be fluent by summer." These goals feel meaningful, but they're too vague to act on and often set unrealistic expectations.
            </p>
            <p>
              The consequence of vague goals is that you never quite know if you're on track. You might be making real progress and still feel like you're failing because "conversational" remains out of reach. Better goals are specific, measurable, and connected to a realistic timeline.
            </p>

            <h2>Why Vague Goals Fail</h2>
            <p>
              "I want to be fluent" is the most common language learning goal and the least useful. Fluency means different things to different people — for some it means ordering confidently in a restaurant; for others it means discussing politics without hesitation. Without a definition, you can't measure it and you can't plan for it.
            </p>
            <p>
              Vague goals also set you up for discouragement. If your goal is "fluency" and you reach a level where you can have basic conversations, you don't feel like you've achieved anything — because "fluency" still feels far away. You've made real progress but it's invisible because your goal wasn't specific enough to capture it.
            </p>

            <h2>The CEFR Levels — Explained Simply</h2>
            <p>
              The Common European Framework of Reference (CEFR) is the standard system for describing language levels. It gives you something concrete to aim for. The six levels, in plain English:
            </p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Level</th><th>What you can do</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>A1 — Beginner</strong></td><td>Introduce yourself, ask very basic questions, understand very slow, clear speech on familiar topics</td></tr>
                  <tr><td><strong>A2 — Elementary</strong></td><td>Handle simple transactions (shopping, travel), describe your background, have basic social exchanges</td></tr>
                  <tr><td><strong>B1 — Intermediate</strong></td><td>Deal with most everyday situations as a traveller, talk about your experiences and opinions on familiar topics, follow the main points of news and simple texts</td></tr>
                  <tr><td><strong>B2 — Upper Intermediate</strong></td><td>Interact fluently with native speakers, understand a wide range of demanding texts, express yourself clearly on complex subjects</td></tr>
                  <tr><td><strong>C1 — Advanced</strong></td><td>Communicate spontaneously and fluently with very little noticeable hesitation, handle complex professional and academic language</td></tr>
                  <tr><td><strong>C2 — Mastery</strong></td><td>Understand virtually everything you read or hear, express yourself very precisely and with nuance even in complex situations</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              For most people who want Spanish for travel and living in Spain, <strong>B1 is the meaningful target</strong>. At B1 you can function comfortably in everyday Spanish situations, have genuine conversations, and handle unexpected situations without freezing. It's not perfect Spanish — but it's genuinely useful Spanish.
            </p>

            <h2>Realistic Timelines</h2>
            <p>
              The most-cited estimate for Spanish (as a native English speaker) comes from the US Foreign Service Institute: roughly <strong>600–750 hours</strong> of study to reach professional working proficiency (roughly B2–C1). Spanish is classified as a Category I language — the easiest category for English speakers, alongside French, Italian and Portuguese.
            </p>
            <p>
              Breaking that down practically:
            </p>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>Study per day</th><th>Time to A2</th><th>Time to B1</th><th>Time to B2</th></tr>
                </thead>
                <tbody>
                  <tr><td>15 minutes</td><td>~18 months</td><td>~3–4 years</td><td>~6–7 years</td></tr>
                  <tr><td>30 minutes</td><td>~9 months</td><td>~18–24 months</td><td>~3–4 years</td></tr>
                  <tr><td>1 hour</td><td>~5 months</td><td>~12 months</td><td>~18–24 months</td></tr>
                  <tr><td>2 hours</td><td>~3 months</td><td>~6 months</td><td>~12 months</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These are rough estimates assuming consistent, focused study — not passive app use. Your actual progress depends heavily on the quality of your practice, how much speaking you do, and whether you have structured teaching or are going it alone.
            </p>
            <div className="blog-tip">
              <p><strong>Be honest about how much you're actually studying.</strong> Most people overestimate their study time. Ten minutes of Duolingo while watching TV is not an hour of study. Track your actual focused practice time for a week and you'll get a realistic picture of what to expect.</p>
            </div>

            <h2>Process Goals vs Outcome Goals</h2>
            <p>
              Outcome goals describe what you want to achieve: "reach A2 by Christmas", "be able to hold a five-minute conversation in Spanish". These are useful for direction. But they're not within your direct control — you can't guarantee you'll be at A2 by December.
            </p>
            <p>
              Process goals describe what you'll do: "practise Spanish for 20 minutes every day", "complete one Anki review session before breakfast each weekday", "have a language exchange session once a week". These are entirely within your control, and consistent process is what produces outcomes.
            </p>
            <p>
              The best goal structure is: one clear outcome goal as your direction, supported by three to four process goals that are your actual daily commitments. For example:
            </p>
            <ul>
              <li><strong>Outcome:</strong> Reach A2 level by April 2027</li>
              <li><strong>Process:</strong> 20 minutes of Anki every morning</li>
              <li><strong>Process:</strong> One 50-minute lesson per week</li>
              <li><strong>Process:</strong> 15 minutes of listening practice during commute on weekdays</li>
              <li><strong>Process:</strong> Write three sentences in Spanish in my journal every evening</li>
            </ul>

            <h2>Breaking Big Goals Into Milestones</h2>
            <p>
              "Reach B1" is a two-year goal for most people studying at moderate intensity. Two years is a long time to stay motivated towards a goal you can't see getting closer. Breaking it into milestones solves this.
            </p>
            <p>
              Milestone examples on the road to B1:
            </p>
            <ul>
              <li>Can introduce myself and describe my family without looking things up</li>
              <li>Can order confidently in a restaurant and understand the response</li>
              <li>Can understand the main points of a slow Spanish podcast episode</li>
              <li>Can write a paragraph about my weekend in Spanish with only minor errors</li>
              <li>Can have a five-minute conversation on a familiar topic without switching to English</li>
            </ul>
            <p>
              Each of these is something you can test yourself on. When you achieve one, celebrate it genuinely — it's real progress.
            </p>

            <div className="blog-highlight">
              <p>Set a clear outcome goal tied to a CEFR level. Break it into milestones you can check off. Support it with specific process goals that you commit to daily. That structure will take you further than any amount of vague aspiration to "get better".</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want a clear path to your Spanish goals?</h3>
              <p>I can help you assess your current level, set a realistic target, and build a learning plan that fits your life. Get in touch to get started.</p>
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
