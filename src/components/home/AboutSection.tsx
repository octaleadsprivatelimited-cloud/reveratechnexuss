import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 lowercase">
            your specialised and equitable work partner.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We focus on connecting with talent, because we understand the importance of a job in a person's life. 
            Focusing on the relationship with our talent will also contribute to our clients' success. 
            Matching the right talent to the right job will in turn help both talent and clients achieve their goals and ambitions.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Job Seekers Card */}
          <Link to="/job-seekers" className="group relative overflow-hidden rounded-lg aspect-[4/3]">
            <img
              src={heroImage}
              alt="For Job Seekers"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-flex items-center gap-2 text-white text-lg font-medium mb-3 group-hover:underline">
                let's find job
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <p className="text-sm text-white/70 uppercase tracking-wide">for job seekers</p>
            </div>
          </Link>

          {/* Employers Card */}
          <Link to="/employers" className="group relative overflow-hidden rounded-lg aspect-[4/3]">
            <img
              src={heroImage}
              alt="For Employers"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-flex items-center gap-2 text-white text-lg font-medium mb-3 group-hover:underline">
                helping clients succeed
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <p className="text-sm text-white/70 uppercase tracking-wide">for clients</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
