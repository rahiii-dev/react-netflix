import Movie from "./Movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({title}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false
      };

    return (
        <div className="mb-14 ps-6">
            <h1 className="font-medium text-xl text-white mb-4">{title}</h1>
            <div>
                <Slider {...settings}>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                    <Movie url="/iADOJ8Zymht2JPMoy3R7xceZprc.jpg"></Movie>
                </Slider>
            </div>
        </div>
    );
}

export default MovieList;
