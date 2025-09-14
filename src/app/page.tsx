import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import CommunitySection from "@/components/CommunitySection";
import ReviewsSection from "@/components/ReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import SubscribeSection from "@/components/SubscribeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
      </div>
      <div id="categories">
        <CategoriesSection />
      </div>
      <CommunitySection />
      <ReviewsSection />
      <div id="social">
        <InstagramSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <SubscribeSection />
      <Footer />
    </main>
  );
}
