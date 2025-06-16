import About from "@/components/About";
import Contact from "@/components/Contact";
import HowItWorks from "@/components/HowItWorks";
import Prices from "@/components/Prices";
import Trial from "@/components/Trial";
import Pros from "@/components/Pros";
import FAQSection from "@/components/FAQSection";
import QuoteSlider from "@/components/QuoteSlider";
import Hero from "@/components/Hero";
import ContactInfo from "@/components/ContactInfo";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Hero />
        <Pros />
        <About />
        <HowItWorks />
        <Prices />
        <Trial />
        <ContactInfo />
        <Contact />
        <QuoteSlider />
        <FAQSection />
      </main>
    </div>
  );
}
