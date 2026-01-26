interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
}

export const ExperienceCard = ({ company, role, duration }: ExperienceCardProps) => {
  return (
    <div className="card-base card-hover">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{company}</h3>
        <p className="text-primary font-medium">{role}</p>
        <p className="text-sm text-muted-foreground">{duration}</p>
      </div>
    </div>
  );
};
