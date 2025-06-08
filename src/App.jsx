import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar";
import Playback from "./components/Playback";

const App = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full z-50">
        <div className="w-full px-2">
          <Playback />
        </div>
        <div className="bg-black/50 backdrop-blur-lg w-full px-5 py-2">
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
