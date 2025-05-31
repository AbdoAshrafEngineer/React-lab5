import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import { useContext } from 'react';
import { languageContext } from "../Context/changeLang";


function MyNavBar() {
  // Get favorites count from Redux store
    const favoritesCount = useSelector(state => state.fav.favoritesCount);

    const {myLang, setmyLang} = useContext(languageContext)
    
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Left-aligned items */}
                <div className="d-flex">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link position-relative" to="/favorites">
                            Favorites
                            {/* Favorites counter badge */}
                            {favoritesCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {favoritesCount}
                                <span className="visually-hidden">favorites count</span>
                            </span>
                            )}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <p className='nav-link text-light'>{myLang}</p>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-info" onClick={() => setmyLang(myLang === "ar" ? "en" : "ar")}>
                            {myLang}
                        </button>
                    </li>
                </ul>
                </div>
                
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Right-aligned items */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
}

export default MyNavBar;