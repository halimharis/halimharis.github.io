import React from "react";
import { motion } from "framer-motion";

export default function EducationCard({
  place,
  field,
  desc,
  year,
  image,
  index,
}) {
  return (
    <motion.div
      initial={{ y: "-100px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.5 * index * 0.6,
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="relative w-4/5 sm:w-3/5 lg:w-1/3 flex flex-col border-2 border-black rounded-3xl px-10 pt-16 bg-lightbrown"
    >
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-darkbrownblack text-center md:text-left">
          {place}
        </h1>
        <h2 className=" font-semibold text-darkbrownblack opacity-70 text-center md:text-left">
          {field}
        </h2>
      </div>
      <img
        src={image}
        alt=""
        className="h-20 w-20 self-center absolute -top-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10  rounded-2xl "
      />
      <p className="my-auto h-full mt-4 text-darkbrownblack text-center md:text-left">
        {desc}
      </p>
      <p className=" font-bold my-8 text-darkbrownblack self-center md:self-end ">
        {year}
      </p>
    </motion.div>
  );
}
