import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Couldn\'t fetch data for that resources')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                console.log(data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
                setError(err.message)
            })
    }, [url])

    return { data, error, isLoading }
}

export default useFetch