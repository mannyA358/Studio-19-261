import { Camera, Video, Package, Users, Scissors, Building } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description: "Professional portraits that capture your personality and essence with stunning clarity.",
  },
  {
    icon: Users,
    title: "Event Coverage",
    description: "Complete coverage of weddings, corporate events, and special occasions.",
  },
  {
    icon: Package,
    title: "Product Photography",
    description: "High-quality product shots for e-commerce, catalogs, and marketing materials.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Full-service video production from concept to final delivery.",
  },
  {
    icon: Scissors,
    title: "Editing Services",
    description: "Professional photo and video editing to perfect every detail.",
  },
  {
    icon: Building,
    title: "Commercial Shoots",
    description: "Commercial photography for businesses, brands, and advertising campaigns.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-wide mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of photography and videography services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#1e90ff]"></div>
              
              <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37]/10 to-[#1e90ff]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-[#d4af37]" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
