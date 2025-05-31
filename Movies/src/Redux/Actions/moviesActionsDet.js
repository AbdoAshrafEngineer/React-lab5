import axios from "axios";
export const UPDATE_FAVORITE_DETAILS = 'UPDATE_FAVORITE_DETAILS';


export const getFavoriteDetails = (id, lang) => (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9b743af1d4fde1d65af33c40dcccce87&language=${lang}`)
        .then((res) => dispatch({
                type: UPDATE_FAVORITE_DETAILS,
                payload: res.data
            }))
        .catch(err => console.log(err))
}