import "./index.css";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 origin-center bg-darkbrown z-50"
      />
      <main className="scroll-smooth font-coba bg-whitebrown flex flex-col items-center relative">
        <Nav />
        <Outlet />
      </main>
    </>
  );
}

export default App;
