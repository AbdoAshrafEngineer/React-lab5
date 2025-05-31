import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { removeFavorite } from "../../Redux/Actions/actions";
import { languageContext } from "../../Context/changeLang";
import MyCard from "../../components/MyCard";
import { getFavoriteDetails } from "../../Redux/Actions/moviesActionsDet";

function Favorites() {
    // Get favorites data from Redux store
    const { myLang } = useContext(languageContext); // Current language
    const favoritesIDs = useSelector(state => state.fav.favorites); // Array of favorite IDs
    const favDetails = useSelector(state => state.favDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        favoritesIDs.forEach(id => {
            dispatch(getFavoriteDetails(id, myLang))
            
        });
    }, [myLang, favoritesIDs, dispatch]);

    return (
        <>
            <h3 className="text-center text-danger mb-4">Favorites</h3>
            
            {favoritesIDs.length === 0 ? (
                <div className="text-center">
                    <p className="fs-5">Your favorites list is empty</p>
                    <p>Add movies from the Movies page</p>
                </div>
            ) : (
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {favoritesIDs.map(id => {
                        const movie = favDetails[id];
                        return movie ? (
                            <MyCard 
                                key={id}
                                img={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                name={movie.title}
                                link={`/view/${movie.id}`}
                                onButtonClick={() => dispatch(removeFavorite(id))}
                                buttonText="Remove from Favorites"
                                buttonClass="btn-danger"
                            />
                        ) : null;
                    })}
                </div>
            )}
        </>
    );
}

export default Favorites;