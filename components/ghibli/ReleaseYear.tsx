import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface ReleaseYearProps {
    releaseYear: string | null
    setReleaseYear: (value: "yearAsc" | "yearDesc" | null) => void
    setPage: (page: number) => void
}

const ReleaseYear = ({ releaseYear, setReleaseYear, setPage }: ReleaseYearProps) => {
    const handleSort = (value: string) => {
        if (value === "yearAsc") {
            setReleaseYear("yearAsc");
            setPage(1)
        } else if (value === "yearDesc") {
            setReleaseYear("yearDesc");
            setPage(1)
        } else {
            setReleaseYear(null)
            setPage(1)
        }
    }

    return (
        <Select onValueChange={handleSort}>
            <SelectTrigger className="w-max input !px-0 hover:text-primary max-md:text-sm text-[18px] font-medium">
                <SelectValue placeholder="Release year" className='' />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all" className='cursor-pointer'>
                    Default
                </SelectItem>
                <SelectItem value="yearDesc" className='cursor-pointer'>
                    Newest
                </SelectItem>
                <SelectItem value="yearAsc" className='cursor-pointer'>
                    Oldest
                </SelectItem>
            </SelectContent>
        </Select>
    )
}

export default ReleaseYear
