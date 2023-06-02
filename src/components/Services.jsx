import { BsEye } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsMicrosoft } from "react-icons/bs";
import { BsCalendarFill } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
const Services = () => {
  return (
    <section className="my-5 space-y-5">
      <p className="px-4 md:px-10">LETTERBOXD LETS YOU… </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-4 lg:p-0 gap-2">
        <div className="cursor-pointer bg-slate-600/60 flex gap-4 items-center px-5 py-1 max-w-xs md:max-w-none mx-auto rounded-md hover:bg-green-600 hover:text-white">
          <BsEye size={96} />
          <p className="font-semibold">
            Keep track of every film you’ve ever watched (or just start from the
            day you join)
          </p>
        </div>
        <div className="cursor-pointer bg-slate-600/60 flex gap-4 items-center px-5 py-1 max-w-xs md:max-w-none mx-auto rounded-md hover:bg-orange-500 hover:text-white">
          <BsHeartFill size={96} />
          <p className="font-semibold">
            Show some love for your favorite films, lists and reviews with a
            “like”
          </p>
        </div>
        <div className="cursor-pointer bg-slate-600/60 flex gap-4 items-center px-5 py-1 max-w-xs md:max-w-none mx-auto rounded-md hover:bg-sky-600 hover:text-white">
          <HiMenuAlt2 size={96} />
          <p className="font-semibold">
            Write and share reviews, and follow friends and other members to
            read theirs
          </p>
        </div>
        <div className="cursor-pointer bg-slate-600/60 flex gap-4 items-center px-5 py-1 max-w-xs md:max-w-none mx-auto rounded-md hover:bg-green-600 hover:text-white">
          <BsStarFill size={96} />
          <p className="font-semibold">
            Rate each film on a five-star scale (with halves) to record and
            share your reaction
          </p>
        </div>
        <div className="cursor-pointer bg-slate-600/60 flex gap-4 items-center px-5 py-1 max-w-xs md:max-w-none mx-auto rounded-md hover:bg-orange-500 hover:text-white">
          <BsCalendarFill size={96} />
          <p className="font-semibold">
            Keep a diary of your film watching (and upgrade to Pro for
            comprehensive stats)
          </p>
        </div>
        <div className="cursor-pointer bg-slate-600/60 flex gap-4 items-center px-5 py-1 max-w-xs md:max-w-none mx-auto  rounded-md hover:bg-sky-600 hover:text-white">
          <BsMicrosoft size={96} />
          <p className="font-semibold">
            Compile and share lists of films on any topic and keep a watchlist
            of films to see
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
