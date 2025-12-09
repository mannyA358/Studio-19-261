import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for individual portraits",
    features: [
      "1-hour photo session",
      "15 edited photos",
      "Digital delivery",
      "1 outfit change",
      "Basic retouching",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$599",
    description: "Ideal for events and occasions",
    features: [
      "3-hour photo session",
      "50 edited photos",
      "Digital + print delivery",
      "Unlimited outfit changes",
      "Advanced retouching",
      "Online gallery",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$999",
    description: "Complete luxury experience",
    features: [
      "Full-day coverage",
      "150+ edited photos",
      "Video highlights",
      "Premium album",
      "Priority editing",
      "Drone coverage",
      "Second photographer",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-wide mb-4">
            Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Clear packages with no hidden fees. Choose the plan that best fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-[#0a0a0a] text-white border-2 border-[#d4af37] scale-105"
                  : "bg-white border-2 border-[#d4af37]/30 hover:border-[#d4af37]"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4af37] text-black text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold tracking-wide mb-2 ${plan.popular ? "text-[#d4af37]" : "text-[#0a0a0a]"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-gray-400" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#0a0a0a]"}`}>
                  {plan.price}
                </span>
                <span className={`${plan.popular ? "text-gray-400" : "text-gray-600"}`}>/session</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-[#d4af37]" : "text-[#1e90ff]"}`} />
                    <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#d4af37] text-black hover:bg-[#c4a030]"
                    : "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
