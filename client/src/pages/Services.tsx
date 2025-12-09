import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Camera, Video, Palette, Users, Sparkles, Heart, Package, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const photographyServices = [
  {
    title: "Event Photography",
    description: "Capture every meaningful moment at your corporate events, conferences, parties, and celebrations with professional coverage.",
    includes: ["Full event coverage", "100+ edited photos", "Online gallery", "Same-day previews"],
    deliveryTime: "5-7 business days"
  },
  {
    title: "Studio Shoots",
    description: "Professional studio sessions with controlled lighting and backdrops for headshots, portraits, and creative projects.",
    includes: ["1-2 hour session", "Multiple outfit changes", "15-25 edited photos", "Print-ready files"],
    deliveryTime: "3-5 business days"
  },
  {
    title: "Portrait Photography",
    description: "Capture your personality and essence with artistic portrait sessions in studio or on location.",
    includes: ["Location scouting", "Styling guidance", "10-20 edited photos", "High-resolution files"],
    deliveryTime: "3-5 business days"
  },
  {
    title: "Product Photography",
    description: "Showcase your products with stunning commercial photography optimized for e-commerce and marketing.",
    includes: ["Multiple angles", "White background options", "Lifestyle shots", "Web-optimized files"],
    deliveryTime: "2-4 business days"
  },
  {
    title: "Wedding Photography",
    description: "Document your special day with timeless, elegant wedding photography that tells your love story.",
    includes: ["Full day coverage", "Engagement session", "200+ edited photos", "Premium album"],
    deliveryTime: "4-6 weeks"
  }
];

const videographyServices = [
  {
    title: "Event Coverage",
    description: "Professional video documentation of your events with cinematic quality and expert editing.",
    includes: ["Multi-camera setup", "Audio recording", "Highlight reel", "Full event edit"],
    deliveryTime: "2-3 weeks"
  },
  {
    title: "Short Ads & Commercials",
    description: "Create impactful video advertisements that capture attention and drive results.",
    includes: ["Concept development", "Professional filming", "Motion graphics", "Multiple formats"],
    deliveryTime: "1-2 weeks"
  },
  {
    title: "Promotional Videos",
    description: "Tell your brand story with compelling promotional content that connects with your audience.",
    includes: ["Script assistance", "B-roll footage", "Voice-over integration", "Social media cuts"],
    deliveryTime: "1-2 weeks"
  },
  {
    title: "Music Videos",
    description: "Bring your music to life with creative, visually stunning music video production.",
    includes: ["Creative direction", "Multi-location shoots", "Color grading", "Special effects"],
    deliveryTime: "2-4 weeks"
  }
];

const editingServices = [
  {
    title: "Photo Editing",
    description: "Professional photo editing and enhancement to make your images stand out.",
    includes: ["Color correction", "Exposure adjustment", "Cropping & composition", "Batch processing"],
    deliveryTime: "2-3 business days"
  },
  {
    title: "Video Editing",
    description: "Transform raw footage into polished, professional videos with seamless edits.",
    includes: ["Cutting & sequencing", "Transitions", "Audio sync", "Export in multiple formats"],
    deliveryTime: "3-5 business days"
  },
  {
    title: "Retouching",
    description: "Advanced retouching services for flawless portraits and product images.",
    includes: ["Skin smoothing", "Blemish removal", "Body shaping", "Background cleanup"],
    deliveryTime: "1-2 business days per image"
  },
  {
    title: "Color Grading",
    description: "Create a distinctive visual style with professional color grading for photos and videos.",
    includes: ["Custom LUTs", "Mood enhancement", "Consistency across project", "Before/after previews"],
    deliveryTime: "2-4 business days"
  }
];

function ServiceCard({ service }: { service: typeof photographyServices[0] }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-xl text-white">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-zinc-400">{service.description}</p>
        <div>
          <h4 className="text-sm font-semibold text-[#d4af37] mb-2">What's Included:</h4>
          <ul className="space-y-1">
            {service.includes.map((item, i) => (
              <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Clock className="w-4 h-4" />
          <span>Delivery: {service.deliveryTime}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            Our <span className="text-[#d4af37]">Services</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From photography to videography and professional editing, we offer comprehensive visual content solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Photography Services */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-8 h-8 text-[#d4af37]" />
            <h2 className="text-3xl font-light text-white tracking-wide">Photography</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Videography Services */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-[#1e90ff]" />
            <h2 className="text-3xl font-light text-white tracking-wide">Videography</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {videographyServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Editing Services */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-8 h-8 text-[#d4af37]" />
            <h2 className="text-3xl font-light text-white tracking-wide">Editing Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {editingServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white text-center mb-12 tracking-wide">
            How It <span className="text-[#d4af37]">Works</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your vision and requirements" },
              { step: "02", title: "Planning", desc: "We create a detailed project plan" },
              { step: "03", title: "Production", desc: "Professional shoot or editing work" },
              { step: "04", title: "Delivery", desc: "Receive your polished final product" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-2">{item.step}</div>
                <h3 className="text-xl text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-400 mb-8">View our pricing packages or contact us for a custom quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pricing">
              <Button className="bg-[#d4af37] hover:bg-[#b8962f] text-black px-8">
                View Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}