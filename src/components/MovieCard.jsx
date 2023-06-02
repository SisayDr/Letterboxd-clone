const MovieCard = (props) => {
  return (
    <div className="border rounded-sm border-gray-400 min-w-[180px] w-fit mx-2 cursor-pointer hover:border-4 hover:border-[#00c030]">
      <img className="rounded-sm" src={props.poster} alt="" />
    </div>
  );
};

export default MovieCard;
