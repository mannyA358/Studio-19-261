import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Camera, Award, Clock, Heart, Users, Zap, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const teamMembers = [
  {
    name: "Marcus Chen",
    role: "Lead Photographer",
    bio: "With over 10 years of experience in commercial and event photography, Marcus brings a keen eye for detail and a passion for capturing authentic moments.",
    specialties: ["Wedding Photography", "Portraits", "Commercial"]
  },
  {
    name: "Sarah Williams",
    role: "Videographer & Editor",
    bio: "Sarah's cinematic approach to videography has earned recognition in numerous film festivals. She specializes in creating compelling visual narratives.",
    specialties: ["Music Videos", "Documentaries", "Color Grading"]
  },
  {
    name: "David Okonkwo",
    role: "Creative Director",
    bio: "David oversees all creative projects, ensuring every piece of content aligns with our clients' vision while pushing creative boundaries.",
    specialties: ["Brand Stories", "Art Direction", "Concept Development"]
  }
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver nothing less than exceptional quality in every project."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for visual storytelling drives everything we create."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients to bring their vision to life."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new techniques and technology to stay ahead."
  }
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Awards Won" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            About <span className="text-[#d4af37]">Studio 19:266</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A creative studio dedicated to capturing moments that matter and telling stories that inspire.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-white mb-6 tracking-wide">
                Our <span className="text-[#d4af37]">Story</span>
              </h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  Studio 19:266 was founded with a simple belief: every moment deserves to be captured with artistry and intention. What started as a passion project in 2016 has grown into a full-service creative studio.
                </p>
                <p>
                  The name "19:266" represents our commitment to the golden hour - that magical time when light is perfect for capturing the most stunning visuals. It's a reminder that timing, patience, and attention to detail make all the difference.
                </p>
                <p>
                  Today, we work with individuals, brands, and businesses to create visual content that resonates, inspires, and tells authentic stories.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-md flex items-center justify-center">
                <Camera className="w-24 h-24 text-[#d4af37] opacity-50" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#d4af37]/20 rounded-md -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-md flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Our Mission</h3>
                <p className="text-zinc-400">
                  To empower individuals and businesses with exceptional visual content that captures their essence, tells their stories, and helps them connect with their audience in meaningful ways.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#1e90ff]/20 rounded-md flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#1e90ff]" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Our Vision</h3>
                <p className="text-zinc-400">
                  To be the leading creative studio known for transforming ordinary moments into extraordinary visual experiences, setting the standard for quality, creativity, and client satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white text-center mb-12 tracking-wide">
            Our <span className="text-[#d4af37]">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white text-center mb-12 tracking-wide">
            Meet Our <span className="text-[#d4af37]">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#d4af37]/20 to-[#1e90ff]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-zinc-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-1">{member.name}</h3>
                  <p className="text-[#d4af37] text-sm text-center mb-4">{member.role}</p>
                  <p className="text-zinc-400 text-sm text-center mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, j) => (
                      <span key={j} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white text-center mb-12 tracking-wide">
            What Makes Us <span className="text-[#d4af37]">Different</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-xl text-white mb-2">Quality Promise</h3>
              <p className="text-zinc-400 text-sm">
                We're committed to delivering exceptional quality on every project, with attention to every detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e90ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#1e90ff]" />
              </div>
              <h3 className="text-xl text-white mb-2">Quick Turnaround</h3>
              <p className="text-zinc-400 text-sm">
                We understand deadlines matter. Our streamlined process ensures fast delivery without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-xl text-white mb-2">Pro Equipment</h3>
              <p className="text-zinc-400 text-sm">
                We invest in the latest professional equipment to ensure stunning results every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-4">Let's Create Something Amazing</h2>
          <p className="text-zinc-400 mb-8">Ready to work with us? Get in touch to discuss your next project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-[#d4af37] hover:bg-[#b8962f] text-black px-8">
                Contact Us
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" className="border-white text-white px-8">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}