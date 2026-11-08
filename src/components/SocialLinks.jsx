const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/davidnize', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-nizeyimana/', external: true },
  { label: 'X', href: 'https://x.com/_david_nize', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/david_nize', external: true },
  { label: 'Email', href: 'mailto:nizeyimanadavid61@gmail.com' },
]

export default function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Social and contact links">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
            <span>{link.label}</span>
            <span className="social-links__arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
