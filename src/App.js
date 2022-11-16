import "./index.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContactMe from "./ContactMe";
import MyWorkPage from "./MyWorkPage";

function App() {
  return (
    <main className="scroll-smooth font-coba bg-whitebrown flex flex-col items-center relative">
      <Nav />
      <Routes>
        <Route path="/portofolio/" element={<Home />} />
        <Route path="/portofolio/ContactMe" element={<ContactMe />} />
        <Route path="/portofolio/MyWork" element={<MyWorkPage />} />
      </Routes>
    </main>
  );
}

export default App;
