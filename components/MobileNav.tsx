"use client"

import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { Input } from './ui/input'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavMobileProps {
    open: boolean
    setIsOpen: (isOpen: boolean) => void
}

const MobileNav = ({ open, setIsOpen }: NavMobileProps) => {
    const pathname = usePathname()

    return (
        <>
            <div className={`w-full bg-black fixed top-[60px] z-20 ${open ? 'translate-y-0' : '-translate-y-full'} transition wrapper !py-3 flex flex-col gap-6 shadow-lg`}>
                <div className='bg-black-mate rounded-[12px] md:hidden flex items-center px-2 border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer'>
                    <IoMdSearch className='size-7 text-gray-500' />
                    <Input className='input bg-transparent h-[40px] w-full' placeholder='Search...' />
                    <div className='border border-gray-500 px-1 rounded-[8px]'>
                        <span className='text-sm text-gray-500'>Ctrl+k</span>
                    </div>
                </div>

                <div className={`flex flex-col gap-2 pb-4 ${open ? 'opacity-100' : 'opacity-0'} transition !duration-700`}>
                    <h2 className='text-gray-300 font-semibold'>
                        Data Handling
                    </h2>
                    {navLinks.map((nav) => {
                        const isActive = pathname === nav.href

                        return (
                            <Link href={nav.href} key={nav.name} className={`w-full flex items-center justify-between py-1 rounded-[8px] group transition`} onClick={() => setIsOpen(false)}>
                                <span className={`font-semibold ${isActive ? 'text-primary' : 'text-gray-400'} group-hover:text-white transition`}>
                                    {nav.name}
                                </span>
                                <span className='bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-medium'>
                                    {isActive && 'current'}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className={`w-full h-screen bg-black/70 fixed z-10 top-0 ${open ? 'opacity-100' : 'opacity-0 -z-10'} transition ease-in-out`} onClick={() => setIsOpen(false)} />
        </>
    )
}

export default MobileNav