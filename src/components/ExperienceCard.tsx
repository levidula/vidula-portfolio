interface ExperienceCardProps {
  organization: string;
  title: string;
  duration: string;
  description: string;
}

export const ExperienceCard = ({ organization, title, duration, description }: ExperienceCardProps) => {
  return (
    <div className="card-base card-hover">
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-primary font-medium">{organization}</p>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
