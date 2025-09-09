import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Certification from "@/components/sections/Certification";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Certification />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
