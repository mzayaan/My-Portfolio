import {
  useMemo,
  type ComponentType,
  type ElementType,
  type ReactNode,
} from 'react';
import { motion } from 'framer-motion';

type FadeInProps = {
  children?: ReactNode;
  /** Element type to render, e.g. 'div' | 'h1' | 'img'. Defaults to 'div'. */
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

type LooseComponent = ComponentType<Record<string, unknown>>;

/** Cache created motion components so identity is stable across renders. */
const motionCache = new Map<ElementType, LooseComponent>();

function getMotionComponent(as: ElementType): LooseComponent {
  const cached = motionCache.get(as);
  if (cached) return cached;
  const created = motion.create(as as never) as unknown as LooseComponent;
  motionCache.set(as, created);
  return created;
}

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  ...rest
}: FadeInProps) {
  const Component = useMemo(() => getMotionComponent(as), [as]);

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}
