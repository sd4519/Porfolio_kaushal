import { useEffect, useRef, useState } from 'react';
import PixelSwap from './PixelSwap';
import './DiscoverWork.css';

const projects = [
  { name: 'Archive Cafe', image: '/images/services/packaging-portfolio.jpg', description: 'Brand identity and packaging' },
  { name: 'NorthForge', image: '/images/services/identity-portfolio.jpg', description: 'Brand identity and print applications' },
  { name: 'Feltrom', image: '/images/services/website-portfolio.jpg', description: 'Brand identity and website design' },
  { name: 'STEM Interface', image: '/images/work/stem-interface.jpg', description: 'Brand applications and social design' },
  { name: 'Yash Realty', image: '/images/services/social-portfolio.jpg', description: 'Brand identity and social creatives' },
  { name: 'Noventix Global', image: '/images/services/marketing-portfolio.jpg', description: 'Social and campaign creatives' },
  { name: 'Gawarvala Foundation', image: '/images/services/print-portfolio.jpg', description: 'Brand identity and stationery' },
];

export default function DiscoverWork() {
  const root = useRef(null);
  const [entered, setEntered] = useState(false);
  const [entranceComplete, setEntranceComplete] = useState(false);
  useEffect(() => {
    const stage = root.current.querySelector('.discover-stage');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= .65) setEntered(true);
      else if (entry.boundingClientRect.top > window.innerHeight) {
        setEntered(false);
        setEntranceComplete(false);
      }
    }, { threshold: [0, .65] });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const section = root.current;
    const rows = [...section.querySelectorAll('.discover-project')];
    const backgrounds = [...section.querySelectorAll('.discover-background img')];
    const media = matchMedia('(min-width: 1024px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const draw = () => {
      frame = 0;
      if (!media.matches) return;
      const rect = section.getBoundingClientRect();
      const revealTravel = window.innerHeight * 1.2;
      const reveal = Math.max(0, Math.min(1, (-rect.top - window.innerHeight * .15) / (revealTravel - window.innerHeight * .15)));
      const eased = reveal * reveal * (3 - 2 * reveal);
      section.style.setProperty('--name-split', String(eased));
      const backgroundReveal = Math.max(0, Math.min(1, (-rect.top - revealTravel) / (window.innerHeight * .3)));
      section.style.setProperty('--background-reveal', String(backgroundReveal * backgroundReveal * (3 - 2 * backgroundReveal)));
      const introTravel = revealTravel + window.innerHeight * .3;
      const progress = Math.max(0, Math.min(1, (-rect.top - introTravel) / (section.offsetHeight - window.innerHeight - introTravel)));
      const cursor = progress * (rows.length - 1);
      const step = window.innerHeight * .19;
      rows.forEach((row, index) => {
        const distance = index - cursor;
        const title = row.querySelector('h3');
        const image = row.querySelector('.discover-preview');
        const emphasis = Math.max(0, 1 - Math.abs(distance));
        const offset = distance > 1 ? step + (window.innerHeight * .43 - step) * (1 - Math.exp(-(distance - 1))) : distance * step;
        title.style.transform = `translateY(calc(-50% + ${offset + (1 - eased) * window.innerHeight * .65}px))`;
        title.style.opacity = String(distance < 0 ? Math.max(0, 1 + distance * 1.5) : Math.max(.07, 1 - distance * .62));
        title.style.filter = `blur(${Math.max(0, Math.abs(distance) - 1) * 4}px)`;
        title.style.color = Math.abs(distance) < .5 ? 'var(--accent)' : 'var(--muted)';
        backgrounds[index].style.opacity = String(emphasis);
        image.style.transform = `translateY(calc(-50% + ${distance * window.innerHeight * .34}px)) scale(${.92 + emphasis * .08})`;
        image.style.opacity = String(Math.max(0, 1 - Math.max(0, Math.abs(distance) - 1) * .55));
        image.style.filter = `blur(${Math.max(0, Math.abs(distance) - .75) * 5}px)`;
      });
    };
    const schedule = () => { if (media.matches && !frame) frame = requestAnimationFrame(draw); };
    const configure = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      section.toggleAttribute('data-animated', media.matches);
      if (media.matches) draw();
      else rows.forEach(row => row.querySelectorAll('h3, .discover-preview').forEach(node => {
        ['transform', 'opacity', 'filter', 'color'].forEach(property => node.style.removeProperty(property));
      }));
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', configure);
    media.addEventListener('change', configure);
    configure();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', configure);
      media.removeEventListener('change', configure);
    };
  }, []);

  return <section className="discover-work" id="work" ref={root} aria-labelledby="work-title">
    <h2 className="visually-hidden" id="work-title">Selected work</h2>
    <div className="discover-name-static">RECENT PROJECTS</div>
    <div className="discover-stage">
      <div className="discover-background" aria-hidden="true">
        {projects.map(project => <img key={project.name} src={project.image} alt="" decoding="async" />)}
      </div>
      <div className="container discover-content">
        <p className="discover-label">Discover<span className="eyebrow">Selected work / 07 projects</span></p>
        <svg className="discover-guides" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 47 L100 0 M0 53 L100 100" /></svg>
        <div className="discover-projects">
          {projects.map(project => <article className="discover-project" key={project.name}>
            <h3>{project.name}<span className="discover-project-description">{project.description}</span></h3>
            <div className="discover-preview"><img src={project.image} alt={`${project.name}: ${project.description}`} loading="lazy" decoding="async" /></div>
          </article>)}
        </div>
      </div>
      <div className="discover-name-reveal" aria-hidden="true">
        {['top', 'bottom'].map(half => <div className={`discover-name-half discover-name-half--${half}`} key={half}>
          <div className="discover-name-canvas"><span>RECENT PROJECTS</span></div>
        </div>)}
        {!entranceComplete && <PixelSwap
          className="discover-pixel-entrance"
          firstContent={<div className="discover-pixel-empty" />}
          secondContent={<div className="discover-pixel-heading">RECENT PROJECTS</div>}
          active={entered} trigger="manual" pattern="bottom-to-top" randomness={.35}
          pixelSize={90} duration={1100} pixelDuration={450}
          onComplete={active => { if (active) setEntranceComplete(true); }}
          style={{ height: '100%', aspectRatio: 'auto' }}
        />}
      </div>
    </div>
  </section>;
}
