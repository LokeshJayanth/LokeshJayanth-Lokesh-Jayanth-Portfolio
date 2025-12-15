import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Geometric Shapes with 3D rotation */}
        <div className="absolute top-32 right-20 w-20 h-20 border border-primary/30 rounded-xl floating rotate-12 animate-rotate-slow" />
        <div className="absolute bottom-40 left-16 w-16 h-16 border border-accent/30 rounded-full floating-delayed animate-glow-pulse" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-primary/10 rounded-lg floating rotate-45 shimmer" />
        <div className="absolute top-20 left-1/3 w-8 h-8 bg-accent/20 rounded-full animate-bounce-subtle" />
        <div className="absolute bottom-32 right-1/4 w-14 h-14 border-2 border-accent/20 rounded-xl animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up glow-hover">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text glow-text-primary">Lokesh Jayanth</span>
          </h1>


          {/* Description */}
          <div className="max-w-2xl mx-auto mb-10 overflow-hidden">
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed typewriter">
              Designing AI-powered systems for real-world problem solving.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 group btn-3d magnetic-btn"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:duration-200"></div>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="relative bg-transparent hover:bg-transparent border-2 border-primary/20 hover:border-primary/50 text-foreground hover:text-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Get in Touch</span>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
