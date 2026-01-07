import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovators Pvt Ltd",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹25-35 LPA",
    posted: "2 days ago",
    category: "IT",
  },
  {
    id: 2,
    title: "Registered Nurse - ICU",
    company: "Apollo Hospitals",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹4-6 LPA",
    posted: "1 day ago",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "Hotel Operations Manager",
    company: "The Leela Palace",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "8-12 years",
    salary: "₹15-20 LPA",
    posted: "3 days ago",
    category: "Hospitality",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Analytics Corp",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹18-28 LPA",
    posted: "1 day ago",
    category: "IT",
  },
  {
    id: 5,
    title: "Finance Manager",
    company: "Global Enterprises",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "6-10 years",
    salary: "₹20-30 LPA",
    posted: "4 days ago",
    category: "Corporate",
  },
  {
    id: 6,
    title: "Executive Chef",
    company: "Marriott International",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "10+ years",
    salary: "₹12-18 LPA",
    posted: "1 week ago",
    category: "Hospitality",
  },
];

const categories = ["All", "IT", "Healthcare", "Hospitality", "Corporate"];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-6">
              Career Opportunities
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-secondary to-coral-400 bg-clip-text text-transparent">
                Perfect Role
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Explore exciting opportunities with top employers across Bangalore
            </p>

            {/* Search Bar */}
            <div className="mt-8 mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search jobs by title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-14 pl-12 pr-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group rounded-2xl bg-card p-6 shadow-soft card-hover"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                          {job.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{job.posted}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">{job.company}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="font-semibold text-foreground">{job.salary}</p>
                        <p className="text-sm text-muted-foreground">per annum</p>
                      </div>
                      <Button asChild>
                        <Link to="/contact">
                          Apply
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-muted p-12 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">No jobs found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-navy-700 py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Submit your resume and we&apos;ll match you with suitable opportunities.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/contact">Submit Your Resume</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
