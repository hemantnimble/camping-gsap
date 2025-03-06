import HeroSection from "./components/HeroSection";
import ReactLenis from "lenis/react";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <NavBar></NavBar>
        <HeroSection />
      </main>
    </ReactLenis>
  );
}
