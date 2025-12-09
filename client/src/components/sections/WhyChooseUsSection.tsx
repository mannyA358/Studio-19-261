import { Camera, Users, Clock, DollarSign, Settings, Sparkles } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description: "State-of-the-art cameras, lighting, and editing software",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced photographers and videographers",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Premium quality at reasonable rates",
  },
  {
    icon: Settings,
    title: "Custom Packages",
    description: "Tailored solutions for your specific needs",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description: "Exceptional service from start to finish",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mb-4">
            Why Choose <span className="text-[#d4af37]">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What sets Studio 19:266 apart from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-[#d4af37]/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#1e90ff]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
