function Icon({ children }) {
  return (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function GitHubIcon() {
  return (
    <Icon>
      <path fill="currentColor" stroke="none" d="M12 2.4a9.6 9.6 0 0 0-3.04 18.7c.48.09.66-.2.66-.46v-1.68c-2.7.59-3.27-1.3-3.27-1.3-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .86 1.47 2.25 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.15-.24-4.41-1.08-4.41-4.8 0-1.06.38-1.92 1-2.6-.1-.24-.43-1.23.1-2.57 0 0 .82-.26 2.64.99a9.17 9.17 0 0 1 4.8 0c1.82-1.25 2.64-.99 2.64-.99.53 1.34.2 2.33.1 2.57.62.68 1 1.54 1 2.6 0 3.73-2.27 4.56-4.43 4.8.35.31.66.91.66 1.83v2.65c0 .26.18.56.67.46A9.6 9.6 0 0 0 12 2.4Z" />
    </Icon>
  )
}

export function LinkedInIcon() {
  return (
    <Icon>
      <path fill="currentColor" stroke="none" d="M5.2 8.15A1.55 1.55 0 1 0 5.2 5a1.55 1.55 0 0 0 0 3.15ZM3.8 9.4h2.8v9.1H3.8V9.4Zm4.55 0h2.68v1.24h.04c.37-.7 1.28-1.45 2.64-1.45 2.82 0 3.34 1.86 3.34 4.28v5.03h-2.8V14.04c0-1.06-.02-2.43-1.48-2.43-1.48 0-1.7 1.15-1.7 2.35v4.54h-2.72V9.4Z" />
    </Icon>
  )
}

export function XIcon() {
  return (
    <Icon>
      <path d="M4 4.3 19.7 19.7M19.7 4.3 4 19.7" />
    </Icon>
  )
}

export function InstagramIcon() {
  return (
    <Icon>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.7" />
      <circle cx="12" cy="12" r="4.1" />
      <circle fill="currentColor" stroke="none" cx="17.7" cy="6.4" r="1.05" />
    </Icon>
  )
}

export function EmailIcon() {
  return (
    <Icon>
      <rect x="3" y="5.2" width="18" height="13.6" rx="1.8" />
      <path d="m4 6.7 8 6.1 8-6.1" />
    </Icon>
  )
}
