import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { navLinks, site } from '../config/site';
import { asset } from '../lib/asset';

const PORTRAIT = asset('zayaan-avatar.webp');

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen w-full flex-col"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 pt-6 sm:gap-x-6 md:gap-x-8 md:px-10 md:pt-8 lg:justify-between lg:gap-x-4"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[0.65rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 sm:text-xs md:text-sm lg:text-[0.95rem] xl:text-base"
            style={{ color: '#D7E2EA' }}
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero heading */}
      <div className="relative z-20 w-full overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full whitespace-nowrap px-4 text-center font-black uppercase leading-none tracking-tight text-[11vw] sm:mt-4 sm:text-[11.5vw] md:-mt-2 md:text-[12vw] lg:text-[12.5vw]"
        >
          Hi, i&apos;m {site.name.toLowerCase()}
        </FadeIn>
      </div>

      <FadeIn
        as="p"
        delay={0.3}
        y={12}
        className="relative z-20 -mt-1 w-full text-center font-light uppercase sm:mt-0 md:mt-1"
        style={{
          color: '#D7E2EA',
          opacity: 0.45,
          fontSize: 'clamp(0.55rem, 1.05vw, 0.9rem)',
          letterSpacing: '0.42em',
        }}
      >
        {site.fullName}
      </FadeIn>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex w-full items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="flex items-end gap-4 sm:gap-6 md:gap-8">
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {site.tagline}
          </p>

          <span
            aria-hidden="true"
            className="hero-heading select-none font-script leading-none"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 6rem)' }}
          >
            {site.monogram}
          </span>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 flex w-[260px] -translate-x-1/2 -translate-y-1/2 justify-center sm:bottom-2 sm:top-auto sm:w-[330px] sm:translate-y-0 md:bottom-0 md:w-[400px] lg:w-[460px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          wrapperClassName="w-full"
          className="w-full"
        >
          <img
            src={PORTRAIT}
            alt={`${site.fullName}, ${site.role}`}
            className="pointer-events-none w-full select-none object-contain"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
