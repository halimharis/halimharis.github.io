import "./index.css";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useContext, useMemo, useState } from "react";
import LanguageContext from "./context/languageContext";
import Footer from "./Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const toggleLanguange = () => {
    setLanguage((prevLanguage) => {
      const toggleContext = prevLanguage === "id" ? "en" : "id";
      localStorage.setItem("language", toggleContext);
      return toggleContext;
    });
  };

  const languageContextValue = useMemo(() => {
    return {
      language,
      toggleLanguange,
    };
  }, [language]);

  return (
    <>
      <LanguageContext.Provider value={languageContextValue}>
        <button
          onClick={toggleLanguange}
          className="z-20 fixed bottom-4 right-4 sm:bottom-8 sm:right-8 text-whitebrown hover:text-darkbrown px-3 py-1 rounded-xl border-2 border-darkbrown bg-darkbrown hover:bg-whitebrown"
        >
          {language === "id" ? "IND" : "ENG"}
        </button>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-1 origin-center bg-darkbrown z-50"
        />
        <main className="scroll-smooth font-coba bg-whitebrown flex flex-col items-center relative scrollbar-hide">
          <Nav />
          <Outlet />
          <Footer />
        </main>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
