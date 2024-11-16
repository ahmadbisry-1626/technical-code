"use client"

import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchFunction = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (searchTerm) {
                params.set("query", searchTerm);
            } else {
                params.delete("query");
            }
            router.replace(`?${params.toString()}`)
        }, 500)

        return () => clearTimeout(timeout);
    }, [searchTerm, searchParams, router]);

    return (
        <div className='bg-black-mate rounded-[12px] hidden md:flex items-center px-2 border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer hover:md:w-[350px] focus-within:md:w-[350px] hover:lg:w-[450px] focus-within:lg:w-[450px] w-[250px] relative'>
            <IoMdSearch className='size-7 text-gray-500' />
            <Input defaultValue={searchTerm} className='input bg-transparent h-[40px] w-full' placeholder='Search...' onChange={(e) => setSearchTerm(e.target.value)} />
            <div className='border border-gray-500 px-1 rounded-[8px]'>
                <span className='text-sm text-gray-500'>Ctrl+k</span>
            </div>

            <div className={`absolute w-full bg-black border-2 border-primary top-14 left-0 ${searchTerm ? 'opacity-100 h-[150px]' : 'opacity-0 h-[10px] hidden'} transition rounded-[12px] px-5 py-3`}>
                <div className='flex flex-col gap-1'>
                    <span className='break-all line-clamp-2'>Search result for "{searchTerm}"</span>
                    <span className='text-gray-400'>Belum dibuat fungsinya wkwkkwk</span>
                </div>
            </div>
        </div>
    )
}

export default SearchFunction