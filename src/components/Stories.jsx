import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import stories from "../data/stories.json";
import Carousel from "../ui/Carousel";
const Stories = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setDeviceWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setDeviceWidth(window.innerWidth)
      );
    };
  }, [deviceWidth]);
  const storyCards = stories.map((story, index) => {
    return (
      <article
        key={index}
        className="bg-gray-800 w-80 max-w-full shrink-0 mx-2 rounded-sm snap-center"
      >
        <figure className="aspect-video w-full bg-red-400">
          <img
            className="rounded-t-sm object-fill"
            src={story.coverImage}
            alt=""
          />
        </figure>
        <h3 className="px-4 py-2 text-white text-2xl font-serif font-extrabold">
          {story.title}
        </h3>
        <p className="px-4 text-sm text-gray-400 line-clamp-3 lg:line-clamp-none">
          {story.description}
        </p>
        <p className="p-4 uppercase text-white font-semibold text-sm">
          <NavLink>read story</NavLink>
        </p>
      </article>
    );
  });

  return (
    <section id="stories" className="relative p-3 pt-6">
      <p className="flex justify-between border-b border-gray-400 hover:border-b-white hover:border-b-2">
        <span className="uppercase hover:text-white">Recent Stories</span>
        <a className="text-xs uppercase hover:text-white" href="">
          All HQS
        </a>
      </p>
      {deviceWidth > 840 ? (
        <div className="columns-3 space-y-10 my-10">{storyCards}</div>
      ) : (
        <Carousel items={storyCards} />
      )}
    </section>
  );
};

export default Stories;
