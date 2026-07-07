import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Tariffs from "@/components/Tariffs";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SectionNav from "@/components/ui/SectionNav";
import StructuredData from "@/components/StructuredData";
import { getTariffs } from "@/lib/tariffs";
import { getSiteSettings } from "@/lib/site-settings";

export default async function HomePage() {
  const [tariffs, settings] = await Promise.all([getTariffs(), getSiteSettings()]);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Showcase />
        <Tariffs tariffs={tariffs} />
        <Faq />
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
      <SectionNav />
      <ScrollToTop />
      <StructuredData />
    </>
  );
}
