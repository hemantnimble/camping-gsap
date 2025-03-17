'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (horizontalSectionRef.current) {
      const sections = gsap.utils.toArray(".horizontal-scroll-section .panel");

      // Horizontal scrolling animation
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (horizontalSectionRef.current?.offsetWidth || 0),
        },
      });

      // Parallax effect for images
      sections.forEach((section: any) => {
        const image = section.querySelector("img");
        gsap.fromTo(
          image,
          { x: 0 }, // Start position
          {
            x: -1000, // End position (move up by 100px)
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom", // Start animation when the top of the section hits the bottom of the viewport
              end: "bottom top", // End animation when the bottom of the section hits the top of the viewport
              scrub: 1, // Smoothly animate as the user scrolls
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="w-full">
      {/* Top Section */}
      <section className="h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold">Top Section</h1>
      </section>

      {/* Middle Section - Horizontal Scroll with Parallax */}
      <section
        ref={horizontalSectionRef}
        className="horizontal-scroll-section h-screen w-full overflow-hidden bg-green-100"
      >
        <div className="flex w-max h-full">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="panel h-screen w-screen flex items-center justify-center relative"
            >
              <img
                src={`https://picsum.photos/800/600?random=${item}`}
                alt={`Image ${item}`}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="relative z-10 text-white text-4xl font-bold">
                Image {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="h-screen flex items-center justify-center bg-red-100">
        <h1 className="text-4xl font-bold">Bottom Section</h1>
      </section>
    </div>
  );
}