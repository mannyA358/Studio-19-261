const teamMembers = [
  {
    name: "Marcus Chen",
    role: "Lead Photographer",
    gradient: "from-[#d4af37]/30 to-[#1e90ff]/30",
  },
  {
    name: "Sarah Williams",
    role: "Creative Director",
    gradient: "from-[#1e90ff]/30 to-[#d4af37]/30",
  },
  {
    name: "David Thompson",
    role: "Video Producer",
    gradient: "from-[#d4af37]/30 to-purple-500/30",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mb-6">
              About <span className="text-[#d4af37]">Studio 19:266</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Founded with a passion for capturing life's most precious moments, Studio 19:266 has grown into a premier photography and videography studio known for our artistic vision and attention to detail.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our team of experienced professionals combines technical expertise with creative flair to deliver stunning visuals that tell your unique story. We believe every moment deserves to be captured with luxury and elegance.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-[#d4af37] mb-2">500+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-[#d4af37] mb-2">10+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-[#d4af37] mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide mb-8">Meet Our Team</h3>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-[#d4af37]/50 transition-colors duration-300"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                    <p className="text-[#1e90ff]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
