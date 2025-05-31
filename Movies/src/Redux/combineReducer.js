import { combineReducers } from "redux";
import rootReducer from "./Reducer/favReducer";
import moviesReducer from "./Reducer/movieReducer";
import favDetailsReducer from "./Reducer/movieDetReducer";

export default combineReducers({
    fav: rootReducer,
    lmovies: moviesReducer,
    favDetails: favDetailsReducer
})
