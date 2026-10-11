import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BranchedMenu from './BranchedMenu.jsx';

export default function SkillsReveal({ items }) {
  const root = useRef(null);
  useEffect(() => {
    const element = root.current;
    const section = element.closest('.box-drop-section');
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let played = false;
    let context;
    const play = () => {
      if (played) return;
      played = true;
      const cursor = element.querySelector('.skills-reveal-cursor');
      const heading = element.querySelector('.skills-typed-heading');
      const rows = element.querySelectorAll('.branched-menu__head, .branched-menu__item');
      const lines = element.querySelectorAll('.branched-menu__base');
      element.dataset.played = 'true';
      const complete = () => { element.inert = false; section.dispatchEvent(new Event('skills-revealed')); };
      if (media.matches) { complete(); return; }
      context = gsap.context(() => {
        element.inert = true;
        const bounds = element.getBoundingClientRect();
        const stage = section.querySelector('.box-drop-sticky').getBoundingClientRect();
        const startX = stage.width / 2 - bounds.left + stage.left;
        const startY = stage.height * .72 - bounds.top + stage.top;
        gsap.set(cursor, { x: startX, y: startY, opacity: 0, scale: .75 });
        gsap.set(rows, { opacity: 0, y: 8 });
        gsap.set('.branched-menu__marker, .branched-menu__reach', { opacity: 0 });
        gsap.set('.portfolio-skill-branches', { '--skills-trunk': 0 });
        lines.forEach(path => { const length = path.getTotalLength(); gsap.set(path, { strokeDasharray: length, strokeDashoffset: length }); });
        heading.textContent = '';
        const typing = { count: 0 };
        const phrase = '01 / SKILLS';
        const timeline = gsap.timeline({ onComplete: complete });
        timeline.to(cursor, { opacity: 1, scale: 1, y: startY - 65, duration: .35, ease: 'power2.out' })
          .to(cursor, { x: 44, y: 5, duration: .85, ease: 'power3.inOut' })
          .to(cursor, { scale: .8, duration: .1 })
          .to(cursor, { scale: 1, duration: .18 })
          .to(typing, { count: phrase.length, duration: .7, ease: 'none', onUpdate: () => { heading.textContent = phrase.slice(0, Math.floor(typing.count)); } })
          .to('.portfolio-skill-branches', { '--skills-trunk': 1, duration: .35 })
          .to(lines, { strokeDashoffset: 0, stagger: .035, duration: .5, ease: 'power2.out' }, '<')
          .to(rows, { opacity: 1, y: 0, stagger: .11, duration: .25, ease: 'power2.out' })
          .to(cursor, { opacity: 0, y: 18, duration: .3 }, '<')
          .set('.branched-menu__marker, .branched-menu__reach', { clearProps: 'opacity' });
      }, element);
    };
    section.addEventListener('skills-unpack', play);
    const motion = () => { if (media.matches) { context?.revert(); played=false; play(); } };
    media.addEventListener('change', motion);
    if (media.matches) play();
    return () => { section.removeEventListener('skills-unpack', play); media.removeEventListener('change', motion); context?.revert(); };
  }, []);
  return <div ref={root} className="skills-reveal">
    <p className="eyebrow skills-typed-heading">01 / SKILLS</p>
    <svg className="skills-reveal-cursor" viewBox="0 0 32 40" aria-hidden="true"><path d="M3 2 3 30 11 23 17 36 23 33 17 21 28 21Z" fill="#003ffd" stroke="white" strokeWidth="2" strokeLinejoin="round" /></svg>
    <BranchedMenu items={items} defaultOpen={[0,1]} color="#171b1d" accentColor="#003ffd" lineColor="#ccd0ce" width={360} rowHeight={32} fontSize={14} indent={28} trunk={6} radius={8} className="portfolio-skill-branches" />
  </div>;
}
