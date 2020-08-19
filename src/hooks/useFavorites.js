import { useCallback } from 'react'
import axios from 'axios'
import config from '../config.json'

const useFavorites = () => {
    return useCallback(async (username, password, showId) => {
        try {
            let sessionId = localStorage.getItem('sessionId-themoviedb')
            const baseUrl = 'https://api.themoviedb.org/3'
            if (!sessionId) {
                const { data: dataToken } = await axios.get(`${baseUrl}/authentication/token/new?api_key=${config.apiKey}`)

                if (!dataToken.success) {
                    throw new Error(dataToken.status_message)
                }

                const { data: dataSessionL } = await axios.post(`${baseUrl}/authentication/token/validate_with_login?api_key=${config.apiKey}`, {
                    request_token: dataToken.request_token,
                    username,
                    password,
                })

                if (!dataSessionL.success) {
                    throw new Error(dataSessionL.status_message)
                }

                const { data: dataSession } = await axios.post(`${baseUrl}/authentication/session/new?api_key=${config.apiKey}`, {
                    request_token: dataSessionL.request_token,
                })
                if (!dataSession.success) {
                    throw new Error(dataSession.status_message)
                }

                sessionId = dataSession.session_id
                localStorage.setItem('sessionId-themoviedb', dataSession.session_id)
            }
            

            const { data: dataCreateFavorite } = await axios.post(
                `${baseUrl}/account/{account_id}/favorite?api_key=${config.apiKey}&session_id=${sessionId}`,
                { media_type: 'tv', media_id: showId, favorite: true }
            )

            if (!dataCreateFavorite.success) {
                throw new Error(dataCreateFavorite.status_message)
            }
        } catch (e) {
            throw new Error(e.message)
        }
    }, [])
}

export default useFavorites