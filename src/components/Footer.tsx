import { Linkedin, Github, MessageSquare } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-6">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/lokesh-jayanth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/LokeshJayanth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/919080113107" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Lokesh Jayanth
          </p>
        </div>
      </div>
    </footer>
  );
};
