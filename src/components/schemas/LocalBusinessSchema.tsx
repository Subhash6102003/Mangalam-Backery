const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Mangalam Bakeries",
    "image": "https://mangalambakeries.com/logo.jpg",
    "description": "Best bakery in Bhopal offering fresh cakes, pastries, chocolates, and custom-made designer cakes with same-day and midnight delivery service.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BHEL",
      "addressLocality": "Bhopal",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "462022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.1645",
      "longitude": "77.4433"
    },
    "url": "https://mangalambakeries.com",
    "telephone": "+91-9993228538",
    "email": "orders@mangalambakeries.com",
    "priceRange": "₹",
    "openingHours": "Mo-Su 11:00-03:00",
    "servesCuisine": "Bakery, Cakes, Pastries, Desserts",
    "acceptsReservations": "True",
    "menu": "https://mangalambakeries.com/cakes",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bhopal"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1523"
    },
    "sameAs": [
      "https://www.facebook.com/mangalambakeries",
      "https://www.instagram.com/mangalambakeries",
      "https://twitter.com/mangalambakeries"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
