import AdditionalFeatures from "@/components/AdditionalFeatures";
import CodeSnippets from "@/components/CodeSnippets";
import FetchDataEditor from "@/components/FetchDataEditor";
import Filtering from "@/components/Filtering";
import HeroSection from "@/components/HeroSection";
import LaunchData from "@/components/LaunchData";
import PaginationComponent from "@/components/PaginationComponent";
import SideNav from "@/components/SideNav";
import Sorting from "@/components/Sorting";
import Todolist from "@/components/Todolist";
import { Button } from "@/components/ui/button";
import { codeDisplayData, codeFiltering, codePagination, codePaginationControl, codeSearchFunction, codeSorting } from "@/constants";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full wrapper">
            <HeroSection />

            <div className="flex items-start gap-4 w-full">
                <SideNav />

                <div className="flex flex-col items-center w-full justify-center max-md:w-full">
                    <section className="w-full flex flex-col items-center justify-center md:min-h-screen gap-2 pt-10 max-md:pt-24" id="started">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                            Todo list
                        </h1>
                        <Todolist />
                        <Button className='bg-primary rounded-[12px] w-max h-[40px] md:h-[54px] mt-4' asChild>
                            <Link href="#rollkan" className="">
                                <span className="text-[20px] font-semibold">Let's Roll</span>
                            </Link>
                        </Button>
                    </section>

                    <section className="w-full flex flex-col items-center justify-center md:h-screen gap-2 pt-10 max-md:pt-24" id="rollkan">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                            Fetch Data
                        </h1>
                        <FetchDataEditor />
                        <Button className='bg-primary rounded-[12px] w-max h-[40px] md:h-[54px] mt-4' asChild>
                            <Link href="#display" className="">
                                <span className="text-[20px] font-semibold">Display kan</span>
                            </Link>
                        </Button>
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="display">
                        <div className="w-full flex justify-between">
                            <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                                Display Data
                            </h1>
                            <Button className='bg-primary rounded-[12px] w-max mt-4 my-auto h-[40px] md:h-[45px]' asChild>
                                <Link href="#filtering" className="">
                                    <span className="text-[20px] font-semibold">Filter kan</span>
                                </Link>
                            </Button>
                        </div>
                        <LaunchData />

                        <CodeSnippets code={codeDisplayData} />
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="filtering">
                        <div className="w-full flex justify-between">
                            <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                                Filtering Data
                            </h1>
                            <Button className='bg-primary rounded-[12px] w-max mt-4 my-auto h-[40px] md:h-[45px]' asChild>
                                <Link href="#sorting" className="">
                                    <span className="text-[20px] font-semibold">Sorting kan</span>
                                </Link>
                            </Button>
                        </div>
                        <Filtering />

                        <CodeSnippets code={codeFiltering} />
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="sorting">
                        <div className="w-full flex justify-between">
                            <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                                Sorting Data
                            </h1>
                            <Button className='bg-primary rounded-[12px] w-max mt-4 my-auto h-[40px] md:h-[45px]' asChild>
                                <Link href="#pagination" className="">
                                    <span className="text-[20px] font-semibold">Pagination</span>
                                </Link>
                            </Button>
                        </div>
                        <Sorting />

                        <CodeSnippets code={codeSorting} />
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center justify-center flex-col pt-24" id="pagination">
                        <div className="w-full flex justify-between">
                            <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                                Pagination
                            </h1>
                            <Button className='bg-primary rounded-[12px] w-max mt-4 my-auto h-[40px] md:h-[45px]' asChild>
                                <Link href="#search" className="">
                                    <span className="text-[20px] font-semibold">Search kan</span>
                                </Link>
                            </Button>
                        </div>
                        <PaginationComponent />

                        <CodeSnippets code={codePagination} />
                        <CodeSnippets code={codePaginationControl} />
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24 pb-20" id="search">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                            Search Function
                        </h1>
                        <AdditionalFeatures />

                        <CodeSnippets code={codeSearchFunction} />
                    </section>
                </div>

            </div>
        </main>
    );
}
