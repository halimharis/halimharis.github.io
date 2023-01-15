import { useContext, useState } from "react";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";
import workData from "./WorkData";
import LanguageContext from "./context/languageContext";
import { useNavigate } from "react-router-dom";

function MyWorkPage() {
  const [works] = useState(workData);
  const [list, setList] = useState("FE");
  const { language } = useContext(LanguageContext);
  const nav = useNavigate();

  const onOptionChange = (e) => {
    setList(e.target.value);
  };
  return (
    <div className="min-h-screen mt-24 lg:mt-48 flex flex-col items-center">
      <div className="max-w-sm flex flex-col text-center gap-4">
        <h1 className="text-2xl font-bold">
          {language === "en"
            ? "Completed Projects"
            : "Proyek Yang Telah Selesai"}
        </h1>
        <div>
          {language === "en"
            ? "These are all the projects I've done since exploring as a Front-End Developer or UI/UX Designer"
            : "Ini semua proyek yang telah saya lakukan sejak mendalami Front-End Developer dan UI/UX Designer"}
        </div>
      </div>
      <div className="flex flex-col justify-center mt-24 relative">
        <div className="flex justify-center">
          <input
            type="radio"
            name="list"
            value="FE"
            id="FE"
            checked={list === "FE"}
            onChange={onOptionChange}
            className="appearance-none peer/FE "
          />
          <label
            htmlFor="FE"
            className="w-24 text-center py-2 px-4 after:bg-darkbrown after:w-full after:h-1 after:absolute relative after:-bottom-2 after:right-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform peer-checked/FE:after:scale-x-100"
          >
            FE
          </label>
          <input
            type="radio"
            name="list"
            value="UI/UX"
            id="UI/UX"
            checked={list === "UI/UX"}
            onChange={onOptionChange}
            className="appearance-none peer/UIUX "
          />
          <label
            htmlFor="UI/UX"
            className="w-24 text-center py-2 px-4 after:bg-darkbrown after:w-full after:h-1 after:absolute relative after:-bottom-2 after:right-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform peer-checked/UIUX:after:scale-x-100"
          >
            UI/UX
          </label>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-12 mb-24">
          {works.map((work, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: "-200px" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
                viewport={{ once: true }}
                key={work.id}
              >
                {list === "FE"
                  ? work.FE && (
                      <WorkCard
                        key={work.id}
                        Judul={work.namaPekerjaan}
                        Desc={work.Desc}
                        BackgroundImage={work.image[0]}
                        onClickWorkCard={() => {
                          nav(`${work.id}`);
                        }}
                      />
                    )
                  : work.UIUX && (
                      <WorkCard
                        key={work.id}
                        Judul={work.namaPekerjaan}
                        Desc={work.Desc}
                        BackgroundImage={work.image[0]}
                        onClickWorkCard={() => {
                          nav(`${work.id}`);
                        }}
                      />
                    )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyWorkPage;
