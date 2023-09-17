import React, { useEffect } from "react";
import { MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/changes?page=1",
      MOVIES_OPTIONS
    );
    const data = await response.json();
    dispatch(addMovies(data.results));
    console.log(data.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
