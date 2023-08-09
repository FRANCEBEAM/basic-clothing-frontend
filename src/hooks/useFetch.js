import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then( res => {
                if (!res.ok) {
                    throw Error('Couldn\'t fetch data for that resources')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err.message)
                setError(err.message)
            })
    }, [url])

    return { data, error }
}

export default useFetch