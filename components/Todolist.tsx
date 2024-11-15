import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `// Fetch Data
// Fetch data for recent SpaceX launches from https://api.spacexdata.com/v4/launches. This API provides a wealth of data on each launch, including the mission name, launch date, rocket name, and success status.

// // Display Data
// Render the launches on a LaunchesPage component. Each launch should be displayed in its own component (LaunchCard) with at least the following details:
    // Mission name
    // Rocket name
    // Launch date
    // Launch success status

// // Filtering
// Include a filter by launch success (successful or failed launches).
// Add a date range filter so the user can filter launches within a specific timeframe.

// // Sorting
// Add a sorting option to order the launches by launch date (ascending and descending).
// Optionally, allow sorting by mission name (alphabetically).

// // Pagination (Bonus):
// Implement pagination to make the app scalable as the list of launches grows. Aim for 10 items per page.

// Error Handling and Loading States:
// Display a loading spinner or skeleton while data is being fetched.
// Show an error message if the data fails to load.
`

const Todolist = () => {
    return (
        <ScrollArea className="h-[450px] md:max-w-3xl w-full overflow-auto">
            <SyntaxHighlighter language="typescript" style={vscDarkPlus} customStyle={{ minWidth: "100%", borderRadius: '12px', scrollbarWidth: 'none' }}>
                {codeString}
            </SyntaxHighlighter>
        </ScrollArea>
    )
}

export default Todolist
