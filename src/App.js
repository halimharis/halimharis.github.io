import "./index.css";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="scroll-smooth font-coba bg-whitebrown flex flex-col items-center relative">
      <Nav />
      <Outlet />
    </main>
  );
}

export default App;
