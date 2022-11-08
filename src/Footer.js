import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <nav className="py-4 mb-8 flex flex-col sm:flex-row space-y-12 sm:space-y-0 justify-between items-center w-full">
      <span className="text-lg text-blackbrown font-semibold font-coba">
        Created by Me
      </span>
      <div className="flex space-x-4">
        <a href="" className="text-4xl hover:text-darkbrown">
          <AiOutlineFacebook />
        </a>
        <a href="" className="text-4xl hover:text-darkbrown">
          <AiOutlineInstagram />
        </a>
        <a href="" className="text-4xl hover:text-darkbrown">
          <AiOutlineWhatsApp />
        </a>
        <a href="" className="text-4xl hover:text-darkbrown">
          <AiOutlineLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Footer;
