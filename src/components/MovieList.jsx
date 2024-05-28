import Movie from "./Movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseMovieList from "../hooks/useMovieList";
import axios from "../utils/axios"
import { useState } from "react";

const MovieList = ({title, url}) => {
    const [trailer, setTrailer] = useState(null);
    const moviesList = UseMovieList(url);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false
      };

    const playVideo = async (movieId) => {
        try {
            const response = await axios.get(`movie/${movieId}/videos`);
            const videos = response?.data?.results;
            const trailers = videos.filter((video) => video?.type == "Trailer");
            if(trailers.length > 0){
                setTrailer(trailers[0])
            }
        } catch (error) {setTrailer([])}
    }

    const closeVideo = () => {
        setTrailer(null);
    }

    return (

        <div className="mb-12 ps-6">
            <h1 className="font-medium text-xl text-white mb-4">{title}</h1>
            <div>
                <Slider {...settings}>
                    {moviesList.map((movie) => {
                        return <Movie key={movie?.id} movieId={movie?.id} imageUrl={movie?.backdrop_path} title={movie?.title} action={playVideo}/>
                    })}
                </Slider>
            </div>

            <div className="bg-slate-950 text-center">
                { trailer &&
                    <>
                        <iframe
                        className="mx-auto w-[100%] max-w-[600px] aspect-video"
                        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&rel=0&showinfo=0`}
                        allow="autoplay; fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                        <button onClick={closeVideo} className="bg-white px-4 py-2 rounded mt-2">Close</button>
                    </> 
                }
            </div>

        </div>
    );
}

export default MovieList;
