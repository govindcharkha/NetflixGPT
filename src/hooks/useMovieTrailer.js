import { useDispatch, useSelector } from "react-redux";
import { MOVIES_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

//fetch trailer videos and updating the store with trailer videos
const useMovieTrailer = (movieID) => {
  const trailerData = useSelector((store) => store.movies?.movieTrailers);

  const dispatch = useDispatch();
  const getVideosData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      MOVIES_OPTIONS
    );
    const data = await response.json();
    const filteredMovieTrailer = data.results.filter(
      (ele) => ele.type === "Trailer"
    );
    const trailer = filteredMovieTrailer.length
      ? filteredMovieTrailer[0]
      : data.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerData && getVideosData();
  }, []);
};

export default useMovieTrailer;
