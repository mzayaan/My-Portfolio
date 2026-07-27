import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { socials } from '../config/site';

const BASE =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const decor = {
  moon: `${BASE}/moon_icon.11395d36.png`,
  object: `${BASE}/p59_1.4659672e.png`,
  lego: `${BASE}/lego_icon-1.703bb594.png`,
  group: `${BASE}/Group_134-1.2e04f3ce.png`,
};

const ABOUT_TEXT =
  "I'm a third-year BSc (Hons) Software Engineering student at the University of Technology, Mauritius, with a strong foundation in programming, web development and database management. I interned at Parallels Mauritius after my second year, and I enjoy solving problems in a team to ship software that is efficient, scalable and genuinely useful. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative 3D objects */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img src={decor.moon} alt="" aria-hidden="true" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img src={decor.object} alt="" aria-hidden="true" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img src={decor.lego} alt="" aria-hidden="true" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img src={decor.group} alt="" aria-hidden="true" className="w-full" />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[620px] text-center font-medium leading-relaxed"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            }}
          />
        </div>

        <FadeIn delay={0.1} y={20} className="flex flex-col items-center gap-6">
          <ContactButton />
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-xs font-light uppercase tracking-widest opacity-60 transition-opacity duration-200 hover:opacity-100 sm:text-sm"
                style={{ color: '#D7E2EA' }}
              >
                {social.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
