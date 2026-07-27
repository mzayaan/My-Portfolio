import FadeIn from '../components/FadeIn';
import { languageGroups } from '../data/languages';

export default function LanguagesSection() {
  return (
    <section
      id="languages"
      className="relative w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-20"
        style={{ color: '#0C0C0C', fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        Languages
      </FadeIn>

      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
        {languageGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.12} y={30} className="flex flex-col">
            <h3
              className="mb-6 font-medium uppercase tracking-widest"
              style={{
                color: '#0C0C0C',
                fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
              }}
            >
              {group.title}
            </h3>

            <ul className="flex flex-col">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-0.5 py-3"
                  style={{ borderTop: '1px solid rgba(12,12,12,0.12)' }}
                >
                  <span
                    className="font-medium"
                    style={{
                      color: '#0C0C0C',
                      fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="font-light leading-snug"
                    style={{
                      color: '#0C0C0C',
                      opacity: 0.55,
                      fontSize: 'clamp(0.78rem, 1.3vw, 0.95rem)',
                    }}
                  >
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
