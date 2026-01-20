import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, FileText, Award, TrendingUp, 
  ArrowRight, Upload
} from "lucide-react";
import heroJobseekers from "@/assets/hero-jobseekers.jpg";
import { PageHero } from "@/components/PageHero";

const benefits = [
  {
    icon: Briefcase,
    title: "Top Job Opportunities",
    description: "Access exclusive positions with leading companies across multiple industries.",
  },
  {
    icon: FileText,
    title: "Resume Support",
    description: "Get tips on optimizing your resume to stand out to potential employers.",
  },
  {
    icon: Award,
    title: "Career Guidance",
    description: "Receive personalized advice to help you navigate your career path.",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description: "Stay informed about in-demand skills and industry trends.",
  },
];

const categories = [
  { name: "IT & Software", count: "120+ Jobs" },
  { name: "Healthcare", count: "85+ Jobs" },
  { name: "Hospitality", count: "60+ Jobs" },
  { name: "Finance", count: "45+ Jobs" },
  { name: "Marketing", count: "50+ Jobs" },
  { name: "Operations", count: "40+ Jobs" },
];

const JobSeekers = () => {
  return (
    <Layout>
      <SEO
        title="For Job Seekers - Find Your Dream Career | Revera Tech Nexus"
        description="Join thousands of professionals who found their ideal job through Revera Tech Nexus. We connect you with top employers across IT, Healthcare, Real Estate, and Corporate sectors in Bangalore."
        keywords="job seekers Bangalore, IT jobs Bangalore, healthcare jobs, real estate jobs, corporate jobs, job placement services, career opportunities Bangalore, find jobs in Bangalore"
        ogImage="/hero-jobseekers.jpg"
      />
      <PageHero
        badge="For Job Seekers"
        title="Find Your"
        titleHighlight="Dream Career"
        description="Join thousands of professionals who found their ideal job through Revera Tech Nexus. We connect you with top employers across Bangalore and beyond."
        primaryCta={{ text: "Submit Resume", href: "https://docs.google.com/forms/d/e/1FAIpQLSdKWVKmgUUzr2T7qtdA1kx9cRvczavZ1DDAu4CNquTwHooq7A/viewform?usp=publish-editor", external: true }}
        secondaryCta={{ text: "Explore Services", href: "/services" }}
        image={heroJobseekers}
        imageAlt="Job seekers finding their dream career"
      />

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Revera Tech Nexus?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re more than just a job portal—we&apos;re your career partner
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl bg-card p-6 shadow-soft card-hover text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(174,100%,29%)]/10">
                  <benefit.icon className="h-7 w-7 text-[hsl(174,100%,29%)]" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Explore Job Categories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find opportunities in your field of expertise
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/contact"
                className="group flex items-center justify-between rounded-xl bg-card p-6 shadow-soft card-hover"
              >
                <div>
                  <h3 className="font-heading font-bold text-foreground group-hover:text-[hsl(174,100%,29%)] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[hsl(174,100%,29%)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Submit Your Resume", desc: "Upload your resume and let us know your preferences" },
              { step: "2", title: "Get Matched", desc: "Our experts match you with suitable opportunities" },
              { step: "3", title: "Interview & Join", desc: "We prepare you for interviews and negotiate offers" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(174,100%,29%)] text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="relative bg-[hsl(210,11%,15%)] py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[hsl(174,100%,29%)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[hsl(174,100%,29%)]/5 rounded-full blur-2xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { value: "5000+", label: "Placements" },
              { value: "200+", label: "Partner Companies" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "2 Weeks", label: "Avg. Placement Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl font-bold text-[hsl(174,100%,45%)]">{stat.value}</div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Submit your resume today and let us find your perfect opportunity.
          </p>
          <Button asChild size="lg" className="mt-8 bg-[hsl(174,100%,29%)] hover:bg-[hsl(174,100%,24%)]">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKWVKmgUUzr2T7qtdA1kx9cRvczavZ1DDAu4CNquTwHooq7A/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
              <Upload className="mr-2 h-5 w-5" />
              Submit Your Resume
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default JobSeekers;