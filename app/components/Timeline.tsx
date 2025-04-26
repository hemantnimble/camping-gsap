'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      year: '2020',
      title: 'Company Founded',
      description: 'Our journey began with a small team passionate about innovation.'
    },
    {
      id: 2,
      year: '2021',
      title: 'First Product Launch',
      description: 'Released our flagship product to market with great success.'
    },
    {
      id: 3,
      year: '2022',
      title: 'Series A Funding',
      description: 'Secured $10M in funding to expand our operations.'
    },
    {
      id: 4,
      year: '2023',
      title: 'International Expansion',
      description: 'Opened offices in 3 new countries across Europe and Asia.'
    },
    {
      id: 5,
      year: '2024',
      title: 'Current Milestone',
      description: 'Celebrating our most successful year yet with record growth.'
    }
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Journey</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {timelineData.map((item, index) => {
            const itemStart = index / timelineData.length;
            const itemEnd = (index + 1) / timelineData.length;
            
            const y = useTransform(
              scrollYProgress,
              [itemStart, itemEnd],
              [50, 0]
            );
            
            const opacity = useTransform(
              scrollYProgress,
              [itemStart, itemEnd],
              [0, 1]
            );
            
            const scale = useTransform(
              scrollYProgress,
              [itemStart, itemEnd],
              [0.9, 1]
            );

            return (
              <motion.div
                key={item.id}
                style={{
                  y,
                  opacity,
                  scale
                }}
                className={`relative mb-16 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}
              >
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  {/* Content */}
                  <motion.div 
                    className={`w-1/2 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-white mr-8' : 'bg-blue-50 ml-8'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <span className="text-blue-500 font-bold">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-2 text-gray-800">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </motion.div>
                  
                  {/* Dot */}
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-md flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs">{item.id}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}