import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  label?: string;
}

export const ProjectCard = ({ image, title, description, tags, year, link, label }: ProjectCardProps) => {
  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group card-base card-lift overflow-hidden block ${link ? 'cursor-pointer transition-shadow duration-300 hover:shadow-lg' : ''}`}
    >
      <div className="relative overflow-hidden rounded-xl mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {label && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium bg-primary text-primary-foreground">
            {label}
          </span>
        )}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};
