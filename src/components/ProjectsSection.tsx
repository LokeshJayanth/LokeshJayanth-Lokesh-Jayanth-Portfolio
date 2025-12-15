import { useState } from "react";
import { ExternalLink, Github, Eye, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "EyeGuardian AI",
    subtitle: "Emergency Detection & Assistance System",
    description:
      "AI system using YOLOv8, audio processing, Flask, and Firebase to detect fire, smoke, accidents, and alert emergency contacts instantly.",
    tags: ["YOLOv8", "Flask", "Firebase", "OpenCV", "Real-time"],
    icon: Eye,
    image: "/images/projects/eyeguardian-ai.png",
    gradient: "from-red-500/20 to-orange-500/20",
    accentColor: "text-red-400",
    hoverGlow: "group-hover:shadow-red-500/20",
    githubUrl: "https://github.com/LokeshJayanth/EyeGuardian-AI-Enabled-Emergency-Detection-and-Assistance-System",
    demoUrl: "https://github.com/LokeshJayanth/EyeGuardian-AI-Enabled-Emergency-Detection-and-Assistance-System"
  },
  {
    title: "GlowGuard",
    subtitle: "AI-Based Skincare Analysis System",
    description:
      "Computer vision tool using CNN + environmental data to predict skin conditions and provide personalized recommendations.",
    tags: ["CNN", "TensorFlow", "Streamlit", "API Integration"],
    icon: Sparkles,
    image: "/images/projects/glowguard.png",
    gradient: "from-pink-500/20 to-purple-500/20",
    accentColor: "text-pink-400",
    hoverGlow: "group-hover:shadow-pink-500/20",
    githubUrl: "https://github.com/LokeshJayanth/GlowGuard",
    demoUrl: "https://github.com/LokeshJayanth/GlowGuard"
  },
  {
    title: "Tri-Biometrix",
    subtitle: "Multimodal Biometric Security System",
    description:
      "Security system using face embeddings, audio features, gesture landmarks, and TensorFlow models for robust real-time authentication.",
    tags: ["Face Recognition", "Audio ML", "Gesture Detection", "TensorFlow"],
    icon: Shield,
    image: "/images/projects/tri-biometrix.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-cyan-400",
    hoverGlow: "group-hover:shadow-cyan-500/20",
    githubUrl: "https://github.com/LokeshJayanth/Tri-Biometrix-Intelligent-Multimodal-Biometric-Security-System",
    demoUrl: "https://github.com/LokeshJayanth/Tri-Biometrix-Intelligent-Multimodal-Biometric-Security-System"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className={`group glass-panel overflow-hidden card-3d relative ${project.hoverGlow}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      {/* Spotlight effect following mouse */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent) / 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Project Image with Gradient Overlay */}
      <div className={`h-48 relative overflow-hidden ${project.gradient.split(' ')[0]} ${project.gradient.split(' ')[1]}`}>
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <project.icon 
              className={`w-20 h-20 ${project.accentColor} opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 transform`} 
            />
          </div>
        )}
        
        {/* Floating Decorations with animation */}
        <div className="absolute top-4 right-4 w-8 h-8 border border-foreground/10 rounded-full group-hover:scale-150 group-hover:border-foreground/20 transition-all duration-500" />
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-foreground/5 rounded-lg rotate-45 group-hover:rotate-90 group-hover:scale-150 transition-all duration-500" />
        <div className="absolute top-1/2 right-8 w-4 h-4 bg-accent/20 rounded-full group-hover:scale-200 transition-all duration-700" />
        
        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className={`text-sm ${project.accentColor} mb-3`}>
          {project.subtitle}
        </p>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags with stagger animation */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-secondary/50 text-muted-foreground rounded hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:scale-110"
              style={{ transitionDelay: `${tagIndex * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions with 3D buttons */}
        <div className="flex gap-2">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button size="sm" variant="ghost" className="w-full text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-300 group/btn">
              <Github className="w-4 h-4 mr-1 group-hover/btn:rotate-12 transition-transform" />
              Code
            </Button>
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="sm" variant="ghost" className="w-full text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-300 group/btn">
                <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:-rotate-12 transition-transform" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal(0.1);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">03 — Projects</span>
        </div>

        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Featured{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <Button 
            variant="outline" 
            className="w-fit border-border hover:border-accent hover:text-accent btn-3d group"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${projectsVisible ? 'active' : ''}`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
