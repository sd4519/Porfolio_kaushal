import { useEffect, useRef, useState } from 'react';
import ThoughtLine from './ThoughtLine.jsx';
import './PortfolioIntro.css';

const SESSION_KEY = 'kaushal-thought-preloader-seen';
const shouldShow = () => {
  if (typeof window === 'undefined') return false;
  try { return sessionStorage.getItem(SESSION_KEY) !== 'true'; } catch { return true; }
};

export default function PortfolioIntro() {
  const [visible, setVisible] = useState(shouldShow);
  const [working, setWorking] = useState(true);
  const [steps, setSteps] = useState(['Preparing the portfolio']);
  const [leaving, setLeaving] = useState(false);
  const overlay = useRef(null);
  const finish = useRef(() => {});
  useEffect(() => {
    if (!visible) return;
    const content = document.getElementById('portfolio-content');
    const previousInert = content?.inert;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    if (content) content.inert = true;
    document.body.style.overflow = 'hidden';
    overlay.current?.querySelector('button')?.focus({ preventScroll: true });
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let cancelled = false, closing = false;
    let exitTimer, settleTimer;
    const close = () => {
      if (closing || cancelled) return;
      closing = true;
      try { sessionStorage.setItem(SESSION_KEY, 'true'); } catch { /* Storage may be unavailable. */ }
      setLeaving(true);
      exitTimer = window.setTimeout(() => setVisible(false), motion.matches ? 0 : 350);
    };
    finish.current = close;
    const image = new Image();
    image.src = matchMedia('(max-width: 1023px)').matches ? '/images/hero-portfolio-mobile.png' : '/images/hero-portfolio.png';
    const illustration = image.decode().then(() => { if (!cancelled) setSteps(previous => [...previous, 'Portfolio illustration ready']); });
    const fonts = document.fonts.ready.then(() => { if (!cancelled) setSteps(previous => [...previous, 'Typography ready']); });
    const started = performance.now();
    Promise.allSettled([illustration, fonts]).then(() => {
      if (cancelled || closing) return;
      const reveal = () => { if (!cancelled && !closing) { setWorking(false); settleTimer = window.setTimeout(close, motion.matches ? 0 : 550); } };
      settleTimer = window.setTimeout(reveal, motion.matches ? 0 : Math.max(0, 1100 - (performance.now() - started)));
    });
    const keyboard = event => { if (event.key === 'Escape') close(); };
    const onMotion = () => { if (motion.matches) close(); };
    window.addEventListener('keydown', keyboard);
    motion.addEventListener('change', onMotion);
    const maximum = window.setTimeout(close, 8000);
    return () => {
      cancelled = true;
      clearTimeout(exitTimer); clearTimeout(settleTimer); clearTimeout(maximum);
      window.removeEventListener('keydown', keyboard);
      motion.removeEventListener('change', onMotion);
      if (content) content.inert = previousInert;
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus !== document.body) previousFocus.focus({ preventScroll: true });
    };
  }, [visible]);
  if (!visible) return null;
  return <div ref={overlay} className={`portfolio-intro${leaving ? ' is-leaving' : ''}`} role="dialog" aria-modal="true" aria-label="Loading Kaushal's portfolio">
    <span className="intro-wordmark">Kaushal.</span>
    <div className="intro-copy">
      <p className="intro-label">Brand &amp; digital designer</p>
      <ThoughtLine label="Preparing my portfolio" doneLabel="Ready to explore" working={working} steps={steps} collapsible={false} collapseOnSettle={false} glyph="dot" color="#171b1d" glyphColor="#003ffd" fontSize={20} showTimer={false} />
      <p className="intro-signature">Brand identity. Packaging. Digital experiences.</p>
    </div>
    <span className="intro-location">Precise thinking. Purposeful execution.</span>
    <button className="intro-skip" onClick={() => finish.current()}>Skip <span aria-hidden="true">?</span></button>
  </div>;
}
