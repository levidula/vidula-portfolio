import { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

import projectInventory from '@/assets/project-inventory.jpg';
import projectChatbot from '@/assets/project-chatbot.jpg';
import projectOgenz from '@/assets/project-ogenz.jpg';
import projectComingSoon from '@/assets/project-coming-soon.jpg';
import projectShelterCastle from '@/assets/project-shelter-castle.jpg';

const projects = [
  {
    image: projectInventory,
    title: 'Inventory Management System',
    description: 'Web-based inventory and stock management system with real-time tracking and analytics dashboard.',
    tags: ['HTML', 'CSS', 'Python', 'MySQL'],
    year: 'Jan 2024 – Mar 2024',
  },
  {
    image: projectChatbot,
    title: 'Empathic AI Chatbot',
    description: 'Emotion-aware NLP chatbot that understands and responds to user sentiment with empathetic interactions.',
    tags: ['Python', 'NLP', 'AI', 'Machine Learning'],
    year: 'Aug 2025 – Nov 2025',
    link: 'https://empathy-weave-46.lovable.app',
  },
  {
    image: projectOgenz,
    title: 'OgenZ',
    description: 'Professional office website with modern design, responsive layout, and corporate branding.',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js'],
    year: 'Dec 2025 – Jan 2026',
    link: 'https://ogenz.com/',
    label: 'Full-stack',
  },
  {
    image: projectShelterCastle,
    title: 'Shelter Castle',
    description: 'A modern real estate website showcasing premium property listings and seamless user experience.',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js'],
    year: '2026',
    link: 'https://sheltercastle.com/',
    label: 'Full-stack',
  },
  {
    image: projectComingSoon,
    title: 'Coming Soon',
    description: 'Exciting new project currently in development. Stay tuned for updates!',
    tags: ['In Progress'],
    year: 'TBD',
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Selected Projects
            </h2>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show less' : 'View all'}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
