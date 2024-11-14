"use server"

import { apiClient } from "@/hooks"
import { launchProps, rocketName } from "@/types"
import axios from "axios"

export const fetchData = async (): Promise<launchProps[]> => {
    try {
        //Fetch all launches
        const launchesRes = await axios.get<launchProps[]>("https://api.spacexdata.com/v4/launches")
        const launchData = launchesRes.data;

        //Fetch rocket names
        const launchesWithRocketNames = await Promise.all(
            launchData.map(async (data) => {
                try {
                    const rocketRes = await axios.get<rocketName>(`https://api.spacexdata.com/v4/rockets/${data.rocket}`)

                    return { ...data, rocketName: rocketRes.data.name, company: rocketRes.data.company, country: rocketRes.data.country }
                } catch (error) {
                    console.error("Error fetching data", error)
                    return { ...data, rocketName: "Unknown", company: "Unknown", country: "Unknown" }
                }
            })
        )
        return launchesWithRocketNames
    } catch (error) {
        console.error("Error fetching data", error)

        return []
    }
}

export const fetchLaunches = async (): Promise<launchProps[]> => {
    const launchResponse = await apiClient.get<launchProps[]>(`/launches`)
    const launches = launchResponse.data

    const launchWithRocketNames = await Promise.all(
        launches.map(async (data) => {
            try {
                const rocketResponse = await apiClient.get<rocketName>(`/rockets/${data.rocket}`)
                return {
                    ...data,
                    rocketName: rocketResponse.data.name,
                    company: rocketResponse.data.company,
                    country: rocketResponse.data.country
                }
            } catch (error) {
                return { ...data, rocketName: "Unknown", company: "Unknown", country: "Unknown" }
            }
        })
    )

    return launchWithRocketNames
}
