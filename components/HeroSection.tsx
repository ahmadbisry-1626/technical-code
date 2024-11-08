import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-6 h-screen">
            <div className="flex flex-col gap-2">
                <h1 className="text-[52px] font-bold text-center">
                    Technical Code Interview
                </h1>
                <p className="text-[16px] md:text-[18px] text-center max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, earum error sed est labore nulla adipisci impedit cupiditate repudiandae tenetur?
                </p>
            </div>
            <Button className='bg-primary rounded-[12px] w-max h-[54px]' asChild>
                <Link href="#started" className="">
                    <span className="text-[20px] font-semibold">Get Started</span>
                </Link>
            </Button>
        </section>
    )
}

export default HeroSection
