import React, { createRef, useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

function WorkSelectedCard({
  namaPekerjaan,
  tanggalPekerjaanMulai,
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
    refs[i].current.scrollIntoView({
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
      setTimeout(nextImage, 5000);
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
      className="scale-0 relative rounded-2xl ease-out duration-300 transition-all origin-top-left border-4 border-darkbrownblack"
    >
      <button
        onClick={closeButtonHandler}
        className="-top-6 left-8 absolute z-20 flex border-darkbrownblack border-4 bg-darkbrown py-2 px-4 rounded-xl hover:text-whitebrown"
      >
        <BsArrowLeftShort className="text-2xl" />
      </button>
      <a
        href="https://ifelse.ub.ac.id/home"
        target="_blank"
        rel="noopener noreferrer"
        className="-top-6 left-28 absolute z-20 flex border-darkbrownblack border-4 bg-darkbrown py-2 px-4 rounded-xl hover:text-whitebrown"
      >
        Kunjungi Websitenya
      </a>
      <div className="rounded-xl bg-blackbrown w-full h-full opacity-50 absolute top-0 left-0 z-10 pointer-events-none"></div>
      <div className="border-darkbrownblack border-4 max-w-lg bg-darkbrown absolute bottom-12 right-12 rounded-lg px-8 py-6 z-10">
        <h1 className="text-lg font-bold absolute -top-10 right-8 text-whitebrown">
          Membangun {namaPekerjaan}
        </h1>
        <div className="flex space-x-4 absolute -bottom-8 right-8 text-whitebrown">
          {tag.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
          <span>{tanggalPekerjaanBerakhir.getFullYear()}</span>
        </div>
        <p className="text-right">{Desc}</p>
      </div>
      <div className="w-full flex flex-row max-w-screen-lg relative rounded-xl overflow-hidden">
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
