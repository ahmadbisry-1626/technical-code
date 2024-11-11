"use client"

import React, { useEffect, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationControlProps {
    hasNextPage: boolean
    hasPrevPage: boolean
    totalPages: number
    onPageChange: (page: number) => void
    page: number
}

const PaginationControl = ({ page, hasNextPage, hasPrevPage, totalPages, onPageChange }: PaginationControlProps) => {
    return (
        <Pagination className='mt-2'>
            <PaginationContent>
                <PaginationItem>
                    {hasPrevPage ? (
                        <PaginationPrevious
                            onClick={() => onPageChange(page - 1)} // Decrement page
                            className='select-none cursor-pointer'
                        />
                    ) : (
                        <span>Mas Rusdi</span>
                    )}
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>{page}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>/</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>{totalPages}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    {hasNextPage ? (
                        <PaginationNext
                            onClick={() => onPageChange(page + 1)} // Increment page
                            className='select-none cursor-pointer'
                        />
                    ) : (
                        <span>Mas Rusdi</span>
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationControl
