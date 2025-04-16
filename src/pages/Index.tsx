
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedAnime from "@/components/home/FeaturedAnime";
import ForumPreview from "@/components/home/ForumPreview";
import ClipsSection from "@/components/home/ClipsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedAnime />
        <ForumPreview />
        <ClipsSection />
        <GalleryPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
