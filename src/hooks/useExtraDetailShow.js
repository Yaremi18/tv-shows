import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import config from '../config.json'
import { loadShowDetail } from '../store/actions'

// This hook make a request once if previously the user was open
// the show detail. The detail of each show opened is saved on redux state.
const  useExtraShowDetail = (showId) => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const { showDetails } = useSelector((state) => state.app)

    useEffect(() => {
        const getShowDuration = async () => {
            setIsLoading(true)
            const result = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${config.apiKey}&language=en-US`)
            if (result.status === 200) {
                dispatch(loadShowDetail(showId, result.data))
            }
            setIsLoading(false)
        }

        if (showDetails[showId]) {
            setIsLoading(false)
            return
        }

        getShowDuration()

    }, [showId, dispatch, showDetails])

    return { showDetail: showDetails[showId] || {}, isLoading }
}

export default useExtraShowDetail