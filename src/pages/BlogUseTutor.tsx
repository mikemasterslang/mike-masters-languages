import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogUseTutor() {
  useScrollAnimation();
  usePageMeta(
    'How to Get the Most Out of Your Spanish Lessons | Mike Masters Languages',
    'A good tutor opens doors — but what you do between lessons and how you prepare for them determines how fast you improve. Here\'s how to make every lesson count.'
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
          <h1>How to Get the Most Out of Your Spanish Lessons</h1>
          <p className="blog-hero-intro">
            A good tutor opens doors — but what you do between lessons (and how you prepare for them) determines how fast you improve.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              One of the most common frustrations learners express is that they've been having regular lessons for months but feel like they're not improving fast enough. In most cases, the lessons themselves aren't the problem. The issue is everything around the lesson — how prepared the student arrives, how actively they engage during it, and what they do with the material in the 48 hours that follow.
            </p>
            <p>
              A tutor is not a vending machine for Spanish fluency. They're a guide, a corrector, a source of structured challenge, and a conversation partner. What you put into each session has a direct and significant effect on what you get out of it.
            </p>

            <h2>Before the Lesson: Prepare With a Purpose</h2>
            <p>
              Most students arrive at lessons with no particular preparation. They haven't looked back at their notes from last session, they haven't thought about what they want to practise, and they haven't identified anything specific that confused or frustrated them since the last time. As a result, the first ten minutes of the lesson are spent trying to remember where you left off.
            </p>
            <p>
              Five to ten minutes of preparation before each lesson makes a measurable difference. Specifically:
            </p>
            <ul>
              <li><strong>Review your notes from the previous session.</strong> Remind yourself what you covered, what the corrections were, and what you were told to practise. This means you arrive having actually revisited those things, not rediscovering them during the lesson.</li>
              <li><strong>Bring at least one specific question.</strong> Something you encountered during the week that confused you — a word you couldn't work out, a sentence structure that didn't make sense, a situation where you didn't know how to say something. Specific questions lead to specific, memorable answers.</li>
              <li><strong>Set a goal for the session.</strong> It doesn't have to be elaborate — "I want to practise talking about the future" or "I want to work on my listening" is enough. Having a focus stops the lesson from drifting.</li>
            </ul>
            <div className="blog-highlight">
              <p>A student who arrives with a question, a goal, and a review of the last lesson will consistently improve faster than one who simply shows up and waits to be taught. Preparation isn't just for exams — it's for every session.</p>
            </div>

            <h2>During the Lesson: Be Active, Not Passive</h2>
            <p>
              There's a mode many students fall into during lessons where they sit back and receive — waiting for the tutor to present information, responding only when asked a direct question, nodding along even when they haven't fully understood. It feels polite. It isn't effective.
            </p>
            <p>
              The students who improve fastest are the ones who push themselves within the lesson. This means:
            </p>
            <ul>
              <li><strong>Attempt more than you're comfortable with.</strong> If your tutor asks you a question, don't reach for the safest, easiest answer you know — try to express what you actually mean, even if you're not sure of the words. The moment you try and fail is when learning happens.</li>
              <li><strong>Ask when you don't understand.</strong> Not at the end, when you've half-forgotten what confused you, but immediately. "Can you explain that differently?" or "Why does that work that way?" are things tutors want to hear.</li>
              <li><strong>Don't just accept corrections — engage with them.</strong> When you're corrected, say the correct version out loud, note it down, and if you're not sure why it's correct, ask. Understanding why the correction happened makes it stick.</li>
              <li><strong>Take your own notes.</strong> A good tutor will flag patterns in your errors and highlight things worth remembering. Write them down yourself — the act of writing a note cements it better than reading one written for you.</li>
            </ul>

            <h2>Note-Taking: What's Actually Worth Writing Down</h2>
            <p>
              Not everything is worth noting. If you're stopping to write down every new vocabulary word, you're slowing the session down and probably won't revisit most of it anyway. Focus on capturing:
            </p>
            <ul>
              <li>Corrections to errors you make repeatedly — these are patterns, not one-offs</li>
              <li>New vocabulary that comes up naturally in the context of real conversation — these words stick better because you have a context for them</li>
              <li>Grammar explanations that genuinely clarify something you were fuzzy on</li>
              <li>Phrases and expressions that surprised you — idioms, collocations, filler words</li>
            </ul>
            <p>
              Keep your lesson notes in one place and organised by date. Being able to scroll back through three months of notes to see what you've been correcting on repeatedly is genuinely useful.
            </p>

            <h2>After the Lesson: The 24-Hour Window</h2>
            <p>
              This is the part most learners skip, and it's arguably more important than the lesson itself. Memory research is consistent: without any form of review, you'll forget roughly 70–80% of new material within 24 hours.
            </p>
            <p>
              Within the same day as a lesson, ideally within a few hours:
            </p>
            <ul>
              <li><strong>Review your notes.</strong> Read through what you wrote. Say the new vocabulary and example sentences out loud.</li>
              <li><strong>Use new vocabulary in a sentence of your own — out loud.</strong> Not the example you were given — your own sentence, about something real in your life. This forces you to actively retrieve the word rather than passively recognise it.</li>
              <li><strong>Add important new vocabulary to your spaced repetition system</strong> (Anki or equivalent) so it gets reviewed at the right intervals going forward.</li>
              <li><strong>If you were given any practice tasks or homework, do them within 24 hours.</strong> Not the night before the next lesson — the same day, while the context is still fresh.</li>
            </ul>
            <div className="blog-tip">
              <p><strong>The day-after review:</strong> The following morning, spend five minutes going through your notes again without looking at the meanings. Can you still produce the new vocabulary? Can you recall the grammar explanation? This brief second review dramatically increases long-term retention.</p>
            </div>

            <h2>Communicating With Your Tutor</h2>
            <p>
              A good tutor adjusts to what you need — but they can only do that if you tell them. Many students feel awkward directing the lesson, as if it's rude to say what they want to focus on. It isn't. It's exactly what a tutor wants to hear.
            </p>
            <p>
              Be direct about:
            </p>
            <ul>
              <li><strong>What's frustrating you.</strong> If there's a grammar point you've covered three times and still don't feel confident with, say so. A different explanation or more targeted practice might crack it.</li>
              <li><strong>What you want to be working towards.</strong> Are you preparing for a holiday, a job interview, an exam? Knowing your goal shapes every lesson.</li>
              <li><strong>What type of lesson feels most useful.</strong> Some students benefit most from conversation practice; others need structured grammar work. If you feel like you've been doing too much of one and not enough of another, say so.</li>
              <li><strong>How much correction you want.</strong> Some learners prefer to be interrupted every time they make an error; others find it disruptive to fluency and prefer a summary at the end. Both approaches work — but you need to tell your tutor which you prefer.</li>
            </ul>

            <h2>The Difference Between a Lesson and Real Practice</h2>
            <p>
              This is the most important thing to understand about lessons: they are not a substitute for practice. They are a guide to it. A one-hour lesson per week, with no practice in between, will produce only very slow progress — not because the lesson isn't good, but because one hour a week isn't enough exposure and output for language acquisition.
            </p>
            <p>
              Think of lessons as the place where you get explanation, correction, and structured challenge. The other six days of the week are where you actually build the skill — through listening, reading, writing, and speaking on your own. The best students treat lessons as checkpoints and catalysts, not as the whole programme.
            </p>
            <div className="blog-highlight">
              <p>Lessons set the direction. Practice builds the language. You need both — and what you do between lessons matters as much as what happens during them.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Looking to make more progress with structured lessons?</h3>
              <p>Every lesson with Mike Masters Languages is built around your specific goals and level. Get in touch to get started.</p>
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
