const galleryItems = [
  { id: 1, category: "Portrait", gradient: "from-[#d4af37]/40 to-[#1e90ff]/40" },
  { id: 2, category: "Wedding", gradient: "from-[#1e90ff]/40 to-[#d4af37]/40" },
  { id: 3, category: "Product", gradient: "from-[#d4af37]/30 to-purple-500/30" },
  { id: 4, category: "Event", gradient: "from-purple-500/30 to-[#1e90ff]/40" },
  { id: 5, category: "Commercial", gradient: "from-[#1e90ff]/40 to-[#d4af37]/30" },
  { id: 6, category: "Fashion", gradient: "from-[#d4af37]/40 to-pink-500/30" },
  { id: 7, category: "Corporate", gradient: "from-gray-500/40 to-[#1e90ff]/40" },
  { id: 8, category: "Lifestyle", gradient: "from-[#d4af37]/30 to-[#1e90ff]/30" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of professional photography and videography work
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-medium text-lg tracking-wide">{item.category}</span>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37] transition-all duration-300 rounded-lg"></div>
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold tracking-wide rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
