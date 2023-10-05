import Nav from "../components/Nav"; // Navigation bar component
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GetStarted from "../components/GetStarted";

const LandingPage = () => {
  const location = useLocation();

  // Define a boolean variable to determine whether to render the components or not
  const shouldRenderComponents = location.pathname !== "/login";

  return (
    <>
      {shouldRenderComponents && (
        <>
          <Nav />
          <HeroSection />
          <Features />
          <HowItWorks />
          <Footer />
        </>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<GetStarted />} />
      </Routes>
    </>
  );
};

export default LandingPage;
