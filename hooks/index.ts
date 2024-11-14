import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://api.spacexdata.com/v4',
    timeout: 5000
})
