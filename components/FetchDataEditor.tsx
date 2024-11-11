import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import McOsCenah from './McOsCenah'

const FetchDataEditor = () => {
    return (
        <ScrollArea className="h-[400px]">
            <div className="w-full flex flex-col gap-4 items-center justify-center h-full">
                <div className="p-4 bg-black-mate rounded-[12px] relative max-w-3xl  h-full">
                    <McOsCenah />
                    <div className="flex flex-col gap-2 mt-3">
                        <span className="text-white font-medium">
                            <span className='text-blue-600'>
                                const</span> <span className='text-blue-500'>hadeh</span> = <span className='text-orange-300'>"Code editor lib gak ada yang support react 19 jirr. Males downgrade, pen make turbopack. Yahh gak iso liatin data fetching nya"
                            </span>
                        </span>
                        <span> <span className='text-cyan-400'>console</span>.<span className='text-yellow-200'>log</span><span className='text-purple-400'>(<span className='text-cyan-400'>hadeh</span>)</span></span>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default FetchDataEditor
