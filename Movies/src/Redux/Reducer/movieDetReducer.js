import { UPDATE_FAVORITE_DETAILS } from '../Actions/moviesActionsDet'

const initialState = {}


export default function favDetailsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case UPDATE_FAVORITE_DETAILS:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }
}