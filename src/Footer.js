import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <nav className="flex flex-col sm:flex-row gap-y-8 items-center px-8 mb-12 w-full justify-between text-lg max-w-screen-lg">
      <span className="font-bold lg:text-xl">Created by Me</span>
      <div className="flex gap-4 text-3xl">
        <a href="/portofolio" className="hover:text-darkbrown">
          <AiOutlineFacebook />
        </a>
        <a href="/portofolio" className="hover:text-darkbrown">
          <AiOutlineInstagram />
        </a>
        <a href="/portofolio" className="hover:text-darkbrown">
          <AiOutlineWhatsApp />
        </a>
        <a href="/portofolio" className="hover:text-darkbrown">
          <AiOutlineLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Footer;
