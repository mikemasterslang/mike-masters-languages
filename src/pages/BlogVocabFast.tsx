import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogVocabFast() {
  useScrollAnimation();
  usePageMeta(
    'How to Build Spanish Vocabulary Fast | Mike Masters Languages',
    'Learn why frequency lists matter, how spaced repetition beats traditional study, and why English cognates give you a head start of over 1,000 Spanish words you already know.'
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
          <h1>How to Build Spanish Vocabulary Fast</h1>
          <p className="blog-hero-intro">
            The way most people study vocabulary — lists, repetition, testing yourself from the beginning — is one of the least efficient methods available. Here's what actually works.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              Vocabulary is the foundation of everything. You can have perfect grammar, but if you don't know the words, you can't communicate. And yet most learners go about building vocabulary in the least efficient way possible: writing out word lists, re-reading them, testing themselves from the top each time. It feels productive. It mostly isn't.
            </p>
            <p>
              The good news: there are smarter approaches that save you significant time and produce much better long-term retention.
            </p>

            <h2>Why Frequency Lists Matter</h2>
            <p>
              Spanish has hundreds of thousands of words. The typical educated native speaker uses around 20,000–35,000. But here's the crucial fact for language learners: the most common 500 words in Spanish account for roughly <strong>80% of everything said in everyday speech</strong>. The top 2,000 words cover around 95%.
            </p>
            <p>
              This means your vocabulary efforts have wildly different returns depending on which words you're learning. Mastering <em>ser, tener, hacer, poder, querer, ir</em> and the 494 other most common words will transform your comprehension. Learning the Spanish word for "archipelago" will not.
            </p>
            <p>
              A frequency list ranks Spanish words by how often they appear in real speech and text. Learning from a frequency list is not very romantic, but it is highly effective. The most commonly recommended resources are:
            </p>
            <ul>
              <li><strong>A Frequency Dictionary of Spanish</strong> (Routledge) — the academic gold standard, lists the 5,000 most frequent words with example sentences</li>
              <li><strong>Anki frequency decks</strong> — pre-made flashcard decks based on frequency data, free on AnkiWeb</li>
            </ul>
            <p>
              For most learners at A1–B1, focus on the first 1,000–2,000 words. Don't try to learn rare vocabulary until you have the high-frequency core solid.
            </p>

            <h2>Spaced Repetition: The Science of Not Forgetting</h2>
            <p>
              The reason most vocabulary study doesn't stick is the <strong>forgetting curve</strong> — first described by Hermann Ebbinghaus in the 1880s. Without review, you forget most new information within 24 hours, and most of what remains fades within a week.
            </p>
            <p>
              Spaced repetition fights this by showing you a piece of information just before you're about to forget it. The spacing between reviews increases each time you remember correctly. The result: you review words less and less frequently as they move into long-term memory, and your study time is always focused where it's most needed.
            </p>
            <p>
              <strong>Anki</strong> is the most widely used spaced repetition system for language learning. It's free (on computer and Android; there's a small fee for iPhone), and there are thousands of pre-made Spanish decks available.
            </p>
            <div className="blog-tip">
              <p><strong>The right Anki habit:</strong> 15–20 minutes of review every day beats a two-hour session once a week. The algorithm only works if you use it regularly. Missing days causes reviews to pile up and the system to lose its rhythm. Think of it like watering plants — a little every day, not a flood once a week.</p>
            </div>

            <h2>Learning in Context vs Isolated Words</h2>
            <p>
              A word without context is hard to remember and hard to use. When you learn <em>libre</em> simply as "free", you have a fact. When you learn it in the sentence <em>Esta tarde estoy libre</em> (I'm free this afternoon), you have a word embedded in a real situation, connected to something you might actually say.
            </p>
            <p>
              The difference in retention is significant. Context provides:
            </p>
            <ul>
              <li>A memory hook — something to attach the word to</li>
              <li>Information about how the word is typically used — what comes before and after it</li>
              <li>Grammatical context — what case it takes, whether it needs a preposition, etc.</li>
            </ul>
            <p>
              When adding words to Anki, always include an example sentence. Even better: make the example sentence something personal and specific to you. <em>Tengo dos gatos</em> will stick better than <em>Tengo un perro</em> if you actually have two cats.
            </p>

            <h2>Cognates: The Head Start You Already Have</h2>
            <p>
              English and Spanish share a huge number of words that are similar in form and meaning, because both languages draw heavily from Latin. These are called <strong>cognates</strong>, and as an English speaker you have access to a vocabulary head start of over 1,000 words you already more or less know.
            </p>
            <p>
              Many words ending in <em>-tion</em> in English end in <em>-ción</em> in Spanish:
            </p>
            <div className="blog-example">
              <p className="es">nación, situación, comunicación, información, producción, conversación</p>
            </div>
            <p>
              Words ending in <em>-ty</em> in English often end in <em>-dad</em> or <em>-tad</em> in Spanish:
            </p>
            <div className="blog-example">
              <p className="es">universidad, ciudad, libertad, responsabilidad, oportunidad</p>
            </div>
            <p>
              Words ending in <em>-ous</em> in English often end in <em>-oso/-osa</em>:
            </p>
            <div className="blog-example">
              <p className="es">famoso, curioso, generoso, nervioso, delicioso</p>
            </div>
            <p>
              Once you know these patterns, you can confidently guess the Spanish equivalent of many English words you've never studied. That's a significant advantage — use it. See our full guide on <Link to="/blogs/cognate-patterns" style={{ color: 'var(--primary)' }}>English-Spanish cognate patterns</Link> for the complete picture.
            </p>

            <h2>Thematic Learning for Practical Vocabulary</h2>
            <p>
              Frequency lists are great for core vocabulary. But if your goal is to travel to Spain or live there, you also need <strong>thematic vocabulary</strong> — clusters of words around specific situations you'll actually encounter.
            </p>
            <p>
              Learning all the vocabulary connected to a restaurant visit together — ordering, asking about the menu, paying, dietary requirements — means the words reinforce each other and you're building towards a complete, usable skill. Contrast this with learning disconnected words from a frequency list, which takes longer to become practically usable.
            </p>
            <p>
              A good approach combines both: use frequency lists for your core daily study, and add thematic clusters for the specific situations you're preparing for.
            </p>

            <h2>Reading More Beats Studying More</h2>
            <p>
              Once you have a solid base of 500–1,000 words, extensive reading is one of the most effective vocabulary-building tools available. Reading graded readers (books written for language learners at a specific level) gives you constant vocabulary reinforcement in context, teaches you how words are used in sentences, and develops reading fluency simultaneously.
            </p>
            <p>
              The key is reading at the right level — not so hard that every sentence is a struggle, not so easy that nothing is new. A good rule of thumb: if you're looking up more than five words per page, the text is too hard. If you're looking up fewer than one, it might be too easy.
            </p>

            <div className="blog-highlight">
              <p>The fastest vocabulary growth comes from: high-frequency words first, spaced repetition to make them stick, context-rich learning rather than bare lists, and extensive reading once you have the foundation. Apply all four and you'll move faster than you expect.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want a vocabulary plan tailored to your goals?</h3>
              <p>In lessons I can help you identify which vocabulary gaps are holding you back and build a learning plan that targets them directly. Get in touch to find out how.</p>
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
