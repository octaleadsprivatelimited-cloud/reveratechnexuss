import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PageHero } from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 99009 49512",
    action: "tel:+919900949512",
  },
  {
    icon: Mail,
    title: "Email",
    details: "jyothi.m@reveratechnexus.com",
    action: "mailto:jyothi.m@reveratechnexus.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "Bangalore, Karnataka, India",
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Sat: 9:00 AM - 6:00 PM",
    action: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "employer",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xlggwwpn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          enquiryType: "employer",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappUrl = `https://wa.me/919900949512?text=${encodeURIComponent("Hi, I'm interested in your recruitment services.")}`;

  return (
    <Layout>
      <PageHero
        badge="Contact Us"
        title="Let's Start a"
        titleHighlight="Conversation"
        description="Whether you're looking to hire or find your next opportunity, our team is ready to help. Reach out today."
        primaryCta={{ text: "Call Us", href: "tel:+919900949512", external: true }}
        secondaryCta={{ text: "WhatsApp", href: whatsappUrl, external: true }}
        image={heroContact}
        imageAlt="Professional business meeting"
        compact
      />

      {/* Contact Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                  Get in Touch
                </span>
                <h2 className="font-heading text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Have questions? We'd love to hear from you.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-slate-50/50 rounded-xl p-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                      <item.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-2xl border border-[#25D366]/20 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </span>
                  <h3 className="font-semibold text-foreground">Quick Response on WhatsApp</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant answers to your queries via WhatsApp.
                </p>
                <Button asChild variant="whatsapp" className="w-full">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Send className="h-4 w-4 text-secondary" />
                  </span>
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-slate-50/50 border-slate-200"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-slate-50/50 border-slate-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="bg-slate-50/50 border-slate-200"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="bg-slate-50/50 border-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="enquiryType">I am a *</Label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="employer">Employer looking to hire</option>
                      <option value="jobseeker">Job seeker looking for opportunities</option>
                      <option value="other">Other enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="bg-slate-50/50 border-slate-200"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto rounded-full bg-secondary hover:bg-secondary/90 px-8">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5998883847466!2d77.61245661482184!3d12.934533490878695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1449791e67a5%3A0x3c3b4e8e4c5e0f0a!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="Revera Tech Nexus Office Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
