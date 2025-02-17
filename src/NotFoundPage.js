import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 justify-center items-center bg-whitebrown font-coba">
      <h1 className="font-black text-[5rem] md:text-[8rem] ">404</h1>
      <div className="flex flex-col items-center md:items-start ">
        <p className="font-bold text-xl text-center md:text-left">
          Nothing Here
        </p>
        <p className="mb-4 text-center md:text-left">
          there seems to be a typo in <br />
          the current url
        </p>
        <Link
          to={"/"}
          className="group max-w-fit border-2 border-darkbrownblack py-2 px-6 rounded-xl font-bold text-darkbrownblack hover:text-whitebrown hover:bg-darkbrown hover:border-darkbrown"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
