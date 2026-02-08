import { ContactForm } from '@/components/ContactForm';
import { AnimatedSection } from '@/components/AnimatedSection';

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-gradient-contact rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Let's build something great together
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Open for freelance work, full-time roles, collaborations, or just a friendly discussion about web development.
                </p>
                
                {/* Why work with me */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground/80 tracking-wide uppercase">
                    Why work with me
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Strong fundamentals & clean architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>Curious about AI + modern web</span>
                    </li>
                  </ul>
                </div>
                
                {/* Email block */}
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground/80 tracking-wide uppercase">
                    Email
                  </p>
                  <a 
                    href="mailto:byvidula@gmail.com" 
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    byvidula@gmail.com
                  </a>
                </div>
                
                {/* Supporting line */}
                <p className="text-sm text-muted-foreground/80 italic">
                  Happy to connect and explore collaboration opportunities.
                </p>
              </div>

              {/* Right Content - Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
