import { ExperienceCard } from '@/components/ExperienceCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'AI/ML Virtual Intern',
    organization: 'Google (Virtual Internship)',
    duration: 'Apr 2025 – Jun 2025',
    description: 'Completed a structured virtual internship focused on Artificial Intelligence and Machine Learning concepts, gaining practical exposure to real-world AI workflows and tools.',
  },
  {
    title: 'Generative AI Virtual Intern',
    organization: 'Google (Virtual Internship)',
    duration: 'Oct 2024 – Dec 2024',
    description: 'Worked on Generative AI fundamentals including large language models, prompt design, and AI-driven application development through guided learning modules.',
  },
  {
    title: 'Student Web & AI Developer (Projects)',
    organization: 'SRM University',
    duration: '2023 – Present',
    description: 'Developed academic and personal projects including an inventory management system and an AI-based chatbot using HTML, CSS, Python, MySQL, and GitHub.',
  },
  {
    title: 'Student Researcher (AI Applications)',
    organization: 'Academic Conferences',
    duration: '2023 – 2024',
    description: 'Authored and presented research papers on Artificial Intelligence applications in education, industry, and social impact at national and international conferences.',
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
            <AnimatedSection key={exp.title} delay={index * 100}>
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
