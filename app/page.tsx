import PublicNavbar from "@/components/PublicNavbar";
import HeroSection from "@/components/home/HeroSection";
import FounderMessage from "@/components/home/FounderMessage";
import CompassPreview from "@/components/home/CompassPreview";
import NetworkSection from "@/components/home/NetworkSection";
import Footer from "@/components/home/footer";
export default function Home() {
  return (
    <>
      <PublicNavbar />
      <HeroSection />
      <FounderMessage />
      <CompassPreview/>
      <NetworkSection/>
      <Footer/>
    </>
  );
}