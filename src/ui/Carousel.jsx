import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Carousel = (props) => {
  const carouselWrpper = useRef();
  return (
    <section className="relative p-3 mt-6">
      <div
        ref={carouselWrpper}
        className="relative flex overflow-scroll scroll-smooth snap-x snap-mandatory"
      >
        {props.items}
      </div>
      <button
        onClick={() => {
          let fullWidth = carouselWrpper.current.clientWidth;
          carouselWrpper.current.scrollLeft -= fullWidth;
        }}
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-2 outline-none font-bold "
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={() => {
          let fullWidth = carouselWrpper.current.clientWidth;
          carouselWrpper.current.scrollLeft += fullWidth;
        }}
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-2 outline-none font-bold "
      >
        <FaChevronRight size={24} fontWeight={"bolder"} />
      </button>
    </section>
  );
};

export default Carousel;
