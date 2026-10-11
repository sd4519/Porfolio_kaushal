import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BranchedMenu from './BranchedMenu.jsx';

export default function SkillsReveal({ items, headingText = '01 / SKILLS', stage = 'skills' }) {
  const root = useRef(null);
  useEffect(() => {
    const element = root.current;
    const section = element.closest('.box-drop-section');
    delete section.dataset[`${stage}Complete`];
    if (stage === 'tools') delete section.dataset.toolsEmerging;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let timeline;
    let triggered = false;
    let context;
    const play = () => {
      const cursor = element.querySelector('.skills-reveal-cursor');
      const heading = element.querySelector('.skills-typed-heading');
      const rows = element.querySelectorAll('.branched-menu__head, .branched-menu__item');
      const lines = element.querySelectorAll('.branched-menu__base');
      element.dataset.played = 'true';
      const complete = () => { element.inert = false; section.dataset[`${stage}Complete`] = 'true'; section.dispatchEvent(new Event(`${stage}-complete`)); if (stage === 'tools') { section.dataset.toolsEmerging = 'true'; section.dispatchEvent(new Event('tools-emerge')); } };
      if (media.matches) { heading.textContent = headingText; complete(); return; }
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
        const phrase = headingText;
        timeline = gsap.timeline({ paused: true, onComplete: complete });
        timeline.to(cursor, { opacity: 1, scale: 1, y: startY - 65, duration: .35, ease: 'power2.out' })
          .to(cursor, { x: 44, y: 5, duration: .85, ease: 'power3.inOut' })
          .to(cursor, { scale: .8, duration: .1 })
          .to(cursor, { scale: 1, duration: .18 })
          .to(typing, { count: phrase.length, duration: .7, ease: 'none', onUpdate: () => { heading.textContent = phrase.slice(0, Math.floor(typing.count)); } })
          .call(() => { if (stage === 'tools') { section.dataset.toolsEmerging = 'true'; section.dispatchEvent(new Event('tools-emerge')); } })
          .to('.portfolio-skill-branches', { '--skills-trunk': 1, duration: .35 })
          .to(lines, { strokeDashoffset: 0, stagger: .035, duration: .5, ease: 'power2.out' }, '<')
          .to(rows, { opacity: 1, y: 0, stagger: .11, duration: .25, ease: 'power2.out' })
          .to(cursor, { opacity: 0, y: 18, duration: .3 }, '<')
          .set('.branched-menu__marker, .branched-menu__reach', { clearProps: 'opacity' });
      }, element);
    };
    play();
    const progress = event => {
      if (!media.matches && event.detail < .3) {
        const from = stage === 'tools' ? .18 : .06;
        const to = stage === 'tools' ? .3 : .18;
        const rewind = Math.max(0, Math.min(1, (event.detail - from) / (to - from)));
        timeline?.pause().progress(Math.min(timeline.progress(), rewind));
        triggered = false;
        element.inert = true;
        delete section.dataset[`${stage}Complete`];
        if (event.detail <= from) {
          triggered = false;
          element.querySelector('.skills-typed-heading').textContent = '';
          if (stage === 'tools') delete section.dataset.toolsEmerging;
        }
        return;
      }
      if (stage === 'skills' && !triggered && event.detail >= .3) {
        triggered = true;
        timeline?.play(0);
      }
    };
    const start = () => { if (!triggered) { triggered = true; timeline?.play(0); } };
    section.addEventListener('unpack-progress', progress);
    if (stage === 'tools') { section.addEventListener('skills-complete', start); if (section.dataset.skillsComplete === 'true') start(); }
    const motion = () => { context?.revert();triggered = false;play(); };
    media.addEventListener('change', motion);
    return () => { section.removeEventListener('unpack-progress', progress);section.removeEventListener('skills-complete', start);media.removeEventListener('change',motion);context?.revert(); };

  }, [headingText, stage]);
  return <div ref={root} className={`skills-reveal ${stage}-reveal`}>
    <p className="eyebrow skills-typed-heading">{headingText}</p>
    <svg className="skills-reveal-cursor" viewBox="0 0 32 40" aria-hidden="true"><path d="M3 2 3 30 11 23 17 36 23 33 17 21 28 21Z" fill="#003ffd" stroke="white" strokeWidth="2" strokeLinejoin="round" /></svg>
    <BranchedMenu items={items} defaultOpen={[0,1]} color="#171b1d" accentColor="#003ffd" lineColor="#ccd0ce" width={360} rowHeight={32} fontSize={14} indent={28} trunk={6} radius={8} className="portfolio-skill-branches" />
  </div>;
}
