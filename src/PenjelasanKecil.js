import { motion } from "framer-motion";

function PenjelasanKecil({ judul, isi }) {
  return (
    <div className="max-w-screen-lg px-4 sm:px-16 ">
      <motion.h1
        initial={{ x: "-200px", opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        exit={{ scale: 0 }}
        className="text-center font-extrabold text-xl md:text-3xl uppercase mb-2 sm:mb-4"
      >
        {judul}
      </motion.h1>
      <motion.p
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        exit={{ scale: 0 }}
        className="text-center text-lg md:text-xl"
      >
        {isi}
      </motion.p>
    </div>
  );
}

export default PenjelasanKecil;
