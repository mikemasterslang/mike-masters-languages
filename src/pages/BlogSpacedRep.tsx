import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSpacedRep() {
  useScrollAnimation();
  usePageMeta(
    'Spaced Repetition for Spanish: The Smarter Way to Learn Vocabulary | Mike Masters Languages',
    'Most learners forget 80% of new vocabulary within a week. Spaced repetition fixes that — here\'s how it works and how to use it effectively for Spanish.'
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
          <h1>Spaced Repetition for Spanish: The Smarter Way to Learn Vocabulary</h1>
          <p className="blog-hero-intro">
            Most learners forget 80% of new vocabulary within a week. Spaced repetition fixes that — here's how it works and how to use it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>
              Here's a scenario almost every language learner recognises: you spend an evening learning twenty new Spanish words. You test yourself at the end of the session and you know them all. A week later, you can barely remember five of them. A month later, most of them have gone completely.
            </p>
            <p>
              This isn't a memory problem — it's a scheduling problem. You reviewed those words once, when the memory was still fresh and didn't need reinforcing. The forgetting happened not because you can't retain vocabulary, but because you never practised retrieval at the right time. Spaced repetition is the method that solves this.
            </p>

            <h2>The Forgetting Curve</h2>
            <p>
              In the 1880s, German psychologist Hermann Ebbinghaus mapped out how memory decays over time — what's now called the forgetting curve. The key finding: memory drops steeply after initial learning. Without any review, you'll forget roughly 50% of new information within an hour, and around 80% within a week.
            </p>
            <p>
              But each time you successfully retrieve a memory — particularly just before you'd naturally forget it — the decay curve flattens. Review something once at the right moment and you'll retain it for several days. Review it again, and you'll retain it for weeks. Review it again, and it moves into long-term memory.
            </p>
            <div className="blog-highlight">
              <p>Spaced repetition is not about reviewing words more — it's about reviewing them at the optimal moment. The system does the scheduling for you, so you're always spending time on the words that are most at risk of being forgotten.</p>
            </div>

            <h2>How a Spaced Repetition System (SRS) Works</h2>
            <p>
              An SRS is a flashcard system that tracks how well you know each card and schedules your next review based on that. Review a card and mark it as easy — you won't see it again for a week. Mark it as hard — you'll see it again tomorrow. Mark it as forgotten — you'll see it again in a few minutes.
            </p>
            <p>
              The algorithm continuously adjusts the intervals based on your responses. Words you know well gradually move to longer and longer review intervals — once a week, then once a month, then every few months. Words you struggle with stay on short intervals until they're solid.
            </p>
            <p>
              The practical result: you spend almost no time reviewing words you know well, and focused time on the words you're at risk of forgetting. It's dramatically more efficient than re-reading a vocabulary list from the beginning every time.
            </p>

            <h2>The Best Tools</h2>

            <h3>Anki</h3>
            <p>
              Anki is the gold standard for serious language learners. It's free (on desktop and Android; one-off purchase on iOS), fully customisable, and the algorithm is well-tested. You can create your own cards, import pre-made decks, add audio, and organise cards by topic or grammar point.
            </p>
            <p>
              The learning curve is steeper than other apps — setting it up and building good card habits takes some effort. But for learners who commit to it, Anki is genuinely transformative for vocabulary retention.
            </p>

            <h3>Apps With Built-In SRS</h3>
            <p>
              If Anki feels like too much overhead, several popular apps have SRS built in. Duolingo uses a version of it. Babbel uses it for vocabulary review. Clozemaster — an underrated tool for intermediate learners — uses it for sentence-level practice. These are less configurable than Anki but require far less setup and work well for learners who want something simpler.
            </p>
            <div className="blog-tip">
              <p><strong>The trade-off:</strong> Pre-made SRS apps are easier to start with but you can't customise what you review. Anki lets you add exactly the vocabulary from your lessons, the words you keep forgetting, and the phrases you need for specific topics. For learners working with a tutor, building a personal Anki deck alongside lessons is an excellent combination.</p>
            </div>

            <h2>How to Make Good Flashcards</h2>
            <p>
              Most learners make flashcards wrong. A card that says <em>rojo</em> on the front and "red" on the back is the weakest possible type — it tests only passive recognition of the Spanish word, and the answer is a single translation rather than any real understanding.
            </p>
            <p>
              Here's what makes a better card:
            </p>
            <ul>
              <li><strong>Use sentences, not isolated words.</strong> A card showing <em>Me cuesta levantarme por la mañana</em> with a context clue on the back (<em>costar</em> = to be difficult/to struggle to do something) is more useful than <em>costar</em> = "to cost". The sentence gives you grammar, collocation, and meaning in context all at once.</li>
              <li><strong>Put the Spanish on the front, not the English.</strong> You want to practise retrieval from Spanish — understanding the language — not from English. If you always see English → Spanish, you're training yourself to translate rather than to understand.</li>
              <li><strong>Avoid translation where possible.</strong> Where you can, use a Spanish definition, a Spanish synonym, or an image instead of an English translation. This builds a direct connection between the Spanish word and its meaning, rather than routing through English every time.</li>
              <li><strong>Add audio.</strong> If you can attach a native speaker pronunciation file to a card (Anki supports this), do it. Hearing the word as you study it reinforces both spelling and sound together.</li>
              <li><strong>Keep one piece of information per card.</strong> Don't cram a word, its grammar, its conjugation, and an example onto one card. Simpler cards are reviewed faster and retained better.</li>
            </ul>

            <h2>How Many New Words Per Day?</h2>
            <p>
              This is where many people go wrong: they add too many new words at once, build up a huge backlog of cards due for review, and eventually abandon the whole system because it becomes overwhelming.
            </p>
            <p>
              For most learners, <strong>10 to 15 new words per day</strong> is sustainable. At that rate, you're adding around 300–450 words per month, which across a year gets you to a vocabulary range well beyond B1. The review burden from 10–15 new words daily is around 20–30 minutes of Anki per day — manageable, and easy to do on a phone during dead time.
            </p>
            <p>
              If you're just starting, begin with five to ten new words per day and build up gradually. Once you have a few hundred cards in your deck, you'll get a feel for what's sustainable. Don't be tempted to add 50 words on a productive Saturday — the review burden that creates will haunt you for weeks.
            </p>
            <div className="blog-highlight">
              <p>Consistency beats intensity. Ten words a day for a year is better than 100 words a day for two weeks and then stopping. The system only works if you keep showing up.</p>
            </div>

            <h2>Combining SRS With Real Reading and Listening</h2>
            <p>
              Spaced repetition is powerful, but it works best as part of a wider learning system, not as your only vocabulary strategy. Here's why: SRS gives you isolated knowledge of a word — you know what it means and how it's used in one sentence. Real reading and listening give you the same word in dozens of different contexts, which is what takes it from "a word I know" to "a word I automatically understand and use".
            </p>
            <p>
              The ideal workflow looks something like this: encounter a new word in a Spanish text, article, or show. Add it to your Anki deck with the sentence you found it in as context. Review it in Anki until it's solid. Then notice it again the next time it appears in real Spanish — and that recognition will be much stronger because you've already consolidated it.
            </p>
            <p>
              SRS is your consolidation tool. Reading and listening are your input. You need both working together.
            </p>

            <div className="blog-highlight">
              <p>Spaced repetition isn't a magic solution — it's a system for reviewing vocabulary at the right time instead of the wrong time. Set it up well, keep the daily habit modest and consistent, and it will quietly transform your vocabulary retention over the following months.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Want to combine smarter vocabulary study with structured lessons?</h3>
              <p>Working with a tutor and building a personalised Anki deck from each session is one of the most efficient combinations in language learning. Get in touch to find out more.</p>
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
