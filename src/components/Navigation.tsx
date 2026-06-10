import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Detect current section for highlight
  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      for (const item of navItems) {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          setActive(item.href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white
        border-b border-blue-100
        shadow-[0_2px_15px_rgba(0,0,0,0.05)]
        transition-all duration-300
      "
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              src="/Gemini_Generated_Image_g2u55ag2u55ag2u5.png"
              alt="Logo"
              className="h-10 w-10 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection("#home")}
            />
          </div>

          {/* Center: Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-3 md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    relative px-3 py-1.5 font-medium text-[0.95rem] transition-all duration-300
                    ${
                      active === item.href
                        ? "text-white bg-gradient-to-r from-blue-700 to-cyan-400 rounded-full shadow-md"
                        : "text-gray-700 hover:text-blue-700"
                    }
                    hover:scale-[1.05]
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Mobile Menu Button */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 bg-white animate-fade-in">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      w-full text-left px-3 py-2 rounded-md font-medium transition-all duration-200
                      ${
                        active === item.href
                          ? "text-white bg-gradient-to-r from-blue-700 to-cyan-400 shadow-md"
                          : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Blue accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent" />
    </nav>
  );
};

export default Navigation;
