import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import EducationCard from "./EducationCard";
import images from "./imageHandler";
import { motion } from "framer-motion";
import LanguageContext from "./context/languageContext";

export default function AboutMe() {
  const Education = "Education".split("");
  const { language } = useContext(LanguageContext);

  return (
    <div className="mb-36 mt-24 md:mt-12 lg:mt-0 flex items-center flex-col">
      <div className="max-w-screen-lg min-h-screen flex flex-col-reverse md:flex-row justify-evenly items-center gap-y-16">
        <div className="w-4/5 md:w-2/5 text-center md:text-left">
          <h1 className="font-bold mb-4 text-xl">
            <motion.span
              initial={{ y: "-50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-block"
            >
              {language === "id" ? "Halo" : "Hi There"}
              ,&nbsp;
            </motion.span>
            <motion.span
              initial={{ y: "-50px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                duration: 0.2,
              }}
              className="inline-block"
            >
              {language === "id"
                ? "Namaku Abdul Haris Halim"
                : "I'm Abdul Haris Halim"}
            </motion.span>
          </h1>
          <motion.p
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 100,
              duration: 0.2,
            }}
            className="mb-2"
          >
            {language === "id" ? (
              <span>
                Biasanya teman temanku memanggilku Halim. Aku adalah seorang
                Mahasiswa yang sedang menjalani kuliah di Universitas Brawijaya,
                beberapa skill yang kupunya adalah desain dan front-end website
                developer
              </span>
            ) : (
              <span>
                Usually, they call me Halim. I'm a front-end developer who is
                currently studying at Brawijaya University. Apart from
                Front-End, I also have other skills such as UI/UX designer
              </span>
            )}
          </motion.p>
          <motion.p
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 100,
              duration: 0.2,
            }}
            className="mb-2"
          >
            {language === "id" ? (
              <span>
                Aku dapat membuat desain untuk suatu produk dan membuat desain
                tersebut dapat diakses oleh siapapun dalam sebuah website
                menggunakan
                <span className="font-semibold ml-1">
                  ReactJS dengan pengalaman lebih dari 2 tahun
                </span>
              </span>
            ) : (
              <span>
                I'm skilled in designing a product and making the design
                accessible for everyone in a website with more than
                <span className="font-semibold ml-1">
                  2 years of Experience with React JS
                </span>
              </span>
            )}
          </motion.p>
          <motion.p
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              delay: 1.1,
              type: "spring",
              stiffness: 100,
              duration: 0.2,
            }}
            className="mb-2"
          >
            {language === "en"
              ? "I have completed more than 3 projects from the Dicoding Front-End Developer Roadmap and the React Developer Roadmap and the committees that I joined in college"
              : "Dari mengikuti Dicoding Front-End maupun ReactJS roadmap dan berbagai Kepanitiaan di Universitas Brawijaya saya berhasil menyelesaikan lebih dari 3 project sebagai Front-End Developer dengan menggunakan React"}
          </motion.p>
          <div className="flex gap-x-4 mt-8 justify-center md:justify-start">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2,
                duration: 0,
              }}
              className="py-3 px-6 flex items-center gap-4 rounded-md bg-darkbrown text-white hover:text-blackbrown hover:border-darkbrownblack border-2 border-darkbrown"
            >
              Resume
              <FiArrowUpRight />
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.5,
                duration: 0,
              }}
              className="flex gap-4 items-center border-2 border-lightbrown text-darkbrown px-6 hover:border-darkbrownblack rounded-md hover:text-darkbrownblack"
            >
              LinkedIn
              <AiFillLinkedin />
            </motion.button>
          </div>
        </div>
        <motion.img
          initial={{ scale: 0, rotate: 360 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 3,
            duration: 0.5,
          }}
          src="https://picsum.photos/400/600"
          alt=""
          className="h-80 w-80 rounded-full border-2 border-darkbrownblack"
        />
      </div>
      <div className="flex flex-col items-center mb-8 relative w-screen mt-24 md:mt-0">
        <div className="bg-coba1 w-screen absolute h-[28rem] "></div>
        <h1 className="text-4xl font-bold z-10 mt-20 text-whitebrown">
          {Education.map((char, index) => (
            <motion.span
              initial={{ y: "-30px", opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="inline-block"
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ y: "-30px", opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
          }}
          viewport={{ once: true }}
          className="z-10 text-whitebrown"
        >
          {language === "id"
            ? "Dibawah ini adalah berbagai tempat dimana saya mendalami skill saya"
            : "Below is the place where I got my current skills"}
        </motion.p>
        <div className=" z-10 flex flex-col lg:flex-row w-full items-center lg:items-stretch justify-center gap-12 gap-y-20 lg:gap-y-12 mt-24 max-w-screen-lg">
          {language === "id" ? (
            <EducationCard
              index={1}
              place="Brawijaya University"
              field="Informatics Engineering"
              desc="Selain kuliah, saya memperdalam keterampilan dan kemampuan saya sebagai Front-End Developer atau UI/UX Designer dengan mengikuti kompetisi dan kepanitiaan"
              year="2020 - Present"
              image={images["universitasbrwajiaya.png"]}
            />
          ) : (
            <EducationCard
              index={1}
              place="Brawijaya University"
              field="Informatics Engineering"
              desc="Apart from going to college, I deepen my skills and abilities as a Front-End Developer or UI/UX Designer by
          participating in competitions and committees"
              year="2020 - Present"
              image={images["universitasbrwajiaya.png"]}
            />
          )}

          {language === "id" ? (
            <EducationCard
              index={2}
              place="Dicoding Roadmap"
              field="Front-End Developer"
              desc="Disini saya belajar memahami dasar dan cara kerja FE, kemudian saya mengimplementasikannya dengan membuat tugas akhir dengan skor 5 dari 5"
              year="2021 - 2022"
              image={images["dicodingimage.png"]}
            />
          ) : (
            <EducationCard
              index={2}
              place="Dicoding Roadmap"
              field="Front-End Developer"
              desc="Here I learned to understand the basics and how FE works, then I implemented it by making a final project with a score of 5 out of 5"
              year="2021 - 2022"
              image={images["dicodingimage.png"]}
            />
          )}

          {language === "id" ? (
            <EducationCard
              index={3}
              place="Dicoding Roadmap"
              field="ReactJs Developer"
              desc="Saya sangat menyukai ReactJs, Bagi saya library ini sangat cocok untuk mengembangkan UI di website sehingga saya berpikir bahwa saya perlu mempelajarinya secara mendalam, setelah itu saya mengimplementasikan semua yang telah saya pelajari dalam tugas akhir dengan skor 5 dari 5"
              year="2021 - 2022"
              image={images["dicodingimage.png"]}
            />
          ) : (
            <EducationCard
              index={3}
              place="Dicoding Roadmap"
              field="ReactJs Developer"
              desc="I really Love ReactJs, For me this library is perfect for developing UI in a website thats why i think that i need to learn it deeply, after that i implemented everthing that i have studied in a final project with a score of 5 out of 5"
              year="2021 - 2022"
              image={images["dicodingimage.png"]}
            />
          )}
        </div>
      </div>
    </div>
  );
}
