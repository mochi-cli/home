import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Templates from "@/components/Templates";
import MascotIntro from "@/components/MascotIntro";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Workflow />
        <Templates />
        <MascotIntro />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
