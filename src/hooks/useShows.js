import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

const useShows = (category, page) => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        const loadShows = async () => {
            setShows([])
            let result
            const baseUrl = 'https://api.themoviedb.org/3/tv/'
            switch (category) {
                case 'popular':
                    result = await axios.get(`${baseUrl}popular?api_key=${config.apiKey}&language=en-US&page=${page}`)
                    break;
                case 'topRated':
                    result = await axios.get(`${baseUrl}top_rated?api_key=${config.apiKey}&language=en-US&page=${page}`)
                    break;
                case 'airingNow': 
                    result = await axios.get(`${baseUrl}airing_today?api_key=${config.apiKey}&language=en-US&page=${page}`)
                    break;
                default:
                    break;
            };
            
            console.log(result)
            if (result.status !== 200) return;

            setShows(result.data?.results || []);
        }

        loadShows();
        
    }, [page, category]);

    return shows
}

export default useShows