import Penjelasan from "./Penjelasan";
import PenjelasanKecil from "./PenjelasanKecil";
import SkillCard from "./SkillCard";
import WorkCard from "./WorkCard";
import { BiMessageDetail } from "react-icons/bi";
import images from "./imageHandler";
import { useContext, useState } from "react";
import workData from "./WorkData";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LanguageContext from "./context/languageContext";
import { MdDesignServices } from "react-icons/md";
import { TbBrowserCheck } from "react-icons/tb";

function Home() {
  const [listOfWork] = useState(workData);
  const { language } = useContext(LanguageContext);
  const nav = useNavigate();

  return (
    <>
      <motion.div className=" min-h-screen flex flex-col justify-center items-center space-y-24 max-w-screen-lg px-4 sm:px-8">
        {language === "id" ? (
          <Penjelasan
            judul="Desain sekaligus ngoding"
            isi={
              "Selamat datang di portofolioku disini aku akan share tentang diriku beserta semua hasil karya dan kerjaku sampai saat ini"
            }
          />
        ) : (
          <Penjelasan
            judul="Designer that Code"
            isi={
              "Hello there, here I will share about me and my journey in the world of web developer and design"
            }
          />
        )}

        <motion.img
          initial={{ y: "-200px", opacity: 0 }}
          animate={{
            height: "16rem",
            width: "16rem",
            y: "0",
            opacity: 1,
          }}
          transition={{ delay: 1.2 }}
          alt=""
          src={images["Profile_Icon2.png"]}
          className="h-48 w-48 mb-8"
        />
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        {language === "id" ? (
          <PenjelasanKecil
            judul="Abdul Haris Halim"
            isi="Biasanya teman temanku memanggilku Halim. Aku adalah seorang Mahasiswa yang sedang menjalani kuliah di Universitas Brawijaya, beberapa skill yang kupunya adalah desain dan front-end website developer"
          />
        ) : (
          <PenjelasanKecil
            judul="Abdul Haris Halim"
            isi="Usually, they call me Halim. I'm a front-end developer who is currently studying at Brawijaya University. Apart from Front-End, I also have other skills such as UI/UX designer"
          />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center md:items-stretch md:flex-row justify-center gap-y-12 md:gap-x-8 lg:gap-x-12 max-w-screen-lg md:px-24 lg:px-36"
        >
          {language === "id" ? (
            <SkillCard
              Tools={[
                images["figma_skill_logo.png"],
                images["maze_skill_image.png"],
                images["miro_skill_iamge.png"],
              ]}
              Logo={<MdDesignServices />}
              Judul="UI/UX Designer"
              Desc="aku dapat menyelesaikan masalah dengan melakukan desain produk berdasarkan requirement yang ada dengan mengutamakan fungsionalitas dan aksesibilitasnya"
            />
          ) : (
            <SkillCard
              Tools={[
                images["figma_skill_logo.png"],
                images["maze_skill_image.png"],
                images["miro_skill_iamge.png"],
              ]}
              Logo={<MdDesignServices />}
              Judul="UI/UX Designer"
              Desc="I can solve problems by doing product designs based on existing requirements by prioritizing functionality and accessibility"
            />
          )}
          {language === "id" ? (
            <SkillCard
              Tools={[
                images["html_skill_logo.png"],
                images["css_skill_image.png"],
                images["javascript.svg"],
                images["react_skill_logo.png"],
                images["tailwind_skill_logo.png"],
                images["redux_skill_logo.png"],
              ]}
              Logo={<TbBrowserCheck />}
              Judul="Front-End Developer"
              Desc="Aku dapat membuat struktur konten, design pattern, dan design interaksi dalam sebuah aplikasi berbasis website"
            />
          ) : (
            <SkillCard
              Tools={[
                images["html_skill_logo.png"],
                images["css_skill_image.png"],
                images["javascript.svg"],
                images["react_skill_logo.png"],
                images["tailwind_skill_logo.png"],
                images["redux_skill_logo.png"],
              ]}
              Logo={<TbBrowserCheck />}
              Judul="Front-End Developer"
              Desc="I can make structure content, design patterns, and design interactions in a web-based application"
            />
          )}
        </motion.div>
      </motion.section>
      <section
        id="#checkpointWork"
        className="flex flex-col items-center mt-48 "
      >
        {language === "id" ? (
          <PenjelasanKecil
            judul="Hasil Kerjaku Sampai Saat ini"
            isi="Dibawah ini adalah hasil kerjaku sejak aku mulai mempelajari design dan front-end website developer di Universitas Brawija, beberapa project berasal dari kepanitiaan yang kujalani dan project akhir pelajaran yang kupelajari"
          />
        ) : (
          <PenjelasanKecil
            judul="My Recent Work"
            isi="Here some of my work since I started studying design and front-end website developers at Brawija University, several projects from the committee that I worked on and the final project of the lessons I studied"
          />
        )}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-12 ">
          {listOfWork.map((work, index) => {
            if (index >= 3) return;
            return (
              <motion.div
                initial={{ opacity: 0, x: "-200px" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 * index, duration: 1 }}
                viewport={{ once: true }}
                key={work.id}
              >
                <WorkCard
                  key={work.id}
                  Judul={work.namaPekerjaan}
                  Desc={work.Desc}
                  BackgroundImage={work.image[0]}
                  onClickWorkCard={() => {
                    nav(`WorkList/${work.id}`);
                  }}
                />
              </motion.div>
            );
          })}
        </div>
        <Link
          to={"WorkList"}
          className="mt-16 self-center hover:scale-110 duration-300 text-blackbrown flex lg:text-xl gap-4 border-2 border-blackbrown items-center py-2 px-4 lg:px-8 rounded-xl hover:bg-darkbrown hover:text-whitebrown hover:border-darkbrown"
        >
          {language === "id" ? "Lihat Projek lainnya" : "See more Projects"}
        </Link>
      </section>
      <section className="my-36 flex flex-col items-center gap-8 lg:gap-16">
        {language === "id" ? (
          <PenjelasanKecil
            judul="Tertarik untuk bekerja bersama?"
            isi="Aku selalu tertarik untuk bekerja dibidangku dimanapun itu, apabila
            aku dapat membantu hubungi saja langsung dengan email ataupun kontak
            dibawah"
          />
        ) : (
          <PenjelasanKecil
            judul="Get In Touch with Me"
            isi="I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
          />
        )}

        <Link
          to={"ContactMe"}
          className="hover:scale-110 duration-300 text-blackbrown flex lg:text-xl gap-4 border-2 border-blackbrown items-center py-2 px-4 lg:px-8 rounded-xl hover:bg-darkbrown hover:text-whitebrown hover:border-darkbrown"
        >
          {language === "id"
            ? "Kirim Email Sekarang Juga"
            : "Email me and say Hello"}
          <BiMessageDetail className="text-xl lg:text-2xl" />
        </Link>
      </section>
    </>
  );
}

export default Home;
