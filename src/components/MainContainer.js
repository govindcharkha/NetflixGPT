import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainmovie = movies[0];
  const { original_title, overview, id } = mainmovie;

  return (
    <div>
      <VideoTitle name={original_title} desc={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
