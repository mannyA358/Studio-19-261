import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Wedding Client",
    content: "Studio 19:266 captured our wedding day perfectly. The photos are absolutely stunning and the team was incredibly professional throughout the entire process.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Corporate Client",
    content: "We hired them for our company headshots and marketing materials. The quality exceeded our expectations and the turnaround time was impressive.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Portrait Session",
    content: "The portrait session was a wonderful experience. They made me feel comfortable and the final photos were beyond what I imagined.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Event Coverage",
    content: "Professional, creative, and attentive to every detail. They captured the essence of our corporate event flawlessly.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-wide mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#1e90ff] flex items-center justify-center">
                  <span className="text-white font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0a0a0a]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
