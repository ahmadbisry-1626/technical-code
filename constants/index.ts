export const section = [
    {
        name: "Get Started",
        href: "#started",
    },
    {
        name: "Fetch Data",
        href: "#rollkan",
    },
    {
        name: "Display",
        href: "#display",
    },
    {
        name: "Filtering",
        href: "#filtering",
    },
    {
        name: "Sorting",
        href: "#sorting",
    },
    {
        name: "Pagination",
        href: "#pagination",
    },
    {
        name: "Search",
        href: "#search",
    },
]

export const codeDisplayData = `"use client"

import React, { useEffect, useState } from 'react'
import { launchProps } from '@/types'

const LaunchData = () => {
    const [launch, setIsLaunch] = useState<launchProps[]>([])
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        const launchData = async () => {
            setIsLoading(true)
            const data = await fetchData()
            setIsLaunch(data)
            setIsLoading(false)
        };

        launchData()
    }, [])

    return (
        ..mapping
    )
}
`

export const codeFiltering = `"use client"

import React, { useEffect, useState } from 'react'

const Filtering = () => {
    const [loading, setIsLoading] = useState(false)
    const [launch, setIsLaunch] = useState<launchProps[]>([])
    const [date, setDate] = React.useState<Date>()
    const [statusFilter, setStatusFilter] = useState<"success" | "failure" | "unknown" | null>(null);
    const [filteredLaunches, setFilteredLaunches] = useState<launchProps[]>([]);

    useEffect(() => {
        const filteredData = launch.filter((data) => {
            if (statusFilter === "success") return data.success === true;
            if (statusFilter === "failure") return data.success === false;
            if (statusFilter === "unknown") return data.success === null;
            return true;
        }).filter((data) => {
            if (!date) return true;
            const launchDate = formatDate(data.date_utc)
            return launchDate === formatDate(date)
        })

        setFilteredLaunches(filteredData)
    }, [statusFilter, launch, date])

    return (
        ...filteredLaunches.map
    )
}
`

export const codeSorting = `"use client"

import React, { useEffect, useState } from 'react'

const Sorting = () => {
    const [launch, setIsLaunch] = useState<launchProps[]>([])
    const [date, setDate] = React.useState<Date>()
    const [statusFilter, setStatusFilter] = useState<"success" | "failure" | "unknown" | null>(null);
    const [filteredLaunches, setFilteredLaunches] = useState<launchProps[]>([]);
    const [sorted, setSorted] = useState<"dateAsc" | "dateDesc" | "nameAsc" | "nameDesc" | null>(null)

    ...previous useEffect code

    const sortedData = useMemo(() => {
        return sorted === "nameAsc"
            ? [...filteredLaunches].sort((a, b) => a.name.localeCompare(b.name))
            : sorted === "nameDesc"
                ? [...filteredLaunches].sort((a, b) => b.name.localeCompare(a.name))
                : sorted === "dateAsc"
                    ? [...filteredLaunches].sort((a, b) => new Date(a.date_utc).getTime() - new Date(b.date_utc).getTime())
                    : sorted === "dateDesc"
                        ? [...filteredLaunches].sort((a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime())
                        : filteredLaunches;
    }, [sorted, filteredLaunches]);

    return (
        ...sortedData.map
    )
}
`

export const codePagination = `"use client"

import React, { useEffect, useState } from 'react'

const PaginationComponent = () => {
    const [sorted, setSorted] = useState<"dateAsc" | "dateDesc" | "nameAsc" | "nameDesc" | null>(null)
    const [page, setPage] = useState(1);

    ...previous code

    const itemsPerPage = 10;
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const onPageChange = (newPage: number) => {
        setPage(newPage);
    };

    const paginatedData = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedData.slice(startIndex, endIndex);
    }, [page, sortedData]);

    const hasPrevPage = page > 1;
    const hasNextPage = page < totalPages;

    return (
        ...paginatedData.map

        <PaginationControl
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            page={page}
        />
    )
}
`

export const codePaginationControl = `"use client"

import React, { useEffect, useState } from 'react'

const PaginationControl = ({ ...} : PaginationControlProps) => {
    return (
        <Pagination className='mt-2 flex md:justify-end'>
            ...
            <PaginationPrevious
                onClick={() => {
                    if (hasPrevPage) onPageChange(page - 1)
                }}
                className={'select-none {hasPrevPage ? 'opacity-100 cursor-pointer' : 'opacity-0'} transition max-md:hidden'}
            />
            <PaginationNext
                onClick={() => {
                    if (hasNextPage) onPageChange(page + 1)
                }}
                className={'select-none {hasNextPage ? 'opacity-100 cursor-pointer' : 'opacity-0'} transition max-md:hidden'}
            />
        </Pagination>
    )
}
`

export const codeSearchFunction = `"use client"

import React, { useEffect, useState } from 'react'

const AdditionalFeatures = () => {
    const [query, setQuery] = useState("")

    ...previous UseEffect code

    useEffect(() => {
        ...previous code
        }).filter((data) => data.name.toLowerCase().includes(query.toLowerCase()))

        setFilteredLaunches(filteredData)
    }, [statusFilter, launch, date, query])


    return (
        <Input onChange={(e) => setQuery(e.target.value)}/>

        ...paginatedData.map
    )
}
`
