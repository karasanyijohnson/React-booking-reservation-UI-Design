import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await Axios.get(url);
                setData(res.data)
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [url])
// CALL ANOTHER FUNCTION WHEN YOU WANT TO REFETCH
    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await Axios.get(url);
            setData(res.data)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }
    return {data,loading,error,reFetch}
}

export default useFetch;

