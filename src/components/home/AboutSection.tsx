import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import jobseekerCard from "@/assets/jobseeker-card.webp";
import employerCard from "@/assets/employer-card.webp";

export function AboutSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-custom">
        {/* Rounded container card like Microsoft/Google style */}
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-3xl overflow-hidden border border-border/30">
          {/* Subtle colorful background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-teal-500/5 to-transparent" />
            <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-gradient-to-bl from-blue-500/5 to-transparent" />
            <div className="absolute bottom-0 left-1/4 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/5 to-transparent" />
          </div>

          <div className="relative px-8 md:px-12 lg:px-16 py-12 md:py-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                  About Us
                  <span className="text-muted-foreground"> – your work partner</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  We focus on connecting with talent, because we understand the importance of a job in a person's life. 
                  Matching the right talent to the right job helps both talent and clients achieve their goals.
                </p>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Two-column cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Job Seekers Card */}
              <Link 
                to="/job-seekers" 
                className="group relative bg-background/80 backdrop-blur-sm border border-teal-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={jobseekerCard}
                    alt="For Job Seekers"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-teal-50 shadow-sm">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    For Job Seekers
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find your dream job with personalized career guidance and access to exclusive opportunities.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    let's find job
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>

              {/* Employers Card */}
              <Link 
                to="/employers" 
                className="group relative bg-background/80 backdrop-blur-sm border border-blue-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={employerCard}
                    alt="For Employers"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-blue-50 shadow-sm">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    For Employers
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Build your winning team with pre-screened, quality candidates matched to your culture.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    helping clients succeed
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
