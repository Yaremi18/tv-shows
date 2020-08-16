import { LOAD_GENRES } from './constants'

export const loadGenres = (genres) => ({
    type: LOAD_GENRES,
    payload: genres,
})