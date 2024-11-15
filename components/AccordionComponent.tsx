import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'

const AccordionComponent = () => {
    return (
        <Accordion type="single" collapsible className='md:hidden block pb-10 mt-6 w-full'>
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
    )
}

export default AccordionComponent
