"use client"

import React from 'react'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SearchFunctionMobile from './SearchFunctionMobile'

interface NavMobileProps {
    open: boolean
    setIsOpen: (isOpen: boolean) => void
}

const MobileNav = ({ open, setIsOpen }: NavMobileProps) => {
    const pathname = usePathname()

    return (
        <>
            <div className={`w-full bg-black fixed top-[60px] z-20 ${open ? 'translate-y-0' : '-translate-y-full'} transition wrapper !py-3 flex flex-col gap-6 shadow-lg`}>
                <SearchFunctionMobile />

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

            <div className={`w-full h-screen bg-black/70 fixed z-10 top-0 ${open ? 'opacity-100' : 'opacity-0 hidden'} transition ease-in-out`} onClick={() => setIsOpen(false)} />
        </>
    )
}

export default MobileNav
