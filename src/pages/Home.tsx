import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import CoursesPreview from "../components/sections/CoursesPreview";
import InternshipPreview from "../components/sections/InternshipPreview";
import CTA from "../components/sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <CoursesPreview />
      <InternshipPreview />
      <CTA />
    </>
  );
};

export default Home;