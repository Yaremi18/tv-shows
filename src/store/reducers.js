import { LOAD_GENRES } from './constants'

const initialState = {
    genres: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_GENRES: {
            console.log(state, action)
            return {
                genres: action.payload,
            }
        }
        default:
            return state
    }
}