import React from "react";
import Footer from "../components/Footer";

const Info = () => {
  return (
    <div>
      <div className="sm:w-10/12 md:w-6/12 lg:w-6/12 w-auto md:mx-auto mx-auto bg-center h-full">
        <div className="bg-[#30406E]">
          <h1 className="text-left text-white px-4 py-6 text-3xl font-semibold">
            About
          </h1>
        </div>
        <div className="content px-4 py-6">
          <p className="font-semibold text-xl text-left">
            Assalamualaikum, Hi 👋 Perkenalkan Saya Muhammad Farhan, seorang
            yang antusias terhadap dunia frontend development. Saya harap web
            ini bisa berguna untuk saudara muslim yang berkunjung. Terimakasih
            ya sudah berkunjung kemari!
          </p>
          <div className="mt-[20%]">
            <div className="sosmed flex justify-center mb-6">
              <a href="https://instagram.com/muhfarhan13_" className="px-4">
                <img
                  alt="sosmed"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
                  className="w-14"
                />
              </a>
              <a href="https://github.com/muhfarhan13" className="px-4">
                <img
                  alt="sosmed"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  className="w-14"
                />
              </a>
              <a href="https://linkedin.com/in/muhfarhan13" className="px-4">
                <img
                  alt="sosmed"
                  src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Linkedin-icon.png"
                  className="w-14"
                />
              </a>
            </div>
            <h1 className="font-semibold text-xl">
              API By{" "}
              <a href="https://equran.id/" className="underline">
                equran.id
              </a>
            </h1>
            <p className="text-black font-semibold">version 1.0.0</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Info;
