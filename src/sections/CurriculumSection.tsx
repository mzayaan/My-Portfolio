import { Check, Loader, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { curriculum } from '../data/curriculum';

export default function CurriculumSection() {
  return (
    <section
      id="curriculum"
      className="relative w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30} className="mb-5 text-center">
        <span
          className="text-[0.7rem] font-light uppercase tracking-[0.3em] opacity-55 sm:text-xs"
          style={{ color: '#D7E2EA' }}
        >
          BSc (Hons) Software Engineering · University of Technology, Mauritius
        </span>
      </FadeIn>

      <FadeIn
        as="h2"
        delay={0.05}
        y={40}
        className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-20"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        Curriculum
      </FadeIn>

      <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {curriculum.map((level, i) => {
          const inProgress = level.status === 'In progress';
          const upcoming = level.status === 'Upcoming';
          const Icon = inProgress ? Loader : upcoming ? Clock : Check;

          return (
            <FadeIn
              key={level.level}
              delay={i * 0.12}
              y={30}
              className="flex flex-col rounded-[28px] border p-6 sm:rounded-[34px] sm:p-8"
              style={{
                borderColor: inProgress
                  ? 'rgba(215,226,234,0.5)'
                  : upcoming
                    ? 'rgba(215,226,234,0.10)'
                    : 'rgba(215,226,234,0.18)',
                borderStyle: upcoming ? 'dashed' : 'solid',
              }}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span
                  className="font-medium uppercase tracking-widest"
                  style={{
                    color: '#D7E2EA',
                    fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                  }}
                >
                  {level.label}
                </span>
                <span
                  className="flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.6rem] font-light uppercase tracking-widest sm:text-[0.65rem]"
                  style={{
                    color: '#D7E2EA',
                    opacity: inProgress ? 0.95 : upcoming ? 0.35 : 0.5,
                  }}
                >
                  <Icon className="h-3 w-3" strokeWidth={2.25} />
                  {level.status}
                </span>
              </div>

              <p
                className="mb-6 font-light leading-relaxed opacity-55"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.8rem, 1.4vw, 0.98rem)',
                }}
              >
                {level.note}
              </p>

              <ul className="flex flex-col gap-2.5">
                {level.modules.map((module) => (
                  <li
                    key={module}
                    className="flex items-start gap-2.5 font-light leading-snug"
                    style={{
                      color: '#D7E2EA',
                      opacity: upcoming ? 0.5 : 0.8,
                      fontSize: 'clamp(0.8rem, 1.4vw, 1rem)',
                    }}
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{ background: '#D7E2EA' }}
                    />
                    {module}
                  </li>
                ))}
              </ul>
            </FadeIn>
          );
        })}
      </div>

    </section>
  );
}
