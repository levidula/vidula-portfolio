import { ExperienceCard } from '@/components/ExperienceCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'TechCorp Solutions',
    role: 'Senior Frontend Developer',
    duration: '2022 - Present',
  },
  {
    company: 'StartupHub Inc.',
    role: 'Full Stack Developer',
    duration: '2020 - 2022',
  },
  {
    company: 'Digital Agency Co.',
    role: 'Web Developer',
    duration: '2018 - 2020',
  },
  {
    company: 'Freelance',
    role: 'Independent Consultant',
    duration: '2016 - 2018',
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & Background
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over 8 years of experience building web applications for startups and enterprises.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.company} delay={index * 100}>
              <ExperienceCard {...exp} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center">
            <Button variant="hero" size="lg" className="gap-2">
              <Calendar className="w-5 h-5" />
              Book a call
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
