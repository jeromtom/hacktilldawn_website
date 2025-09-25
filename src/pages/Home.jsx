import { useEffect } from "react";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import About from "../components/About";
import ProblemCards from "../components/ProblemCards";
import TopProjects from "../components/TopProjects";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    // Scroll to top when Home page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Hero />
      <Countdown />
      <About />
      <ProblemCards />
      <TopProjects />
      <Footer />
    </>
  );
}
