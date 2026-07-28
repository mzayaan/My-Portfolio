import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { site } from '../config/site';

const details = [
  { Icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: site.mobile, href: `tel:${site.mobile.replace(/[^\d+]/g, '')}` },
  { Icon: MapPin, label: site.address, href: undefined },
];

const links = [
  { Icon: Github, label: 'GitHub', href: site.github },
  { Icon: Linkedin, label: 'LinkedIn', href: site.linkedin },
];

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative z-20 w-full px-5 pb-14 pt-24 sm:px-8 sm:pt-32 md:px-10 md:pt-40"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-12 text-center font-black uppercase tracking-tight sm:mb-16"
        style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)', lineHeight: 1.1 }}
      >
        Get in touch
      </FadeIn>

      <FadeIn delay={0.1} y={25} className="mb-14 flex justify-center sm:mb-16">
        <ContactButton withIcon />
      </FadeIn>

      <div className="mx-auto grid w-full max-w-4xl gap-8 border-t border-[#D7E2EA]/15 pt-10 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          {details.map(({ Icon, label, href }) => {
            const content = (
              <span className="flex items-start gap-3">
                <Icon
                  className="mt-0.5 h-4 w-4 shrink-0 opacity-60"
                  style={{ color: '#D7E2EA' }}
                  strokeWidth={1.75}
                />
                <span
                  className="font-light leading-snug opacity-70"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
                >
                  {label}
                </span>
              </span>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="transition-opacity duration-200 hover:opacity-100"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          {links.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-100"
            >
              <Icon
                className="h-4 w-4 shrink-0 opacity-60"
                style={{ color: '#D7E2EA' }}
                strokeWidth={1.75}
              />
              <span
                className="font-light uppercase tracking-widest opacity-70"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}
              >
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <p
        aria-hidden="true"
        className="hero-heading mt-8 select-none overflow-visible text-center font-script"
        style={{
          fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)',
          lineHeight: 2,
          letterSpacing: '0.08em',
          paddingBottom: '0.2em',
        }}
      >
        {site.monogram}
      </p>

      <p
        className="mt-4 text-center text-[0.65rem] font-light uppercase tracking-[0.25em] opacity-35 sm:text-xs"
        style={{ color: '#D7E2EA' }}
      >
        © {new Date().getFullYear()} {site.fullName} · References available on request
      </p>
    </footer>
  );
}
