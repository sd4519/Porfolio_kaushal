import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import './sterling-gate-kinetic-navigation.css';

if (typeof window !== 'undefined') gsap.registerPlugin(CustomEase);
type Item = { label: string; href: string };

/** Sterling Gate's layered entrance adapted to Kaushal's portfolio. */
export function Component({ items }: { items: Item[] }) {
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const animationContext = useRef<gsap.Context | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#top');

  useEffect(() => {
    const context = gsap.context(() => {}, root);
    animationContext.current = context;
    return () => { context.revert(); animationContext.current = null; };
  }, []);

  useEffect(() => {
    const host = root.current;
    if (!host) return;
    const media = matchMedia('(max-width: 1023px)');
    const resize = () => { if (!media.matches) setOpen(false); };
    media.addEventListener('change', resize);
    return () => media.removeEventListener('change', resize);
  }, []);

  useEffect(() => {
    const host = root.current;
    const panel = dialog.current;
    if (!host || !panel) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const context = animationContext.current;
    if (!context) return;
    let timeline: gsap.core.Timeline | undefined;
    let removeMotionListener = () => {};
    context.add(() => {
      const ease = CustomEase.create('kaushal-menu', '0.65, 0.01, 0.05, 0.99');
      const animate = () => {
        timeline = gsap.timeline();
        if (open) {
          gsap.set(panel, { display: 'block' });
          gsap.fromTo('.kinetic-scrim', { opacity: 0 }, { opacity: 1, duration: reduce.matches ? 0 : .35 });
          gsap.fromTo('.kinetic-backdrop', { xPercent: 101 }, { xPercent: 0, stagger: reduce.matches ? 0 : .09, duration: reduce.matches ? 0 : .58, ease });
          gsap.fromTo('.kinetic-link', { yPercent: 120, rotate: 5 }, { yPercent: 0, rotate: 0, stagger: reduce.matches ? 0 : .045, delay: reduce.matches ? 0 : .22, duration: reduce.matches ? 0 : .6, ease });
        } else {
          if (getComputedStyle(panel).display === 'none') return;
          timeline
            .to('.kinetic-link', { yPercent: 110, rotate: 3, opacity: 0, stagger: reduce.matches ? 0 : { each: .025, from: 'end' }, duration: reduce.matches ? 0 : .22, ease: 'power2.in' }, 0)
            .to('.kinetic-caption', { opacity: 0, y: 8, duration: reduce.matches ? 0 : .16 }, 0)
            .to(Array.from(host.querySelectorAll('.kinetic-backdrop')).reverse(), { xPercent: 101, stagger: reduce.matches ? 0 : .07, duration: reduce.matches ? 0 : .48, ease }, reduce.matches ? 0 : .12)
            .to('.kinetic-scrim', { opacity: 0, duration: reduce.matches ? 0 : .4 }, reduce.matches ? 0 : .2)
            .set(panel, { display: 'none' });
        }
      };
      animate();
      if (open) gsap.set('.kinetic-link, .kinetic-caption', { opacity: 1, y: 0 });
      const change = () => {
        timeline?.kill();
        gsap.killTweensOf(host.querySelectorAll('.kinetic-backdrop, .kinetic-link, .kinetic-caption, .kinetic-scrim'));
        gsap.set('.kinetic-backdrop', { xPercent: open ? 0 : 101 });
        gsap.set('.kinetic-link', { yPercent: 0, rotate: 0 });
        gsap.set('.kinetic-scrim', { opacity: open ? 1 : 0 });
        gsap.set(panel, { display: open ? 'block' : 'none' });
      };
      reduce.addEventListener('change', change);
      removeMotionListener = () => reduce.removeEventListener('change', change);
    });
    return () => {
      removeMotionListener();
      timeline?.kill();
      gsap.killTweensOf(host.querySelectorAll('.kinetic-backdrop, .kinetic-link, .kinetic-caption, .kinetic-scrim'));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const host = root.current!;
    const links = host.querySelectorAll<HTMLAnchorElement>('.kinetic-link');
    const timer = window.setTimeout(() => links[0]?.focus(), 0);
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key === 'Tab') {
        const targets = [trigger.current!, ...links];
        const first = targets[0], last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', keyboard);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', keyboard);
      trigger.current?.focus();
    };
  }, [open]);

  return <div ref={root} className="kinetic-navigation">
    <button ref={trigger} className="kinetic-toggle" aria-expanded={open} aria-controls="kinetic-menu" onClick={() => setOpen(!open)}>
      <span>{open ? 'Close' : 'Menu'}</span><span className={`kinetic-plus ${open ? 'is-open' : ''}`} aria-hidden="true">+</span>
    </button>
    <div ref={dialog} id="kinetic-menu" className="kinetic-overlay" role="dialog" aria-modal="true" aria-label="Navigation" inert={!open}>
      <div className="kinetic-scrim" onClick={() => setOpen(false)} />
      <div className="kinetic-backdrop kinetic-backdrop-first" /><div className="kinetic-backdrop kinetic-backdrop-second" /><div className="kinetic-backdrop kinetic-backdrop-final" />
      <nav className="kinetic-content" aria-label="Mobile and tablet navigation">
        <p className="kinetic-caption">Kaushal / Portfolio</p>
        <ul>{items.map((item, index) => <li key={item.href}><a className="kinetic-link" href={item.href} aria-current={active === item.href ? 'location' : undefined} onClick={() => { setActive(item.href); setOpen(false); }}><span className="kinetic-index">0{index + 1}</span>{item.label}<span className="kinetic-marker" aria-hidden="true">↗</span></a></li>)}</ul>
        <p className="kinetic-caption kinetic-signoff">Precise thinking. Purposeful execution.</p>
      </nav>
    </div>
  </div>;
}
