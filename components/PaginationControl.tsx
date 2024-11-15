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

    const getPages = () => {
        const pages = []
        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (page <= 2) {
                pages.push(1, 2, 3, '...', totalPages)
            } else if (page >= totalPages - 1) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
            } else {
                pages.push(1, '...', page - 1, page, page + 1, '...', totalPages)
            }
        }
        return pages
    }

    const pages = getPages()

    return (
        <Pagination className='mt-2 flex md:justify-end'>
            <PaginationContent className={`max-md:flex-wrap ${!hasNextPage && 'md:translate-x-20'} transition`}>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => {
                            if (hasPrevPage) onPageChange(page - 1)
                        }}
                        className={`select-none ${hasPrevPage ? 'opacity-100 cursor-pointer' : 'opacity-0'} transition max-md:hidden`}
                    />
                </PaginationItem>
                {pages.map((p, index) => {
                    const isActive = p === page

                    return (
                        <PaginationItem key={index} className='transition'>
                            {p === '...' ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink onClick={() => {
                                    if (typeof p === 'number') onPageChange(p)
                                }} className={`${isActive ? 'bg-primary hover:!bg-primary hover:text-white cursor-default' : 'hover:!bg-primary/70 hover:text-white cursor-pointer'} select-none transition`}>
                                    {p}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => {
                            if (hasNextPage) onPageChange(page + 1)
                        }}
                        className={`select-none ${hasNextPage ? 'opacity-100 cursor-pointer' : 'opacity-0'} transition max-md:hidden`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationControl
