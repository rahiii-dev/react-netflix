import { POSTER_BASE_URL } from "../utils/custom";

const Movie = ({imageUrl, title, movieId, action}) => {
    
    return (
        <div className="cursor-pointer" onClick={() => action(movieId)}>
            <div className="w-[250px] pointer-events-none pe-4">
                <img className="w-[100%] h-auto object-cover" src={`${POSTER_BASE_URL}w500${imageUrl}`} alt="movie" />
            </div>
            <div className="text-white text-center">{title}</div>
        </div>
    );
}

export default Movie;
