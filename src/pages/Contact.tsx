import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PageHero } from "@/components/PageHero";
import heroContact from "@/assets/hero-contact.webp";

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
    details: "Info@reveratechnexus.com",
    action: "mailto:Info@reveratechnexus.com",
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
    service: "contract-staffing",
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
          service: "contract-staffing",
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Revera Tech Nexus",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99009-49512",
        "contactType": "Customer Service",
        "email": "Info@reveratechnexus.com",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - Get in Touch | Revera Tech Nexus Bangalore"
        description="Contact Revera Tech Nexus for recruitment and staffing solutions. Call +91 99009 49512 or email Info@reveratechnexus.com. Located in Bangalore, Karnataka."
        keywords="contact revera tech nexus, recruitment agency contact Bangalore, staffing company contact, HR consulting contact, get in touch recruitment"
        ogImage="/hero-contact.webp"
        structuredData={structuredData}
      />
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
      <section className="relative py-16 bg-[#f6f7fb]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Contact Us</h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            {/* Left info panel */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2b155b] via-[#2b155b] to-[#3a1c6e] p-8 text-white">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <p className="mt-2 text-sm text-white/70">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      {item.action ? (
                        <a href={item.action} className="text-sm text-white/80 hover:text-white">
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-sm text-white/80">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-8 h-24 w-24 rounded-full bg-white/10" />
            </div>

            {/* Right form */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-slate-50/60 border-slate-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="bg-slate-50/60 border-slate-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 987 654 3210"
                      className="bg-slate-50/60 border-slate-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="contract-staffing">Contract Staffing</option>
                      <option value="permanent-staffing">Permanent Staffing</option>
                      <option value="executive-search">Executive Search</option>
                      <option value="payroll-services">Payroll Services</option>
                      <option value="hr-consulting">HR Consulting</option>
                      <option value="compliance">Compliance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={4}
                    className="bg-slate-50/60 border-slate-200"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" size="lg" disabled={isSubmitting} className="rounded-full bg-secondary hover:bg-secondary/90 px-10">
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
                </div>
              </form>
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
