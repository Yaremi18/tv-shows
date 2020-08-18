import { useEffect } from 'react'
import axios from 'axios'
import config from '../config.json'
import { useSelector, useDispatch } from 'react-redux'
import { loadGenres } from './../store/actions'

// This hook allows retrieve genres only once to avoid
// make unnecessary requests.

// Genres are saved with Redux State.
const useGenres = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector((state) => state.app)

    useEffect(() => {
        const updateGenres = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${config.apiKey}&language=en-US`)
            if (result.status !== 200) return
            dispatch(loadGenres(result.data?.genres || []))

        };

        // If genres already have items is not necessary load them again.
        if (genres.length) return
        updateGenres()
    }, [genres, dispatch])

    return genres
}

export default useGenres