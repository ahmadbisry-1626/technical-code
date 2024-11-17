import MovieDetails from '@/components/ghibli/MovieDetails'
import SideNav from '@/components/SideNav'
import { sectionGhibliDetails } from '@/constants'
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id

    return (
        <main className='flex flex-col items-center justify-center w-full wrapper relative'>
            <div className="flex items-start gap-7 w-full">
                <SideNav sectionItem={sectionGhibliDetails} />

                <MovieDetails id={id} />
            </div>
        </main>
    )
}

export default page
