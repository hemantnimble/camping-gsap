'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const menuLinks = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact' },
    { path: '/explore', label: 'Tents' },
    { path: '/eexgfh', label: 'Cotages' },
    { path: '/test', label: 'Test' }
]

function NavBar() {
    const container = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useGSAP(() => {
        gsap.set(".item-holder", { y: 75 });

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
                delay: -0.5 
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
        <nav ref={container} className='h-14 fixed z-50 w-full px-4'>
            <div className='flex justify-between items-center h-full'>
                <span className='text-xl'>Camping</span>
                <span><button className='text-xl bg-black text-white px-3 py-1 rounded-full' onClick={toggleMenu}>Menu</button></span>
            </div>
            <div className='overlay bg-teal-500 w-full h-[100vh] fixed top-0 left-0' style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}>
                <button onClick={toggleMenu} className='text-3xl absolute top-5 right-7'>&#x2715;</button>
                <ul >
                    {menuLinks.map((link, index) => (
                        <div className='w-max' style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }} key={index}>
                            <div className='item-holder relative'>
                                <Link onClick={toggleMenu} className='text-7xl' href={link.path}>{link.label}</Link>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;