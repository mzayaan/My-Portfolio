import FadeIn from '../components/FadeIn';
import { skillGroups } from '../data/languages';

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="relative w-full rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="mb-4 text-center font-black uppercase leading-none tracking-tight"
        style={{ color: '#0C0C0C', fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
      >
        Skills
      </FadeIn>

      <FadeIn delay={0.05} y={20}>
        <p
          className="mb-14 text-center text-[0.7rem] font-light uppercase tracking-[0.25em] sm:mb-20 sm:text-xs"
          style={{ color: '#0C0C0C', opacity: 0.45 }}
        >
          University of Technology, Mauritius · Parallels · Final year project
        </p>
      </FadeIn>

      <div className="mx-auto flex w-full max-w-5xl flex-col">
        {skillGroups.map((group, i) => (
          <FadeIn
            key={group.title}
            delay={i * 0.1}
            y={30}
            className="flex flex-col gap-5 py-8 sm:flex-row sm:gap-10 sm:py-10 md:gap-16 md:py-12"
            style={{
              borderTop: '1px solid rgba(12, 12, 12, 0.15)',
              borderBottom:
                i === skillGroups.length - 1
                  ? '1px solid rgba(12, 12, 12, 0.15)'
                  : undefined,
            }}
          >
            <div className="flex shrink-0 flex-col gap-1 sm:w-56">
              <h3
                className="font-medium uppercase leading-tight"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                }}
              >
                {group.title}
              </h3>
              <span
                className="text-[0.65rem] font-light uppercase tracking-widest sm:text-xs"
                style={{ color: '#0C0C0C', opacity: 0.4 }}
              >
                {group.source === 'Parallels'
                  ? 'Intern at Parallels'
                  : group.source === 'FYP'
                    ? 'Final year project · in progress'
                    : 'University of Technology, Mauritius'}
              </span>
            </div>

            <div className="flex flex-wrap content-start gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2 font-light leading-none"
                  style={{
                    color: '#0C0C0C',
                    border: '1px solid rgba(12, 12, 12, 0.16)',
                    fontSize: 'clamp(0.78rem, 1.4vw, 1rem)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
