interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export const ExperienceCard = ({ company, role, duration, description }: ExperienceCardProps) => {
  return (
    <div className="card-base card-hover">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{role}</h3>
        <p className="text-primary font-medium">{company}</p>
        <p className="text-sm text-muted-foreground">{duration}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">{description}</p>
      </div>
    </div>
  );
};
