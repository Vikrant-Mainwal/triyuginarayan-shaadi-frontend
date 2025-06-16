import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import Script from "next/script";

export const metadata = {
  title: "Triyuginarayan Temple Wedding Cost Breakdown | Triyuginarayan Shaadi",
  description:
    "Plan your dream wedding! Explore Triyuginarayan Temple Wedding Cost, booking, and venue packages at Triyuginarayan Shaadi in the sacred Himalayas.",
};

export default function RootLayout({ children }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Triyuginarayan Shaadi",
    image: "https://triyuginarayanshaadi.com/hero_image.jpg",
    "@id": "https://triyuginarayanshaadi.com",
    url: "https://triyuginarayanshaadi.com",
    telephone: "9084684360",
    priceRange: "₹99,999 - ₹4,99,999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nehru Colony Rd",
      addressLocality: "Dehradun",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.3014919,
      longitude: 78.0506931,
    },
    sameAs: [
      "https://www.facebook.com/people/Triyuginarayan-Shaadi/61576993581943/",
      "https://www.instagram.com/triyuginarayanshaadi",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Triyuginarayan Shaadi",
    url: "https://triyuginarayanshaadi.com",
    logo: "https://triyuginarayanshaadi.com/_next/static/media/logo.a1ea80e8.svg",
    sameAs: [
      "https://www.facebook.com/people/Triyuginarayan-Shaadi/61576993581943/",
      "https://www.instagram.com/triyuginarayanshaadi",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Triyuginarayan Shaadi",
    url: "https://triyuginarayanshaadi.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://triyuginarayanshaadi.com{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Triyuginarayan Shaadi",
    image: "https://triyuginarayanshaadi.com/hero_image.jpg",
    description:
      "Explore Triyuginarayan Shaadi rituals & Triyuginarayan Temple wedding cost. Sacred Hindu matrimony site linked to Lord Shiva’s wedding.",
    brand: {
      "@type": "Brand",
      name: "Triyuginarayan Shaadi",
    },
    sku: "250",
    offers: {
      "@type": "AggregateOffer",
      url: "https://triyuginarayanshaadi.com",
      priceCurrency: "INR",
      lowPrice: "99999",
      highPrice: "499999",
      offerCount: "1",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "250",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Triyuginarayan Temple Wedding Cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Triyuginarayan Temple Wedding Cost varies depending on the package, number of guests, and services included. Basic packages start from ₹99,999 onwards.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book a wedding at Triyuginarayan Temple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book through our website or contact our team directly for assistance with dates, rituals, permissions, and accommodations.",
        },
      },
      {
        "@type": "Question",
        name: "What does a typical wedding package include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Packages usually include venue setup, mandap decoration, priest, rituals, accommodation, and meals. Customizations are available.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any legal requirements for getting married at Triyuginarayan Temple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you’ll need to carry valid identity proofs and marriage documents. We assist with registration and local permissions.",
        },
      },
      {
        "@type": "Question",
        name: "Can we customize our wedding package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We offer fully customizable wedding packages to suit your needs and budget, including decor, catering, and photography.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time of year for a Triyuginarayan wedding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best months are March to June and September to November, offering pleasant weather and a perfect Himalayan backdrop.",
        },
      },
    ],
  };

  const breadcrumbListSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://triyuginarayanshaadi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About us",
        item: "https://triyuginarayanshaadi.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to reach?",
        item: "https://triyuginarayanshaadi.com/how-to-reach",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact Us",
        item: "https://triyuginarayanshaadi.com/contact-us",
      },
    ],
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Triyuginarayan Shaadi",
    url: "https://triyuginarayanshaadi.com",
    image: "https://triyuginarayanshaadi.com/hero_image.jpg",
    description:
      "Plan your dream wedding! Explore Triyuginarayan Temple Wedding Cost, booking, and venue packages at Triyuginarayan Shaadi in the sacred Himalayas",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nehru Colony Rd",
      addressLocality: "Dehradun",
      postalCode: "248001",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "250",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Neha and Rohan",
        },
        reviewBody:
          "Felt like a dream wedding in heaven. The team was supportive every step.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya and Ankit",
        },
        reviewBody:
          "From rituals to reception, they made everything seamless and spiritual.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.7",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Shreya and Hitesh",
        },
        reviewBody:
          "It felt like a blessing. The team helped with every detail and treated us like family.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="Triyuginarayan Temple Wedding Cost, Temple Wedding, Triyuginarayan Temple, triyuginarayan temple wedding, Wedding Packages, Triyuginarayan Wedding Packages, Triyuginarayan Shaadi Booking, Triyuginarayan Wedding,triyuginarayan wedding cost   "
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Triyuginarayan Temple Wedding Cost Breakdown | Triyuginarayan Shaadi"
        />
        <meta
          property="og:description"
          content="Plan your dream wedding! Explore Triyuginarayan Temple Wedding Cost, booking, and venue packages at Triyuginarayan Shaadi in the sacred Himalayas."
        />
        <meta property="og:url" content="https://triyuginarayanshaadi.com" />
        <meta property="og:site_name" content="Triyuginarayan Shaadi" />
        <meta
          property="og:image"
          content="https://triyuginarayanshaadi.com/hero_image.jpg"
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbListSchema),
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
