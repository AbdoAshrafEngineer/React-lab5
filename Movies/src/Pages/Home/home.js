import { useContext, useEffect} from "react";
import MyCard from "../../components/MyCard";
import { useDispatch ,useSelector} from "react-redux"; // Import useDispatch
import { addFavorite } from "../../Redux/Actions/actions"; // Import your action
import { getMovies } from "../../Redux/Actions/moviesActions"
import { languageContext } from "../../Context/changeLang";

function ListMovies() {

    const moviesList = useSelector((state) => state.lmovies.list)
    const dispatch = useDispatch()

    const { myLang } = useContext(languageContext)

    useEffect(() => {
        dispatch(getMovies(myLang))
    },[dispatch, myLang])
    
    return (
        <>
            <h1 className="text-center text-danger">Movies</h1>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {
                    moviesList.map((movie) => {
                        return <MyCard 
                            key={movie.id}
                            img={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                            name={movie.title}
                            link={`/view/${movie.id}`}
                            // Add button to dispatch addFavorite action
                            onButtonClick={() => dispatch(addFavorite(movie.id))}
                            buttonText="Add to Favorites"
                            buttonClass="btn-success"
                        />
                    })
                }
            </div>
        </>
    );
}

export default ListMovies;