import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogA2ToB1() {
  useScrollAnimation();
  usePageMeta(
    'Moving From A2 to B1 Spanish: What to Focus On | Mike Masters Languages',
    'A2 gets you through basic conversations. B1 is where Spanish starts to feel like a real skill. Here\'s the gap — and how to close it.'
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
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Moving From A2 to B1 Spanish: What to Focus On</h1>
          <p className="blog-hero-intro">
            A2 gets you through basic conversations. B1 is where Spanish starts to feel like a real skill. Here's the gap — and how to close it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              The jump from A2 to B1 is one of the most significant in language learning. At A2 you can handle familiar situations — ordering food, describing your job, talking about your weekend. At B1 you can have a genuine conversation on most everyday topics, follow the main thread of a TV show, and express your thoughts with enough nuance that people stop simplifying their speech for you.
            </p>
            <p>
              It's also the transition where many learners stall. The reason is usually the same: A2 habits keep you functional enough that you don't feel the urgency to push further. You get by, so you plateau. Here's what actually needs to change.
            </p>

            <h2>What A2 and B1 Actually Look Like</h2>
            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead>
                  <tr><th>A2</th><th>B1</th></tr>
                </thead>
                <tbody>
                  <tr><td>Can talk about the past using simple structures</td><td>Uses both the preterite and imperfect fluently and appropriately</td></tr>
                  <tr><td>Vocabulary of roughly 1,000–1,500 words</td><td>Vocabulary of 2,000–3,000 words across a wider range of topics</td></tr>
                  <tr><td>Sentences are mostly simple and short</td><td>Uses connectors, relative clauses, and subordinate clauses naturally</td></tr>
                  <tr><td>Needs speakers to slow down and repeat</td><td>Follows the gist of normal-speed speech on familiar topics</td></tr>
                  <tr><td>Can write a short, basic description</td><td>Can write a clear connected text: an email, a short opinion piece, a narrative</td></tr>
                  <tr><td>Gets flustered when conversation goes off-script</td><td>Can handle unexpected turns, express opinions, explain and justify</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Four Areas That Matter Most at This Transition</h2>

            <h3>1. Past Tense Confidence — Both Tenses</h3>
            <p>
              This is the biggest structural gap. At A2 you probably know the preterite (<em>pretérito indefinido</em>) for completed actions. What you likely don't have is the imperfect (<em>pretérito imperfecto</em>) — and more importantly, the <strong>feel</strong> for when to use which.
            </p>
            <div className="blog-example">
              <p className="es">Ayer comí paella. — Yesterday I ate paella. (preterite — specific completed action)</p>
              <p className="es">Cuando era niño, comía paella todos los domingos. — When I was a child, I used to eat paella every Sunday. (imperfect — habitual past)</p>
              <p className="es">Estaba comiendo cuando llegaste. — I was eating when you arrived. (imperfect for ongoing action, preterite for interruption)</p>
            </div>
            <p>
              The imperfect is used for: descriptions in the past, habitual or repeated past actions, ongoing background situations, and polite requests (<em>quería preguntarte algo</em>). Learning the forms is quick. The real work is building the intuition to use them together correctly — which comes from lots of reading and structured practice.
            </p>

            <h3>2. Increased Vocabulary Range</h3>
            <p>
              A2 vocabulary tends to cluster around the same practical themes: food, family, work, daily routine. B1 requires you to push into new domains — opinions, current events, abstract ideas, emotions beyond basic happy/sad/tired, comparisons and hypotheticals.
            </p>
            <p>
              Practically, this means learning vocabulary in the contexts you actually want to use Spanish for. If you want to discuss films, learn the vocabulary of plot, character, and genre. If you travel, learn the vocabulary for things going wrong and how to resolve them. Themed vocabulary learning is far more efficient than random word lists at this stage.
            </p>
            <div className="blog-highlight">
              <p>The vocabulary target for B1 is roughly 2,000–3,000 words. You're not there to learn every word — you're there to have enough range that you're not constantly hitting walls when you try to express something.</p>
            </div>

            <h3>3. More Complex Sentences</h3>
            <p>
              One of the clearest markers of the A2–B1 transition is sentence complexity. A2 learners tend to produce short, simple sentences joined with <em>y</em> (and) and <em>pero</em> (but). B1 learners use a wider range of connectors and start to build sentences with subordinate clauses.
            </p>
            <p>
              Key structures to develop:
            </p>
            <ul>
              <li>Relative clauses: <em>El chico que conocí en Madrid trabaja en el cine.</em></li>
              <li>Causal connectors: <em>porque, ya que, debido a que, puesto que</em></li>
              <li>Contrast: <em>aunque, sin embargo, a pesar de que</em></li>
              <li>Purpose: <em>para que + subjunctive, con el fin de + infinitive</em></li>
              <li>Temporal clauses: <em>cuando llegué, antes de salir, después de que terminó</em></li>
            </ul>
            <div className="blog-example">
              <p className="es">A2: Quiero aprender español. Es útil para el trabajo.</p>
              <p className="es">B1: Quiero aprender español porque es muy útil para el trabajo que estoy haciendo ahora.</p>
            </div>

            <h3>4. Understanding Native Speech</h3>
            <p>
              At A2, you rely on speakers slowing down, using simple vocabulary, and repeating things. At B1, you can follow the main point of a conversation or audio clip at something approaching normal speed on familiar topics. This is a significant and often underestimated leap.
            </p>
            <p>
              The gap between the Spanish you've been practising with and real native speech is large: connected speech, reduced vowels, regional accents, idiomatic expressions, and speed. The only way to close it is regular, deliberate exposure. This means podcasts for learners (News in Slow Spanish is excellent for this transition), Spanish TV with Spanish subtitles (not English), and listening to the same short clips multiple times.
            </p>
            <div className="blog-tip">
              <p><strong>Switch your subtitles.</strong> If you watch Spanish TV with English subtitles, you're reading, not listening. Switch to Spanish subtitles — or no subtitles for content you've already watched. Your listening comprehension will improve significantly within a few months.</p>
            </div>

            <h2>Common Stagnation Traps at A2</h2>
            <p>
              Several patterns reliably keep learners stuck at A2 for longer than necessary:
            </p>
            <ul>
              <li><strong>Only practising in controlled situations.</strong> Lessons and exercises give you the same vocabulary and structures each time. Real progress requires encountering Spanish you haven't prepared for.</li>
              <li><strong>Avoiding the imperfect.</strong> Many learners know they should use it but default to the preterite for everything. The imperfect never becomes natural if you never use it.</li>
              <li><strong>Passive vocabulary without active practice.</strong> You recognise a lot of words but can't produce them under pressure. Output — speaking and writing — is how passive becomes active.</li>
              <li><strong>Sticking to beginner content.</strong> Beginner podcasts and apps feel comfortable, but if they're not challenging you, they're not developing you. You need to start consuming slightly harder material even when it's uncomfortable.</li>
            </ul>

            <h2>A Realistic Weekly Practice Structure</h2>
            <p>
              If you have around four to five hours a week to give to Spanish, here's a structure that targets the A2–B1 transition specifically:
            </p>
            <ul>
              <li><strong>30 minutes, three times a week:</strong> Listening practice — podcasts or short video clips pitched at intermediate level. Focus on gist first, then detail.</li>
              <li><strong>20 minutes, four times a week:</strong> Vocabulary review via spaced repetition (Anki or similar) — aim for 10–15 new words per day alongside review of older ones.</li>
              <li><strong>One hour, once a week:</strong> Structured writing — a short paragraph or email using a grammar structure you're working on. Review and correct it, or have a tutor do so.</li>
              <li><strong>One hour, once a week:</strong> Conversation practice — with a tutor, a language exchange partner, or even recorded self-talk on unfamiliar topics.</li>
              <li><strong>30 minutes, twice a week:</strong> Reading — graded readers at B1 level, or short articles from simplified Spanish news sites.</li>
            </ul>

            <h2>How Long Does It Realistically Take?</h2>
            <p>
              This depends heavily on how much time you put in and how deliberately you practise. For someone coming from a solid A2 base, practising consistently for four to five hours a week and targeting the right areas, reaching B1 typically takes <strong>six to twelve months</strong>. For learners who practise less regularly or stick to passive activities, it can take two to three years — not because B1 is harder, but because the time spent actually developing the right skills is lower than it looks.
            </p>
            <p>
              The honest answer is: the timeline depends almost entirely on what you do with your practice time, not just how much you log. Four focused hours a week beats twelve hours of doing the same easy exercises.
            </p>

            <div className="blog-highlight">
              <p>The A2 to B1 gap is mostly about depth, not breadth. You need past tense confidence across both preterite and imperfect, a bigger vocabulary range, more complex sentence structures, and the ability to understand real Spanish at closer to natural speed. Target those four things directly and the level will follow.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Ready to make the jump to B1?</h3>
              <p>Structured lessons targeting exactly the gaps between A2 and B1 are the fastest way to get there. Get in touch and let's build a plan.</p>
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
