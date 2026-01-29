import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const projects = [
  {
    image: project1,
    title: 'TaskFlow Dashboard',
    description: 'A modern task management application with real-time collaboration features and intuitive drag-and-drop interface.',
    tags: ['React', 'JavaScript', 'CSS', 'Vite'],
    year: '2024',
  },
  {
    image: project2,
    title: 'Ecomm Fashion Store',
    description: 'Full-stack e-commerce platform with seamless checkout experience and inventory management.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    year: '2024',
  },
  {
    image: project3,
    title: 'Fintech Mobile App',
    description: 'Landing page and marketing site for a fintech mobile application with smooth animations.',
    tags: ['React', 'JavaScript', 'Framer Motion'],
    year: '2023',
  },
  {
    image: project4,
    title: 'Analytics Platform',
    description: 'Data visualization dashboard with interactive charts and real-time metrics tracking.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    year: '2023',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Selected Projects
            </h2>
            <Button variant="outline" className="gap-2">
              View all
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
