import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import EducationCard from "./EducationCard";
import images from "./imageHandler";

export default function AboutMe() {
  return (
    <div className="mb-36 mt-24 md:mt-12 lg:mt-0 flex items-center flex-col">
      <div className="max-w-screen-lg min-h-screen flex flex-col-reverse md:flex-row justify-evenly items-center gap-y-16">
        <div className="w-4/5 md:w-2/5 text-center md:text-left">
          <h1 className="font-bold mb-4 text-xl">
            Hi There, I'm Abdul Haris Halim
          </h1>
          <p className="mb-2">
            Usually, they call me Halim. I'm a front-end developer who is
            currently studying at Brawijaya University. Apart from Front-End, I
            also have other skills such as UI/UX designer
          </p>
          <p className="mb-2">
            I'm skilled in designing a product and making the design accessible
            for everyone in a website with more than
            <span className="font-semibold">
              2 years of Experience with React JS
            </span>
          </p>
          <p className="mb-2">
            I have completed more than 3 projects from the Dicoding Front-End
            Developer Roadmap and the React Developer Roadmap and the committees
            that I joined in college
          </p>
          <div className="flex gap-x-4 mt-8 justify-center md:justify-start">
            <button className="py-3 px-6 flex items-center gap-4 rounded-md bg-darkbrown text-white hover:text-blackbrown hover:border-darkbrownblack border-2 border-darkbrown">
              Resume
              <FiArrowUpRight />
            </button>
            <button className="flex gap-4 items-center border-2 border-lightbrown text-darkbrown px-6 hover:border-darkbrownblack rounded-md hover:text-darkbrownblack">
              LinkedIn
              <AiFillLinkedin />
            </button>
          </div>
        </div>
        <div className="md:w-2/5">
          <img src="https://picsum.photos/400/600" alt="" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col items-center mb-8 relative w-screen mt-24 md:mt-0">
        <div className="bg-coba1 w-screen absolute h-[28rem] "></div>
        <h1 className="text-4xl font-bold z-10 mt-24 text-whitebrown">
          Education
        </h1>
        <p className="z-10 text-whitebrown">
          Below is the place where I got my current skills
        </p>
        <div className=" z-10 flex flex-col lg:flex-row w-full items-center lg:items-stretch justify-center gap-12 gap-y-20 lg:gap-y-12 mt-24 max-w-screen-lg">
          <EducationCard
            place="Brawijaya University"
            field="Informatics Engineering"
            desc="Apart from going to college, I deepen my skills and abilities by
            participating in competitions and committees"
            year="2020 - Present"
            image={images["universitasbrwajiaya.png"]}
          />
          <EducationCard
            place="Dicoding Roadmap"
            field="Front-End Developer"
            desc="here I learned to understand the basics and how FE works, then I implemented it by making a final project with a score of 5 out of 5"
            year="2021 - 2022"
            image={images["dicodingimage.png"]}
          />
          <EducationCard
            place="Dicoding Roadmap"
            field="ReactJs Developer"
            desc="ReactJs is a very popular thats why i think that i need to learn it deeply, after that i implemented everthing that i have studied in a final project with a score of 5 out of 5"
            year="2021 - 2022"
            image={images["dicodingimage.png"]}
          />
        </div>
      </div>
    </div>
  );
}
