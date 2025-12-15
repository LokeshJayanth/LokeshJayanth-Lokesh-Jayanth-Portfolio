import { GraduationCap, Code2, Languages, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    content: "M.Sc. Data Science (2022-2025), Coimbatore Institute of Technology",
  },
  {
    icon: Code2,
    title: "Profile",
    content: "AI, Machine Learning, Data Science",
  },
  {
    icon: Languages,
    title: "Languages",
    content: "English, Tamil",
  },
  {
    icon: Heart,
    title: "Interests",
    content: "AI Innovation, Web Development, Event Management",
  },
];

export const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex items-center gap-3 mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">01 — About Me</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Main Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting{" "}
              <span className="gradient-text">Intelligent</span>{" "}
              Solutions
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-4">
              <span className="block">I am a third-year M.Sc. Data Science student at Coimbatore Institute of Technology, with a strong passion for building intelligent systems using Machine Learning, Deep Learning, Natural Language Processing, and AI-driven automation. I enjoy transforming data into meaningful insights and designing solutions that address real-world challenges.</span>
              
              <span className="block">My interests lie in developing AI-powered applications, including emergency detection systems, biometric security solutions, and smart analytics platforms. I am particularly motivated by projects that combine computer vision, NLP, and automation to create impactful, real-time systems.</span>
              
              <span className="block">With a problem-solving mindset and a keen interest in emerging AI technologies, I continuously seek opportunities to learn, experiment, and apply advanced data science techniques to build scalable and practical solutions.</span>
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask","SQL", "Firebase", "API Integration"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-secondary/50 text-foreground/80 rounded-full border border-border/50 hover:border-accent hover:text-accent hover:scale-110 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Info Cards */}
          <div 
            ref={cardsRef}
            className={`grid sm:grid-cols-2 gap-4 stagger-children ${cardsVisible ? 'active' : ''}`}
          >
            {infoCards.map((card, index) => (
              <div
                key={card.title}
                className="glass-panel p-6 card-3d group relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <card.icon className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
