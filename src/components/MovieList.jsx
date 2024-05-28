import Movie from "./Movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseMovieList from "../hooks/useMovieList";

const MovieList = ({title, url}) => {
    const moviesList = UseMovieList(url);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false
      };

    return (
        <div className="mb-12 ps-6">
            <h1 className="font-medium text-xl text-white mb-4">{title}</h1>
            <div>
                <Slider {...settings}>
                    {moviesList.map((movie) => {
                        return <Movie key={movie?.id} movieId={movie?.id} imageUrl={movie?.backdrop_path} title={movie?.title}/>
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default MovieList;
