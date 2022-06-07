import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Surah = () => {
  const [surah, setData] = useState();

  useEffect(() => {
    axios
      .get("https://equran.id/api/surat")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData]);

  return (
    <div>
      <div className="bg-white -mt-4 rounded-t-2xl">
        <h2 className="text-left px-3 py-4 font-bold text-xl">Daftar Surah</h2>
        <hr />
        <div className="list-surah">
          {surah?.map((surah) => (
            <NavLink to={`/surah/${surah.nomor}`}>
              <div className="list-surat flex justify-between px-3 py-5">
                <div className="flex">
                  <label className="bg-gray-400 rounded-full px-5 flex items-center">
                    {surah.nomor}
                  </label>
                  <div className="text-left ml-5">
                    <h2 className="font-semibold text-xl">
                      {surah.nama_latin}{" "}
                    </h2>
                    <h3 className="uppercase font-semibold text-sm">
                      {surah.tempat_turun} ●{" "}
                      <span className="capitalize">
                        {surah.jumlah_ayat} ayat
                      </span>
                    </h3>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-3xl">{surah.nama}</h1>
                </div>
              </div>
              <hr />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surah;
