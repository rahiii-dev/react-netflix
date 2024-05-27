import { useEffect, useState } from "react";
import axios from "../utils/axios";

const UseMovieList = (url) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovie = async() => {
            try {
                const response = axios.get(url, {
                                    params: {include_adult: 'false', include_video: 'true', page: '1'},
                                });
                const data = (await response).data;
                const movies = data?.results;
                setMovies(movies);
            } catch (error) {
                
            }
        }

        fetchMovie();
    },[])

    return movies;
}

export default UseMovieList;
