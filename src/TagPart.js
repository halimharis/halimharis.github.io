import React from "react";
import images from "./imageHandler";

export default function TagPart({ tags }) {
  return (
    <div className="mb-32 w-full max-w-screen-xl flex">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="w-full flex flex-col items-center my-4 gap-4 rounded-full"
        >
          <img
            src={tag.image}
            alt="asd"
            className="bg-lightbrown rounded-full h-24 w-24 flex p-6 object-cover"
          />
          <p className="w-2/3 text-center">{tag.penjelasan}</p>
        </div>
      ))}
    </div>
  );
}
