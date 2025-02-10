import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import WorkingProcess from  "@/components/WorkingProcess"
import SkillSets from "@/components/SkillSets"
import Experience from "@/components/Experience"
import ClientReview from "@/components/ClientReview"
import ContactPage from "@/components/ContactPage"



export default function Home() {
  return (
    <div className="flex flex-col  items-center min-h-screen mx-auto">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <WorkingProcess />
      <SkillSets />
      <Experience />
      <ContactPage />
    </div>
  );
}
