"use client"

import { fetchData } from '@/lib/actions'
import { launchProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { formatDate } from '../lib/utils';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import {
    Table,
    TableBody,
    TableCaption,
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
        <div className='w-full'>
            <ScrollArea className='w-full h-[500px]'>
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
                            {Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i} className='border-0'>
                                    <TableCell className="font-medium">
                                        <Skeleton className='w-[250px] h-[30px] bg-gray-400' />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className='w-[150px] h-[30px] bg-gray-400' />
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
                            {launch.map((data, i) => {
                                return (
                                    <TableBody key={i}>
                                        <TableRow>
                                            <TableCell className="font-medium">{data.name}</TableCell>
                                            <TableCell>{data.rocketName}</TableCell>
                                            <TableCell>{formatDate(data.date_utc)}</TableCell>
                                            <TableCell className="text-right">{data.success === true ? "Succeed" : "Failed"}</TableCell>
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
