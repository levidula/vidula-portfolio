import { Github, Linkedin, Instagram, Dribbble } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialIconsProps {
  variant?: 'default' | 'pill';
  className?: string;
}

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
];

export const SocialIcons = ({ variant = 'default', className = '' }: SocialIconsProps) => {
  if (variant === 'pill') {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {socialLinks.slice(0, 2).map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <Button variant="pill-social" className="gap-2 px-5">
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Button>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};
