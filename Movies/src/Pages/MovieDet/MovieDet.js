import axios from "axios";
import { useEffect, useState , useContext} from "react";
import { useParams } from "react-router-dom";
import MyCard from "../../components/MyCard";
import { languageContext } from "../../Context/changeLang";


//https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=1&language=en
function MovieDet()
{
    const id = useParams().id;
    const { myLang } = useContext(languageContext)
    const [MovieDet, setMovieDet] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=29cf44b93ca83bf48d9356395476f7ad&page=1&language=${myLang}`)
            // .then((res) => console.log(res))
            .then((res) => setMovieDet(res.data))
            .catch((err) => console.log(err))
        
    })


    return (
        <div>
            <h3 className="text-center text-danger"> Movie Detials </h3>
            <MyCard img={`https://image.tmdb.org/t/p/w500/${MovieDet.backdrop_path}`}
                name={MovieDet.title}
                info={MovieDet.overview}
            />
        </div>
    )
}

export default MovieDet;