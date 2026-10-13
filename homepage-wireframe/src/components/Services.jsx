import { useEffect, useRef } from 'react';
import { portfolioServices } from './portfolioContent.js';
import './Services.css';
import ShinyText from './ShinyText.jsx';

export default function Services() {
  const stack = useRef(null);
  useEffect(() => {
    const element = stack.current;
    const slots = [...element.querySelectorAll('.service-card-slot')];
    const cards = slots.map(slot => slot.querySelector('.service-card'));
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let enabled = false;
    let frame = 0;
    let offsets = [];
    const reset = () => cards.forEach(card => {
      card.style.removeProperty('transform');
      card.style.removeProperty('opacity');
      card.style.removeProperty('filter');
    });
    const draw = () => {
      frame = 0;
      if (!enabled) return;
      const top = element.getBoundingClientRect().top;
      cards.forEach((card, index) => {
        // The incoming card advances while the pinned card recedes into depth.
        const travel = slots[index].offsetHeight;
        const progress = index === cards.length - 1 ? 0 : Math.max(0, Math.min(1,
          (24 - top - offsets[index] - travel * .15) / (travel * .85)));
        card.style.transform = `translate3d(0, ${-progress * travel * .18}px, ${-progress * 140}px) rotateX(${progress * 32}deg) scale(${1 - progress * .07})`;
        card.style.opacity = String(1 - progress);
        const visible = Math.max(0, Math.min(1, (window.innerHeight - slots[index].getBoundingClientRect().top) / card.offsetHeight / .2));
        const clarity = visible * visible * (3 - 2 * visible);
        card.style.filter = `blur(${(1 - clarity) * 10}px)`;
      });
    };
    const schedule = () => { if (enabled && !frame) frame = requestAnimationFrame(draw); };
    const measure = () => {
      delete element.dataset.stack;
      reset();
      const available = window.innerHeight - 48;
      enabled = !motion.matches && window.innerWidth >= 1024 && cards.every(card => card.offsetHeight <= available);
      if (enabled) {
        element.style.setProperty('--service-card-height', `${available}px`);
        element.dataset.stack = 'true';
        let offset = 0;
        offsets = slots.map(slot => { const start = offset; offset += slot.offsetHeight; return start; });
        draw();
      } else element.style.removeProperty('--service-card-height');
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    motion.addEventListener('change', measure);
    let disposed = false;
    document.fonts.ready.then(() => { if (!disposed) measure(); });
    measure();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      motion.removeEventListener('change', measure);
      delete element.dataset.stack;
      reset();
    };
  }, []);
  return <section className="services-section" id="services" aria-labelledby="services-title">
    <div className="services-introduction">
      <div className="container services-heading"><p className="eyebrow">What I bring</p><h2 id="services-title"><span><ShinyText text="Brand" color="#171b1d" shineColor="#003ffd" speed={2.5} delay={1.5} shineWidth={35} />, digital and print.</span><span>From idea to <ShinyText text="execution" color="#171b1d" shineColor="#003ffd" speed={2.5} delay={1.5} shineWidth={35} />.</span></h2></div>
    </div>
    <div className="container">
      <div className="service-cards" ref={stack}>
        {portfolioServices.map((service, index) => <div className="service-card-slot" key={service.kind}><article className="service-card" aria-labelledby={`service-${service.kind}`}>
          <div className="service-copy">
            <div className="service-card-top"><p>{service.promise}</p><span className="service-number">{String(index + 1).padStart(2, '0')} / 08</span></div>
            <div className="service-card-bottom"><h3 id={`service-${service.kind}`}>{service.title}</h3><p className="service-description">{service.description}</p><ul className="service-details">{service.details.map(detail => <li key={detail}>{detail}</li>)}</ul><p className="service-tools">{service.tools}</p></div>
          </div>
          <figure className={`service-visual service-visual--${service.kind} service-portfolio-visual`}>
            <img className="service-generated-image" src={service.image} alt={service.imageCaption} loading="lazy" decoding="async" />
          </figure>
        </article></div>)}
      </div>
    </div>
  </section>;
}
