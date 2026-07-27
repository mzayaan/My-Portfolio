import { GraduationCap, Briefcase, School, Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { experience } from '../data/experience';

const icons = [GraduationCap, Briefcase, School];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 sm:gap-6">
        {experience.map((entry, i) => {
          const Icon = icons[i % icons.length];
          return (
            <FadeIn
              key={entry.title}
              delay={i * 0.12}
              y={30}
              className="rounded-[28px] border border-[#D7E2EA]/20 p-6 transition-colors duration-300 hover:border-[#D7E2EA]/45 sm:rounded-[34px] sm:p-8 md:p-10"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Icon
                  className="h-5 w-5 shrink-0"
                  style={{ color: '#D7E2EA' }}
                  strokeWidth={1.75}
                />
                <span
                  className="text-[0.7rem] font-light uppercase tracking-[0.2em] opacity-60 sm:text-xs"
                  style={{ color: '#D7E2EA' }}
                >
                  {entry.period}
                </span>
              </div>

              <h3
                className="font-medium uppercase leading-tight"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(1.1rem, 2.4vw, 2rem)',
                }}
              >
                {entry.title}
              </h3>

              <p
                className="mt-1 font-light uppercase tracking-wide opacity-50"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.8rem, 1.4vw, 1rem)',
                }}
              >
                {entry.place}
              </p>

              <p
                className="mt-4 max-w-3xl font-light leading-relaxed opacity-70"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                }}
              >
                {entry.description}
              </p>

              {entry.link && (
                <a
                  href={entry.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#D7E2EA]/30 px-4 py-2 transition-colors duration-300 hover:bg-[#D7E2EA]/10"
                >
                  <Github className="h-3.5 w-3.5" strokeWidth={1.75} style={{ color: '#D7E2EA' }} />
                  <span
                    className="font-light tracking-wide"
                    style={{
                      color: '#D7E2EA',
                      fontSize: 'clamp(0.72rem, 1.2vw, 0.9rem)',
                    }}
                  >
                    {entry.link.label}
                  </span>
                </a>
              )}

              {entry.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.65rem] font-light uppercase tracking-widest opacity-70 sm:text-xs"
                      style={{ color: '#D7E2EA' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
