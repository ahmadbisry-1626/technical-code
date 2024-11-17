"use client"

import { navLinks, sectionAxios } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from './ui/scroll-area'
import { usePathname } from 'next/navigation'
import { SectionProps } from '@/types'


const SideNav = ({ sectionItem }: SectionProps) => {
    const [activeSection, setActiveSection] = useState<string>('');
    const pathname = usePathname()
    const ghibliPage = pathname === '/ghibli-api'

    useEffect(() => {
        const handleScroll = () => {
            sectionItem.forEach((data) => {
                const element = document.querySelector(data.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(data.name);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionItem]);

    return (
        <div className="sticky top-0 lg:flex flex-col gap-6 hidden pt-28 w-full max-w-[250px]">
            {!ghibliPage && (
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1'>
                        {sectionItem.map((data) => {
                            return (
                                <Link href={data.href} key={data.name} className={`text-gray-400 font-regular text-[18px] hover:text-primary ${activeSection === data.name && '!text-primary'} transition`}>
                                    {data.name}
                                </Link>
                            )
                        })}
                    </div>

                    <div className='border-r-4 border-gray-500 relative'>
                        <div className={`border-r-4 rounded-full border-primary ${activeSection === "Movie Details" ? 'h-[30px]' : 'h-[50px]'} absolute ${activeSection === "Fetch Data" && 'translate-y-[20px]'} ${activeSection === "Display" && 'translate-y-[50px]'} ${activeSection === "Filtering" && 'translate-y-[80px]'} ${activeSection === "Sorting" && 'translate-y-[110px]'} ${activeSection === "Pagination" && 'translate-y-[140px]'} ${activeSection === "Search" && 'translate-y-[165px]'} ${activeSection === "Data Handling" && 'translate-y-[50px]'} ${activeSection === "Result" && 'translate-y-[70px]'} top-0 transition z-10`} />
                    </div>
                </div>
            )}

            <div className='flex flex-col gap-2'>
                <h2 className='text-gray-400 text-[18px] font-semibold'>Data Handling</h2>
                {navLinks.map(({ name, href }) => {
                    const isActive = pathname === href
                    return (
                        <Link href={href} key={name}>
                            <span className={`text-gray-400 font-regular text-[18px] hover:text-primary ${isActive && '!text-primary'} transition`}>
                                {name}
                            </span>
                        </Link>
                    )
                })}
            </div>

            <ScrollArea className='h-[250px] relative'>
                <div className='bg-gradient-to-t from-black absolute h-[30px] w-full bottom-0' />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>NextJS</AccordionTrigger>
                        <AccordionContent>
                            Next.js is a React framework that enables server-side rendering and static site generation. It's a powerful tool for building fast, scalable web applications.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>API</AccordionTrigger>
                        <AccordionContent>
                            The SpaceX API provides data on launches, rockets, capsules, and more.
                            SpaceX-API:<Link href="https://github.com/r-spacex/SpaceX-API/tree/master/docs/launches/v4" className='text-blue-500 hover:underline'> here!</Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Axios</AccordionTrigger>
                        <AccordionContent>
                            Axios is a promise-based HTTP client for the browser and Node.js. It's a powerful tool for making API requests and handling responses.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>React Query</AccordionTrigger>
                        <AccordionContent>
                            React Query is a powerful library for managing server state in React applications. It provides hooks for fetching, caching, and updating data, making it easy to build fast.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>About this website</AccordionTrigger>
                        <AccordionContent>
                            I made this website just for practice and to improve my data processing skills. I used Next.js, Tailwind CSS, and TypeScript to build this website. I also used the SpaceX API to fetch data.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </ScrollArea>

        </div>
    )
}

export default SideNav
