import { useState } from "react";
import { Link } from "wouter";

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Home
            </button>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium tracking-wide flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-lg py-2">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block w-full text-left px-4 py-2 text-white hover:text-[#d4af37] hover:bg-gray-900 transition-colors duration-300 text-sm"
                  >
                    Photography
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block w-full text-left px-4 py-2 text-white hover:text-[#d4af37] hover:bg-gray-900 transition-colors duration-300 text-sm"
                  >
                    Video Editing
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Pricing
            </button>
          </div>

          {/* Logo - Center */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-[#d4af37] text-xl font-bold tracking-wider cursor-pointer">
                Studio 19:266
              </span>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Gallery
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#d4af37] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("hero")} className="text-white hover:text-[#d4af37] text-left">Home</button>
              <button onClick={() => scrollToSection("services")} className="text-white hover:text-[#d4af37] text-left">Services</button>
              <button onClick={() => scrollToSection("pricing")} className="text-white hover:text-[#d4af37] text-left">Pricing</button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-[#d4af37] text-left">About Us</button>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-[#d4af37] text-left">Contact</button>
              <button onClick={() => scrollToSection("gallery")} className="text-white hover:text-[#d4af37] text-left">Gallery</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
