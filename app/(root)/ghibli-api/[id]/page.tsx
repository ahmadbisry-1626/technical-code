import MovieDetails from '@/components/ghibli/MovieDetails'
import SideNav from '@/components/SideNav'
import { sectionGhibliDetails } from '@/constants'
import { searchParams } from '@/types'
import React from 'react'

const page = async ({ params, searchParams }: searchParams) => {
    const id = (await params).id
    const pageParam = searchParams?.page?.toString() || '1'
    const page = parseInt(pageParam)

    return (
        <main className='flex flex-col items-center justify-center w-full wrapper relative'>
            <div className="flex items-start gap-7 w-full">
                <SideNav sectionItem={sectionGhibliDetails} />

                <MovieDetails id={id} page={page} />
            </div>
        </main>
    )
}

export default page
