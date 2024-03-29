import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import App from "./App";
import ContactMe from "./ContactMe";
import Home from "./Home";
import MyWorkPage from "./MyWorkPage";
import NotFoundPage from "./NotFoundPage";
import SelectedWorkPage from "./SelectedWorkPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="WorkList" element={<MyWorkPage />} />
          <Route path="WorkList/:WorkId" element={<SelectedWorkPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
