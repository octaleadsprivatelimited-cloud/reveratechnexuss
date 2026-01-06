import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Shield, Award, Heart } from "lucide-react";

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

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-primary py-20 md:py-28">
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              About TalentSphere
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Your Strategic Partner in{" "}
              <span className="bg-gradient-to-r from-secondary to-coral-400 bg-clip-text text-transparent">
                Talent Acquisition
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              For over a decade, we&apos;ve been connecting exceptional talent with leading organizations 
              across Bangalore and beyond. Our expertise spans IT, Healthcare, Hospitality, and Corporate sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent mb-6">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To bridge the gap between exceptional talent and outstanding organizations through 
                ethical, efficient, and personalized recruitment solutions that create lasting value 
                for all stakeholders.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent mb-6">
                <Eye className="h-7 w-7 text-secondary" />
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

      {/* Our Story */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-8 space-y-4 text-lg text-muted-foreground text-left">
              <p>
                Founded in Bangalore, TalentSphere began with a simple belief: recruitment should 
                be about building meaningful connections, not just filling positions. What started 
                as a small team of passionate HR professionals has grown into a full-service 
                recruitment consultancy serving clients across India.
              </p>
              <p>
                Over the years, we&apos;ve placed thousands of professionals across IT, Healthcare, 
                Hospitality, and Corporate sectors. Our success is built on understanding both 
                sides of the equation—what organizations need to thrive and what professionals 
                need to grow.
              </p>
              <p>
                Today, we&apos;re proud to partner with 200+ companies, from innovative startups to 
                Fortune 500 enterprises, helping them build teams that drive success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
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
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <value.icon className="h-7 w-7 text-secondary" />
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
      <section className="bg-gradient-to-r from-primary to-navy-700 py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let&apos;s discuss how we can help you find the perfect talent.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
