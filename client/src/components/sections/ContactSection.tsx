import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-wide mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Contact us today to discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="event">Event Coverage</option>
                  <option value="product">Product Photography</option>
                  <option value="video">Video Production</option>
                  <option value="commercial">Commercial Shoots</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#d4af37] text-black font-semibold text-lg tracking-wide rounded-lg hover:bg-[#c4a030] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-medium text-[#0a0a0a]">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium text-[#0a0a0a]">hello@studio19266.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-medium text-[#0a0a0a]">123 Creative Avenue, Suite 200</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "LinkedIn", "TikTok"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-[#0a0a0a] rounded-lg flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                  >
                    <span className="text-xs font-bold">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-48 rounded-xl overflow-hidden bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600">
                <MapPin className="w-8 h-8 mr-2" />
                Map Location
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
