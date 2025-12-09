import { Link } from "wouter";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/">
              <span className="text-[#d4af37] text-2xl font-bold tracking-wider cursor-pointer">
                Studio 19:266
              </span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
              Premium photography and videography services that capture your most precious moments with elegance and artistry.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "LinkedIn", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
                >
                  <span className="text-xs font-bold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "Services", id: "services" },
                { name: "Gallery", id: "gallery" },
                { name: "Pricing", id: "pricing" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-[#d4af37] transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <p>+1 (555) 123-4567</p>
              <p>hello@studio19266.com</p>
              <p>123 Creative Avenue<br />Suite 200</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d4af37]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Studio 19:266. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#d4af37] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-[#d4af37] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#d4af37] text-black rounded-full flex items-center justify-center shadow-lg hover:bg-[#c4a030] transition-all duration-300 z-40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
