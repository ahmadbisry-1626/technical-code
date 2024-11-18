import React from 'react'
import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'

interface SearchProps {
    search: string
    setSearch: (e: string) => void
    setPage: (page: number) => void
}

const SearchGhibli = ({ search, setSearch, setPage}: SearchProps) => {

    return (
        <div className='border-2 border-gray-400 w-full rounded-full h-[45px] md:h-[50px] flex items-center px-4'>
            <FaSearch className='size-5 text-gray-400' />
            <Input
                className='input h-full'
                placeholder='Search movies...'
                onChange={(e) => {
                    setSearch(e.target.value)
                    setPage(1)
                }} />
        </div>
    )
}

export default SearchGhibli
