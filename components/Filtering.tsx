"use client"

import React, { useEffect, useState } from 'react'
import { cn, formatDate } from '../lib/utils';
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
import { fetchData } from '@/lib/actions';
import { launchProps } from '@/types';
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
import { CalendarIcon } from 'lucide-react';
import { TbRocket } from "react-icons/tb";
import { TbRocketOff } from "react-icons/tb";
import { PiRocketFill } from "react-icons/pi";
import { GrStatusUnknownSmall } from "react-icons/gr";

const Filtering = () => {
    const [loading, setIsLoading] = useState(false)
    const [launch, setIsLaunch] = useState<launchProps[]>([])
    const [date, setDate] = React.useState<Date>()
    const [statusFilter, setStatusFilter] = useState<"success" | "failure" | "unknown" | null>(null);
    const [filteredLaunches, setFilteredLaunches] = useState<launchProps[]>([]);

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
        })

        setFilteredLaunches(filteredData)
    }, [statusFilter, launch, date])

    const handleStatus = (value: string) => {
        if (value === "success") {
            setStatusFilter("success")
        } else if (value === "failure") {
            setStatusFilter("failure")
        } else if (value === "unknown") {
            setStatusFilter("unknown")
        } else {
            setStatusFilter(null)
        }
    }

    return (
        <div className='w-full'>
            <div className='flex items-center justify-between mx-auto my-2'>
                <Select onValueChange={handleStatus} defaultValue='all'>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Status" />
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


            <ScrollArea className='h-[500px]'>
                <Table className='w-max mx-auto'>
                    <TableHeader className=''>
                        <TableRow>
                            <TableHead className="w-[295px]">Mission Name</TableHead>
                            <TableHead className='w-[150px]'>Rocket Name</TableHead>
                            <TableHead className='w-[220px]'>Launch Date</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    {loading ? (
                        <TableBody >
                            {Array.from({ length: 10 }).map((_, i) => (
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
                            {filteredLaunches.length > 0 ? (
                                filteredLaunches.map((data, i) => {
                                    return (
                                        <TableBody key={i}>
                                            <TableRow>
                                                <TableCell className="font-medium">{data.name}</TableCell>
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
        </div>
    )
}

export default Filtering
