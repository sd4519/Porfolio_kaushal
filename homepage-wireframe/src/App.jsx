import { ScrollProgress } from './components/ScrollProgress.jsx';
import GooeyNav from './components/GooeyNav.jsx';
import ShinyText from './components/ShinyText.jsx';
import { Component as KineticNavigation } from './components/ui/sterling-gate-kinetic-navigation';

const navigationItems = [
  { label: 'Home', href: '#top' },
  { label: 'Work', href: '#work' },
  { label: 'Background', href: '#background' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <header className="site-header" id="top">
        <div className="navigation">
          <a className="wordmark" href="#top" aria-label="Kaushal, back to top">Kaushal.</a>
          <GooeyNav items={navigationItems} theme="light" frame={false} color="#003ffd"
            activeTextColor="#ffffff" particleCount={8} spread={16} animationTime={550}
            gooeyness={0.4} wobble={0.3} className="portfolio-gooey-nav" />
          <KineticNavigation items={navigationItems} />
        </div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src="/images/hero-portfolio.png" alt="A seated illustrator sketching in a notebook in front of large blue Portfolio lettering." width="1672" height="941" fetchPriority="high" />
          <h1 id="hero-title" className="hero-corner-heading"><span className="hero-heading-line"><ShinyText text="Precise" color="#171b1d" shineColor="#003ffd" speed={2.5} delay={1.5} shineWidth={35} pauseOnHover /> thinking.</span><span className="hero-heading-line">Purposeful <ShinyText text="execution" color="#171b1d" shineColor="#003ffd" speed={2.5} delay={1.5} shineWidth={35} pauseOnHover />.</span></h1>
        </section>
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow muted">01 / The work</p><h2 id="work-title">Selected work</h2></div><p className="section-intro">Three considered project stories. Each will explain the context, my contribution, and the outcome.</p></div>
            <article className="lead-project">
              <MediaPlaceholder number="01" label="Featured project image" description="Primary project / 16:10 media slot" />
              <div className="project-copy"><p className="eyebrow muted">Featured project / Content to be supplied</p><h3>Project title goes here</h3><p className="project-description">A short explanation of the problem, the thinking behind the work, and the contribution Kaushal made.</p><dl className="project-facts"><div><dt>Role</dt><dd>To be supplied</dd></div><div><dt>Project context</dt><dd>To be supplied</dd></div></dl><span className="content-slot">Case study link — pending content</span></div>
            </article>
            <div className="project-secondary">
              <article><MediaPlaceholder number="02" label="Supporting project image" description="Project detail / 16:10 media slot" /><h3>Second project title</h3><p>Project context and a concise statement of contribution.</p><div className="project-caption"><span>Role / To be supplied</span><span>Case study slot</span></div></article>
              <article><MediaPlaceholder number="03" label="Supporting project image" description="Project detail / 16:10 media slot" /><h3>Third project title</h3><p>Project context and a concise statement of contribution.</p><div className="project-caption"><span>Role / To be supplied</span><span>Case study slot</span></div></article>
            </div>
          </div>
        </section>
        <section className="section" id="background" aria-labelledby="background-title">
          <div className="container about-layout"><div className="about-heading"><p className="eyebrow muted">02 / Background</p><h2 id="background-title">The person behind the work.</h2></div><div className="about-copy"><p className="lead">A brief introduction to Kaushal, his discipline, and the perspective he brings to his work.</p><p>This space will hold a personal introduction grounded in real experience. Keep it specific, direct, and relevant to the projects above.</p><dl className="profile-facts"><div><dt>Discipline</dt><dd>To be confirmed</dd></div><div><dt>Background</dt><dd>Verified experience to be supplied</dd></div><div><dt>Based in</dt><dd>Location to be supplied</dd></div></dl></div></div>
        </section>
        <section className="section" id="approach" aria-labelledby="approach-title">
          <div className="container approach-layout"><div><p className="eyebrow muted">03 / Approach</p><h2 id="approach-title">How the work takes shape.</h2><p className="section-intro approach-intro">Draft structure for explaining the process. Final language will reflect Kaushal’s actual practice.</p></div><ol className="approach-list"><li><span className="number">01</span><div><h3>Understand the context</h3><p>Describe how the problem, constraints, and desired outcome are established.</p></div></li><li><span className="number">02</span><div><h3>Develop the direction</h3><p>Explain the decisions and iterations that shape the work.</p></div></li><li><span className="number">03</span><div><h3>Resolve the details</h3><p>Show how quality is evaluated and the final outcome is refined.</p></div></li></ol></div>
        </section>
        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-layout"><div><p className="eyebrow muted">04 / Contact</p><h2 id="contact-title">Let’s make the next project count.</h2><p className="contact-description">A direct invitation to discuss a project, an opportunity, or a shared interest.</p></div><div className="contact-slot"><strong>Contact details go here</strong><p>Verified email and relevant profile links will be added here. This wireframe does not submit inquiries.</p></div></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-content"><a className="wordmark" href="#top">Kaushal.</a><div className="footer-meta"><span>Typography study / Draft content</span><a href="#top">Back to top</a></div></div></footer>
    </>
  );
}

function MediaPlaceholder({ number, label, description }) {
  return <div className="media-placeholder" aria-label={`${label}, placeholder`}><span className="placeholder-index" aria-hidden="true">{number}</span><strong>{label}</strong><p>{description}</p></div>;
}


