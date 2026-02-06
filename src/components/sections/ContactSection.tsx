import { ContactForm } from '@/components/ContactForm';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Mail, MapPin, Briefcase } from 'lucide-react';

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
                <div className="space-y-3">
                  <a 
                    href="mailto:byvidula@gmail.com" 
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    byvidula@gmail.com
                  </a>
                  <div className="flex items-center gap-3 text-lg text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    Chennai, Tamil Nadu
                  </div>
                  <div className="flex items-center gap-3 text-lg text-muted-foreground">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Available for freelance and internship opportunities
                  </div>
                </div>
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
