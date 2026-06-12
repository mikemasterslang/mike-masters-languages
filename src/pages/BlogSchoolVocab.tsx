import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageMeta } from '../hooks/usePageMeta';
import './BlogPost.css';

export default function BlogSchoolVocab() {
  useScrollAnimation();
  usePageMeta(
    'Spanish School and Education Vocabulary | Mike Masters Languages',
    'Learn Spanish education vocabulary — school subjects, classroom words, key verbs, the Spanish education system and useful phrases for talking about studying.'
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
            <span className="blog-hero-tag">Vocabulary</span>
            <span className="blog-hero-date">June 2026</span>
          </div>
          <h1>Spanish School and Education Vocabulary</h1>
          <p className="blog-hero-intro">
            Education comes up constantly in conversation — whether you're studying yourself or talking about someone else's learning journey.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-content">

            <p>School and education vocabulary is enormously useful — not just if you have children in school or are studying yourself, but because it comes up constantly in everyday conversation. Talking about what you studied, what someone's children are doing, or the differences between the Spanish and British education systems are all common topics. This guide gives you the words you need, a clear overview of how education in Spain works, and the key phrases for talking about it naturally.</p>

            <h2>Types of School and Educational Institutions</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la guardería</td><td>nursery / crèche (0–3 years)</td></tr>
                  <tr><td>el colegio de infantil</td><td>nursery / reception class (3–6 years)</td></tr>
                  <tr><td>el colegio / la escuela primaria</td><td>primary school (6–12 years)</td></tr>
                  <tr><td>el instituto / el colegio de secundaria</td><td>secondary school (12–18 years)</td></tr>
                  <tr><td>la universidad</td><td>university</td></tr>
                  <tr><td>la academia</td><td>private language or tuition school</td></tr>
                  <tr><td>la formación profesional (FP)</td><td>vocational training</td></tr>
                  <tr><td>el colegio concertado</td><td>state-funded private school</td></tr>
                  <tr><td>el colegio privado</td><td>private school</td></tr>
                  <tr><td>el colegio público</td><td>state school</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Spanish Education System</h2>
            <p>Understanding how the Spanish system is structured helps enormously when talking about it with Spanish speakers. Here's a brief overview:</p>

            <div className="blog-highlight">
              <p><strong>Educación Primaria</strong> (ages 6–12): Six years of primary education, compulsory. <strong>ESO</strong> — Educación Secundaria Obligatoria (ages 12–16): Four years of compulsory secondary school. <strong>Bachillerato</strong> (ages 16–18): Two optional years preparing for university, ending in the <em>Selectividad</em> (university entrance exam). <strong>Formación Profesional (FP)</strong>: Vocational training, available at different levels, highly regarded in Spain. <strong>Universidad</strong>: Degree programmes typically last four years (<em>el grado</em>).</p>
            </div>

            <div className="blog-example">
              <p className="es">Mi hijo está en tercero de la ESO. — <span style={{fontWeight: 400}}>My son is in Year 9 (third year of secondary school).</span></p>
              <p className="es">Este año hace el Bachillerato. — <span style={{fontWeight: 400}}>He's doing his A-level equivalent this year.</span></p>
              <p className="es">Aprobó la Selectividad con buena nota. — <span style={{fontWeight: 400}}>She passed the university entrance exam with a good grade.</span></p>
            </div>

            <h2>School Subjects (Las Asignaturas)</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>las matemáticas</td><td>maths</td></tr>
                  <tr><td>el inglés</td><td>English</td></tr>
                  <tr><td>el español / la lengua</td><td>Spanish / language arts</td></tr>
                  <tr><td>la historia</td><td>history</td></tr>
                  <tr><td>la geografía</td><td>geography</td></tr>
                  <tr><td>las ciencias naturales</td><td>science / natural sciences</td></tr>
                  <tr><td>la física</td><td>physics</td></tr>
                  <tr><td>la química</td><td>chemistry</td></tr>
                  <tr><td>la biología</td><td>biology</td></tr>
                  <tr><td>el arte / las bellas artes</td><td>art</td></tr>
                  <tr><td>la educación física</td><td>PE / physical education</td></tr>
                  <tr><td>la música</td><td>music</td></tr>
                  <tr><td>los idiomas / las lenguas</td><td>languages</td></tr>
                  <tr><td>la filosofía</td><td>philosophy</td></tr>
                  <tr><td>la informática</td><td>IT / computing</td></tr>
                  <tr><td>la economía</td><td>economics</td></tr>
                  <tr><td>la religión</td><td>religious education</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Classroom Vocabulary (El Aula)</h2>

            <div className="blog-table-wrapper">
              <table className="blog-table">
                <thead><tr><th>Spanish</th><th>English</th></tr></thead>
                <tbody>
                  <tr><td>la pizarra</td><td>board (whiteboard or blackboard)</td></tr>
                  <tr><td>el cuaderno</td><td>exercise book / notebook</td></tr>
                  <tr><td>el bolígrafo / el boli</td><td>pen / biro</td></tr>
                  <tr><td>el lápiz</td><td>pencil</td></tr>
                  <tr><td>el libro de texto</td><td>textbook</td></tr>
                  <tr><td>el examen</td><td>exam / test</td></tr>
                  <tr><td>los deberes</td><td>homework</td></tr>
                  <tr><td>la nota</td><td>grade / mark</td></tr>
                  <tr><td>los apuntes</td><td>notes (taken in class)</td></tr>
                  <tr><td>la asignatura</td><td>school subject</td></tr>
                  <tr><td>el aula / la clase</td><td>classroom</td></tr>
                  <tr><td>el recreo</td><td>break / playtime</td></tr>
                  <tr><td>el trimestre</td><td>term (Spain uses a three-term year)</td></tr>
                  <tr><td>el bachillerato</td><td>sixth form equivalent</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Key Verbs for Education</h2>
            <div className="blog-example">
              <p className="es">estudiar — <span style={{fontWeight: 400}}>to study</span></p>
              <p className="es">aprender — <span style={{fontWeight: 400}}>to learn</span></p>
              <p className="es">enseñar — <span style={{fontWeight: 400}}>to teach</span></p>
              <p className="es">aprobar — <span style={{fontWeight: 400}}>to pass (an exam)</span></p>
              <p className="es">suspender — <span style={{fontWeight: 400}}>to fail (an exam)</span></p>
              <p className="es">graduarse — <span style={{fontWeight: 400}}>to graduate</span></p>
              <p className="es">matricularse — <span style={{fontWeight: 400}}>to enrol / to register</span></p>
              <p className="es">hacer los deberes — <span style={{fontWeight: 400}}>to do homework</span></p>
              <p className="es">sacar buenas notas — <span style={{fontWeight: 400}}>to get good grades</span></p>
              <p className="es">repetir curso — <span style={{fontWeight: 400}}>to repeat a year</span></p>
            </div>

            <div className="blog-tip">
              <p><strong>Aprobar vs suspender:</strong> These are essential verbs. In Spain, exam marks go from 0–10. A score of 5 or above is <em>aprobado</em> (pass); below 5 is <em>suspenso</em> (fail). A 10 is <em>sobresaliente</em> (outstanding). You might also hear <em>notable</em> (7–8, good) and <em>bien</em> (6, satisfactory).</p>
            </div>

            <h2>Talking About Education</h2>
            <div className="blog-example">
              <p className="es">Estudio medicina en la universidad. — <span style={{fontWeight: 400}}>I study medicine at university.</span></p>
              <p className="es">Mi asignatura favorita es la historia. — <span style={{fontWeight: 400}}>My favourite subject is history.</span></p>
              <p className="es">Se me dan bien las matemáticas. — <span style={{fontWeight: 400}}>I'm good at maths.</span></p>
              <p className="es">Se me dan mal los idiomas. — <span style={{fontWeight: 400}}>I'm not good at languages.</span></p>
              <p className="es">Estudié derecho pero nunca ejercí. — <span style={{fontWeight: 400}}>I studied law but never practised.</span></p>
              <p className="es">¿Qué carrera hiciste? — <span style={{fontWeight: 400}}>What degree did you do?</span></p>
            </div>

            <div className="blog-highlight">
              <p>The most useful phrases for education conversations are <em>estudiar</em> + subject for what you study, <em>se me da bien/mal</em> + subject for ability, and the <em>aprobar/suspender</em> pair for talking about results. Add knowledge of the Spanish education stages (Primaria, ESO, Bachillerato, FP, Universidad) and you'll be able to have informed, natural conversations about school and learning.</p>
            </div>

            <div className="blog-author-cta">
              <h3>Learning Spanish is education in itself</h3>
              <p>Whether you're returning to study, learning alongside your children or simply curious about Spanish culture, a tutor makes the journey faster and more enjoyable.</p>
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
