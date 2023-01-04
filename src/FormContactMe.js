import mailbox from "./images/mailbox.png";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useContext } from "react";
import LanguageContext from "./context/languageContext";

function FormContactMe() {
  const { language } = useContext(LanguageContext);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmtuyon",
        "template_9qgz0g4",
        e.target,
        "ibyqNNhAbfoTdnxbQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="flex  flex-col lg:flex-row lg:items-center mx-8 md:mx-32 lg:mx-0 h-full px-4 sm:px-8">
      <div className="flex flex-col text-xl font-black pb-12 lg:pb-0 lg:w-3/5">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:text-left lg:text-2xl text-center"
        >
          How Can I Help You Today?
        </motion.h1>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-normal text-base lg:text-xl text-center lg:text-left"
        >
          {language === "id"
            ? "ingin bekerja bersama, bertanya atau apapun itu bisa langsung menghubungi saya dengan form berikut ini, atau dengan kontak pada bagian bawah"
            : "If you want to work together, ask questions or whatever, you can directly contact me using the form below, or using the contact below"}
        </motion.p>
        <motion.img
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-48 mt-24 self-center"
          alt=""
          src={mailbox}
        />
      </div>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onSubmit={sendEmail}
        className="flex flex-col font-coba pb-12 lg:w-2/5 lg:pl-12 "
      >
        <label className="w-max text-blackbrown pl-2">
          {language === "id" ? "Nama Anda" : "Your Name"}
        </label>
        <motion.input
          name="name"
          placeholder="Abdul Haris Halim"
          className="p-4 font-coba rounded-xl mb-4 outline-darkbrown"
          type="text"
        />
        <label className="w-max text-blackbrown pl-2">
          {language === "id" ? "Email Anda" : "Your Email"}
        </label>
        <input
          name="email"
          placeholder="example@gmail.com"
          className="p-4 font-coba rounded-xl mb-4 outline-darkbrown"
          type="text"
        />
        <label className="w-max text-blackbrown pl-2">
          {language === "id" ? "Pesan Anda" : "Your Message"}
        </label>
        {language === "id" ? (
          <textarea
            name="isi"
            placeholder="Aku ingin bekerja sama, kira kira bisa kapan?"
            className="resize-none p-4 h-48 font-coba rounded-xl mb-4 outline-darkbrown"
            type="text"
          />
        ) : (
          <textarea
            name="isi"
            placeholder="I have something for you, can we meet?"
            className="resize-none p-4 h-48 font-coba rounded-xl mb-4 outline-darkbrown"
            type="text"
          />
        )}
        <button
          type="submit"
          className="hover:scale-110 duration-300 border-2 border-darkbrown py-2 rounded-xl hover:bg-darkbrown hover:text-whitebrown"
        >
          Kirim
        </button>
      </motion.form>
    </div>
  );
}

export default FormContactMe;
