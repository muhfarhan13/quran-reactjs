import React from "react";
import Header from "../components/surah/Header";
import Ayat from "../components/surah/Ayat";
import Footer from "../components/Footer";

const Surah = () => {
  return (
    <div>
      <div className="sm:w-10/12 md:w-6/12 lg:w-6/12 w-auto md:mx-auto mx-auto bg-center h-full">
        <Header />
        <Ayat />
        <Footer />
      </div>
    </div>
  );
};

export default Surah;
