"use client"

import { fetchData } from '@/lib/actions'
import { cn, formatDate } from '@/lib/utils'
import { launchProps } from '@/types'
import React, { useEffect, useMemo, useState } from 'react'
import { format } from "date-fns"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ScrollArea } from './ui/scroll-area';
import { Skeleton } from './ui/skeleton';
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
import PaginationControl from './PaginationControl'
import { Input } from './ui/input'

const AdditionalFeatures = () => {
    const [loading, setIsLoading] = useState(false)
    const [launch, setIsLaunch] = useState<launchProps[]>([])
    const [date, setDate] = React.useState<Date>()
    const [statusFilter, setStatusFilter] = useState<"success" | "failure" | "unknown" | null>(null);
    const [filteredLaunches, setFilteredLaunches] = useState<launchProps[]>([]);
    const [sorted, setSorted] = useState<"dateAsc" | "dateDesc" | "nameAsc" | "nameDesc" | null>(null)
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("")

    useEffect(() => {
        const dataRocket = async () => {
            setIsLoading(true)
            const data = await fetchData()
            setIsLaunch(data)
            setFilteredLaunches(data)
            setIsLoading(false)
        }

        dataRocket()
    }, [])

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
        }).filter((data) => data.name.toLowerCase().includes(query.toLowerCase()))

        setFilteredLaunches(filteredData)
    }, [statusFilter, launch, date, query])

    const handleStatus = (value: string) => {
        if (value === "success") {
            setStatusFilter("success")
            setPage(1)
        } else if (value === "failure") {
            setStatusFilter("failure")
            setPage(1)
        } else if (value === "unknown") {
            setStatusFilter("unknown")
            setPage(1)
        } else {
            setStatusFilter(null)
            setPage(1)
        }
    }

    const sortHandler = (value: string) => {
        if (value === "nameAsc") {
            setSorted("nameAsc")
        } else if (value === "nameDesc") {
            setSorted("nameDesc")
        } else if (value === "dateAsc") {
            setSorted("dateAsc")
        } else if (value === "dateDesc") {
            setSorted("dateDesc")
        } else {
            setSorted(null)
        }
    }

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
        <div className='max-md:w-full'>
            <Input
                className='md:max-w-[740px] mb-3 mx-auto input bg-black-mate h-[40px]'
                placeholder='Saerch by mission name'
                onChange={(e) => setQuery(e.target.value)}
            />

            <div className='flex items-center justify-between max-w-[690px] w-full mx-auto my-2'>
                <div className='flex items-center gap-3'>
                    <Select onValueChange={handleStatus} defaultValue='all'>
                        <SelectTrigger className="w-[150px] input bg-black-mate">
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
                                    "w-[220px] justify-start text-left font-normal text-black",
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
                    <SelectTrigger className="w-max input !px-0 hover:text-primary text-[18px] font-medium">
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


            <ScrollArea className='w-full h-[420px]'>
                <Table className='w-max mx-auto'>
                    <TableHeader className=''>
                        <TableRow>
                            <TableHead className="w-[250px]">Mission Name</TableHead>
                            <TableHead className='w-[150px]'>Rocket Name</TableHead>
                            <TableHead className='w-[220px]'>Launch Date</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    {loading ? (
                        <TableBody >
                            {Array.from({ length: 9 }).map((_, i) => (
                                <TableRow key={i} className='border-0'>
                                    <TableCell className="font-medium">
                                        <Skeleton className='w-full h-[25px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className='w-full h-[25px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className='w-[200px] h-[25px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Skeleton className='w-full h-[25px] bg-gray-400' />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    ) : (
                        <>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((data, i) => {
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
                !loading ? (
                    <PaginationControl
                        hasNextPage={hasNextPage}
                        hasPrevPage={hasPrevPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
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

export default AdditionalFeatures
