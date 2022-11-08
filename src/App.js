import "./index.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContactMe from "./ContactMe";

function App() {
  return (
    <main className="bg-whitebrown sm:px-16 lg:px-32 xl:px-60 flex flex-col px-0 min-h-[100vh]">
      <Nav />
      <Routes>
        <Route path="/portofolio/" element={<Home />} />
        <Route path="/portofolio/ContactMe" element={<ContactMe />} />
      </Routes>
    </main>
  );
}

export default App;
