"use server"

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
