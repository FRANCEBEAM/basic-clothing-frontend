import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await res.json()
                setData(data)

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [url])

    return { data, error, loading }

}

export default useFetchData