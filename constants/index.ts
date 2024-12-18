export const sectionAxios = [
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
export const sectionReactQuery = [
    {
        name: "Get Started",
        href: "#started",
    },
    {
        name: "Fetch Data",
        href: "#rollkan",
    },
    {
        name: "Data Handling",
        href: "#dataHandling",
    },
    {
        name: "Result",
        href: "#result",
    }
]

export const sectionGhibliStudios = [
    {
        name: "Get Started",
        href: "#started",
    },
    {
        name: "Fetch Data",
        href: "#rollkan",
    },
    {
        name: "Data Handling",
        href: "#dataHandling",
    },
    {
        name: "Result",
        href: "#result",
    }
]

export const sectionGhibliDetails = [
    {
        name: "Movie Details",
        href: "#movieDetails",
    }
]

export const navLinks = [
    {
        name: "Axios",
        href: "/"
    },
    {
        name: "Axios + React Query",
        href: "/react-query"
    },
    {
        name: "Ghibli Studios",
        href: "/ghibli-api"
    }
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
export const installReactQuery = `npm install @tanstack/react-router
// or
pnpm add @tanstack/react-router
// or
yarn add @tanstack/react-router
// or
bun add @tanstack/react-router
`

export const codeProvider = `// providers.tsx
"use client"

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import * as React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}`

export const wrapperLayout = `// layout.tsx
<html lang="en">
    <body>
        <Providers>
            {children}
        </Providers>
     </body>
</html>
`

export const newDataFetching = `// actions.ts

"use server"

import { apiClient } from "@/hooks"

export const fetchLaunches = async (): Promise<launchProps[]> => {
    const launchResponse = await apiClient.get<launchProps[]>('/launches')
    const launches = launchResponse.data

    const launchWithRocketNames = await Promise.all(
        launches.map(async (data) => {
            try {
                const rocketResponse = await apiClient.get<rocketName>('/rockets/'$'{data.rocket}')
                return {
                    ...data,
                    rocketName: rocketResponse.data.name,
                    company: rocketResponse.data.company,
                    country: rocketResponse.data.country
                }
            } catch (error) {
                return { ...data, rocketName: "Unknown", company: "Unknown", country: "Unknown" }
            }
        })
    )

    return launchWithRocketNames
}
`

export const customQueryHooks = `// hooks/queries.ts

import { fetchLaunches } from "@/lib/actions"
import { launchProps } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const useLaunches = () => {
    return useQuery<launchProps[], Error>(
        {
            queryKey: ['launches'],
            queryFn: fetchLaunches,
            staleTime: 5 * 60 * 1000,
            retry: 2,
        }
    )
}
`

export const codeDisplayDataReqctQuery = `"use client"

import { useLaunches } from '@/hooks/queries';

const DataHandling = () => {
    const { data: launches, isLoading, isFetching } = useLaunches()

    return (
        {isLoading ? (
            <Skeleton />
        ): (
            ...launches.map
        )}
    )
}
`

export const codeFilteredData = `"use client"

import React, { useMemo, useState } from 'react'
import { useLaunches } from '@/hooks/queries'
import { launchProps } from '@/types';

const DataHandling = () => {
    const { data: launches, isLoading, isFetching } = useLaunches()
    const [filteredData, setFilteredData] = useState<launchProps[]>(launches ?? [])
    const [query, setQuery] = useState('')
    const [date, setDate] = React.useState<Date>()
    const [status, setStatus] = useState<"success" | "failure" | "unknown" | null>(null)

    ...previous code

     useMemo(() => {
        const filtered = launches?.filter((data) => {
            return data.name.toLowerCase().includes(query.toLowerCase())
        }).filter((data) => {
            if (status === "success") return data.success === true
            if (status === "failure") return data.success === false
            if (status == "unknown") return data.success === null
            return true; // if status is null
        }).filter((data) => {
            if (!date) return true // if date is null
            return formatDate(data.date_utc) === formatDate(date)
        })

        setFilteredData(filtered ?? [])
    }, [query, launches, status, date])

    return (
        ...filteredData.map
    )
}
`

export const codeSortedData = `"use client"

import React, { useMemo, useState } from 'react'
import { useLaunches } from '@/hooks/queries'
import { launchProps } from '@/types';

const DataHandling = () => {
    const { data: launches, isLoading, isFetching } = useLaunches()
    const [filteredData, setFilteredData] = useState<launchProps[]>(launches ?? [])
    const [sort, setSort] = useState<"dateAsc" | "dateDesc" | "nameAsc" | "nameDesc" | null>(null)

    ...previous code

    const sortedData = useMemo(() => {
        return sort === "nameAsc"
            ? [...filteredData].sort((a, b) => a.name.localeCompare(b.name))
            : sort === "nameDesc"
                ? [...filteredData].sort((a, b) => b.name.localeCompare(a.name))
                : sort === "dateAsc"
                    ? [...filteredData].sort((a, b) => new Date(a.date_utc).getTime() - new Date(b.date_utc).getTime())
                    : sort === "dateDesc"
                        ? [...filteredData].sort((a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime())
                        : filteredData
    }, [filteredData, sort])

    return (
        ...sortedData.map
    )
}
`

export const codePaginationReactQuery = `"use client"

import React, { useMemo, useState } from 'react'
import { useLaunches } from '@/hooks/queries'
import { launchProps } from '@/types';

const DataHandling = () => {
    const { data: launches, isLoading, isFetching } = useLaunches()
    const [filteredData, setFilteredData] = useState<launchProps[]>(launches ?? [])
    const [page, setPage] = useState(1)

    ...previous code

    const itemsPerPage = 10
    const totalPages = Math.ceil(sortedData.length / itemsPerPage)

    const pageChangeHandler = (newPage: number) => {
        setPage(newPage)
    }

    const paginatedData = useMemo(() => {
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return sortedData.slice(startIndex, endIndex)
    }, [sortedData, page])

    // check if page is greater than 1
    const hasPrevPage = page > 1

    // check if page is less than total pages
    const hasNextPage = page < totalPages

    return (
        ...paginatedData.map

        // Pagination control
        <PaginationControl
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            totalPages={totalPages}
            onPageChange={pageChangeHandler}
            page={page}
        />
    )
}
`
