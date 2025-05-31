import { Link } from 'react-router-dom';

function MyCard(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                
                {/* Single View Details link */}
                {props.link && (
                <Link to={props.link} className="btn mb-2 text-danger">
                    View Details
                </Link>
                )}
                
                {/* Action Button (Add/Remove) */}
                {props.onButtonClick && (
                <button 
                    className={`btn ${props.buttonClass} w-100`}
                    onClick={props.onButtonClick}
                >
                    {props.buttonText}
                </button>
                )}
                
                {/* Movie Overview */}
                {props.info && (
                <>
                    <h5 className="text-center text-danger mt-3">Overview</h5>
                    <p>{props.info}</p>
                </>
                )}
            </div>
        </div>
    );
}

export default MyCard;