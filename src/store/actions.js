import { LOAD_GENRES, LOAD_SHOW_DETAIL } from './constants'

export const loadGenres = (genres) => ({
    type: LOAD_GENRES,
    payload: genres,
})

export const loadShowDetail = (showId, showDetail) => ({
    type: LOAD_SHOW_DETAIL,
    payload: { showId, showDetail },
})