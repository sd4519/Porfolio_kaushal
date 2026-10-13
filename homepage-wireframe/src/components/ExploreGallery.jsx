import { useEffect, useRef } from 'react';
import SlideCommit from './SlideCommit';
import './ExploreGallery.css';

const projects = [
  ['Archive Cafe', '/images/services/packaging-portfolio.jpg'],
  ['NorthForge', '/images/services/identity-portfolio.jpg'],
  ['Feltrom', '/images/services/website-portfolio.jpg'],
  ['STEM Interface', '/images/work/stem-interface.jpg'],
  ['Yash Realty', '/images/services/social-portfolio.jpg'],
  ['Noventix Global', '/images/services/marketing-portfolio.jpg'],
  ['Gawarvala Foundation', '/images/services/print-portfolio.jpg'],
];

export default function ExploreGallery() {
  const dialog = useRef(null);
  const section = useRef(null);
  useEffect(() => {
    const host = section.current;
    const observer = new IntersectionObserver(([entry]) => {
      host.toggleAttribute('data-revealed', entry.isIntersecting);
    }, { threshold: .25 });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);
  return <section ref={section} className="explore-gallery" aria-labelledby="explore-title">
    <div className="explore-artwork" aria-hidden="true">{[0, 4, 6, 2, 1, 5].map((index, slot) => <div key={index} className={`explore-artwork-item explore-artwork-item--${slot + 1}`}><img src={projects[index][1]} alt="" loading="lazy" /></div>)}</div>
    <div className="explore-copy">
    <h2 id="explore-title"><span>See more of my work.</span></h2>
    <SlideCommit label="See more of my work" doneLabel="Gallery opened" trackColor="#003ffd" handleColor="#ffffff" successColor="#003ffd" width={280} height={66} radius={33} onConfirm={() => dialog.current.showModal()} />
    <p className="explore-hint">Slide to explore</p>
    </div>
    <dialog className="portfolio-gallery-dialog" ref={dialog} aria-labelledby="gallery-title" onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}>
      <div className="portfolio-gallery-header"><h2 id="gallery-title">Project gallery</h2><button onClick={() => dialog.current.close()} autoFocus>Close ×</button></div>
      <div className="portfolio-gallery-grid">{projects.map(([name, image]) => <figure key={name}><img src={image} alt={name + ' portfolio artwork'} loading="lazy" /><figcaption>{name}</figcaption></figure>)}</div>
    </dialog>
  </section>;
}
