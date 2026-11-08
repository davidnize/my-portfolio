import { useEffect, useRef } from 'react'
import SocialLinks from './components/SocialLinks'

const interests = [
  'Software development',
  'Electronics',
  'Mathematics',
  'Physics',
  'Programming',
]

const technologies = [
  { name: 'HTML', status: 'Familiar' },
  { name: 'CSS', status: 'Familiar' },
  { name: 'JavaScript', status: 'Familiar' },
  { name: 'Node.js', status: 'Exploring' },
  { name: 'Express.js', status: 'Exploring' },
  { name: 'React', status: 'Currently learning' },
  { name: 'Go', status: 'Currently learning' },
]

function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { threshold: 0.14 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#introduction" aria-label="David Nizeyimana home">DN<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#introduction">Introduction</a>
          <a href="#about">About</a>
          <a href="#interests">Interests</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="intro section-container" id="introduction" aria-labelledby="intro-title">
          <Reveal className="intro__content">
            <p className="eyebrow">Introduction</p>
            <h1 id="intro-title">David <em>Nizeyimana</em></h1>
            <p className="intro__summary">
              I’m interested in programming and technology, and in the questions that sit behind them. I enjoy exploring software development, electronics, mathematics and physics.
            </p>
            <a className="scroll-link" href="#about">Explore the page <span aria-hidden="true">↓</span></a>
          </Reveal>
          <Reveal className="intro__side">
            <span className="intro__line" aria-hidden="true" />
            <p>Learning through<br />curiosity and practice.</p>
          </Reveal>
        </section>

        <Reveal>
          <section className="section-container editorial-section" id="about" aria-labelledby="about-title">
            <p className="section-number">01</p>
            <div className="section-body">
              <p className="eyebrow">About</p>
              <h2 id="about-title">Always looking a little closer.</h2>
              <p className="section-copy">
                I like learning by asking questions, making things and working through problems. Technology gives me a way to turn that curiosity into something practical while continuing to understand how things work.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section-container editorial-section interests-section" id="interests" aria-labelledby="interests-title">
            <p className="section-number">02</p>
            <div className="section-body">
              <p className="eyebrow">Interests</p>
              <h2 id="interests-title">The subjects that keep me curious.</h2>
              <ol className="interest-list">
                {interests.map((interest, index) => (
                  <li key={interest} style={{ '--item-index': index }}>
                    <span>0{index + 1}</span>
                    <strong>{interest}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section-container editorial-section technology-section" id="technologies" aria-labelledby="technologies-title">
            <p className="section-number">03</p>
            <div className="section-body">
              <p className="eyebrow">Technologies</p>
              <h2 id="technologies-title">A toolkit in progress.</h2>
              <div className="technology-list">
                {technologies.map((technology, index) => (
                  <div className="technology-row" key={technology.name} style={{ '--item-index': index }}>
                    <span>{technology.name}</span>
                    <span className={technology.status === 'Currently learning' ? 'technology-status technology-status--active' : 'technology-status'}>{technology.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section-container contact-section" id="contact" aria-labelledby="contact-title">
            <p className="section-number">04</p>
            <div className="section-body">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let’s stay in touch.</h2>
              <p className="section-copy">If you would like to connect, ask a question or share an idea, you can find me here.</p>
              <SocialLinks />
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="site-footer section-container">
        <span>© {new Date().getFullYear()} David Nizeyimana</span>
        <a href="#introduction">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
