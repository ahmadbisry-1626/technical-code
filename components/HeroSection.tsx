import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'

const HeroSection = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-6 min-h-screen" id="hero">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-[52px] font-bold text-center">
                    Coding Concepts Made Practical
                </h1>
                <p className="text-[18px] md:text-[20px] text-center max-w-4xl">
                    Engage with practical coding tasks to improve data processing and management skills
                </p>
            </div>
            <div className='flex items-center gap-3 mt-2'>
                <Button className='bg-primary rounded-[12px] w-max h-[54px]' asChild>
                    <Link href="#started" className="">
                        <span className="text-[20px] font-semibold">Get Started</span>
                    </Link>
                </Button>
                <Button className='bg-transparent border-2 border-white rounded-[12px] h-[54px] hover:bg-white hover:text-black' asChild>
                    <Link href="https://github.com/ahmadbisry-1626/technical-code" className="flex items-center gap-1" target='blank'>
                        <span className="text-[20px] font-semibold">Documentation</span>
                        <IoIosArrowRoundForward className='!size-6 -rotate-[30deg]'/>
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default HeroSection
