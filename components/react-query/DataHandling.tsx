"use client"

import React, { useMemo, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea } from '../ui/scroll-area';
import { useLaunches } from '@/hooks/queries';
import { Skeleton } from '../ui/skeleton';
import { cn, formatDate } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, ChevronDown } from 'lucide-react';
import { TbRocket } from "react-icons/tb";
import { TbRocketOff } from "react-icons/tb";
import { PiRocketFill } from "react-icons/pi";
import { GrStatusUnknownSmall } from "react-icons/gr";
import { format } from "date-fns"
import { Input } from '../ui/input';
import { launchProps } from '@/types';
import PaginationControl from '../PaginationControl';

const DataHandling = () => {
    const { data: launches, isLoading, isFetching } = useLaunches()
    const [date, setDate] = React.useState<Date>()
    const [query, setQuery] = useState('')
    const [filteredData, setFilteredData] = useState<launchProps[]>(launches ?? [])
    const [status, setStatus] = useState<"success" | "failure" | "unknown" | null>(null)
    const [sort, setSort] = useState<"dateAsc" | "dateDesc" | "nameAsc" | "nameDesc" | null>(null)
    const [page, setPage] = useState(1)

    useMemo(() => {
        const filtered = launches?.filter((data) => {
            return data.name.toLowerCase().includes(query.toLowerCase())
        }).filter((data) => {
            if (status === "success") return data.success === true
            if (status === "failure") return data.success === false
            if (status == "unknown") return data.success === null
            return true;
        }).filter((data) => {
            if (!date) return true
            return formatDate(data.date_utc) === formatDate(date)
        })

        setFilteredData(filtered ?? [])
    }, [query, launches, status, date])

    const filterHandler = (value: string) => {
        if (value === "success") {
            setStatus("success")
            setPage(1)
        } else if (value === "failure") {
            setStatus("failure")
            setPage(1)
        } else if (value === "unknown") {
            setStatus("unknown")
            setPage(1)
        } else {
            setStatus(null)
        }
    }

    const sortHandler = (value: string) => {
        if (value === "dateAsc") return setSort("dateAsc")
        if (value === "dateDesc") return setSort("dateDesc")
        if (value === "nameAsc") return setSort("nameAsc")
        if (value === "nameDesc") return setSort("nameDesc")
        setSort(null)
    }

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

    const hasPrevPage = page > 1
    const hasNextPage = page < totalPages

    return (
        <div className='w-full'>
            <Input
                className='md:max-w-[740px] mb-3 mx-auto input bg-black-mate h-[40px]'
                placeholder='Saerch by mission name'
                onChange={(e) => setQuery(e.target.value)}
            />

            <div className='flex max-md:flex-wrap items-center justify-between w-full mx-auto my-2'>
                <div className='flex items-center gap-3'>
                    <Select onValueChange={filterHandler} defaultValue='all'>
                        <SelectTrigger className="md:w-[150px] w-full input bg-black-mate">
                            <SelectValue placeholder="Status" />
                            <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all" className='cursor-pointer'>
                                <span className='flex items-center gap-3 font-medium'>
                                    <PiRocketFill className='size-6 text-gray-400' />
                                    All data
                                </span>
                            </SelectItem>
                            <SelectItem value="success" className='cursor-pointer'>
                                <span className='flex items-center gap-3 font-medium'>
                                    <TbRocket className='size-6 text-primary' />
                                    Success
                                </span>
                            </SelectItem>
                            <SelectItem value="failure" className='cursor-pointer'>
                                <span className='flex items-center gap-3 font-medium'>
                                    <TbRocketOff className='size-6 text-red-500' />
                                    Failure
                                </span>
                            </SelectItem>
                            <SelectItem value="unknown" className='cursor-pointer'>
                                <span className='flex items-center gap-3 font-medium'>
                                    <GrStatusUnknownSmall className='size-6 text-gray-600' />
                                    Unknown
                                </span>
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "md:w-[220px] w-full justify-start text-left font-normal text-black",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <Select onValueChange={sortHandler}>
                    <SelectTrigger className="w-max input !px-0 hover:text-primary max-md:text-sm text-[18px] font-medium">
                        <SelectValue placeholder="Sort" className='' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all" className='cursor-pointer'>
                            Sort
                        </SelectItem>
                        <SelectItem value="dateDesc" className='cursor-pointer'>
                            Newest
                        </SelectItem>
                        <SelectItem value="dateAsc" className='cursor-pointer'>
                            Oldest
                        </SelectItem>
                        <SelectItem value="nameAsc" className='cursor-pointer'>
                            Name (A-Z)
                        </SelectItem>
                        <SelectItem value="nameDesc" className='cursor-pointer'>
                            Name (Z-A)
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <ScrollArea className='h-[420px]'>
                <Table className='w-max mx-auto'>
                    <TableHeader className=''>
                        <TableRow>
                            <TableHead className="w-[250px] md:w-[290px]">Mission Name</TableHead>
                            <TableHead className='w-[150px]'>Rocket Name</TableHead>
                            <TableHead className='w-[220px]'>Launch Date</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    {isLoading ? (
                        <TableBody >
                            {Array.from({ length: 9 }).map((_, i) => (
                                <TableRow key={i} className='border-0'>
                                    <TableCell className="font-medium">
                                        <Skeleton className='w-full h-[30px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className='w-full h-[30px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className='w-[220px] h-[30px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Skeleton className='w-full h-[30px] bg-gray-400' />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    ) : (
                        <>
                            {(paginatedData ?? []).length > 0 ? (
                                paginatedData?.map((data, i) => {
                                    const regex = new RegExp(`(${query})`, 'gi');
                                    const parts = data.name.split(regex);

                                    return (
                                        <TableBody key={i}>
                                            <TableRow>
                                                <TableCell className={`font-medium`}>
                                                    {query ? (
                                                        parts.map((part, i) => (
                                                            part.toLowerCase() === query.toLowerCase() ? (
                                                                <span key={i} className='text-primary'>{part}</span>
                                                            ) : (
                                                                part
                                                            )
                                                        ))
                                                    ) : (
                                                        <span>{data.name}</span>
                                                    )}
                                                </TableCell>
                                                <TableCell>{data.rocketName}</TableCell>
                                                <TableCell>{formatDate(data.date_utc)}</TableCell>
                                                <TableCell className="text-right capitalize">{data.success === true ? "success" : data.success === null ? "unknown" : 'failure'}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    )
                                })
                            ) : (
                                <TableBody >
                                    <TableRow className='border-0'>
                                        <TableCell className="font-medium text-center" colSpan={4}>No data found</TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </>
                    )}

                </Table>
            </ScrollArea>

            {paginatedData.length > 0 ? (
                !isLoading ? (
                    <PaginationControl
                        hasNextPage={hasNextPage}
                        hasPrevPage={hasPrevPage}
                        totalPages={totalPages}
                        onPageChange={pageChangeHandler}
                        page={page}
                    />
                ) : (
                    <Skeleton className='w-[200px] h-[30px] bg-gray-400 mx-auto mt-6' />
                )
            ) : (
                null
            )}
        </div>
    )
}

export default DataHandling
