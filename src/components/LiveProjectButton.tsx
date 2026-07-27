type LiveProjectButtonProps = {
  label?: string;
  href?: string;
  className?: string;
  /** 'ghost' = outlined (default), 'solid' = filled, for the primary action. */
  variant?: 'ghost' | 'solid';
};

export default function LiveProjectButton({
  label = 'Live Project',
  href = '#projects',
  className = '',
  variant = 'ghost',
}: LiveProjectButtonProps) {
  const external = href.startsWith('http');

  const styles =
    variant === 'solid'
      ? 'border-2 border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] hover:bg-transparent hover:text-[#D7E2EA]'
      : 'border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10';

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300 sm:px-10 sm:py-3.5 sm:text-base ${styles} ${className}`}
    >
      {label}
    </a>
  );
}
