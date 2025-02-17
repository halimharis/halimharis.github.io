import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Penjelasan({ judul, isi }) {
  const [replay, setReplay] = useState(true);

  useEffect(() => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 1000);
  }, [isi]);

  const words = judul.split(" ");
  return (
    <div className="">
      <h1 className="text-2xl space-x-3 md:text-5xl font-extrabold text-center uppercase mb-2 lg:mb-4 mt-8 lg:mt-16">
        {words.map((word, index) => {
          return (
            <motion.span
              className="inline-block"
              initial={{ y: "-32px" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              key={word}
            >
              {word}
            </motion.span>
          );
        })}
      </h1>
      <motion.p
        initial={{ y: "-32px", opacity: 0 }}
        animate={replay ? { y: 0, opacity: 1 } : { y: "-32px", opacity: 0 }}
        transition={{
          delay: 0,
          duration: 0.2,
          type: "spring",
          stiffness: 100,
        }}
        className="text-xl md:text-2xl text-center"
      >
        {isi}
      </motion.p>
    </div>
  );
}

export default Penjelasan;
