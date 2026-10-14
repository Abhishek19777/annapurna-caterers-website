import { cn } from '@/lib/utils';

/** Brand mark: a steaming handi (Indian cooking pot) in a maroon medallion. */
const LogoMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    aria-hidden="true"
    className={cn('h-10 w-10 shrink-0', className)}
  >
    <circle cx="32" cy="32" r="31" fill="#5E0F1F" />
    <circle cx="32" cy="32" r="28.5" fill="none" stroke="#D4A64A" strokeWidth="1.6" />
    <g fill="none" stroke="#D4A64A" strokeWidth="2.2" strokeLinecap="round">
      <path d="M25 24c-3-3.5 3-6 0-10" />
      <path d="M32 24c-3-3.5 3-6 0-10" />
      <path d="M39 24c-3-3.5 3-6 0-10" />
    </g>
    <rect x="15" y="27" width="34" height="4.5" rx="2.25" fill="#D4A64A" />
    <path d="M18.5 32.5h27v4.5a13.5 13.5 0 0 1-27 0z" fill="#D4A64A" />
    <circle cx="14.5" cy="34" r="2.4" fill="none" stroke="#D4A64A" strokeWidth="2" />
    <circle cx="49.5" cy="34" r="2.4" fill="none" stroke="#D4A64A" strokeWidth="2" />
  </svg>
);

export default LogoMark;
