import { LOAD_GENRES, LOAD_SHOW_DETAIL } from './constants'

const initialState = {
    genres: [],
    showDetails: {},
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_GENRES: {
            return {
                ...state,
                genres: action.payload,
            }
        }
        case LOAD_SHOW_DETAIL: {
            const { showId, showDetail } = action.payload
            return {
                ...state,
                showDetails: {
                    ...state.showDetails,
                    [showId]: showDetail,
                },
            }
        }
        default:
            return state
    }
}