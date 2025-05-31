import { GET_MOVIES_LIST } from '../Actions/moviesActions'

const initialState = { 
    list: []
}

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES_LIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
        }
}

