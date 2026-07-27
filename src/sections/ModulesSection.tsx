import FadeIn from '../components/FadeIn';
import { modules } from '../data/modules';

export default function ModulesSection() {
  return (
    <section
      id="modules"
      className="relative z-10 -mt-10 w-full rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30} className="mb-6 text-center">
        <span
          className="text-[0.7rem] font-light uppercase tracking-[0.3em] opacity-60 sm:text-xs"
          style={{ color: '#D7E2EA' }}
        >
          Year 3 · Semester 1 · Academic Year 2026
        </span>
      </FadeIn>

      <FadeIn
        as="h2"
        delay={0.05}
        y={40}
        className="hero-heading mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        Now Studying
      </FadeIn>

      <div className="mx-auto grid w-full max-w-6xl gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
        {modules.map((module, i) => (
          <FadeIn
            key={module.number}
            delay={i * 0.1}
            y={30}
            className="flex flex-col rounded-[28px] border border-[#D7E2EA]/20 p-6 transition-colors duration-300 hover:border-[#D7E2EA]/45 sm:rounded-[34px] sm:p-8"
          >
            <span
              className="mb-3 font-black leading-none opacity-25"
              style={{ color: '#D7E2EA', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
            >
              {module.number}
            </span>

            <h3
              className="font-medium uppercase leading-tight"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.55rem)' }}
            >
              {module.name}
            </h3>

            <p
              className="mt-4 font-light leading-relaxed opacity-70"
              style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.5vw, 1.02rem)' }}
            >
              {module.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {module.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-[#D7E2EA]/[0.07] px-3 py-1 text-[0.62rem] font-light uppercase tracking-widest opacity-80 sm:text-[0.7rem]"
                  style={{ color: '#D7E2EA' }}
                >
                  {topic}
                </span>
              ))}
            </div>

          </FadeIn>
        ))}
      </div>
    </section>
  );
}
