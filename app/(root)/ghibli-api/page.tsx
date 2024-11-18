import GhibliCard from '@/components/ghibli/GhibliCard'
import SideNav from '@/components/SideNav'
import { sectionGhibliStudios } from '@/constants'
import { searchParams } from '@/types'
import React from 'react'

const page = ({searchParams}: searchParams) => {
    const pageParam = searchParams?.page?.toString() || '1'
    const page = parseInt(pageParam)
    const itemsPerPage = 6

    return (
        <main className='flex flex-col items-center justify-center w-full wrapper relative'>
            <div className="flex items-start gap-7 w-full">
                <SideNav sectionItem={sectionGhibliStudios} />

                <section className="w-full flex items-center flex-col pt-24 gap-3" id="started">
                    <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                        Ghibli Studio API
                    </h1>

                    <GhibliCard page={page} itemsPerPage={itemsPerPage}/>
                </section>
            </div>
        </main>
    )
}

export default page
