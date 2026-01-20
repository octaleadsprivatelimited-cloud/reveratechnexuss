import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, FileCheck, Scale, Users, AlertTriangle, BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import serviceCompliance from "@/assets/service-compliance.jpg";

const complianceServices = [
  {
    icon: FileCheck,
    title: "Statutory Compliance",
    description: "Ensure adherence to all labor laws, employment regulations, and statutory requirements including PF, ESI, and professional tax.",
    features: [
      "Provident Fund (PF) management",
      "ESI registration & compliance",
      "Professional Tax handling",
      "Labour law adherence",
    ],
  },
  {
    icon: Scale,
    title: "Legal & Regulatory",
    description: "Navigate complex employment laws with our expert guidance on contracts, terminations, and workplace regulations.",
    features: [
      "Employment contract review",
      "Termination compliance",
      "Workplace safety regulations",
      "Anti-discrimination policies",
    ],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify and mitigate HR-related risks before they become costly problems for your organization.",
    features: [
      "Compliance audits",
      "Risk assessment reports",
      "Policy gap analysis",
      "Remediation planning",
    ],
  },
  {
    icon: BookOpen,
    title: "Documentation & Records",
    description: "Maintain proper documentation and records to ensure audit readiness and regulatory compliance.",
    features: [
      "Employee records management",
      "Compliance documentation",
      "Audit trail maintenance",
      "Digital record keeping",
    ],
  },
];

const Compliance = () => {
  return (
    <Layout>
      <PageHero
        badge="Compliance Services"
        title="Stay Compliant, Stay"
        titleHighlight="Protected"
        description="Navigate the complex landscape of employment laws and regulations with our comprehensive compliance services. We ensure your organization meets all statutory requirements."
        primaryCta={{ text: "Get a Compliance Audit", href: "/contact" }}
        secondaryCta={{ text: "Talk to an Expert", href: "/contact" }}
        image={serviceCompliance}
        imageAlt="Compliance Services"
      />

      {/* Why Compliance Matters */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Compliance Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Non-compliance with labor laws and employment regulations can result in hefty penalties, legal disputes, and damage to your organization's reputation. Our compliance services help you avoid these risks while focusing on your core business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Avoid Penalties:</span> Non-compliance can lead to fines up to ₹1 lakh per violation under various labor laws.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Legal Protection:</span> Proper compliance shields your organization from employee lawsuits and legal disputes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Reputation:</span> Maintain a positive employer brand by treating employees fairly and legally.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Compliance Areas We Cover</h3>
              <div className="space-y-4">
                {[
                  "Employees' Provident Fund (EPF)",
                  "Employees' State Insurance (ESI)",
                  "Professional Tax",
                  "Shops & Establishment Act",
                  "Minimum Wages Act",
                  "Payment of Bonus Act",
                  "Maternity Benefit Act",
                  "Sexual Harassment Prevention",
                  "Contract Labour Regulations",
                  "Gratuity Compliance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(174,100%,29%)] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Compliance Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive compliance solutions tailored to your organization's specific needs and industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceServices.map((service) => (
              <div
                key={service.title}
                className="bg-background rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-[hsl(174,100%,29%)]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[hsl(174,100%,29%)]/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-[hsl(174,100%,29%)]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-[hsl(174,100%,29%)] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Compliance Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure complete compliance across your organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "We analyze your current compliance status and identify gaps." },
              { step: "02", title: "Planning", desc: "Develop a tailored compliance roadmap for your organization." },
              { step: "03", title: "Implementation", desc: "Execute compliance measures and establish processes." },
              { step: "04", title: "Monitoring", desc: "Ongoing audits and updates to maintain compliance." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(174,100%,29%)] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[hsl(174,100%,29%)] py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-white lowercase">
            ensure your compliance today
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let our experts handle your compliance requirements while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-white text-[hsl(174,100%,29%)] hover:bg-gray-100">
              <Link to="/contact">Get a Compliance Audit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Talk to an Expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Compliance;
