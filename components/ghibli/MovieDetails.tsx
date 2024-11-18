"use client"

import { useGhibliById } from '@/hooks/queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Skeleton } from '../ui/skeleton'

const MovieDetails = ({ id, page }: { id: string, page: number }) => {
    const { data: movie, isLoading, isError } = useGhibliById(id)

    if (!movie) return null

    return (
        <section className="w-full flex flex-col pt-20 md:pt-24 gap-3 pb-10" id="movieDetails">
            <Link href={`/ghibli-api?page=${page}`} className='md:flex items-center gap-2 text-gray-400 hidden hover:text-primary transition w-max'>
                <IoIosArrowRoundBack className='size-5' />
                <span>Go back to Ghibli Studios</span>
            </Link>
            <h1 className="text-[24px] md:text-[42px] font-bold text-center md:block hidden">
                {movie.title}
            </h1>
            {isLoading ? (
                <div className='flex items-center gap-4 w-full md:h-[400px] h-[600px]'>
                    <Skeleton className='w-full h-full relative rounded-[12px] overflow-hidden md:block hidden bg-gray-400' />
                    <Skeleton className='w-full md:max-w-[300px] h-full relative rounded-[12px] overflow-hidden bg-gray-400' />
                </div>
            ) : (
                <div className='flex items-center gap-4 w-full h-[400px]'>
                    <div className='w-full h-full relative rounded-[12px] overflow-hidden md:block hidden'>
                        <Image src={movie.movie_banner} alt={movie.title} width={600} height={600} sizes='100vw' className='absolute w-full h-full object-cover' />
                    </div>
                    <div className='w-full md:max-w-[300px] max-w-[300px] h-[400px] relative rounded-[12px] overflow-hidden mx-auto'>
                        <Image src={movie.image} alt={movie.title} width={250} height={250} sizes='100vw' className='absolute w-full h-full object-cover max-md:object-center' />
                    </div>
                </div>
            )}


            <div className='flex flex-col gap-1'>
                <h1 className="text-[24px] md:text-[42px] font-bold text-center block md:hidden">
                    {movie.title}
                </h1>
                <p className='break-words mb-3 text-justify text-gray-300 max-md:text-[16px] tracking-wide'>
                    {movie.description}
                </p>
            </div>

            <h2 className='text-[16px] font-semibold text-gray-300 md:text-[20px] md:block hidden'>
                Movie Details
            </h2>
            <div className='flex flex-col items-start gap-4 w-full'>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2'>
                    <h2 className='text-primary text-[16px] md:text-[18px] font-semibold'>Original title</h2>
                    <p className='text-gray-300 text-[16px] font-medium'>{movie.original_title}</p>
                </div>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2'>
                    <h2 className='text-primary text-[16px] md:text-[18px] font-semibold'>Original title latin</h2>
                    <p className='text-gray-300 text-[16px] font-medium'>{movie.original_title_romanised}</p>
                </div>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2'>
                    <h2 className='text-primary text-[16px] md:text-[18px] font-semibold'>Director</h2>
                    <p className='text-gray-300 text-[16px] font-medium'>{movie.director}</p>
                </div>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2'>
                    <h2 className='text-primary text-[16px] md:text-[18px] font-semibold'>Producer</h2>
                    <p className='text-gray-300 text-[16px] font-medium'>{movie.producer}</p>
                </div>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2'>
                    <h2 className='text-primary text-[16px] md:text-[18px] font-semibold'>Release Date</h2>
                    <p className='text-gray-300 text-[16px] font-medium'>{movie.release_date}</p>
                </div>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2'>
                    <h2 className='text-primary text-[16px] md:text-[18px] font-semibold'>Ratin:</h2>
                    <p className='text-gray-300 text-[16px] font-medium'>{movie.rt_score} (Rotten Tomatoes)</p>
                </div>
                <div className='flex md:flex-row flex-col gap-1 md:gap-2'>
                    <h2 className='text-primary text-[16px] md:text-[18px] font-semibold'>Running time</h2>
                    <p className='text-gray-300 text-[16px] font-medium'>{movie.running_time} Minutes</p>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails
