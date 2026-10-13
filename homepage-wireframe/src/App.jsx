import DiscoverWork from './components/DiscoverWork.jsx';
import ExploreGallery from './components/ExploreGallery.jsx';
import ClosingContact from './components/ClosingContact.jsx';
import SectionMenu from './components/SectionMenu.jsx';
import { ScrollProgress } from './components/ScrollProgress.jsx';
import GooeyNav from './components/GooeyNav.jsx';
import PortfolioHero from './components/PortfolioHero.jsx';
import BoxDrop from './components/BoxDrop.jsx';
import Services from './components/Services.jsx';
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
      <div id="portfolio-content">
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <SectionMenu items={[navigationItems[0], { label: 'Services', href: '#services' }, ...navigationItems.slice(1)]} />
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
        <PortfolioHero />
        <BoxDrop />
        <Services />
        <DiscoverWork />
        <ExploreGallery />
        <ClosingContact />
        <section className="section" id="background" aria-labelledby="background-title">
          <div className="container about-layout"><div className="about-heading"><p className="eyebrow muted">02 / Background</p><h2 id="background-title">The person behind the work.</h2></div><div className="about-copy"><p className="lead">A brief introduction to Kaushal, his discipline, and the perspective he brings to his work.</p><p>This space will hold a personal introduction grounded in real experience. Keep it specific, direct, and relevant to the projects above.</p><dl className="profile-facts"><div><dt>Discipline</dt><dd>To be confirmed</dd></div><div><dt>Background</dt><dd>Verified experience to be supplied</dd></div><div><dt>Based in</dt><dd>Location to be supplied</dd></div></dl></div></div>
        </section>
        <section className="section" id="approach" aria-labelledby="approach-title">
          <div className="container approach-layout"><div><p className="eyebrow muted">03 / Approach</p><h2 id="approach-title">How the work takes shape.</h2><p className="section-intro approach-intro">Draft structure for explaining the process. Final language will reflect Kaushal’s actual practice.</p></div><ol className="approach-list"><li><span className="number">01</span><div><h3>Understand the context</h3><p>Describe how the problem, constraints, and desired outcome are established.</p></div></li><li><span className="number">02</span><div><h3>Develop the direction</h3><p>Explain the decisions and iterations that shape the work.</p></div></li><li><span className="number">03</span><div><h3>Resolve the details</h3><p>Show how quality is evaluated and the final outcome is refined.</p></div></li></ol></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-content"><a className="wordmark" href="#top">Kaushal.</a><div className="footer-meta"><span>Typography study / Draft content</span><a href="#top">Back to top</a></div></div></footer>
      </div>
    </>
  );
}
