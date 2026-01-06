import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="mt-4 text-muted-foreground">Last updated: January 2026</p>

            <div className="mt-12 prose prose-slate max-w-none">
              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mt-4">
                By accessing and using the TalentSphere website and services, you agree to be bound by 
                these Terms and Conditions. If you do not agree with any part of these terms, please 
                do not use our services.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">2. Services</h2>
              <p className="text-muted-foreground mt-4">
                TalentSphere provides recruitment and staffing services connecting job seekers with 
                employers. Our services include but are not limited to permanent placement, contract 
                staffing, and executive search.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">3. User Responsibilities</h2>
              <p className="text-muted-foreground mt-4">Users of our services agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain confidentiality of any login credentials</li>
                <li>Not misuse our services for fraudulent purposes</li>
                <li>Respect intellectual property rights</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">4. For Job Seekers</h2>
              <p className="text-muted-foreground mt-4">
                Job seekers agree to provide accurate resume and profile information. TalentSphere 
                reserves the right to verify all information provided and may reject applications 
                containing false or misleading information.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">5. For Employers</h2>
              <p className="text-muted-foreground mt-4">
                Employers agree to provide accurate job descriptions and company information. 
                Placement fees and terms are subject to separate service agreements.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mt-4">
                TalentSphere acts as an intermediary and does not guarantee job placements or 
                successful hires. We are not liable for decisions made by employers or candidates.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">7. Intellectual Property</h2>
              <p className="text-muted-foreground mt-4">
                All content on this website, including text, graphics, logos, and software, is the 
                property of TalentSphere and protected by applicable copyright laws.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">8. Modifications</h2>
              <p className="text-muted-foreground mt-4">
                We reserve the right to modify these terms at any time. Continued use of our services 
                after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">9. Contact</h2>
              <p className="text-muted-foreground mt-4">
                For questions about these terms, contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: legal@talentsphere.in<br />
                Phone: +91 9620203000
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
