import { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../config.json'

const useShows = (category, page, reset) => {
    const [isLoading, setIsLoading] = useState(true)
    const [shows, setShows] = useState({
        popular: [],
        topRated: [],
        airingNow: [],
    })

    useEffect(() => {
        const loadShows = async () => {
            setIsLoading(true)
            let result
            const baseUrl = 'https://api.themoviedb.org/3/tv/'
            switch (category) {
                case 'popular':
                    result = await axios.get(`${baseUrl}popular?api_key=${config.apiKey}&language=en-US&page=${page}`)
                    break
                case 'topRated':
                    result = await axios.get(`${baseUrl}top_rated?api_key=${config.apiKey}&language=en-US&page=${page}`)
                    break
                case 'airingNow': 
                    result = await axios.get(`${baseUrl}airing_today?api_key=${config.apiKey}&language=en-US&page=${page}`)
                    break
                default:
                    break
            }

            if (result?.status === 200) {
                setShows(prev => {
                    const newData = result?.data?.results || []

                    // if (reset){
                    //     return {
                    //         ...prev,
                    //         [category]: newData,
                    //     }
                    // }

                    return {
                        ...prev,
                        [category]: [
                            ...prev[category],
                            ...newData,
                        ]
                    }
                })
            }
            setIsLoading(false)
        }

        loadShows()
        
    }, [page, category])

    console.log(shows)

    return { shows: shows[category], isLoading }
}

export default useShows