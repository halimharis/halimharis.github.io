import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <motion.nav
      initial={{ y: "200px" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="flex flex-col sm:flex-row gap-y-8 items-center px-8 mb-6 w-full justify-between text-lg max-w-screen-lg"
    >
      <span className="font-bold lg:text-xl">Created by Me</span>
      <div className="flex gap-4 text-3xl">
        <a
          href="/"
          className="hover:text-darkbrown hover:scale-125 duration-300 ease-in-out"
        >
          <AiOutlineFacebook />
        </a>
        <a
          href="https://www.instagram.com/halimmharis/"
          className="hover:text-darkbrown hover:scale-125 duration-300 ease-in-out"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://wa.me/6281289328639"
          className="hover:text-darkbrown hover:scale-125 duration-300 ease-in-out"
        >
          <AiOutlineWhatsApp />
        </a>
        <a
          href="www.linkedin.com/in/halimharis"
          className="hover:text-darkbrown hover:scale-125 duration-300 ease-in-out"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
    </motion.nav>
  );
}

export default Footer;
