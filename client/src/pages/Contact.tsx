import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Instagram, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            Contact <span className="text-[#d4af37]">Us</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-light text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-300">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-zinc-300">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                        {...register("phone")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-zinc-300">Service Needed</Label>
                      <Select>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700">
                          <SelectItem value="photography">Photography</SelectItem>
                          <SelectItem value="videography">Videography</SelectItem>
                          <SelectItem value="editing">Photo/Video Editing</SelectItem>
                          <SelectItem value="combo">Photo + Video Package</SelectItem>
                          <SelectItem value="other">Other / Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-zinc-300">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[150px]"
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#d4af37] hover:bg-[#b8962f] text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <a href="mailto:hello@studio19266.com" className="text-zinc-400 hover:text-[#d4af37] transition-colors">
                        hello@studio19266.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone / WhatsApp</h3>
                      <a href="tel:+15550001926" className="text-zinc-400 hover:text-[#d4af37] transition-colors">
                        +1 (555) 000-1926
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Studio Location</h3>
                      <p className="text-zinc-400">
                        123 Creative Avenue<br />
                        Los Angeles, CA 90001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Business Hours</h3>
                      <p className="text-zinc-400">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 4:00 PM<br />
                        Sun: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-light text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400 hover:text-[#d4af37] hover:bg-zinc-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400 hover:text-[#d4af37] hover:bg-zinc-700 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400 hover:text-[#d4af37] hover:bg-zinc-700 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Quick Response</h3>
                  <p className="text-zinc-400 text-sm">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call or WhatsApp us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}