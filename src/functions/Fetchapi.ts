import { useState } from "react";
import { TPostApiResponse } from "../types/public.types";
import axios, { AxiosError, AxiosRequestConfig } from "axios"
const BackEndURL = "http://localhost:3700"
export const useApiPost = (): TPostApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const postAPIData = async (path: string, body: object = {}, options: AxiosRequestConfig = {}): Promise<void> => {
        setLoading(true)
        try {
            const axiosResponse = await axios.post(`${BackEndURL}${path}`, body, options)
            setStatusText(axiosResponse.statusText);
            setData(axiosResponse.data);
            setStatus(axiosResponse.status || data.status)
        } catch (error: AxiosError | any) {   
            setStatus(error?.response?.data?.status || 500);
            setError(error?.response?.data);
        }
        setLoading(false)
    }

    return {
        postAPIData,
        status,
        statusText,
        data,
        error,
        loading
    }
}