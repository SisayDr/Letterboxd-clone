import React from "react";
import innerShadowMask from "../assets/bg-mask-1.png";
const HeaderImage = (props) => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${innerShadowMask}), url(${props.imageUrl})`,
        }}
        className={`-z-10 absolute top-0 left-1/2 -translate-x-1/2 w-full aspect-video max-w-6xl 
        bg-cover bg-center`}
      ></section>
      <div className="w-full aspect-video max-w-2xl m-auto"></div>
    </>
  );
};

export default HeaderImage;
