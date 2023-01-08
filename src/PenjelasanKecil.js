import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function PenjelasanKecil({ judul, isi }) {
  const [replay, setReplay] = useState(true);

  useEffect(() => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 0.000001);
  }, [isi]);

  return (
    <div className="max-w-screen-lg px-4 sm:px-16 ">
      {replay ? (
        <motion.h1
          initial={{ x: "-200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          }}
          viewport={{ once: true }}
          exit={{ x: "200px", opacity: 0 }}
          className="text-center font-extrabold text-xl md:text-3xl uppercase mb-2 sm:mb-4"
        >
          {judul}
        </motion.h1>
      ) : (
        <></>
      )}

      {replay ? (
        <motion.p
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          }}
          viewport={{ once: true }}
          exit={{ x: "-200px", opacity: 0 }}
          className="text-center text-lg md:text-xl"
        >
          {isi}
        </motion.p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PenjelasanKecil;
