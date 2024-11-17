"use client"

import React, { useMemo, useState } from 'react'
import SearchGhibli from './SearchGhibli'
import ReleaseYear from './ReleaseYear'
import { useGhibli } from '@/hooks/queries'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '../ui/skeleton'
import { ghibliProps } from '@/types'
import PaginationControl from '../PaginationControl'

const itemsperPage = 6

const GhibliCard = () => {
    const [page, setPage] = useState(1)
    const { data: movies, isLoading, isError } = useGhibli()
    const [search, setSearch] = useState("")
    const [filteredMovies, setFilteredMovies] = useState<ghibliProps[]>([])
    const [releaseYear, setReleaseYear] = useState<"yearAsc" | "yearDesc" | null>(null)

    useMemo(() => {
        const filtered = movies?.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase())
        })

        return setFilteredMovies(filtered ?? [])
    }, [search, movies])

    const sortedMovies = useMemo(() => {
        return releaseYear === "yearAsc"
            ? [...filteredMovies].sort((a, b) => Number(a.release_date) - Number(b.release_date))
            : releaseYear === "yearDesc"
                ? [...filteredMovies].sort((a, b) => Number(b.release_date) - Number(a.release_date))
                : filteredMovies
    }, [releaseYear, filteredMovies])

    const totalPages = Math.ceil(sortedMovies?.length / itemsperPage)

    const onPageChange = (newPage: number) => {
        setPage(newPage)
    }

    const paginatedData = useMemo(() => {
        const startIndex = (page - 1) * itemsperPage
        const endIndex = startIndex + itemsperPage
        return sortedMovies?.slice(startIndex, endIndex)
    }, [page, sortedMovies])

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    return (
        <>
            {isLoading ? (
                <Skeleton className='w-full max-w-[600px] md:h-[335px] h-[255px] rounded-[12px] bg-gray-400' />
            ) : (
                movies?.filter((movie) => movie.id === 'dc2e6bd1-8156-4886-adff-b39e6043af0c').map((movie) => (
                    <Image
                        src={movie.movie_banner}
                        alt={movie.title}
                        width={600}
                        height={600}
                        sizes='100vw'
                        className='rounded-[12px]'
                        key={movie.id}
                    />
                ))
            )}

            <span className="break-words mb-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                Based on the perfomance of axios and react-query, I created simple list of movies from Ghibli Studios API to fetch the data of movies. You can see the complete documentation of Ghibli Studio API on their website <a href="https://ghibli.rest/docs/#/" target='blank' className='text-blue-500 hover:underline'>Ghibli Studio API</a>
            </span>

            <div className='w-full flex flex-col gap-4 pb-20'>
                <h1 className="text-[24px] md:text-[42px] font-bold">
                    Ghibli Movies
                </h1>
                <div className='flex items-center w-full gap-4'>
                    <SearchGhibli search={search} setSearch={setSearch} setPage={setPage}/>
                    <ReleaseYear releaseYear={releaseYear} setReleaseYear={setReleaseYear} setPage={setPage}/>
                </div>

                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5'>
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className='w-full h-[200px] md:h-[400px] rounded-[12px] bg-gray-400' />
                        ))
                    ) : (
                        paginatedData?.length > 0 ? (
                            paginatedData?.map((movie) => {
                                const regex = new RegExp(`(${search})`, 'gi');
                                const parts = movie.title.split(regex);

                                return (
                                    <li className='flex flex-col gap-3 group relative' key={movie.id}>
                                        <div className='absolute top-0 w-full md:h-[400px] h-[580px] bg-black z-10 rounded-[12px] opacity-0 group-hover:opacity-50 transition md:block hidden' />
                                        <div className='relative w-full md:h-[400px] h-[200px] overflow-hidden rounded-[12px]'>
                                            <Image
                                                src={movie.image}
                                                alt=''
                                                width={300}
                                                height={300}
                                                sizes='100vw'
                                                className='absolute w-full h-full object-cover transition md:block hidden'
                                            />
                                            <Image
                                                src={movie.movie_banner}
                                                alt=''
                                                width={300}
                                                height={300}
                                                sizes='100vw'
                                                className='absolute w-full h-full object-cover transition block md:hidden'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='text-xl font-bold'>
                                                {search ? (
                                                    parts.map((part, i) => (
                                                        part.toLowerCase() === search.toLowerCase() ? (
                                                            <span key={i} className='text-primary'>{part}</span>
                                                        ) : (
                                                            part
                                                        )
                                                    ))
                                                ) : (
                                                    <span>{movie.title}</span>
                                                )}
                                            </h2>
                                            <p className='font-medium text-gray-400 line-clamp-2'>{movie.description}</p>
                                            <div className='flex flex-col gap-1'>
                                                <span className='text-sm text-gray-400 font-medium'>
                                                    <span className='text-primary'>Original title: </span>
                                                    {movie.original_title}
                                                </span>
                                                <span className='text-sm text-gray-400 font-medium'>
                                                    <span className='text-primary'>Release year: </span>
                                                    {movie.release_date}
                                                </span>
                                                <span className='text-sm text-gray-400 font-medium'>
                                                    <span className='text-primary'>Director: </span>
                                                    {movie.director}
                                                </span>
                                                <span className='text-sm text-gray-400 font-medium'>
                                                    <span className='text-primary'>Score: </span>
                                                    {movie.rt_score} (Rotten Tomatoes)
                                                </span>
                                            </div>
                                        </div>
                                        <Link href={`/ghibli-api/${movie.id}`} className='hover:underline transition text-blue-500 w-max'>Read more</Link>
                                    </li>
                                )
                            })
                        ) : (
                            <div className='w-full bg-black-mate rounded-[12px] flex items-center justify-center col-span-3 h-[300px]'>
                                <span className='text-gray-400 font-medium text-lg'>No movies found for "{search}"</span>
                            </div>
                        )
                    )}
                </ul>

                <PaginationControl
                    page={page}
                    totalPages={totalPages}
                    hasNextPage={hasNextPage}
                    hasPrevPage={hasPrevPage}
                    onPageChange={onPageChange}
                />
            </div>
        </>
    )
}

export default GhibliCard
