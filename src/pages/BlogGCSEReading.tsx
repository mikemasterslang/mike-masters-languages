import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogGCSEReading() {
  useScrollAnimation();
  usePageMeta(
    'GCSE Spanish Reading Exam: How It Works and How to Revise | Mike Masters Languages',
    'A complete guide to the GCSE Spanish reading exam — question types, how to handle unknown vocabulary, common traps, and the revision techniques that actually work.'
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
          <h1>GCSE Spanish Reading Exam: How It Works and How to Prepare</h1>
          <p className="blog-hero-intro">The reading exam tests more than vocabulary — it tests how you handle what you don't know. Here's how to approach it strategically and stop leaving marks on the table.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>The GCSE Spanish reading exam is sat under timed conditions with no dictionary. It includes a range of question types and texts — from short signs and messages to longer articles. The key skill is not knowing every word but extracting meaning from context. Students who understand this and prepare for it do significantly better than students who simply try to memorise more vocabulary.</p>

            <h2>The Format</h2>
            <p>Foundation and Higher tiers have different question types and difficulty levels. Foundation includes shorter texts with more visual support, and questions answered in English. Higher includes longer and more complex texts, with some questions asked and answered in Spanish. Both tiers include: matching tasks, multiple choice, short answer in English, and translation from Spanish into English. Total time is approximately 45 minutes on Foundation and up to one hour on Higher.</p>

            <h2>Question Types and How to Handle Each</h2>

            <h3>Matching tasks</h3>
            <p>Match Spanish statements to images or English phrases. Read all the options before you start matching — don't match as you go. Eliminate clearly wrong answers first, and use process of elimination to narrow down difficult ones.</p>

            <h3>Multiple choice</h3>
            <p>Read all options, not just the first one that looks right. Examiners design distractors that use words from the text but place them in the wrong context. The correct answer is always supported by the text — if you can't find where in the text the answer comes from, reconsider.</p>

            <h3>Short answer in English</h3>
            <p>Answer in English and draw directly from the text. Don't add information that isn't there, and don't paraphrase so freely that you change the meaning. Keep answers concise — a mark scheme answer is usually a short phrase, not a full sentence.</p>

            <h3>Translation (Spanish into English)</h3>
            <p>The most heavily marked task on Higher. Translate every word if you possibly can — a gap loses marks even if the rest of the translation is correct. If you're unsure of a word, provide your best attempt based on the context rather than leaving it blank.</p>

            <h2>How to Handle Unknown Vocabulary</h2>
            <p>Use cognates and near-cognates — words like <em>enorme, importante, comunicación</em> are recognisable from English. Use context clues: the surrounding sentences almost always signal the meaning of an unknown word. Use word families: if you know <em>hablar</em>, you can work out <em>hablante</em> (speaker). And use logical inference: if the text is clearly positive and you hit an unknown word in a positive sentence, the word is probably positive.</p>

            <div className="blog-highlight">
              <p>Never leave a question blank. If you're unsure, make an educated guess based on the context. A blank scores zero; a reasonable attempt might score one. Over a whole paper, those single marks add up.</p>
            </div>

            <h2>Common Traps</h2>
            <p>Watch out for negative structures — texts often contain <em>no, nunca, jamás, apenas</em>, and missing these reverses the meaning entirely. Be careful with false cognates: <em>embarazada</em> means pregnant, not embarrassed; <em>sensible</em> means sensitive, not sensible; <em>actual</em> means current, not actual. Also watch for synonyms between question and text: the text might say <em>contento</em> while the question says "happy" — they mean the same thing, but students sometimes miss this and look for the word "happy" in the text.</p>

            <div className="blog-tip">
              <p><strong>Read the questions first:</strong> Read the questions before the text — always. Knowing what you're looking for makes scanning much faster and more accurate. You'll read the text with a specific purpose rather than trying to absorb everything at once.</p>
            </div>

            <h2>How to Revise</h2>
            <p>Read Spanish regularly, even if only short articles or social media posts in Spanish. Build vocabulary systematically by theme — the GCSE themes are predictable: environment, technology, travel, health, education, work. Practise past papers under timed conditions, not just reading through them casually. For the translation task, practise translating short paragraphs and then check against a model answer. The 1,000 most common Spanish words cover roughly 80% of any text — building this core vocabulary is the single highest-leverage revision activity available to you.</p>

            <div className="blog-author-cta">
              <h3>Need help with your GCSE Spanish?</h3>
              <p>If your reading score is being held back by vocabulary gaps or question technique, a few targeted sessions can identify exactly where marks are being lost and address them directly.</p>
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
