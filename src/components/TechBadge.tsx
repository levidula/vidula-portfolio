interface TechBadgeProps {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
      {name}
    </span>
  );
};
