'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'contact' },
    { path: '/explore', label: 'explore' },
    { path: '/eexgfh', label: 'eexgfh' },
    { path: '/ifrggi', label: 'ifrggi' }
]

function NavBar() {
    const container = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useGSAP(() => {
        // Set initial y value for item-holder
        gsap.set(".item-holder", { y: 75 });

        // Create timeline
        tl.current = gsap.timeline({ paused: true })
            .fromTo(".overlay", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
            }, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.25,
                ease: "power4.inOut"
            })
            .to(".item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: -0.5 // Adjusted delay
            });
    }, { scope: container });

    useEffect(() => {
        if (tl.current) {
            if (isMenuOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }
    }, [isMenuOpen]);

    return (
        <nav ref={container} className='h-14 fixed z-50 bg-white w-full px-4'>
            <div className='flex justify-between items-center h-full'>
                <span>Camping</span>
                <span><button onClick={toggleMenu}>Menu</button></span>
            </div>
            <div className='overlay bg-green-400 w-full h-[100vh] fixed top-0 left-0' style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}>
                <button onClick={toggleMenu} className='text-3xl mt-8 ml-8'>X</button>
                <ul className='pt-20'>
                    {menuLinks.map((link, index) => (
                        <div className='w-max' style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }} key={index}>
                            <div className='mx-4 item-holder relative mb-4'>
                                <Link className='text-7xl' href={link.path}>{link.label}</Link>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;