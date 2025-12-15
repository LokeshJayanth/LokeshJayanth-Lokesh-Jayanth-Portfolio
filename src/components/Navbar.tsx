import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 glow-hover">
              <span className="font-display font-bold text-accent-foreground text-lg">L</span>
            </div>
            <span className="font-display font-semibold text-foreground text-lg hidden sm:block group-hover:text-accent transition-colors duration-300">
              Lokesh Jayanth
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/Lokesh JayanthCV.pdf" 
              download="Lokesh_Jayanth_Resume.pdf"
              className="no-underline"
            >
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 btn-3d group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="rotate-90 transition-transform" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all duration-300 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="/Lokesh JayanthCV.pdf" 
                download="Lokesh_Jayanth_Resume.pdf"
                className="no-underline"
              >
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-fit btn-3d"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
