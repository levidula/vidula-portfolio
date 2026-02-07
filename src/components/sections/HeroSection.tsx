import { Button } from '@/components/ui/button';
import { SocialIcons } from '@/components/SocialIcons';
import { MapPin, Sparkles, Briefcase, FolderOpen, FileText } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import { useTilt } from '@/hooks/use-tilt';

export const HeroSection = () => {
  const techStack = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'MySQL', 'GitHub', 'API Integration', 'MS Office', 'Power BI'];

  const stats = [
    { icon: Briefcase, value: '2', label: 'Internships' },
    { icon: FolderOpen, value: '4', label: 'Projects' },
    { icon: FileText, value: '3', label: 'Publications' },
  ];

  const { ref: tiltRef, style: tiltStyle, handlers: tiltHandlers, isHovered } = useTilt({
    maxTilt: 3,
    scale: 1.01,
    transitionSpeed: 400,
  });

  return (
    <section className="section-padding min-h-screen flex items-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 lg:justify-self-end">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clay-light text-primary text-sm font-medium border border-border/50 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight whitespace-nowrap animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
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
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              A passionate developer and AI enthusiast currently pursuing my studies at SRM University. 
              I love turning ideas into real-world applications, exploring the intersection of web development 
              and artificial intelligence, and contributing to meaningful research.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 shadow-card border border-border/30">
                  <div className="p-2 rounded-lg bg-clay-light">
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
                <Button variant="outline" size="lg" className="px-8">
                  View Projects
                </Button>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm text-muted-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={tech} 
                    className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground font-medium border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 chip-reveal"
                    style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-self-start w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
            {/* Ambient Animated Element */}
            <div 
              className="absolute -right-20 top-1/4 w-64 h-64 rounded-full bg-clay/[0.06] blur-3xl animate-drift-slow pointer-events-none -z-10"
              aria-hidden="true"
            />
            
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Profile Card */}
              <div className="relative">
                {/* Animated gradient aura */}
                <div className="absolute -inset-2 rounded-[2rem] profile-aura animate-gradient-shift opacity-60 blur-xl" />
                
                <div 
                  ref={tiltRef}
                  {...tiltHandlers}
                  style={tiltStyle}
                  className={`relative w-80 h-[22rem] md:w-[26rem] md:h-[32rem] lg:w-[24rem] lg:h-[30rem] rounded-3xl overflow-hidden shadow-card-lg bg-gradient-hero transition-shadow duration-300 ${isHovered ? 'shadow-[0_24px_64px_-20px_hsl(25_25%_45%/0.22),0_12px_30px_-10px_hsl(30_20%_30%/0.1)]' : ''}`}
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

                {/* Location Badge */}
                <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-2xl px-4 py-3 shadow-card-hover flex items-center gap-2 badge-glow border border-border/40">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Based in Chennai, Tamil Nadu</span>
                </div>

                {/* Sparkle Badge */}
                <div className="absolute -top-4 -right-4 md:-right-8 bg-card rounded-2xl px-4 py-3 shadow-card-hover animate-float border border-border/40" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex justify-center">
                <SocialIcons />
              </div>
              
              {/* Skill Focus Highlight */}
              <div className="hidden lg:block mt-6 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                {/* Decorative accent */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <span className="w-8 h-px bg-border/60" />
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                </div>
                <p className="text-sm text-muted-foreground/70 font-sans tracking-wide mb-2">Currently focusing on</p>
                <p className="text-base text-foreground/80 font-sans font-medium leading-relaxed">Full-Stack Development</p>
                <p className="text-base text-foreground/80 font-sans font-medium leading-relaxed">AI-Powered Interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
