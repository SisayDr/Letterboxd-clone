import { useState, useEffect } from "react";
import { RiEqualizerLine } from "react-icons/ri";
import DropDownOptions from "../ui/DropDownOptions";
import moviesJson from "../data/movies.json";
import Carousel from "../ui/Carousel";
import { NavLink } from "react-router-dom";
const Films = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const movies = moviesJson.filter(
    (movie) => !movie.poster.includes("empty-poster")
  );
  let genres = [];
  movies.map((movie) => {
    movie.genre.map((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });
  const genreCards = genres.map((genre, index) => {
    return (
      <button
        key={index}
        className="min-w-max border border-gray-400 px-3 py-0.5"
      >
        <NavLink to={`genre/${genre}`}>{genre}</NavLink>
      </button>
    );
  });
  const currentYear = new Date().getFullYear();
  const startYear = 2015;
  const years = [...Array(currentYear - startYear).keys()].map(
    (key) => key + startYear
  );
  const [yearFilter, setYearFilter] = useState();
  const [genreFilter, setGenreFilter] = useState();
  const [pageNo, setPageNo] = useState(1);
  const movies_per_page = deviceWidth > 767 ? 18 : 20;
  const [start, end] = [
    movies_per_page * pageNo - movies_per_page,
    movies_per_page * pageNo,
  ];

  useEffect(() => {
    window.addEventListener("resize", () => setDeviceWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setDeviceWidth(window.innerWidth)
      );
    };
  }, [deviceWidth]);

  return (
    <>
      <div className="max-w-5xl mx-auto my-4 w-11/12 px-3">
        <div className="flex justify-between  border-b-2">
          <p className="text-sm">FILMS</p>
          <div className="hidden md:block">
            <DropDownOptions
              label="Year"
              items={years}
              selectedItem={yearFilter}
              setSelectedItem={setYearFilter}
            />
            <DropDownOptions
              label="Genres"
              items={genres}
              selectedItem={genreFilter}
              setSelectedItem={setGenreFilter}
            />
          </div>
          <button className="md:hidden">
            <RiEqualizerLine />
          </button>
        </div>
        <Carousel items={genreCards} />

        <section className="grid grid-cols-4 md:grid-cols-6 gap-y-3 grid-rows-3">
          {movies.slice(start, end).map((movie, index) => {
            return (
              <NavLink
                key={index}
                to={"../film/" + movie.title.replaceAll(" ", "-")}
              >
                <div className="border rounded-sm border-gray-400 w-fit mx-2 cursor-pointer hover:border-4 hover:border-[#00c030]">
                  <img className="rounded-sm" src={movie.poster} alt="" />
                </div>
              </NavLink>
            );
          })}
        </section>
        <p className="text-right p-4 space-x-4">
          <button
            onClick={() => setPageNo(pageNo - 1)}
            className={`${
              pageNo < 2 ? "hidden" : ""
            } px-5 py-1 border rounded-sm"`}
          >
            Prev
          </button>
          <button
            onClick={() => setPageNo(pageNo + 1)}
            className={`${
              pageNo >= movies.length / movies_per_page ? "hidden" : ""
            } px-5 py-1 border rounded-sm"`}
          >
            Next
          </button>
        </p>
      </div>
    </>
  );
};

export default Films;
