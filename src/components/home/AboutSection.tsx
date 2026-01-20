import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import jobseekerCard from "@/assets/jobseeker-card.jpg";
import employerCard from "@/assets/employer-card.jpg";

export function AboutSection() {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large geometric shape */}
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-[hsl(174,100%,29%)]/10 rounded-full" />
        <div className="absolute -top-20 -left-20 w-60 h-60 border border-[hsl(174,100%,29%)]/5 rounded-full" />
        
        {/* Grid pattern on the right */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(210 11% 15%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 11% 15%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50/50 to-transparent" />
      </div>

      <div className="relative container-custom">
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
              src={jobseekerCard}
              alt="For Job Seekers"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,11%,15%)] via-[hsl(210,11%,15%)]/40 to-transparent" />
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
              src={employerCard}
              alt="For Employers"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,11%,15%)] via-[hsl(210,11%,15%)]/40 to-transparent" />
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
