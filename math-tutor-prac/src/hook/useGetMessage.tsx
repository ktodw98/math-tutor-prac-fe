import axios from "axios";
import { useState, useEffect } from 'react';

interface ApiResponse {
    message: string;
}

function useGetMessage ( url:string ) {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!url) {
            setLoading(false);
            return;
        }

        setLoading(true);
        axios.get<ApiResponse>(url)
            .then((res) => {
                setApiResponse(res.data)
                setError(null);
            })
            .catch(err => {
                console.log("Error fetching data: ", err);
                setError(err.message || "Failed to fetch data");
                setApiResponse(null);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [url]);

    return { data: apiResponse, loading, error };
}

export default useGetMessage