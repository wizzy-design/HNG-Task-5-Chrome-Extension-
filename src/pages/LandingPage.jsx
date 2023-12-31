import Nav from "../components/Nav"; // Navigation bar component
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default LandingPage;
