import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard";
import movies from "../data/movies.json";
import Carousel from "../ui/Carousel";

const FeaturedMovies = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const handleResize = () => setViewWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewWidth]);
  let no_of_cols = viewWidth > 640 ? 6 : 4;
  const movieCards = movies
    .filter((movie) => !movie.poster.includes("empty-poster"))
    .slice(0, no_of_cols * 4)
    .map((movie, index) => {
      return (
        <NavLink
          className={"snap-center"}
          key={index}
          to={"film/" + movie.title.replaceAll(" ", "-")}
        >
          <MovieCard poster={movie.poster} />
        </NavLink>
      );
    });
  return <Carousel items={movieCards} />;
};

export default FeaturedMovies;
