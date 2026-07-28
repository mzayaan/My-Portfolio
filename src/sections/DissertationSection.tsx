import { Github, Loader } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { dissertation } from '../data/dissertation';

export default function DissertationSection() {
  return (
    <section
      id="dissertation"
      className="relative w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30} className="mb-5 text-center">
        <span
          className="text-[0.7rem] font-light uppercase tracking-[0.3em] opacity-55 sm:text-xs"
          style={{ color: '#D7E2EA' }}
        >
          {dissertation.kind}
        </span>
      </FadeIn>

      <FadeIn
        as="h2"
        delay={0.05}
        y={40}
        className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-16"
        style={{ fontSize: 'clamp(2.2rem, 9vw, 120px)' }}
      >
        Dissertation
      </FadeIn>

      <div className="mx-auto w-full max-w-5xl">
        {/* Title card */}
        <FadeIn
          delay={0.1}
          y={30}
          className="rounded-[28px] border border-[#D7E2EA]/25 p-6 sm:rounded-[34px] sm:p-8 md:p-10"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className="flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[0.62rem] font-light uppercase tracking-widest sm:text-[0.7rem]"
              style={{ color: '#D7E2EA' }}
            >
              <Loader className="h-3 w-3" strokeWidth={2.25} />
              {dissertation.status}
            </span>
            <span
              className="text-[0.65rem] font-light uppercase tracking-widest opacity-45 sm:text-xs"
              style={{ color: '#D7E2EA' }}
            >
              {dissertation.cohort}
            </span>
          </div>

          <h3
            className="font-medium uppercase leading-tight"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1.15rem, 3vw, 2.3rem)' }}
          >
            {dissertation.title}
          </h3>

          <p
            className="mt-5 max-w-4xl font-light leading-relaxed opacity-70"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.88rem, 1.6vw, 1.1rem)' }}
          >
            {dissertation.summary}
          </p>

          <a
            href={dissertation.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-7 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-[#D7E2EA]/10 sm:px-9"
            style={{ color: '#D7E2EA' }}
          >
            <Github className="h-4 w-4" strokeWidth={1.75} />
            View Repository
          </a>
        </FadeIn>

        {/* Objectives */}
        <FadeIn delay={0.15} y={30} className="mt-12 sm:mt-16">
          <h4
            className="mb-6 font-medium uppercase tracking-widest opacity-55"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.3vw, 0.95rem)' }}
          >
            Objectives
          </h4>

          <div className="flex flex-col">
            {dissertation.objectives.map((objective, i) => (
              <div
                key={objective.title}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-8 sm:py-6"
                style={{
                  borderTop: '1px solid rgba(215,226,234,0.14)',
                  borderBottom:
                    i === dissertation.objectives.length - 1
                      ? '1px solid rgba(215,226,234,0.14)'
                      : undefined,
                }}
              >
                <span
                  className="shrink-0 font-black leading-none opacity-25 sm:w-16"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1.5">
                  <span
                    className="font-medium leading-tight"
                    style={{ color: '#D7E2EA', fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)' }}
                  >
                    {objective.title}
                  </span>
                  <span
                    className="max-w-3xl font-light leading-relaxed opacity-60"
                    style={{ color: '#D7E2EA', fontSize: 'clamp(0.82rem, 1.4vw, 1rem)' }}
                  >
                    {objective.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Stack */}
        <FadeIn delay={0.2} y={30} className="mt-12 sm:mt-16">
          <h4
            className="mb-6 font-medium uppercase tracking-widest opacity-55"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.3vw, 0.95rem)' }}
          >
            Stack
          </h4>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dissertation.stack.map((group) => (
              <div key={group.group} className="flex flex-col gap-3">
                <span
                  className="font-light uppercase tracking-widest opacity-40"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.65rem, 1.1vw, 0.78rem)' }}
                >
                  {group.group}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#D7E2EA]/[0.07] px-3 py-1.5 font-light leading-none"
                      style={{
                        color: '#D7E2EA',
                        fontSize: 'clamp(0.72rem, 1.2vw, 0.9rem)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
