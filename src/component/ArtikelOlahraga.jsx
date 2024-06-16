import React from "react";
import { Link } from "react-router-dom";
import GambarOlahraga from "../assets/image/GambarOlahraga.png";

export default function ArtikelOlahraga() {
  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <img src={GambarOlahraga} alt="GambarOlahraga" />
      </div>
      <div className="lg:w-1/2 lg:my-auto flex flex-col">
        <h1 className="text-2xl font-bold lg:text-4xl">Olahraga</h1>
        <p className="text-sm mt-2 lg:mt-7 mb-6 lg:text-base">
          Calmy Challenge Olahraga adalah program tantangan olahraga yang
          dirancang untuk membantu Anda mencapai tujuan meredakan stress kamu.
          Dengan mengikuti tantangan ini, Anda akan termotivasi untuk
          berolahraga secara teratur dan mencapai hasil yang nyata.
        </p>
        <div className="flex justify-end">
          <Link to=" ">
            <button className="bg-secondary hover:bg-sixth text-fourt px-2 py-1 rounded-xl w-[135px] lg:text-lg lg:w-[239px] lg:py-3 lg:font-semibold lg:rounded-[28px]">
              Lihat Rekap
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
