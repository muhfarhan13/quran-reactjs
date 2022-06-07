import React from "react";
import Header from "../components/home/Header";
import Surah from "../components/home/Surah";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="sm:w-10/12 md:w-6/12 lg:w-6/12 w-auto md:mx-auto mx-auto bg-center h-full">
        <Header />
        <Surah />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
