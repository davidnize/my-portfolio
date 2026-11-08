import { EmailIcon, GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from './SocialIcons'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/davidnize', external: true, Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-nizeyimana/', external: true, Icon: LinkedInIcon },
  { label: 'X', href: 'https://x.com/_david_nize', external: true, Icon: XIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/david_nize', external: true, Icon: InstagramIcon },
  { label: 'Email', href: 'mailto:nizeyimanadavid61@gmail.com', Icon: EmailIcon },
]

export default function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Social and contact links">
      {socialLinks.map(({ Icon, ...link }, index) => (
        <li key={link.label} style={{ '--item-index': index }}>
          <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}>
            <span className="social-links__main">
              <Icon />
              <span>{link.label}</span>
            </span>
            {link.external && <span className="social-links__arrow" aria-hidden="true">↗</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
