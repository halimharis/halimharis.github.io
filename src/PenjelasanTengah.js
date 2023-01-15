import React from "react";

export default function PenjelasanTengah({ judulUtama, descUtama }) {
  return (
    <div className="my-32 w-full max-w-screen-lg flex flex-col items-center gap-8">
      <h1 className="text-4xl">
        What is <span className="font-bold">{judulUtama} </span> ?
      </h1>
      <p className="text-center text-xl">{descUtama}</p>
    </div>
  );
}
