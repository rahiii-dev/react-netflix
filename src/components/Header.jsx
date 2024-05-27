import { LOGO } from "../utils/custom";
import useMovieList from "../hooks/useMovieList";
import { useEffect, useState } from "react";
import axios from "../utils/axios";



const Header = () => {
   const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const movies = useMovieList("discover/movie");
    
  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    }
  }, [movies]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`movie/${movie?.id}/videos`);
        const videos = response?.data?.results;
        const trailers = videos.filter((video) => video?.type == "Trailer");
        setTrailer(trailers[0]);
      } catch (error) {setTrailer(null)}
    };

    if(movie) {fetchVideo()};
  }, [movie]);

  return (
    <header className="w-screen h-svh relative overflow-hidden">
      <div className="container flex justify-between place-items-center py-1">
        <div className="w-36">
          <img src={LOGO} alt="Logo" />
        </div>
        <div>
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Sign Out
          </button>
        </div>
      </div>
      <div className="pt-20 container text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl font-medium mb-4">{movie?.original_title}</h1>
          <p className="mb-4">{movie?.overview}</p>
          <div>
            <button className="px-6 py-2 bg-gray-400 bg-opacity-20 me-3 rounded">
              Play
            </button>
            <button className="px-6 py-2 bg-gray-400 bg-opacity-20 rounded">
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 -z-10 bg-slate-950 w-screen aspect-video">
        {trailer && 
            <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&playlist=${trailer?.key}&loop=1&controls=0&rel=0&showinfo=0`}
            allow="autoplay; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        }
      </div>
      
    </header>
  );
};

export default Header;
