import React from 'react'
import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'

const SearchGhibli = () => {
    return (
        <div className='border-2 border-gray-400 w-full rounded-full h-[45px] md:h-[50px] flex items-center px-4'>
            <FaSearch className='size-5 text-gray-400'/>
            <Input className='input h-full' placeholder='Search movies...' />
        </div>
    )
}

export default SearchGhibli
