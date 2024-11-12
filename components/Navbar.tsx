"use client"

import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { IoMdSearch } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className={`bg-black w-full py-4 fixed z-20 ${scrolled && 'shadow-[0_3px_10px_rgb(0,0,0,0.2)]'} transition`}>
            <div className='flex items-center justify-between wrapper'>
                <div className='flex items-center gap-6'>
                    <Link href="#hero" className='text-white font-semibold text-[20px] md:text-[24px]'>
                        DevLens
                    </Link>
                    <div className='bg-black-mate rounded-[12px] hidden md:flex items-center px-2 border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer hover:w-[300px] focus-within:w-[300px] w-[250px]'>
                        <IoMdSearch className='size-7 text-gray-500' />
                        <Input className='input bg-transparent h-[40px] w-full' placeholder='Search...' />
                        <div className='border border-gray-500 px-1 rounded-[8px]'>
                            <span className='text-sm text-gray-500'>Ctrl+k</span>
                        </div>
                    </div>
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
    )
}

export default Navbar
