import { ExperienceCard } from '@/components/ExperienceCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const experiences = [
  {
    company: 'Google (Virtual Internship)',
    role: 'AI/ML Virtual Intern',
    duration: 'Apr 2025 – Jun 2025',
    description: 'Completed a structured virtual internship focused on Artificial Intelligence and Machine Learning concepts, gaining practical exposure to real-world AI workflows and tools.',
  },
  {
    company: 'Google (Virtual Internship)',
    role: 'Generative AI Virtual Intern',
    duration: 'Oct 2024 – Dec 2024',
    description: 'Worked on Generative AI fundamentals including large language models, prompt design, and AI-driven application development through guided learning modules.',
  },
  {
    company: 'SRM University',
    role: 'Student Web & AI Developer (Projects)',
    duration: '2026 – Present',
    description: 'Developed academic and personal projects including an inventory management system and an AI-based chatbot using HTML, CSS, Python, MySQL, and GitHub.',
  },
  {
    company: 'Academic Conferences',
    role: 'Student Researcher (AI Applications)',
    duration: '2024 – 2025',
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
              My journey in web development and AI through internships, projects, and research.
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
            <a 
              href="https://flowcv.com/resume/l1j02ep42keo" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="gap-2">
                <FileText className="w-5 h-5" />
                View My Resume
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
