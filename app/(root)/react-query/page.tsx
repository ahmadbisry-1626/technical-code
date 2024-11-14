import SideNav from '@/components/SideNav'
import React from 'react'
import DataHandling from '@/components/react-query/DataHandling';
import { customQueryHooks, newDataFetching, sectionReactQuery } from '@/constants';
import InstallationReactQuery from '@/components/react-query/InstallationReactQuery';
import CodeSnippets from '@/components/CodeSnippets';

const page = () => {
    return (
        <main className='flex flex-col items-center justify-center w-full wrapper relative'>
            <div className="flex items-start gap-4 w-full">
                <SideNav sectionItem={sectionReactQuery} />

                <div className="flex flex-col items-center w-full justify-center max-md:w-full">
                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="started">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                            Get Started
                        </h1>

                        <InstallationReactQuery />
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="rollkan">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center -mb-3">
                            Data Fetching
                        </h1>

                        <CodeSnippets code={newDataFetching} />

                        <div className='flex flex-col gap-2 w-full mt-6'>
                            <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                                Custom react query hooks
                            </h2>
                            <CodeSnippets code={customQueryHooks} />
                        </div>

                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            This custom hook uses the fetchLaunches function and React Query's useQuery to manage data fetching, caching, and errors.
                        </span>
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="dataHandling">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center mb-3">
                            Data Handling
                        </h1>

                        <DataHandling />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default page
