import { ADD_FAVORITE, REMOVE_FAVORITE } from '../Actions/actions'; //labels to use in switch

const initialState = {
    favorites: [],
    favoritesCount: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
        if (state.favorites.includes(action.payload)) {
            return state;
        }
        return {
            ...state,
            favorites: [...state.favorites, action.payload],
            favoritesCount: state.favoritesCount + 1
        };
        
        case REMOVE_FAVORITE:
        const exists = state.favorites.includes(action.payload);
        if (!exists) return state; // Prevent negative count
        
        return {
            ...state,
            favorites: state.favorites.filter(movie_id => movie_id !== action.payload),
            favoritesCount: Math.max(0, state.favoritesCount - 1) // Ensure non-negative
        };
        
        default:
        return state;
    }
};

export default rootReducer;