import { fetchLaunches } from "@/lib/actions"
import { launchProps } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const useLaunches = () => {
    return useQuery<launchProps[], Error>(
        {
            queryKey: ['launches'],
            queryFn: fetchLaunches,
            staleTime: 5 * 60 * 1000,
            retry: 2,
        }
    )
}
