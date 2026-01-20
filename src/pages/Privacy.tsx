import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";

const Privacy = () => {
  return (
    <Layout>
      <PageHero
        badge="Legal"
        title="Privacy"
        titleHighlight="Policy"
        description="Learn how Revera Tech Nexus collects, uses, and protects your personal information. Last updated: January 2026."
      />
      
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">

            <div className="mt-12 prose prose-slate max-w-none">
              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">1. Introduction</h2>
              <p className="text-muted-foreground mt-4">
                Revera Tech Nexus ("we," "our," or "us") respects your privacy and is 
                committed to protecting your personal data. This privacy policy explains how we collect, 
                use, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">2. Information We Collect</h2>
              <p className="text-muted-foreground mt-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Resume and CV information</li>
                <li>Employment history and qualifications</li>
                <li>Company details for employer clients</li>
                <li>Technical data (IP address, browser type, device information)</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mt-4">We use collected information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                <li>Match candidates with suitable job opportunities</li>
                <li>Communicate with you about our services</li>
                <li>Process job applications and recruitment requests</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">4. Data Security</h2>
              <p className="text-muted-foreground mt-4">
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">5. Your Rights</h2>
              <p className="text-muted-foreground mt-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">6. Contact Us</h2>
              <p className="text-muted-foreground mt-4">
                For any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: jyothi.m@reveratechnexus.com<br />
                Phone: +91 99009 49512<br />
                Address: Bangalore, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
