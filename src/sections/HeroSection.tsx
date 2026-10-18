import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { navLinks, site } from '../config/site';
import { asset } from '../lib/asset';

const PORTRAIT = asset('zayaan-photo-circle.webp');

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
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {site.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait — fixed circular avatar on the right, no cursor interaction */}
      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute inset-y-0 right-[6%] z-10 my-auto h-[170px] w-[170px] sm:h-[230px] sm:w-[230px] md:right-[9%] md:h-[290px] md:w-[290px] lg:h-[330px] lg:w-[330px]"
      >
        <img
          src={PORTRAIT}
          alt={`${site.fullName}, ${site.role}`}
          className="h-full w-full select-none rounded-full border-4 border-[#D7E2EA] object-cover md:border-[6px]"
          draggable={false}
        />
      </FadeIn>
    </section>
  );
}
