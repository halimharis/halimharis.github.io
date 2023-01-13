import React, { createRef, useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { ImSphere } from "react-icons/im";
import { FiArrowUpRight } from "react-icons/fi";

function WorkSelectedCard({
  namaPekerjaan,
  tanggalPekerjaanMulai,
  URL,
  tanggalPekerjaanBerakhir,
  Desc,
  image,
  tag,
  onClickWorkCard,
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const refs = image.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = image.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  useEffect(
    function () {
      setTimeout(function () {
        document.getElementById("main").classList.add("scale-100");
      }, 100);
      setTimeout(() => {
        nextImage();
      }, 3000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const closeButtonHandler = () => {
    document.getElementById("main").classList.remove("scale-100");
    setTimeout(onClickWorkCard, 200);
  };

  return (
    <div
      id="main"
      className="flex flex-col-reverse mx-8 lg:mx-0 scale-0 relative rounded-2xl ease-out duration-300 transition-all origin-top-left border-4 border-darkbrownblack"
    >
      <button
        onClick={closeButtonHandler}
        className="-top-6 left-8 absolute z-20 flex border-darkbrownblack border-4 bg-darkbrown py-2 px-4 rounded-xl hover:text-whitebrown"
      >
        <BsArrowLeftShort className="text-2xl" />
      </button>
      <a
        href={URL}
        target="_blank"
        rel="noopener noreferrer"
        className="-top-6 left-28 absolute z-20 flex border-darkbrownblack border-4 bg-darkbrown py-2 px-4 rounded-xl hover:text-whitebrown"
      >
        {window.innerWidth < 640 ? (
          <ImSphere className="text-2xl" />
        ) : (
          <span className="flex items-center gap-2">
            Visit The Website
            <FiArrowUpRight className="text-lg" />
          </span>
        )}
      </a>
      <div className="rounded-xl bg-blackbrown w-full h-full opacity-50 absolute top-0 left-0 z-10 pointer-events-none"></div>
      <div className="hover:opacity-0 duration-300 ease-out border-none flex flex-col items-center md:border-solid md:border-darkbrownblack md:border-4 md:max-w-lg bg-darkbrown static md:absolute md:bottom-12 md:right-12 rounded-xl rounded-t-none sm:rounded-t-xl px-4 py-8 sm:px-8 sm:py-6 z-10">
        <h1 className="static text-center text-2xl sm:text-lg font-bold md:absolute -top-10 right-8 text-whitebrown ">
          Building {namaPekerjaan}
        </h1>
        <div className="static flex space-x-4 md:absolute -bottom-8 right-8 text-whitebrown">
          <p className="text-center">
            {tag.map((tag) => {
              return <span key={tag}>{tag} </span>;
            })}
            <span>{tanggalPekerjaanBerakhir.getFullYear()}</span>
          </p>
        </div>
        <p className="text-center md:text-right">{Desc}</p>
      </div>
      <div className="w-full flex flex-row max-w-screen-lg relative rounded-xl rounded-b-none md:rounded-b-xl overflow-hidden">
        {image.map((img, i) => (
          <div
            onClick={nextImage}
            className="w-full flex-shrink-0"
            key={img}
            ref={refs[i]}
          >
            <img
              src={img}
              className="w-full h-[28rem] object-cover object-top"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkSelectedCard;
