import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "Python", level: 95, icon: "🐍" },
  { name: "Machine Learning", level: 90, icon: "🤖" },
  { name: "Deep Learning", level: 85, icon: "🧠" },
  { name: "Data Visualization", level: 88, icon: "📊" },
  { name: "SQL & Databases", level: 85, icon: "🗄️" },
  { name: "Computer Vision", level: 90, icon: "👁️" },
  { name: "NLP", level: 82, icon: "💬" },
  { name: "Full-Stack AI", level: 80, icon: "⚡" },
];

const SkillBar = ({ name, level, icon, isVisible, delay }: { name: string; level: number; icon: string; isVisible: boolean; delay: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div className="glass-panel p-6 card-3d group relative overflow-hidden">
      {/* Shimmer on hover */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="font-display font-semibold text-foreground">{name}</span>
            <span className="text-sm font-medium px-2 py-0.5 rounded-full bg-accent/20 text-accent group-hover:scale-110 transition-transform">
              {animatedLevel}%
            </span>
          </div>
          <div className="skill-bar relative overflow-hidden">
            <div
              className="skill-bar-fill transition-all duration-1000 ease-out relative"
              style={{ width: `${animatedLevel}%` }}
            >
              {/* Animated shimmer on the bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">02 — Tools & Skills</span>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Technical{" "}
              <span className="gradient-text">Toolbox</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialized in AI/ML technologies with a focus on Computer Vision and NLP. 
              Building end-to-end solutions from data preprocessing to deployment.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 stagger-children ${isVisible ? 'active' : ''}`}>
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              {...skill}
              isVisible={isVisible}
              delay={100 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
