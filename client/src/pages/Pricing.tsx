import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, Camera, Video, Package, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

const photographyPackages = [
  {
    name: "Essential",
    price: "$299",
    description: "Perfect for portraits and headshots",
    includes: [
      "1-hour session",
      "1 location",
      "10 edited photos",
      "Online gallery",
      "5-day delivery"
    ]
  },
  {
    name: "Professional",
    price: "$599",
    popular: true,
    description: "Ideal for events and extended sessions",
    includes: [
      "3-hour session",
      "2 locations",
      "30 edited photos",
      "Online gallery",
      "Print-ready files",
      "3-day delivery"
    ]
  },
  {
    name: "Premium",
    price: "$999",
    description: "Complete coverage for major events",
    includes: [
      "Full day coverage (8 hours)",
      "Unlimited locations",
      "100+ edited photos",
      "Private online gallery",
      "Print-ready files",
      "Same-day previews",
      "7-day delivery"
    ]
  }
];

const videographyPackages = [
  {
    name: "Starter",
    price: "$499",
    description: "Short promotional content",
    includes: [
      "2-hour shoot",
      "1-2 minute final video",
      "Basic editing",
      "Background music",
      "2 revision rounds"
    ]
  },
  {
    name: "Business",
    price: "$999",
    popular: true,
    description: "Professional brand content",
    includes: [
      "Half-day shoot (4 hours)",
      "3-5 minute final video",
      "Advanced editing",
      "Motion graphics",
      "Color grading",
      "3 revision rounds"
    ]
  },
  {
    name: "Cinematic",
    price: "$1,999",
    description: "High-end production quality",
    includes: [
      "Full day shoot",
      "Up to 10 minute video",
      "Cinematic editing",
      "Drone footage",
      "Professional audio",
      "Unlimited revisions"
    ]
  }
];

const comboPackages = [
  {
    name: "Event Duo",
    price: "$799",
    description: "Photo + video for small events",
    includes: [
      "3-hour coverage",
      "20 edited photos",
      "2-minute highlight video",
      "Online gallery"
    ]
  },
  {
    name: "Full Coverage",
    price: "$1,499",
    popular: true,
    description: "Complete event documentation",
    includes: [
      "6-hour coverage",
      "50 edited photos",
      "5-minute video",
      "Same-day previews",
      "Express delivery"
    ]
  },
  {
    name: "Wedding Complete",
    price: "$2,999",
    description: "Full wedding day package",
    includes: [
      "Full day coverage",
      "200+ edited photos",
      "10-minute cinematic film",
      "Engagement session included",
      "Premium album",
      "USB drive"
    ]
  }
];

const addOns = [
  { name: "Extra edited photos (per 10)", price: "$50" },
  { name: "Rush delivery (48 hours)", price: "$150" },
  { name: "Drone footage", price: "$200" },
  { name: "Travel fee (per 50km)", price: "$75" },
  { name: "RAW files", price: "$100" },
  { name: "Second photographer", price: "$300" },
  { name: "Extra revision round", price: "$50" },
  { name: "Social media cuts (3 versions)", price: "$100" }
];

function PricingCard({ pkg, icon: Icon }: { pkg: typeof photographyPackages[0]; icon: any }) {
  return (
    <Card className={`bg-zinc-900 border-zinc-800 relative ${pkg.popular ? 'ring-2 ring-[#d4af37]' : ''}`}>
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        <Icon className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
        <CardTitle className="text-xl text-white">{pkg.name}</CardTitle>
        <CardDescription className="text-zinc-400">{pkg.description}</CardDescription>
        <div className="text-4xl font-bold text-white mt-4">{pkg.price}</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-zinc-300">
              <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/contact" className="w-full">
          <Button className="w-full bg-[#d4af37] hover:bg-[#b8962f] text-black">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            Our <span className="text-[#d4af37]">Pricing</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Transparent pricing for professional visual content. Choose a package or contact us for custom solutions.
          </p>
        </div>
      </section>

      {/* Photography Packages */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-8 h-8 text-[#d4af37]" />
            <h2 className="text-3xl font-light text-white tracking-wide">Photography Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {photographyPackages.map((pkg, i) => (
              <PricingCard key={i} pkg={pkg} icon={Camera} />
            ))}
          </div>
        </div>
      </section>

      {/* Videography Packages */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-[#1e90ff]" />
            <h2 className="text-3xl font-light text-white tracking-wide">Videography Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videographyPackages.map((pkg, i) => (
              <PricingCard key={i} pkg={pkg} icon={Video} />
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packages */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Package className="w-8 h-8 text-[#d4af37]" />
            <h2 className="text-3xl font-light text-white tracking-wide">Combo Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {comboPackages.map((pkg, i) => (
              <PricingCard key={i} pkg={pkg} icon={Package} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Plus className="w-8 h-8 text-[#1e90ff]" />
            <h2 className="text-3xl font-light text-white tracking-wide">Add-ons</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 flex justify-between items-center">
                  <span className="text-zinc-300 text-sm">{addon.name}</span>
                  <span className="text-[#d4af37] font-semibold">{addon.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-white mb-8 text-center">Terms & Conditions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#d4af37] font-semibold mb-3">Booking & Deposits</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>50% deposit required to secure your date</li>
                <li>Remaining balance due on delivery</li>
                <li>Deposits are non-refundable</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#d4af37] font-semibold mb-3">Cancellation Policy</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>14+ days notice: Full deposit refund</li>
                <li>7-14 days notice: 50% deposit refund</li>
                <li>Less than 7 days: No refund</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-4">Need a Custom Package?</h2>
          <p className="text-zinc-400 mb-8">Contact us to discuss your specific requirements and get a personalized quote.</p>
          <Link href="/contact">
            <Button className="bg-[#d4af37] hover:bg-[#b8962f] text-black px-8">
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}