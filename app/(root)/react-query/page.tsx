import SideNav from '@/components/SideNav'
import React from 'react'
import DataHandling from '@/components/react-query/DataHandling';
import { codeDisplayDataReqctQuery, codeFilteredData, codePaginationReactQuery, codeSortedData, customQueryHooks, newDataFetching, sectionReactQuery } from '@/constants';
import InstallationReactQuery from '@/components/react-query/InstallationReactQuery';
import CodeSnippets from '@/components/CodeSnippets';
import CodeTag from '@/components/CodeTag';

const page = () => {
    return (
        <main className='flex flex-col items-center justify-center w-full wrapper relative'>
            <div className="flex items-start gap-4 w-full">
                <SideNav sectionItem={sectionReactQuery} />

                <div className="flex flex-col items-center w-full justify-center max-md:w-full">
                    <section className="w-full md:max-w-[740px] flex items-center flex-col pt-24" id="started">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                            Get Started
                        </h1>

                        <InstallationReactQuery />
                    </section>

                    <section className="w-full md:max-w-[740px] flex items-center flex-col pt-24" id="rollkan">
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
                            This custom hook uses the fetchLaunches function and React Query's useQuery to manage data fetching, caching, and errors. The useQuery hook takes a query key and a function that fetches the data. The query key is used to identify the query in the cache and to refetch the data when needed. The fetchLaunches function fetches the data from the SpaceX API and returns the response. The useQuery hook handles the loading, error, and data states and provides a set of functions to refetch the data, invalidate the cache, and more.
                        </span>
                    </section>

                    <section className="w-full md:max-w-[740px] flex items-center flex-col pt-24" id="dataHandling">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center">
                            Data Handling
                        </h1>
                        <div className='flex flex-col gap-2 w-full mt-6'>
                            <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                                Display data
                            </h2>
                            <CodeSnippets code={codeDisplayDataReqctQuery} />
                            <span className="break-words mt-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                                In this component, <CodeTag>DataHandling</CodeTag>, I'm using a custom hook called useLaunches to fetch data about launches. This hook leverages React Query, which helps manage server state and automatically handles caching, background updates, and synchronization with the server.
                            </span>
                            <span className="break-words mt-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                                This structure provides a smooth and efficient way to fetch and display data while handling loading states gracefully.
                            </span>
                        </div>

                        <div className='flex flex-col gap-2 w-full mt-6'>
                            <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                                Filtered Data
                            </h2>
                            <CodeSnippets code={codeFilteredData} />
                            <span className="break-words mt-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                                I'm handling data filtering on the frontend because I don't have direct access to an API endpoint for filtering. The <CodeTag>useLaunches</CodeTag> hook fetches all the launch data, and I use local states to manage the filters. The <CodeTag>useMemo</CodeTag> hook optimizes the filtering process by recalculating the filtered data only when specific dependencies change, like <CodeTag>query</CodeTag>, <CodeTag>status</CodeTag>, <CodeTag>date</CodeTag>, or <CodeTag>launches</CodeTag>. The filtering logic itself is straightforward: it first filters launches based on the <CodeTag>query</CodeTag> entered, then checks for the selected <CodeTag>status</CodeTag> (whether the launch was successful, failed, or unknown), and finally filters by the date if one is specified.
                            </span>
                            <span className="break-words mt-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                                This way, the component allows users to interactively filter the data without unnecessary re-renders, providing a smooth experience even without server-side filtering.
                            </span>
                        </div>

                        <div className='flex flex-col gap-2 w-full mt-6'>
                            <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                                Sorted Data
                            </h2>
                            <CodeSnippets code={codeSortedData} />
                            <span className="break-words mt-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                                I'm adding sorting functionality to organize the filtered launch data. I use a <CodeTag>sort</CodeTag> state to store the selected sorting order, whether by name or date in ascending or descending order. By using <CodeTag>useMemo</CodeTag>, I ensure that the sorting operation only recalculates when <CodeTag>filteredData</CodeTag> or <CodeTag>sort</CodeTag> changes, which improves performance by avoiding unnecessary re-sorting on every render. The <CodeTag>sortedData</CodeTag> array is derived from <CodeTag>filteredData</CodeTag> and is sorted according to the selected <CodeTag>sort</CodeTag> option. This structure lets me dynamically sort the data based on user selection, providing a responsive and efficient way to present the data in the desired order without impacting load times.
                            </span>
                        </div>

                        <div className='flex flex-col gap-2 w-full mt-6'>
                            <h2 className='text-[16px] font-semibold text-gray-300 md:text-[18px] -mb-10'>
                                Pagination
                            </h2>
                            <CodeSnippets code={codePaginationReactQuery} />
                            <span className="break-words mt-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                                I'm implementing pagination to manage the display of launch data in smaller, manageable chunks. I set a fixed <CodeTag>itemsPerPage</CodeTag> value, which determines how many items are shown per page. Using the <CodeTag>page</CodeTag> state, I track the current page and update it through the <CodeTag>pageChangeHandler</CodeTag> function, allowing the user to navigate between pages.
                            </span>
                            <span className="break-words mt-3 text-justify text-gray-300 max-md:text-sm tracking-wide">
                                The <CodeTag>paginatedData</CodeTag> variable is created with <CodeTag>useMemo</CodeTag> to optimize performance, recalculating only when <CodeTag>sortedData</CodeTag> or <CodeTag>page</CodeTag> changes. It slices <CodeTag>sortedData</CodeTag> to retrieve only the items for the current page. The <CodeTag>hasPrevPage</CodeTag> and <CodeTag>hasNextPage</CodeTag> variables are helpful for controlling the visibility of pagination controls, ensuring users can only navigate to valid pages. This setup provides a smooth user experience by displaying data in a paginated format, keeping the interface responsive and organized, even with large datasets.
                            </span>
                        </div>
                    </section>

                    <section className="w-full md:max-w-[740px] flex items-center flex-col pt-[70px] pb-10" id="result">
                        <h1 className="text-[24px] md:text-[42px] font-bold text-center mt-6 mb-2">
                            Here's the Result
                        </h1>
                        <DataHandling />

                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            Using <CodeTag>useMemo</CodeTag> for filtering, sorting, and pagination is ideal here because it optimizes performance by caching the results and recalculating only when necessary. Unlike <CodeTag>useEffect</CodeTag>, which is designed for handling side effects and often requires additional state to store results, <CodeTag>useMemo</CodeTag> provides a cleaner, more declarative approach. This keeps the code efficient by avoiding unnecessary re-renders and reducing the overhead of repeated calculations, especially when working with larger datasets. Overall, <CodeTag>useMemo</CodeTag> helps make the component more responsive and maintainable, handling these data operations smoothly without introducing extra complexity.
                        </span>
                        <span className="break-words mt-6 text-justify text-gray-300 max-md:text-sm tracking-wide">
                            Using axios alone handles requests well, but combining it with React Query creates a more efficient data-fetching system. React Query adds automatic caching, refetching, and background updates, improving performance and minimizing redundant requests. This approach enhances user experience with features like optimistic updates and easy access to loading and error states, making the app feel faster and more reliable.
                        </span>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default page
