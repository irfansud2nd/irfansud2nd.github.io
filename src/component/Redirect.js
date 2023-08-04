import React, { useState } from "react";

const Redirect = () => {
  const [closed, setClosed] = useState(false);
  return (
    <div
      className={`
      ${closed ? "hidden" : "block"}
      absolute z-10 top-0 left-0 bottom-0 right-0 bg-gray-500 bg-opacity-50 flex justify-center items-center text-white`}
    >
      <div className="w-[500px] max-w-[95vw] border-2 border-gray-200 bg-gray-900 flex flex-col justify-center items-center gap-3 px-5 py-3">
        <h1 className="text-2xl font-bold text-yellow-400">
          <i class="bi bi-exclamation-diamond-fill mr-3"></i>
          Warning
          <i class="bi bi-exclamation-diamond-fill ml-3"></i>
        </h1>
        <hr className="w-full h-1 bg-gray-200 border-none" />
        <p className="text-justify">
          this website is deprecated, please check my latest portfolio website
          linked down below, or if you really want to check my older website
          click close button down below
        </p>
        <div className="flex gap-2">
          <a
            href="https://sud-dev.vercel.app"
            className="px-2 by-0.5 bg-green-800 text-white rounded-full"
          >
            My latest portfolio website
          </a>
          <button
            className="px-2 by-0.5 bg-red-600 text-white rounded-full"
            onClick={() => setClosed(true)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
