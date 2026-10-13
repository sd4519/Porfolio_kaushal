import { useEffect, useRef, useState } from 'react';

export default function SectionMenu({ items }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const button = useRef(null);
  useEffect(() => {
    const update = () => {
      const hero = document.querySelector('.portfolio-hero');
      const pastHero = hero && hero.getBoundingClientRect().bottom <= 80;
      setVisible(Boolean(pastHero));
      if (!pastHero) setOpen(false);
    };
    const outside = event => { if (!root.current?.contains(event.target)) setOpen(false); };
    const escape = event => { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, []);
  return <div ref={root} className="section-menu" data-visible={visible} data-open={open} inert={!visible}>
    <nav id="section-menu-links" className="section-menu-panel" aria-label="Section navigation" inert={!open}>
      <div>{items.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</div>
    </nav>
    <button ref={button} className="section-menu-trigger" aria-expanded={open} aria-controls="section-menu-links" onClick={() => setOpen(value => !value)}>Menu<span aria-hidden="true">{open ? '−' : '+'}</span></button>
  </div>;
}
