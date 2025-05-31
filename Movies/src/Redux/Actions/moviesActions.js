import axios from "axios";
export const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
export const GET_MOVIES_DET = 'GET_MOVIES_DET';



export const getMovies = (lang) => (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=1&language=${lang}`)
        .then((res) => 
            dispatch({
                type: GET_MOVIES_LIST,
                payload: res.data.results
            })
    )
    .catch((err) => console.log(err))
}

