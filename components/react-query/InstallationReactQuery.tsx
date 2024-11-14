import React from 'react'
import CodeSnippets from '../CodeSnippets'
import { codeProvider, installReactQuery, wrapperLayout } from '@/constants'

const InstallationReactQuery = () => {
    return (
        <>
            <div className='flex flex-col gap-2 w-full mt-6'>
                <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                    Install react query
                </h2>
                <CodeSnippets code={installReactQuery} />
            </div>

            <div className='flex flex-col gap-2 w-full'>
                <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                    Set up react query provider
                </h2>
                <CodeSnippets code={codeProvider} className='' />
            </div>

            <div className='flex flex-col gap-2 w-full mt-6'>
                <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                    Wrap layout with react query provider
                </h2>
                <CodeSnippets code={wrapperLayout} />
            </div>
            <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                The above code snippets are the basic setup for react query in NextJS application. You can add more configurations as per your requirements.
            </span>
        </>
    )
}

export default InstallationReactQuery
