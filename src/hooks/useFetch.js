import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error('Something went wrong')
                }
                const data = await res.json()
                setData(data)

            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData();
    },[url])

    return { data, error, isLoading }
}

export default useFetch