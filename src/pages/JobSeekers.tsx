import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, FileText, Award, TrendingUp, 
  CheckCircle, ArrowRight, Upload, Search
} from "lucide-react";

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-primary py-20 md:py-28">
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              For Job Seekers
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-secondary to-coral-400 bg-clip-text text-transparent">
                Dream Career
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Join thousands of professionals who found their ideal job through TalentSphere. 
              We connect you with top employers across Bangalore and beyond.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/careers">
                  Browse Jobs
                  <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">
                  <Upload className="mr-2 h-5 w-5" />
                  Submit Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose TalentSphere?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re more than just a job portal—we&apos;re your career partner
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl bg-card p-6 shadow-soft card-hover text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <benefit.icon className="h-7 w-7 text-secondary" />
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
                to="/careers"
                className="group flex items-center justify-between rounded-xl bg-card p-6 shadow-soft card-hover"
              >
                <div>
                  <h3 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
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
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-coral-600 text-2xl font-bold text-white">
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
      <section className="bg-gradient-to-r from-primary to-navy-700 py-16">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { value: "5000+", label: "Placements" },
              { value: "200+", label: "Partner Companies" },
              { value: "95%", label: "Satisfaction Rate" },
              { value: "2 Weeks", label: "Avg. Placement Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-white/70">{stat.label}</div>
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
          <Button asChild variant="secondary" size="lg" className="mt-8">
            <Link to="/contact">
              <Upload className="mr-2 h-5 w-5" />
              Submit Your Resume
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default JobSeekers;
