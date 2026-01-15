import Hero from "@/components/Hero";
import ValentineWeek from "@/components/ValentineWeek";
import BestSellers from "@/components/BestSellers";
import CustomCakeCTA from "@/components/CustomCakeCTA";
import Categories from "@/components/Categories";
import DeliveryHighlight from "@/components/DeliveryHighlight";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import SEOContent from "@/components/SEOContent";
import LocalBusinessSchema from "@/components/schemas/LocalBusinessSchema";
import FAQSchema from "@/components/schemas/FAQSchema";

export default function Home() {
  const faqs = [
    {
      question: "Which is the best bakery in Bhopal?",
      answer: "Mangalam Bakeries is widely recognized as the best bakery in Bhopal, offering fresh cakes, pastries, chocolates, and custom-made designer cakes. We serve all major areas including MP Nagar, Arera Colony, Kolar Road, and BHEL with same-day delivery."
    },
    {
      question: "Do you provide midnight cake delivery in Bhopal?",
      answer: "Yes! Mangalam Bakeries offers midnight cake delivery service across Bhopal. Perfect for surprising your loved ones on birthdays, anniversaries, and special occasions."
    },
    {
      question: "Can I order custom cakes in Bhopal?",
      answer: "Absolutely! We specialize in custom-made cakes in Bhopal. Choose your flavor, size, design, add photos, personal messages, and we'll create the perfect cake for your celebration."
    },
    {
      question: "Do you deliver cakes near MP Nagar and Arera Colony?",
      answer: "Yes, we deliver fresh cakes to MP Nagar, Arera Colony, Kolar Road, New Market, BHEL, and all major areas of Bhopal with fast and reliable service."
    },
    {
      question: "Are eggless cakes available in Bhopal?",
      answer: "Yes! Mangalam Bakeries offers a wide range of eggless cakes in Bhopal. All our cakes can be customized as eggless without compromising on taste or quality."
    }
  ];

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      
      <Hero />
      <ValentineWeek />
      <Categories />
      <BestSellers />
      <CustomCakeCTA />
      <DeliveryHighlight />
      <Testimonials />
      <SEOContent />
      <Newsletter />
    </>
  );
}
