import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Register from "./components/Register";
import ProblemCards from "./components/ProblemCards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      
      <ProblemCards />
      <Footer />
    </>
  );
}
