import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ReleaseYear = () => {
    return (
        <Select>
            <SelectTrigger className="w-max input !px-0 hover:text-primary max-md:text-sm text-[18px] font-medium">
                <SelectValue placeholder="Release year" className='' />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all" className='cursor-pointer'>
                    Default
                </SelectItem>
                <SelectItem value="dateDesc" className='cursor-pointer'>
                    Newest
                </SelectItem>
                <SelectItem value="dateAsc" className='cursor-pointer'>
                    Oldest
                </SelectItem>
            </SelectContent>
        </Select>
    )
}

export default ReleaseYear
