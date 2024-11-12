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
                            <Link href={href} key={name} className={`text-gray-400 font-regular text-[18px] hover:text-primary ${activeSection === name && '!text-primary'} transition`}>
                                {name}
                            </Link>
                        )
                    })}
                </div>

                <div className='border-r-4 border-gray-500 relative'>
                    <div className={`border-r-4 rounded-full border-primary h-[50px] absolute ${activeSection === "Fetch Data" && 'translate-y-[20px]'} ${activeSection === "Display" && 'translate-y-[50px]'} ${activeSection === "Filtering" && 'translate-y-[80px]'} ${activeSection === "Sorting" && 'translate-y-[110px]'} ${activeSection === "Pagination" && 'translate-y-[140px]'} ${activeSection === "Search" && 'translate-y-[165px]'} top-0 transition z-10`} />
                </div>
            </div>

            <ScrollArea className='h-[350px] relative'>
                <div className='bg-gradient-to-t from-black absolute h-[30px] w-full bottom-0' />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How I fetch data</AccordionTrigger>
                        <AccordionContent>
                            The fetchData function fetches all launches from the SpaceX API, then fetches rocket names for each launch. It uses Promise.all to fetch rocket names concurrently, improving performance by reducing the time it takes to fetch data.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Displaying data</AccordionTrigger>
                        <AccordionContent>
                            The component streamlines data handling with states for launch and loading to minimize re-renders. It fetches data once on mount and uses the loading state to show a smooth loading indicator, keeping the UI responsive and efficient.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Sorting and filtering</AccordionTrigger>
                        <AccordionContent>
                            This component filters launch data by status and date, updating results in real time based on user input. It uses useEffect to trigger filtering only when needed. The Sorting component uses useMemo to optimize performance, recalculating only when sorted or filteredLaunches changes. By caching the sorted result, it avoids re-sorting on every render.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Pagination</AccordionTrigger>
                        <AccordionContent>
                            It breaks down large data sets into manageable pages, using itemsPerPage to control the display and useMemo to efficiently slice the data for each page. Pagination controls automatically adjust based on whether there's a previous or next page, ensuring a smooth user experience as the correct page of data is displayed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Search function</AccordionTrigger>
                        <AccordionContent>
                            The search feature keeps things dynamic by updating the query state with the user's input. Every time the query changes, it triggers filtering through launch data, alongside other filters like date and status, delivering a seamless and refined search experience.
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
