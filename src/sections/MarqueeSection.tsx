import { useEffect, useRef, useState } from 'react';
import { techMarquee } from '../data/languages';

const half = Math.ceil(techMarquee.length / 2);
const rowOne = techMarquee.slice(0, half);
const rowTwo = techMarquee.slice(half);

const triple = (list: string[]) => [...list, ...list, ...list];

const ROW_ONE = triple(rowOne);
const ROW_TWO = triple(rowTwo);

function Chip({ label }: { label: string }) {
  return (
    <span
      className="flex shrink-0 items-center whitespace-nowrap rounded-full border border-[#D7E2EA]/20 px-6 py-3 font-medium uppercase tracking-widest sm:px-8 sm:py-4"
      style={{
        color: '#D7E2EA',
        fontSize: 'clamp(0.8rem, 1.6vw, 1.4rem)',
        background:
          'linear-gradient(180deg, rgba(215,226,234,0.06) 0%, rgba(215,226,234,0.01) 100%)',
      }}
    >
      {label}
    </span>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const node = sectionRef.current;
      if (!node) return;
      const sectionTop = node.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const shift = offset - 200;

  return (
    <section
      ref={sectionRef}
      className="w-full pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: '#0C0C0C', overflow: 'hidden' }}
      aria-label="Technologies and tools"
    >
      <p
        className="mb-8 px-6 text-center text-[0.7rem] font-light uppercase tracking-[0.3em] opacity-45 sm:mb-10 sm:text-xs"
        style={{ color: '#D7E2EA' }}
      >
        Languages · Frameworks · Tools
      </p>

      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${shift}px)`, willChange: 'transform' }}
        >
          {ROW_ONE.map((label, i) => (
            <Chip key={`r1-${i}`} label={label} />
          ))}
        </div>

        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-shift}px)`, willChange: 'transform' }}
        >
          {ROW_TWO.map((label, i) => (
            <Chip key={`r2-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
