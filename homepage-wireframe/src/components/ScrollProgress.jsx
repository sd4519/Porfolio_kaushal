import { useEffect, useState } from 'react';
import SloshGauge from './SloshGauge.jsx';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const page = document.documentElement;
      const distance = page.scrollHeight - page.clientHeight;
      setProgress(distance > 0 ? Math.min(100, Math.max(0, window.scrollY / distance * 100)) : 0);
      setCompact(window.innerWidth < 768);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return <div className="scroll-progress">
    <SloshGauge value={progress} width={compact ? 42 : 52} height={compact ? 84 : 104}
      radius={12} liquidColor="#003ffd" glassColor="#171b1d" ticks={4}
      viscosity={0.25} tilt={0.35} splash={0.2}
      ariaLabel="Page scroll progress" />
  </div>;
}
