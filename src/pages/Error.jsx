import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.body.classList.add("bg-black/80");

    return () => {
      document.body.classList.remove("bg-black/80");
    };
  }, []);

  return (
    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
      <h1 className="text-8xl rotate-90 translate-x-3"> :(</h1>
      <h1 className="text-8xl font-mono">404 </h1>
      <p className="font-serif animate-pulse">Page not found</p>
    </div>
  );
};

export default Error;
