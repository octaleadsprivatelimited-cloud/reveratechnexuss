import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Shield, Award, Heart, CheckCircle, TrendingDown, Clock, Cog, Briefcase, FileCheck } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our recruitment practices.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with clients and candidates based on trust.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for quality in every placement and interaction.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We genuinely care about career growth and organizational success.",
  },
];

const services = [
  {
    icon: Briefcase,
    title: "Permanent Staffing & Recruitment",
    description: "Specializing in IT, Non-IT, and Leadership hiring across corporate functions, technology, operations, sales, finance, and administration.",
  },
  {
    icon: FileCheck,
    title: "Labour Compliance & HR Advisory",
    description: "End-to-end statutory compliance (PF, ESI, Gratuity, Professional Tax, LWF), payroll governance, and audit readiness—built on a track record of zero non-compliance.",
  },
];

const achievements = [
  { icon: TrendingDown, text: "Reduced attrition by 2%" },
  { icon: Clock, text: "Cut time-to-hire by 10%" },
  { icon: Cog, text: "Automated HR processes saving 40% effort" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[hsl(210,11%,15%)] py-20 md:py-28 overflow-hidden">
        <HeroBackground />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-[hsl(174,100%,29%)]/20 border border-[hsl(174,100%,29%)]/30 px-4 py-1.5 text-sm font-medium text-[hsl(174,100%,45%)] mb-6">
              About Revera Tech Nexus
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Your Strategic Partner in{" "}
              <span className="text-[hsl(174,100%,45%)]">
                Talent Acquisition
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Trusted, high-impact talent solutions rooted in real-world leadership experience.
              Built by practitioners who understand both sides of the hiring equation.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-[hsl(174,100%,29%)]/20 rounded-2xl" />
                <div className="absolute -inset-8 border border-[hsl(174,100%,29%)]/10 rounded-3xl" />
                
                {/* Avatar placeholder with gradient */}
                <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-[hsl(174,100%,29%)]/20 via-[hsl(210,11%,15%)]/10 to-[hsl(174,100%,29%)]/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[hsl(210,11%,15%)]/5" />
                  <div className="relative text-center p-8">
                    <div className="w-40 h-40 mx-auto rounded-full bg-[hsl(174,100%,29%)]/20 border-4 border-[hsl(174,100%,29%)]/30 flex items-center justify-center mb-6">
                      <span className="text-6xl font-bold text-[hsl(174,100%,29%)]">JM</span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">Jyothi M</h3>
                    <p className="text-[hsl(174,100%,29%)] font-semibold text-lg mt-2">Co-Founder</p>
                    <p className="text-muted-foreground mt-1">Revera Tech Nexus</p>
                  </div>
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-[hsl(174,100%,29%)] text-white px-8 py-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm uppercase tracking-wide opacity-90">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="inline-block rounded-full bg-[hsl(174,100%,29%)]/10 border border-[hsl(174,100%,29%)]/20 px-4 py-1.5 text-sm font-medium text-[hsl(174,100%,29%)] mb-4">
                Meet Our Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Practitioner, Not Just Consultant
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Former Head of HR with 20+ years' experience building and leading HR for large organizations 
                (970–3,000+ employees). Now co-founding Revera Tech Nexus to offer trusted, high-impact talent 
                solutions rooted in real-world leadership experience.
              </p>

              {/* Key differentiator */}
              <div className="bg-muted rounded-xl p-6 border border-border mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[hsl(174,100%,29%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Peer-Level Evaluation</h4>
                    <p className="text-muted-foreground">
                      I assess candidates through the lens of a former Head of HR—ensuring cultural fit and operational readiness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <h4 className="font-semibold text-foreground mb-4">Proven Outcomes</h4>
              <div className="space-y-3">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(174,100%,29%)]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[hsl(174,100%,29%)]" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive talent solutions backed by real-world experience
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-card p-8 shadow-soft card-hover">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(174,100%,29%)]/10 mb-6">
                  <service.icon className="h-7 w-7 text-[hsl(174,100%,29%)]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Why Partner With Us?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-card p-8 shadow-soft text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(174,100%,29%)]/10 mb-6">
                <Users className="h-8 w-8 text-[hsl(174,100%,29%)]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">Practitioner Experience</h3>
              <p className="mt-3 text-muted-foreground">
                I've held the role you're hiring for and managed the risks you're mitigating.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-soft text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(174,100%,29%)]/10 mb-6">
                <CheckCircle className="h-8 w-8 text-[hsl(174,100%,29%)]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">Zero Non-Compliance</h3>
              <p className="mt-3 text-muted-foreground">
                Track record of complete statutory compliance across all HR functions.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-soft text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(174,100%,29%)]/10 mb-6">
                <Award className="h-8 w-8 text-[hsl(174,100%,29%)]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">Strategic Insight</h3>
              <p className="mt-3 text-muted-foreground">
                Combining strategic insight with hands-on execution for roles from specialist to senior leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Ideal For
            </h2>
            <p className="text-lg text-muted-foreground">
              Businesses seeking a trusted recruitment and compliance partner who combines strategic insight 
              with hands-on execution for roles ranging from specialist to senior leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(174,100%,29%)]/10 mb-6">
                <Target className="h-7 w-7 text-[hsl(174,100%,29%)]" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To bridge the gap between exceptional talent and outstanding organizations through 
                ethical, efficient, and personalized recruitment solutions that create lasting value 
                for all stakeholders.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(174,100%,29%)]/10 mb-6">
                <Eye className="h-7 w-7 text-[hsl(174,100%,29%)]" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-muted-foreground">
                To be recognized as the most trusted recruitment partner in India, known for 
                our commitment to quality, integrity, and the transformative impact we have on 
                careers and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-card p-6 shadow-soft text-center card-hover">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(174,100%,29%)]/10">
                  <value.icon className="h-7 w-7 text-[hsl(174,100%,29%)]" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[hsl(174,100%,29%)] py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Let's Build Your Team With Confidence
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Partner with us for trusted recruitment and compliance solutions.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-[hsl(174,100%,29%)] hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="border-white/30 text-white hover:bg-white/10 bg-transparent border">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
