"use client"

import { section } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from './ui/scroll-area'


const SideNav = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            section.forEach(({ name, href }) => {
                const element = document.querySelector(href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(name);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [section]);

    return (
        <div className="sticky top-0 lg:flex flex-col gap-6 hidden pt-28 w-full max-w-[250px]">
            <div className='flex justify-between'>
                <div className='flex flex-col gap-1'>
                    {section.map(({ name, href }) => {
                        return (
                            <Link href={href} key={name} className={`text-gray-400 font-regular text-[18px] ${activeSection === name && '!text-primary'} transition`}>
                                {name}
                            </Link>
                        )
                    })}
                </div>

                <div className='border-r-4 border-gray-500 relative'>
                    <div className={`border-r-4 rounded-full border-primary h-[50px] absolute ${activeSection === "Rollkan" && 'translate-y-[20px]'} ${activeSection === "Display" && 'translate-y-[50px]'} ${activeSection === "Filtering" && 'translate-y-[80px]'} ${activeSection === "Sorting" && 'translate-y-[110px]'} ${activeSection === "Pagination" && 'translate-y-[140px]'} ${activeSection === "Search" && 'translate-y-[165px]'} top-0 transition z-10`} />
                </div>
            </div>

            <ScrollArea className='h-[350px]'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How I fetch data</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Displaying data</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Data filtered</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Sorting and filtering</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Pagination</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Search function</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </ScrollArea>

        </div>
    )
}

export default SideNav
