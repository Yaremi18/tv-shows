import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import config from '../config.json'
import { loadShowDetail } from '../store/actions'

// This hook make a request once if previously the user was open
// the show detail. The detail of each show opened is saved on redux state.
const  useExtraShowDetail = (showId) => {
    const dispatch = useDispatch()
    const { showDetails } = useSelector((state) => state.app)

    useEffect(() => {
        const getShowDuration = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${config.apiKey}&language=en-US`)
            if (result.status !== 200) return

            dispatch(loadShowDetail(showId, result.data))
        }

        if (showDetails[showId]) return

        getShowDuration()

    }, [showId, dispatch, showDetails])

    return showDetails[showId]
}

export default useExtraShowDetail