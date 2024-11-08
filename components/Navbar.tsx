import React from 'react'
import { Input } from './ui/input'
import { IoIosArrowRoundForward, IoMdSearch } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {

    return (
        <nav className='bg-black w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 fixed z-20'>
            <div className='flex items-center justify-between wrapper'>
                <div className='flex items-center gap-4'>
                    <Link href="/" className='text-white font-semibold text-[20px] md:text-[24px]'>
                        Technical<span className='bg-primary text-black'>Code</span>
                    </Link>
                    <div className='bg-black-mate rounded-[12px] flex items-center px-2 border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer'>
                        <IoMdSearch className='size-6 text-gray-500' />
                        <Input className='input bg-transparent h-[40px] w-[120px] !cursor-pointer' placeholder='Search...' />
                        <div className='border border-gray-500 px-1 rounded-[8px]'>
                            <span className='text-sm text-gray-500'>Ctrl+k</span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <Link href="#" className='text-gray-500 hover:text-primary transition-all duration-300'>Get Started</Link>
                    <span className='text-gray-500'>|</span>
                    <Link href="/">
                        <FaGithub className='size-7 text-gray-500 hover:text-white transition-all duration-300' />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
