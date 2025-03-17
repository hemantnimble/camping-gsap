'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia?",
      image: "assets/features/bbq.jpg"
    },
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia?",
      image: "assets/features/tent.jpg"
    },
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia?",
      image: "assets/features/boating.jpeg"
    },
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia?",
      image: "assets/features/bonfire.jpeg"
    },
    {
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia?",
      image: "assets/features/music.jpg"
    },
  ]

  useEffect(() => {
    if (horizontalSectionRef.current) {
      const sections = gsap.utils.toArray(".horizontal-scroll-section .panel");

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
    }
  }, []);

  return (
    <div className="w-full -mt-[3.5rem] relative -z-10">
      {/* Top Section */}
      {/* <section className="h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold">Top Section</h1>
      </section> */}

      {/* Middle Section - Horizontal Scroll */}
      <section
        ref={horizontalSectionRef}
        className="horizontal-scroll-section h-screen w-full overflow-hidden bg-green-100"
      >
        <div className="flex w-max h-full">
          {cards.map((item,index) => (
            <div
              key={index}
              className="panel h-screen w-screen flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={`Image ${item}`}
                className="w-full h-full object-cover relative"
              />
              <p className="absolute top-16 left-6 text-4xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, mollitia?</p>
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