import { POSTER_BASE_URL } from "../utils/custom";

const Movie = ({url}) => {
    return (
        <div className="cursor-pointer">
            <div className="w-[200px] pointer-events-none">
                <img className="w-[100%] h-auto object-cover" src={`${POSTER_BASE_URL}w500${url}`} alt="movie" />
            </div>
        </div>
    );
}

export default Movie;
