import Penjelasan from "./Penjelasan";
import PenjelasanKecil from "./PenjelasanKecil";
import SkillCard from "./SkillCard";
import WorkCard from "./WorkCard";
import { BiMessageDetail } from "react-icons/bi";
import Footer from "./Footer";
import images from "./imageHandler";
import { useState } from "react";
import workData from "./WorkData";
import WorkSelectedCard from "./WorkSelectedCard";
import { Link } from "react-router-dom";

function Home() {
  const [listOfWork] = useState(workData);
  const [selectedWorkCard, setSelectedWorkCard] = useState(null);

  function workCardButtonClicked(workName) {
    const workCardClickedObj = listOfWork.filter(function (work) {
      return work.namaPekerjaan === workName;
    });
    setSelectedWorkCard(workCardClickedObj[0]);
  }

  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center items-center space-y-24 max-w-screen-lg px-4 sm:px-8">
        <Penjelasan
          judul="Designer sekaligus coder"
          isi={
            "Selamat datang di portofolioku disini aku akan share tentang diriku beserta semua hasil karya dan kerjaku sampai saat ini"
          }
        />

        <img
          alt=""
          src={images["Profile_Icon2.png"]}
          className="h-48 lg:h-64 w-48 lg:w-64 mb-8"
        />
      </div>
      <section className="mt-24">
        <PenjelasanKecil
          judul="Halo Semuanya~"
          isi="Namaku adalah Abdul Haris Halim, biasanya teman temanku memanggilku Halim. Aku adalah seorang Mahasiswa yang sedang menjalani kuliah di Universitas Brawijaya, beberapa skill yang kupunya adalah desain dan front-end website developer"
        />
        <div className="mt-24 flex flex-col md:flex-row px-12 gap-12 justify-center items-center">
          <SkillCard
            Tools={[
              images["FigjamLogo.png"],
              images["FigmaLogo.png"],
              images["UndrawLogo.png"],
              images["FontAwesomeLogo.png"],
            ]}
            Logo={images["Designer_logo.png"]}
            Judul="UI/UX Designer"
            Desc="Aku dapat membuat struktur konten, design pattern, dan design interaksi dalam sebuah aplikasi berbasis website"
          />
          <SkillCard
            Tools={[
              images["reactLogo.png"],
              images["JSlogo.png"],
              images["tailwindlogo.png"],
            ]}
            Logo={images["front-end_logo.png"]}
            Judul="Front-End Web"
            Desc="Aku dapat membuat struktur konten, design pattern, dan design interaksi dalam sebuah aplikasi berbasis website"
          />
        </div>
      </section>
      <section
        id="#checkpointWork"
        className="flex flex-col items-center mt-48 "
      >
        <PenjelasanKecil
          judul="Hasil Kerjaku Sampai Saat ini"
          isi="Dibawah ini adalah hasil kerjaku sejak aku mulai mempelajari design dan front-end website developer di Universitas Brawija, beberapa project berasal dari kepanitiaan yang kujalani dan project akhir pelajaran yang kupelajari"
        />
        {selectedWorkCard === null ? (
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-12 gap-8">
            {listOfWork.map((work) => {
              return (
                <WorkCard
                  key={work.id}
                  Judul={work.namaPekerjaan}
                  Desc={work.Desc}
                  BackgroundImage={work.image[0]}
                  onClickWorkCard={workCardButtonClicked.bind(
                    this,
                    work.namaPekerjaan
                  )}
                />
              );
            })}
          </div>
        ) : (
          <div className="mt-24 w-full flex flex-col">
            <WorkSelectedCard
              {...selectedWorkCard}
              onClickWorkCard={function () {
                setSelectedWorkCard(null);
              }}
            />
          </div>
          // <WorkCard
          //   key={selectedWorkCard.id}
          //   Judul={selectedWorkCard.namePekerjaan}
          //   Desc={selectedWorkCard.Desc}
          //   BackgroundImage={selectedWorkCard.image}
          //   onClickWorkCard={workCardButtonClicked.bind(
          //     this,
          //     selectedWorkCard.namePekerjaan
          //   )}
          // />
        )}
      </section>

      <section className="my-36 flex flex-col items-center gap-8 lg:gap-16">
        <PenjelasanKecil
          isi="Aku selalu tertarik untuk bekerja dibidangku dimanapun itu, apabila
            aku dapat membantu hubungi saja langsung dengan email ataupun kontak
            dibawah"
          judul="Tertarik untuk bekerja bersama?"
        />
        <Link
          to={"/portofolio/ContactMe"}
          className="text-blackbrown flex lg:text-xl gap-4 border-2 border-blackbrown items-center py-2 px-4 lg:px-8 rounded-xl hover:bg-darkbrown hover:text-whitebrown hover:border-darkbrown"
        >
          <BiMessageDetail className="text-xl lg:text-2xl" />
          Kirim Email Sekarang Juga
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default Home;
