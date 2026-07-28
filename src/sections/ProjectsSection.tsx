import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { projects, type Project } from '../data/projects';

type CardProps = {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

function ProjectCard({
  project,
  index,
  progress,
  range,
  targetScale,
}: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, marginTop: `${index * 28}px`, background: '#0C0C0C' }}
        className="relative w-full max-w-6xl origin-top rounded-[40px] border-2 border-[#D7E2EA] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        {/* Top row */}
        <div className="mb-4 flex flex-col gap-4 px-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between md:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none"
              style={{
                color: '#D7E2EA',
                fontSize: 'clamp(2.5rem, 8vw, 110px)',
              }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="font-light uppercase tracking-widest opacity-60"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.65rem, 1.1vw, 0.95rem)',
                }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                }}
              >
                {project.name}
              </h3>
              <span
                className="font-light uppercase tracking-wide opacity-45"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.65rem, 1.1vw, 0.95rem)',
                }}
              >
                {project.stack}
              </span>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            {project.live && (
              <LiveProjectButton
                href={project.live}
                label={project.liveLabel ?? 'Live Site'}
                variant="solid"
              />
            )}
            {project.href && (
              <LiveProjectButton href={project.href} label="View Code" />
            )}
          </div>
        </div>

        <p
          className="mb-5 max-w-3xl px-2 font-light leading-relaxed opacity-65 md:px-4"
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(0.8rem, 1.4vw, 1.05rem)',
          }}
        >
          {project.summary}
        </p>

        {project.collaborators && (
          <div className="mb-5 flex flex-wrap items-center gap-2 px-2 md:px-4">
            <span
              className="font-light uppercase tracking-widest opacity-40"
              style={{
                color: '#D7E2EA',
                fontSize: 'clamp(0.62rem, 1vw, 0.78rem)',
              }}
            >
              Built with
            </span>
            {project.collaborators.map((person) => (
              <a
                key={person.github}
                href={person.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/25 py-1 pl-1 pr-3 transition-colors duration-300 hover:bg-[#D7E2EA]/10"
              >
                <img
                  src={`${person.github}.png?size=48`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-6 w-6 rounded-full"
                />
                <span
                  className="font-light"
                  style={{
                    color: '#D7E2EA',
                    fontSize: 'clamp(0.68rem, 1.1vw, 0.85rem)',
                  }}
                >
                  {person.name}
                </span>
              </a>
            ))}
          </div>
        )}

        {/* Bottom row: gameplay video, or the image grid */}
        {project.video ? (
          <div className="px-2 md:px-4">
            <video
              src={project.video.src}
              poster={project.video.poster}
              controls
              loop
              muted
              playsInline
              preload="none"
              className="w-full rounded-[28px] bg-black object-cover sm:rounded-[36px] md:rounded-[44px]"
              style={{ maxHeight: 'clamp(220px, 40vh, 460px)' }}
            />
          </div>
        ) : (
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4 md:gap-5">
            <img
              src={project.images.colOneTop}
              alt={`${project.name} preview one`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(110px, 13vw, 190px)', objectPosition: 'top' }}
            />
            <img
              src={project.images.colOneBottom}
              alt={`${project.name} preview two`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 18vw, 270px)', objectPosition: 'top' }}
            />
          </div>

          <div className="w-[60%]">
            <img
              src={project.images.colTwo}
              alt={`${project.name} main preview`}
              loading="lazy"
              className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
        )}
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const total = projects.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 w-full px-5 pb-20 pt-10 sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </FadeIn>

      {projects.map((project, index) => {
        const targetScale = 1 - (total - 1 - index) * 0.018;
        const start = index / total;
        return (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            progress={scrollYProgress}
            range={[start, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
