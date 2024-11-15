import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `"use server"

import { launchProps, rocketName } from "@/types"
import axios from "axios"

export const fetchData = async (): Promise<launchProps[]> => {
    try {
        //Fetch all launches
        const launchesRes = await axios.get<launchProps[]>("API")
        const launchData = launchesRes.data;

        //Fetch rocket names
        const launchesWithRocketNames = await Promise.all(
            launchData.map(async (data) => {
                try {
                    const rocketRes = await axios.get<rocketName>('API/{data.rocket}')
                    return {
                    ...data,
                    rocketName: rocketRes.data.name,
                    company: rocketRes.data.company,
                    country: rocketRes.data.country
                    }
                } catch (error) {
                    console.error("Error fetching data", error)
                    return {
                    ...data,
                    rocketName: "Unknown",
                    company: "Unknown",
                    country: "Unknown"
                    }
                }
            })
        )
        return launchesWithRocketNames
    } catch (error) {
        console.error("Error fetching data", error)

        return []
    }
}

`;

const FetchDataEditor = () => {

    return (
        <ScrollArea className="h-[450px] md:max-w-3xl w-full overflow-auto">
            <SyntaxHighlighter language="typescript" style={vscDarkPlus} customStyle={{ minWidth: "100%", borderRadius: '12px', scrollbarWidth: 'none' }}>
                {codeString}
            </SyntaxHighlighter>
        </ScrollArea>
    )
}

export default FetchDataEditor
