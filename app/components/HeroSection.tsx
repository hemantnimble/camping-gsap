'use client'
import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: "400", subsets: ["latin"] });


gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
    useEffect(() => {
        const bird1Animation = gsap.to('.bird1', {
            x: 300, // Moves 300px to the right
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1', // The element triggering the animation
                start: '-160% 10%', // Animation starts when `.bird1` reaches the center of the viewport
                end: '1000% 10%', // Animation ends after 500px of scrolling
                scrub: 1, // Smoothly ties animation to scroll
                // markers: true, //
            },
        });
        const bird2Animation = gsap.to('.bird2', {
            x: -200,
            y: -300,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1',
                start: '-50% 10%',
                end: '1000% 10%',
                scrub: 1,
                // markers: true,
            },
        });
        const backmount = gsap.to('.backmount', {
            x: -50,
            y: 50,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1',
                start: '-50% 10%',
                end: '1000% 10%',
                scrub: 1,
                // markers: true,
            },
        });
        const fort = gsap.to('.fort', {
            // x: -50,
            y: -20,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1',
                start: '-50% 10%',
                end: '1000% 10%',
                scrub: 1,
                // markers: true,
            },
        });
        const mt1 = gsap.to('.mt1', {
            // x: -50,
            y: 15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1',
                start: '-50% 10%',
                end: '1000% 10%',
                scrub: 1,
                // markers: true,
            },
        });
        const mt2 = gsap.to('.mt2', {
            x: -50,
            y: -50,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1',
                start: '-50% 10%',
                end: '1000% 10%',
                scrub: 1,
                // markers: true,
            },
        });
        const mt3 = gsap.to('.mt3', {
            // x: -50,
            y: -50,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1',
                start: '-50% 10%',
                end: '1000% 10%',
                scrub: 1,
                // markers: true,
            },
        });
        const text = gsap.to('.text', {
            // x: -50,
            y: -100,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bird1',
                start: '-50% 10%',
                end: '1000% 10%',
                scrub: 1,
                // markers: true,
            },
        });

        return () => {
            bird1Animation.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
            bird2Animation.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
            backmount.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
            fort.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
            mt1.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
            mt2.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
            mt3.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
            text.scrollTrigger?.kill(); // Cleanup the ScrollTrigger on component unmount
        };
    }, [])
    return (
        <section className='relative w-full h-[100vh] overflow-hidden'>
            <div className='text flex flex-col items-center absolute z-[1] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <span className={`${poppins.className} text-xl tracking-[2px] font-[400] text-[#5c6973]`}>Its time for some</span>
                <span className="text-8xl font-semibold font-rancho text-[#5c6973]">Advanture</span>
            </div>
            <img className='sky absolute object-cover h-1/2' src="/assets/sky.png" alt="" />
            <img className='bird1 absolute right-12 z-10 w-8 top-40' src="/assets/birdright.png" alt="" />
            <img className='bird2 absolute left-16 z-10 w-8 top-72' src="/assets/birdleft.png" alt="" />
            <img className='backmount absolute object-cover bottom-[27rem] w-full h-24' src="/assets/backmount.png" alt="" />
            <img className='fort absolute object-cover bottom-96 z-10 w-full min-h-40' src="/assets/fort.png" alt="" />
            <img className='water absolute object-cover bottom-40 w-full h-72' src="/assets/water.png" alt="" />
            <img className='mt1 absolute object-cover bottom-16 w-full h-72' src="/assets/mainmount.png" alt="" />
            <img className='mt2 absolute object-cover bottom-0 w-full h-72' src="/assets/mountleft.png" alt="" />
            <img className='mt3 absolute object-cover bottom-0 w-full h-72' src="/assets/footmountain.png" alt="" />
        </section>
    )
}

export default HeroSection