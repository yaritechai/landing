import Script from "next/script";

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yaritech.com/#organization",
    "name": "YariTech",
    "alternateName": "Yari Tech",
    "description": "Professional Houston IT services company providing enterprise-grade managed IT support, cloud computing, cybersecurity, and ERP solutions for Texas businesses.",
    "url": "https://yaritech.com",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone number
    "email": "info@yaritech.com", // Replace with actual email
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.7604",
      "longitude": "-95.3698"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Houston",
        "sameAs": "https://en.wikipedia.org/wiki/Houston"
      },
      {
        "@type": "State",
        "name": "Texas",
        "sameAs": "https://en.wikipedia.org/wiki/Texas"
      }
    ],
    "serviceType": [
      "Managed IT Services",
      "Cloud Computing",
      "Cybersecurity",
      "ERP Systems",
      "IT Consulting",
      "Network Monitoring",
      "Data Backup and Recovery"
    ],
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 08:00-17:00"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/yaritech",
      "https://www.facebook.com/yaritech"
    ],
    "logo": "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1",
    "image": "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1"
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
} 