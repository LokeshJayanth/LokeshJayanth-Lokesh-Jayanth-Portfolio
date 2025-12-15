import { Briefcase, Clock, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    duration: "Present",
    company: "Photo Club",
    role: "Executive Director",
    period: "2025 – Present",
    type: "Leadership",
    highlights: [
      "Directed strategic planning and operational oversight, enhancing club operations",
      "Led event coordination for 10+ successful events with 30% increase in engagement",
      "Managed member engagement initiatives and community outreach programs",
    ],
  },
  {
    duration: "1 Year",
    company: "Rotaract Club of CIT",
    role: "Event Management Team",
    period: "2024 – 2025",
    type: "Volunteer",
    highlights: [
      "Coordinated and executed multiple successful events through effective planning",
      "Collaborated with team members to ensure smooth event operations",
      "Developed strong organizational and leadership skills through event management",
    ],
  },
  {
    duration: "2 Months",
    company: "CodSoft",
    role: "Data Science Intern",
    period: "Aug – Sep 2024",
    type: "Internship",
    highlights: [
      "Data Preprocessing: Cleaned and transformed raw datasets for ML pipelines",
      "Model Development: Built and evaluated ML models for classification tasks",
      "Visualization: Created insightful dashboards and reports",
    ],
  },
];

const certifications = [
  "CodSoft Data Science Internship",
  "HTML5 + Django Framework + Python Stack",
  "AI/ML Workshops",
  "Microsoft Fundamental AI Concepts",
];

export const ExperienceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();
  const { ref: certRef, isVisible: certVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">04 — Experience</span>
        </div>

        <h2 className={`font-display text-4xl md:text-5xl font-bold text-foreground mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional{" "}
          <span className="gradient-text">Journey</span>
        </h2>

        {/* Experience Timeline */}
        <div ref={timelineRef} className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-12 gap-6 items-start transition-all duration-1000 ${timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Duration Badge */}
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-accent hover:scale-105 transition-all duration-300">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{exp.duration}</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 glass-panel p-8 card-3d group">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-accent font-medium">{exp.role}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0 group-hover/item:rotate-180 transition-transform duration-500" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Type Badge */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <span className="text-sm text-muted-foreground flex items-center gap-2 hover:text-accent transition-colors">
                  <Clock className="w-4 h-4" />
                  {exp.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16" ref={certRef}>
          <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${certVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">05 — Certifications</span>
          </div>

          <h3 className={`font-display text-3xl font-bold text-foreground mb-8 transition-all duration-1000 ${certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Credentials & <span className="gradient-text">Achievements</span>
          </h3>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children ${certVisible ? 'active' : ''}`}>
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="glass-panel p-6 card-3d group text-center relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-foreground font-medium relative z-10">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
