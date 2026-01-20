import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
}

export function SEO({
  title = "Revera Tech Nexus - Hiring & Recruitment Solutions | Bangalore",
  description = "Revera Tech Nexus is Bangalore's trusted recruitment agency offering IT, Healthcare, Real Estate & Corporate staffing solutions. Connect with top employers and exceptional talent today.",
  keywords = "recruitment agency Bangalore, IT recruitment, healthcare staffing, real estate hiring, corporate recruitment, permanent staffing, contract staffing, executive search, HR consulting, payroll services, job placement Bangalore, talent acquisition, staffing solutions India",
  ogImage = "/hero-image.webp",
  ogType = "website",
  canonicalUrl,
  noindex = false,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const baseUrl = "https://reveratechnexus.com"; // Update with actual domain
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  const fullTitle = title.includes("Revera Tech Nexus") ? title : `${title} | Revera Tech Nexus`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Revera Tech Nexus");
    
    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    }

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:image", `${baseUrl}${ogImage}`, true);
    updateMetaTag("og:site_name", "Revera Tech Nexus", true);
    updateMetaTag("og:locale", "en_IN", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${baseUrl}${ogImage}`);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [fullTitle, description, keywords, ogImage, ogType, fullUrl, noindex, structuredData]);

  return null;
}
