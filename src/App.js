import "./index.css";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useMemo, useState } from "react";
import LanguageContext from "./context/languageContext";

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
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-1 origin-center bg-darkbrown z-50"
        />
        <main className="scroll-smooth font-coba bg-whitebrown flex flex-col items-center relative">
          <Nav />
          <Outlet />
          <button
            onClick={toggleLanguange}
            className="fixed bottom-4 right-4 px-4 py-2 rounded-md hover:font-bold"
          >
            {language === "id" ? "ID" : "EN"}
          </button>
        </main>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
