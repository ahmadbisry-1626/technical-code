import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { ScrollArea } from './ui/scroll-area'
import McOsCenah from './McOsCenah'

const Todolist = () => {
    return (
        <ScrollArea className="h-[400px] w-full">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <div className="p-4 bg-black-mate rounded-[12px] relative max-w-3xl">
                    <McOsCenah />
                    <div className="flex flex-col gap-2 mt-3">
                        <div className="flex flex-col">
                            <span className="text-green-700 font-medium">// Fetch Data</span>
                            <p className="text-green-800">Fetch data for recent SpaceX launches from https://api.spacexdata.com/v4/launches. This API provides a wealth of data on each launch, including the mission name, launch date, rocket name, and success status.</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-green-700 font-medium">// Display Data</span>
                            <p className="text-green-800">
                                Render the launches on a LaunchesPage component. Each launch should be displayed in its own component (LaunchCard) with at least the following details:
                            </p>
                            <div className="flex flex-col ml-4 mt-2">
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Mission name
                                </span>
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Rocket name
                                </span>
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Launch date
                                </span>
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Launch success status
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-green-700 font-medium">// Filtering</span>
                            <div className="flex flex-col ml-4 mt-2">
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Include a filter by launch success (successful or failed launches).
                                </span>
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Add a date range filter so the user can filter launches within a specific timeframe.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-green-700 font-medium">// Sorting</span>
                            <div className="flex flex-col ml-4 mt-2">
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Add a sorting option to order the launches by launch date (ascending and descending).
                                </span>
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Optionally, allow sorting by mission name (alphabetically).
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-green-700 font-medium">// Pagination (Bonus):</span>
                            <p className="text-green-800">
                                Implement pagination to make the app scalable as the list of launches grows. Aim for 10 items per page.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-green-700 font-medium">// Error Handling and Loading States:</span>
                            <div className="flex flex-col ml-4 mt-2">
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Display a loading spinner or skeleton while data is being fetched.

                                </span>
                                <span className="text-green-800 flex items-center gap-2">
                                    <FaCircle className="size-3" />
                                    Show an error message if the data fails to load.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default Todolist
