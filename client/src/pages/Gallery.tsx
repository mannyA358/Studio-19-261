import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "portraits", label: "Portraits" },
  { id: "weddings", label: "Weddings" },
  { id: "products", label: "Products" },
  { id: "bts", label: "Behind the Scenes" }
];

const galleryItems = [
  { id: 1, category: "events", title: "Corporate Gala 2024", color: "from-amber-900 to-amber-800" },
  { id: 2, category: "portraits", title: "Executive Headshot", color: "from-slate-700 to-slate-600" },
  { id: 3, category: "weddings", title: "Beach Wedding", color: "from-rose-900 to-rose-800" },
  { id: 4, category: "products", title: "Luxury Watch", color: "from-zinc-700 to-zinc-600" },
  { id: 5, category: "events", title: "Music Festival", color: "from-purple-900 to-purple-800" },
  { id: 6, category: "portraits", title: "Artist Portrait", color: "from-blue-900 to-blue-800" },
  { id: 7, category: "weddings", title: "Garden Ceremony", color: "from-green-900 to-green-800" },
  { id: 8, category: "bts", title: "Studio Setup", color: "from-zinc-800 to-zinc-700" },
  { id: 9, category: "products", title: "Perfume Campaign", color: "from-pink-900 to-pink-800" },
  { id: 10, category: "events", title: "Tech Conference", color: "from-cyan-900 to-cyan-800" },
  { id: 11, category: "portraits", title: "Fashion Editorial", color: "from-red-900 to-red-800" },
  { id: 12, category: "bts", title: "On Location", color: "from-orange-900 to-orange-800" },
  { id: 13, category: "weddings", title: "Sunset Vows", color: "from-amber-800 to-amber-700" },
  { id: 14, category: "products", title: "Jewelry Collection", color: "from-yellow-900 to-yellow-800" },
  { id: 15, category: "events", title: "Award Ceremony", color: "from-indigo-900 to-indigo-800" },
  { id: 16, category: "bts", title: "Equipment Check", color: "from-gray-800 to-gray-700" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const currentIndex = selectedImage !== null 
    ? filteredItems.findIndex(item => item.id === selectedImage) 
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1].id);
    }
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            Our <span className="text-[#d4af37]">Gallery</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of professional photography and videography work across various categories.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id 
                  ? "bg-[#d4af37] hover:bg-[#b8962f] text-black" 
                  : "border-zinc-700 text-zinc-300"
                }
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="aspect-square relative overflow-hidden rounded-md cursor-pointer group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-zinc-300 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black border-zinc-800 p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </Button>
            
            {selectedItem && (
              <div className="aspect-video relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedItem.color}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl text-white font-light mb-2">{selectedItem.title}</h3>
                    <p className="text-zinc-400 capitalize">{selectedItem.category}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between p-4 bg-zinc-900">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentIndex <= 0}
                className="text-white"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </Button>
              <span className="text-zinc-400 self-center">
                {currentIndex + 1} / {filteredItems.length}
              </span>
              <Button
                variant="ghost"
                onClick={handleNext}
                disabled={currentIndex >= filteredItems.length - 1}
                className="text-white"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-4">Like What You See?</h2>
          <p className="text-zinc-400 mb-8">Let's create something amazing together. Get in touch to discuss your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <Button className="bg-[#d4af37] hover:bg-[#b8962f] text-black px-8">
                Start Your Project
              </Button>
            </a>
            <a href="/pricing">
              <Button variant="outline" className="border-white text-white px-8">
                View Pricing
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}