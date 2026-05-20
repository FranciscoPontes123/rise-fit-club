import React from 'react';

export function IconDumbbell() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <path d="M4 12v8M8 8v16M14 14h4M24 8v16M28 12v8" />
    </svg>
  );
}

export function IconPerson() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <circle cx="16" cy="10" r="4" />
      <path d="M6 28c1-5 5-8 10-8s9 3 10 8" />
    </svg>
  );
}

export function IconGroup() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <circle cx="11" cy="11" r="3" />
      <circle cx="21" cy="11" r="3" />
      <path d="M4 24c1-4 4-6 7-6M28 24c-1-4-4-6-7-6M11 28c1-3 3-4 5-4s4 1 5 4" />
    </svg>
  );
}

export function IconPilates() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <path d="M4 22c4-2 8-2 12-2s8 0 12 2" />
      <circle cx="16" cy="10" r="3" />
      <path d="M16 13v6" />
      <path d="M10 19l-3 7M22 19l3 7" />
    </svg>
  );
}

export function IconJiujitsu() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <path d="M8 6l8 4 8-4M8 6v14l8 6 8-6V6" />
      <path d="M16 10v16M8 12l8 4 8-4" />
    </svg>
  );
}

export function IconStar({ filled = true, size = 18 }: { filled?: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? '#C9A84C' : 'none'}
      stroke="#C9A84C"
      strokeWidth="1.5"
    >
      <polygon points="12,3 14.6,9 21,9.6 16,14 17.4,20.4 12,17.2 6.6,20.4 8,14 3,9.6 9.4,9" />
    </svg>
  );
}

export function IconArrow({ rot = 0 }: { rot?: number }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: `rotate(${rot}deg)`, transition: 'transform .25s ease', flexShrink: 0 }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconWhatsapp() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.3S23 3 16 3zm6.8 17.4c-.3.8-1.7 1.6-2.4 1.6-.7.1-1.5.1-2.3-.1-.6-.2-1.3-.4-2.2-.8-3.8-1.7-6.4-5.6-6.6-5.9-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2c.4-.3.8-.4 1-.4h.7c.2 0 .5 0 .8.6.3.7 1 2.4 1.1 2.6.1.2.2.4 0 .7-.1.3-.2.4-.4.7s-.4.5-.6.7c-.2.2-.4.4-.2.8.3.4 1.2 2 2.5 3.2 1.7 1.5 3.1 2 3.6 2.2.4.2.7.2.9-.1.2-.3.9-1.1 1.2-1.5.2-.4.5-.3.8-.2.4.1 2.1 1 2.5 1.2.4.2.6.3.7.4.1.2.1.9-.2 1.6z" />
    </svg>
  );
}

export function IconMap() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <path d="M16 28s-9-8-9-15a9 9 0 0118 0c0 7-9 15-9 15z" />
      <circle cx="16" cy="13" r="3" />
    </svg>
  );
}

export function IconClock() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8v8l5 3" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <path d="M6 6c0 11 9 20 20 20l2-5-5-3-2 2c-3-1-6-4-7-7l2-2-3-5z" />
    </svg>
  );
}

export function IconIG() {
  return (
    <svg viewBox="0 0 32 32" className="ico">
      <rect x="5" y="5" width="22" height="22" rx="5" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="23" cy="9" r="1.4" fill="var(--gold)" stroke="none" />
    </svg>
  );
}

export function IconCheck() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export function IconDash() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#444"
      strokeWidth="2.4"
      strokeLinecap="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 10h22M5 16h22M5 22h22" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 7l18 18M25 7L7 25" />
    </svg>
  );
}

export const ICON_MAP: Record<string, () => React.ReactElement> = {
  dumbbell: IconDumbbell,
  person: IconPerson,
  group: IconGroup,
  pilates: IconPilates,
  jiujitsu: IconJiujitsu,
};
