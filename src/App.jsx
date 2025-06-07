import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <div className="fixed bottom-0 py-3 px-5 bg-black/50 w-full z-50">
    <Navbar/>
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<DetailsPage/>}/>
      </Routes>
    </>
  );
};

export default App;
