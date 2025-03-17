import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection />
        <Features/>
      </main>
    </ReactLenis>
  );
}
