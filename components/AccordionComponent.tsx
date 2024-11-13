import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionComponent = () => {
    return (
        <Accordion type="single" collapsible className='md:hidden block pb-10 mt-6 w-full'>
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
    )
}

export default AccordionComponent
