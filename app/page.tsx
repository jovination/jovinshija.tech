import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";



export default function Home() {
  return (
    <div className="flex flex-col  items-center min-h-screen mx-auto">
      <Navbar />
      <Hero />
      <Work />
    </div>
  );
}
