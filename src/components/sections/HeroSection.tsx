import { Button } from '@/components/ui/button';
import { SocialIcons } from '@/components/SocialIcons';
import { MapPin, Sparkles, Briefcase, FolderOpen, BookOpen, ArrowRight } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const stats = [
  { icon: Briefcase, value: '2+', label: 'Internships' },
  { icon: FolderOpen, value: '6+', label: 'Projects' },
  { icon: BookOpen, value: '3', label: 'Publications' },
];

export const HeroSection = () => {
  const techStack = ['React', 'JavaScript', 'HTML', 'CSS'];

  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light text-primary text-sm font-medium animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Hi, I'm <span className="text-foreground">VIDULA P S</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                Web Developer
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                I build fast, responsive, and scalable web applications with clean code and modern design.
              </p>
            </div>

            {/* About Me Paragraph */}
            <p className="text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              A passionate developer and researcher exploring the intersection of web technologies and AI. 
              Currently pursuing my studies at SRM University while building real-world projects and contributing to academic research.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
              <a href="#contact">
                <Button variant="hero" size="lg">
                  Contact Me
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" size="lg" className="gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Tech Stack Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm text-muted-foreground mb-3">Technologies I work with</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Python', 'MySQL', 'Git'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Profile Card */}
              <div className="relative">
                <div className="w-64 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-card-lg bg-gradient-hero">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Location Badge */}
                <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-2xl px-4 py-3 shadow-card-hover flex items-center gap-2 animate-float">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Based in India</span>
                </div>

                {/* Tech Stack Card */}
                <div className="absolute -top-4 -right-4 md:-right-8 bg-card rounded-2xl px-4 py-3 shadow-card-hover animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md bg-muted text-foreground font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex justify-center">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
