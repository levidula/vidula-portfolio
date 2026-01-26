import { Button } from '@/components/ui/button';
import { SocialIcons } from '@/components/SocialIcons';
import { MapPin, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

export const HeroSection = () => {
  const techStack = ['React', 'TypeScript', 'Node.js', 'Tailwind'];

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
                Hi, I'm a{' '}
                <span className="text-gradient">Web Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                I build fast, responsive, and scalable web applications with clean code and modern design.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#contact">
                <Button variant="hero" size="lg">
                  Contact Me
                </Button>
              </a>
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
