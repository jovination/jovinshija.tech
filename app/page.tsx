import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import WorkingProcess from  "@/components/WorkingProcess"
import SkillSets from "@/components/SkillSets"
import Experience from "@/components/Experience"
import ClientReview from "@/components/ClientReview"
import ContactPage from "@/components/ContactPage"
import PricingPackages from "@/components/PricingPackages"
import SplashCursor from "@/components/SplashCursor"



export default function Home() {
  return (
    <div className="flex flex-col  items-center min-h-screen mx-auto">
      {/* <SplashCursor /> */}
      <Navbar />
      <Hero />
      <PricingPackages />
      <Work />
      <Services />
      <WorkingProcess />
      <SkillSets />
      <Experience />
      <ContactPage />
    </div>
  );
}
