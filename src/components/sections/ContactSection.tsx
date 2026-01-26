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
