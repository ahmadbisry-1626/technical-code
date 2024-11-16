"use client"

import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { HiMenuAlt4 } from "react-icons/hi";
import MobileNav from './MobileNav'
import SearchFunction from './SearchFunction'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        <>
            <nav className={`bg-black w-full py-4 fixed z-30 ${scrolled && 'shadow-[0_3px_10px_rgb(0,0,0,0.2)]'} transition`}>
                <div className='flex items-center justify-between wrapper'>
                    <div className='flex items-center md:gap-6 gap-3'>
                        <button onClick={() => setIsOpen(!open)} className='lg:hidden block'>
                            <HiMenuAlt4 className='text-white w-6 h-6 hover:text-primary transition' />
                        </button>
                        <Link href="/" className='text-white font-semibold text-[20px] md:text-[24px]'>
                            DevLens
                        </Link>

                        <SearchFunction />
                    </div>

                    <div className='flex items-center gap-4'>
                        <Link href="#started" className='text-gray-500 hover:text-primary transition-all duration-300'>Get Started</Link>
                        <span className='text-gray-500'>|</span>
                        <Link href="https://github.com/ahmadbisry-1626/technical-code" target='blank'>
                            <FaGithub className='size-7 text-gray-500 hover:text-white transition-all duration-300' />
                        </Link>
                    </div>
                </div>
            </nav>

            <MobileNav open={open} setIsOpen={setIsOpen} />
        </>
    )
}

export default Navbar
