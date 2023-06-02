import { SiAndroid } from "react-icons/si";
import { SiApple } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="text-center max-w-5xl mx-auto space-y-10 text-white">
      <div className="text-xl md:text-4xl md:font-extrabold font-serif space-y-3 tracking-tight">
        <p>Track films you’ve watched.</p>
        <p>Save those you want to see.</p>
        <p>Tell your friends what’s good.</p>
      </div>
      <button className="bg-green-500 text-white md:text-lg tracking-wide px-10 py-2 rounded-sm uppercase hover:bg-green-600">
        Get Started &minus; it's free!
      </button>
      <p className="my-40 px-12 text-gray-400 font-serif ">
        The social network for film lovers. Also available on
        <a href="">
          <SiApple className="inline mx-1" size={22} />
        </a>
        <a href="">
          <SiAndroid className="inline mx-1" size={24} />
        </a>
      </p>
    </section>
  );
};

export default HeroSection;
