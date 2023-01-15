import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import workData from "./WorkData";
import { ImSphere } from "react-icons/im";
import PenjelasanTengah from "./PenjelasanTengah";
import TagPart from "./TagPart";

export default function SelectedWorkPage() {
  const { WorkId } = useParams();
  const [listOfWork, setListOfWork] = useState(workData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const refAll = useRef([]);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(listOfWork[0].image.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === listOfWork[0].image.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    refAll.current[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start",
    });
  }, [currentIndex]);

  useEffect(() => {
    setListOfWork(listOfWork.filter((work) => work.id === parseInt(WorkId)));
  }, [WorkId]);

  return (
    <>
      <div className="max-w-screen-xl flex flex-col items-center">
        <div className="relative pt-[10vh] min-h-screen w-full flex flex-col items-center">
          <div className="relative max-w-screen-xl w-screen ">
            <div
              onClick={handleNext}
              className="flex flex-now rap scroll-smooth touch-auto h-[80vh] w-full rounded-none  border-0 md:rounded-xl md:border-4 border-darkbrownblack overflow-auto scrollbar-hide"
            >
              {listOfWork[0].image.map((element, index) => {
                return (
                  <div key={index} className="relative w-full">
                    <div className="bg-black absolute w-full h-full opacity-30"></div>
                    <img
                      src={element}
                      alt=""
                      ref={(refElement) => (refAll.current[index] = refElement)}
                      className={`w-screen max-w-screen-xl h-full transition-all object-cover object-top`}
                    />
                  </div>
                );
              })}
            </div>
            <div className=" absolute z-40 -bottom-24 left-0 flex gap-4">
              <div className="text-center text-darkbrownblack bg-darkbrown text-4xl font-bold px-8 py-4 rounded-lg border-4 border-darkbrownblack">
                {listOfWork[0].namaPekerjaan}
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={listOfWork[0].URL}
                className="flex items-center group px-8 py-4 text-darkbrownblack bg-darkbrown  text-4xl font-bold  rounded-lg border-4 border-darkbrownblack"
              >
                <ImSphere className="rounded-full scale-125 md:scale-100 group-hover:scale-125 transition-all" />
              </a>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="hidden md:block absolute top-1/2 -translate-y-[50%] left-12 rounded-full shadow-lg shadow-darkbrownblack hover:scale-150 transition-all active:shadow-none"
          >
            <BsFillArrowLeftCircleFill className="text-5xl text-lightbrown    rounded-full  " />
          </button>
          <button
            onClick={handleNext}
            className="hidden md:block absolute top-1/2 -translate-y-[50%] right-12 rounded-full shadow-lg shadow-darkbrownblack hover:scale-150 transition-all active:shadow-none"
          >
            <BsFillArrowRightCircleFill className="text-5xl text-lightbrown rounded-fulln" />
          </button>
        </div>
        <PenjelasanTengah
          judulUtama={listOfWork[0].namaPekerjaan}
          descUtama={listOfWork[0].Desc}
        />
        <TagPart tags={listOfWork[0].tag} />
      </div>
    </>
  );
}
