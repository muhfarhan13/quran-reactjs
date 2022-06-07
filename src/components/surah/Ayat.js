import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Ayat = () => {
  const [surah, setData] = useState([]);

  let { identifier } = useParams();

  useEffect(() => {
    axios
      .get(`https://equran.id/api/surat/${identifier}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData]);

  const ayat = surah.ayat;

  console.log(ayat);
  console.log(surah);

  return (
    <div>
      <div className="parent-element">
        <div className="pt-5 pb-10 text-white bg-[#30406E] mb-4">
          <h1 className="font-bold text-3xl">{surah.nama_latin}</h1>
          <h2 className="font-semibold text-lg py-2">Arti: "{surah.arti}"</h2>
          <div className="flex justify-center py-4">
            <hr className="w-5/12" />
          </div>
          <h3 className="capitalize">
            {surah.tempat_turun} ● {surah.jumlah_ayat} Ayat
          </h3>
          <h1 className="mt-4 text-3xl">
            ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
          </h1>
        </div>
        {ayat?.map((ayat) => (
          <div className="p-4 mb-7 bg-white -mt-8 rounded-t-2xl">
            <div className="navbar flex justify-between">
              <span className="bg-gray-400 rounded-full py-3 px-5">
                {ayat.nomor}
              </span>
            </div>
            <div className="ayat pt-5">
              <h1 className="text-right text-3xl font-semibold">{ayat.ar}</h1>
            </div>
            <div className="terjemah py-6">
              <p className="text-left italic">Arti: "{ayat.idn}"</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ayat;
