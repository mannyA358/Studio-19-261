import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Palette, ArrowRight, Star } from "lucide-react";

const featuredServices = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography for events, portraits, products, and weddings."
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic video production for commercials, events, and music videos."
  },
  {
    icon: Palette,
    title: "Editing",
    description: "Expert photo and video editing, retouching, and color grading."
  }
];

const galleryPreview = [
  { title: "Wedding", color: "from-rose-900 to-rose-800" },
  { title: "Portrait", color: "from-slate-700 to-slate-600" },
  { title: "Event", color: "from-amber-900 to-amber-800" },
  { title: "Product", color: "from-zinc-700 to-zinc-600" },
  { title: "Music Video", color: "from-purple-900 to-purple-800" },
  { title: "Commercial", color: "from-blue-900 to-blue-800" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <HeroSection />
        
        {/* Quick Intro */}
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
              Capturing Moments, Creating <span className="text-[#d4af37]">Memories</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Studio 19:266 is a full-service creative studio specializing in professional photography, 
              videography, and post-production. We bring your vision to life with artistry, precision, 
              and a commitment to excellence that sets us apart.
            </p>
          </div>
        </section>

        {/* Featured Services Preview */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                Our <span className="text-[#d4af37]">Services</span>
              </h2>
              <p className="text-zinc-400">Professional visual content solutions for every need</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {featuredServices.map((service, i) => (
                <Card key={i} className="bg-zinc-900 border-zinc-800 text-center hover-elevate">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-zinc-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services">
                <Button className="bg-[#d4af37] hover:bg-[#b8962f] text-black px-8">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                Our <span className="text-[#d4af37]">Work</span>
              </h2>
              <p className="text-zinc-400">A glimpse into our portfolio</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {galleryPreview.map((item, i) => (
                <div
                  key={i}
                  className="aspect-square relative overflow-hidden rounded-md group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/gallery">
                <Button variant="outline" className="border-white text-white px-8">
                  View Full Gallery
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights / Why Choose Us */}
        <WhyChooseUsSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
              Ready to Create Something <span className="text-[#d4af37]">Amazing</span>?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life. Book a session or get a custom quote for your project today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#d4af37] hover:bg-[#b8962f] text-black px-8">
                  Book a Session
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="border-white text-white px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}