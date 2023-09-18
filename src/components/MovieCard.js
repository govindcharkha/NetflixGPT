import React from "react";
import { IMDB_IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMDB_IMG_CDN + poster_path} alt="movie_img" />
    </div>
  );
};

export default MovieCard;
