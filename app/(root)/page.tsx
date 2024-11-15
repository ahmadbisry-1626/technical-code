import AccordionComponent from "@/components/AccordionComponent";
import AdditionalFeatures from "@/components/AdditionalFeatures";
import CodeSnippets from "@/components/CodeSnippets";
import CodeTag from "@/components/CodeTag";
import FetchDataEditor from "@/components/FetchDataEditor";
import Filtering from "@/components/Filtering";
import HeroSection from "@/components/HeroSection";
import LaunchData from "@/components/LaunchData";
import PaginationComponent from "@/components/PaginationComponent";
import SideNav from "@/components/SideNav";
import Sorting from "@/components/Sorting";
import Todolist from "@/components/Todolist";
import { Button } from "@/components/ui/button";
import { codeDisplayData, codeFiltering, codePagination, codePaginationControl, codeSearchFunction, codeSorting, sectionAxios } from "@/constants";
import Link from "next/link";

export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full wrapper relative">
            <HeroSection />

            <div className="flex items-start gap-4 w-full">
                <SideNav sectionItem={sectionAxios} />

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
                        <div className="w-full flex justify-between max-md:mb-3">
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
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            To display the launch data, I structured the component to prioritize efficient data handling and a smooth user experience. I use two separate state variables—one for the data itself <CodeTag>launch</CodeTag> and another for loading status <CodeTag>loading</CodeTag> to manage rendering only when necessary, reducing unnecessary re-renders. By placing the data-fetching function inside <CodeTag>useEffect</CodeTag> and calling it only once with an empty dependency array, the component fetches data only on mount, minimizing API calls. I also manage <CodeTag>loading</CodeTag> state by toggling loading to true before the fetch and false afterward, allowing users to see a clear loading indicator as data is retrieved. This approach efficiently manages state, optimizes data fetching, and provides a responsive UI.
                        </span>
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="filtering">
                        <div className="w-full flex justify-between max-md:mb-3">
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
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            For filtering the data, I structured the component to be highly responsive and focused on efficient filtering based on the user's inputs. I maintain states for <CodeTag>statusFilter</CodeTag>, <CodeTag>date</CodeTag>, and <CodeTag>filteredLaunches</CodeTag>, each allowing flexible and intuitive filtering options. The <CodeTag>useEffect</CodeTag> hook monitors changes in <CodeTag>statusFilter</CodeTag>, <CodeTag>launch</CodeTag>, and <CodeTag>date</CodeTag>, which triggers the filtering process only when these values update. This keeps the component efficient, applying filters in real time without extra rendering cycles.
                        </span>
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            To filter by status, I use a conditional check on <CodeTag>statusFilter</CodeTag> to ensure only launches matching the selected success status (or null for unknowns) are included. Then, a second filter checks for a specific date match if a date has been selected. By combining these two filter steps, I can manage complex filtering conditions without overwhelming the component's performance. The <CodeTag>filteredLaunches</CodeTag> state is updated only when the data or filters change, making the UI responsive and able to scale smoothly with different data sizes.
                        </span>
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24" id="sorting">
                        <div className="w-full flex justify-between max-md:mb-3">
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
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            In this sorting component, I use <CodeTag>useMemo</CodeTag> instead of <CodeTag>useEffect</CodeTag> to optimize performance by ensuring that sorting only recalculates when necessary. <CodeTag>useMemo</CodeTag> caches the sorted result based on its dependencies, meaning it only recalculates when either sorted or <CodeTag>filteredLaunches</CodeTag> changes. This makes it highly efficient, as the sorted data is stored in memory and avoids re-sorting on every render, which is ideal for large data sets where frequent re-sorting could hurt performance.
                        </span>
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            Using <CodeTag>useEffect</CodeTag> here would be less efficient because it would trigger the sorting as a side effect and require an additional state to store the sorted result, potentially leading to extra re-renders. With useMemo, the sorted data is computed and returned directly within the component, allowing it to render the sorted data without additional state management. This approach keeps the component fast and minimizes unnecessary calculations, ensuring a smooth user experience even with frequent changes in sorting order.
                        </span>
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center justify-center flex-col pt-24" id="pagination">
                        <div className="w-full flex justify-between max-md:mb-3">
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
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            In <CodeTag>PaginationComponent</CodeTag>, I handle the main pagination logic, breaking down data into manageable pages. First, I define <CodeTag>itemsPerPage</CodeTag> to limit the number of items shown per page and calculate <CodeTag>totalPages</CodeTag> to know the full range of available pages based on the length of <CodeTag>sortedData</CodeTag>. The <CodeTag>paginatedData</CodeTag> is computed using <CodeTag>useMemo</CodeTag>, slicing <CodeTag>sortedData</CodeTag> based on the current page and <CodeTag>itemsPerPage</CodeTag> so that the correct subset of items is rendered for each page.
                        </span>
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            By setting the <CodeTag>page</CodeTag> state, I can track the user's current page, and <CodeTag>onPageChange</CodeTag> lets me update this state easily when the user clicks to navigate. I also define <CodeTag>hasPrevPage</CodeTag> and <CodeTag>hasNextPage</CodeTag> to check if pagination controls should enable or disable for the previous or next page, respectively. This component then renders the correct page of data <CodeTag>paginatedData.map</CodeTag> along with the <CodeTag>PaginationControl</CodeTag> component, which manages the actual pagination buttons.
                        </span>

                        <CodeSnippets code={codePaginationControl} />
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            <CodeTag>PaginationControl</CodeTag> is a separate component focused on the navigation controls themselves, keeping the UI for pagination clean and modular. It renders buttons for moving to the previous or next page, using PaginationPrevious and PaginationNext elements. Each button checks if it should be active or not-<CodeTag>hasPrevPage</CodeTag> and <CodeTag>hasNextPage</CodeTag> determine if there's a previous or next page, respectively.
                        </span>
                    </section>

                    <section className="md:min-h-screen w-full md:max-w-[740px] flex items-center flex-col pt-24 md:pb-20" id="search">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center max-md:mb-3">
                            Search Function
                        </h1>
                        <AdditionalFeatures />

                        <CodeSnippets code={codeSearchFunction} />
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            The search feature uses a <CodeTag>query</CodeTag> state to store the user's input. Each time <CodeTag>query</CodeTag> updates, the <CodeTag>useEffect</CodeTag> re-runs, filtering through the <CodeTag>launch</CodeTag> data along with the other filters (such as date and status). This way, the search filters dynamically based on all conditions, giving the user a refined search experience.
                        </span>
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            By converting both <CodeTag>query</CodeTag> and each launch's name to lowercase, I ensure the search is case-insensitive, making it user-friendly and flexible. When the user types into the search Input, the component immediately updates the filteredLaunches state based on the new <CodeTag>query</CodeTag>, providing real-time search results. This setup keeps the code efficient, updating only when necessary, and makes the component intuitive, responsive, and able to handle complex search and filter combinations.
                        </span>

                        <div className="mt-6 w-full items-start">
                            <Link href="/react-query" className="text-blue-500 hover:underline">
                                Try data fetching with React Query
                            </Link>
                        </div>
                    </section>
                    <AccordionComponent />
                </div>

            </div>
        </main>
    );
}
