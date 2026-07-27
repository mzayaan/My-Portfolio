import { ArrowUpRight } from 'lucide-react';
import { site } from '../config/site';

type ContactButtonProps = {
  label?: string;
  href?: string;
  className?: string;
  withIcon?: boolean;
};

export default function ContactButton({
  label = 'Contact Me',
  href = `mailto:${site.email}`,
  className = '',
  withIcon = false,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
      {withIcon && <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />}
    </a>
  );
}
