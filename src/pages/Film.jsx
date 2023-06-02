import { useParams } from "react-router-dom";
import HeaderImage from "../components/HeaderImage";
import movies from "../data/movies.json";

const Film = () => {
  let { title } = useParams();
  const movie = movies.filter(
    (movie) => movie.title.replaceAll("-", " ") == title.replaceAll("-", " ")
  );

  return (
    <>
      {movie[0].headerImage != "" ? (
        <HeaderImage imageUrl={movie[0].headerImage} />
      ) : (
        ""
      )}
      <div className="relative max-w-5xl mx-auto my-10 px-3 flex gap-12 items-start">
        <div className="min-w-max max-w-xs">
          <h1>
            <img
              className="border rounded-sm"
              src={movie[0].poster}
              alt={movie[0].title}
            />
          </h1>
        </div>
        <div className="font-serif">
          <h1 className="text-3xl text-white font-extrabold ">
            {title.replaceAll("-", " ")}
          </h1>
          <h2 className="text-lg">
            {movie[0].year} Directed By {movie[0].director}
          </h2>
          <br />
          <div className="flex gap-5 justify-between m">
            <p className="synopsis w-1/2">{movie[0].synopsis}</p>
            <div className="w-1/3">right</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Film;
