"use client"

import { fetchData } from '@/lib/actions'
import { launchProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { formatDate } from '../lib/utils';
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
        <div className='max-md:w-full'>
            <ScrollArea className='h-[500px]'>
                <Table className='max-md:w-max mx-auto'>
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
                                        <Skeleton className='w-[250px] h-[30px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Skeleton className='w-full h-[30px] bg-gray-400' />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    ) : (
                        <>
                            {launch.map((data, i) => {
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
                            })}
                        </>
                    )}

                </Table>
            </ScrollArea>
        </div>
    )
}

export default LaunchData
