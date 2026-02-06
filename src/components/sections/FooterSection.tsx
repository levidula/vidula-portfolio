import { SocialIcons } from '@/components/SocialIcons';
import { AnimatedSection } from '@/components/AnimatedSection';

export const FooterSection = () => {
  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Left Content */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Let's Build Something Meaningful
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                I'm passionate about turning ideas into practical, user-focused solutions and enjoy collaborating on projects that make an impact.
              </p>
              <a 
                href="mailto:byvidula@gmail.com" 
                className="inline-block text-primary hover:text-teal-dark transition-colors text-lg font-medium"
              >
                byvidula@gmail.com
              </a>
            </div>

            {/* Right Content */}
            <SocialIcons variant="pill" />
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Web Developer. All rights reserved.
            </p>
            <span className="font-serif text-xl md:text-2xl font-medium text-foreground tracking-[0.08em]">
              V.dev
            </span>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};
