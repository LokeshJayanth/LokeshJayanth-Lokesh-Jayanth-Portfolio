import { Mail, Phone, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export const ContactSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating-delayed" />
      </div>

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">06 — Contact</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's create something{" "}
              <span className="gradient-text">extraordinary</span> together.
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Let's make an impact
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className={`glass-panel p-8 lg:p-10 card-3d transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-glow-pulse">
                <span className="font-display font-bold text-2xl text-foreground">L</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Lokesh Jayanth S
                </h3>
                <p className="text-muted-foreground">AI & Data Science Developer</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/20 hover:scale-125 hover:rotate-12 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="text-foreground font-medium">Coimbatore, India</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Contact Number</p>
                <a 
                  href="tel:+919080113107"
                  className="text-foreground font-medium hover:text-accent transition-colors block"
                >
                  +91 9080113107
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email Address</p>
                <a
                  href="mailto:lokeshjayanth1403@gmail.com"
                  className="text-foreground font-medium hover:text-accent transition-colors block"
                >
                  lokeshjayanth1403@gmail.com
                </a>
              </div>

            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full group btn-3d magnetic-btn overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
