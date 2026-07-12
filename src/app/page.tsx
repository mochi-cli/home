import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Features from "@/components/Features";
import GitSection from "@/components/GitSection";
import Templates from "@/components/Templates";
import MascotIntro from "@/components/MascotIntro";
import Subscription from "@/components/Subscription";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hook — giới thiệu sản phẩm + demo multi-user */}
        <Hero />

        {/* 2. How it works — 3 bước sử dụng */}
        <Workflow />

        {/* 3. Features — chat agent + template */}
        <Features />

        {/* 4. Git & History — commit safely + rollback */}
        <GitSection />

        {/* 5. Templates — các template có sẵn */}
        <Templates />

        {/* 5. Trust — giới thiệu Mochi, chỉ số tin cậy */}
        <MascotIntro />

        {/* 6. Pricing — bảng giá */}
        <Subscription />

        {/* 7. Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
