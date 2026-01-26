import { AnimatedSection } from '@/components/AnimatedSection';

export const MissionSection = () => {
  const partners = ['Vercel', 'Stripe', 'AWS', 'Figma', 'GitHub'];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-gradient-teal rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground leading-relaxed max-w-4xl mx-auto">
              "My mission is to create high-quality web experiences that are performant, accessible, and visually engaging."
            </p>
            
            {/* Partner Logos */}
            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {partners.map((partner) => (
                  <span key={partner} className="text-primary-foreground/60 text-sm font-medium tracking-wide">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
