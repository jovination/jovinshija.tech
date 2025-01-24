import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col  items-center min-h-screen mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
}
