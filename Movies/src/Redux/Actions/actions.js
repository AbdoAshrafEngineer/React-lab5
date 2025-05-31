// Action types
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// Action creators
export const addFavorite = (id) => ({
    type: ADD_FAVORITE,
    payload: id
});

export const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    payload: id
});