import React, { useState } from "react";
import artikel1 from "../assets/image/artikel4.png";
import artikel2 from "../assets/image/artikel5.png";
import artikel3 from "../assets/image/artikel6.png";
import artikel4 from "../assets/image/artikel7.png";
import artikel5 from "../assets/image/artikel8.png";
import artikel6 from "../assets/image/artikel9.png";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const terbaru = [
  {
    id: 1,
    judul: "Penyebab Gangguan Stres Pada Remaja",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Stres pada remaja disebabkan oleh beberapa hal, dan beberapa di antaranya seringkali kamu alami loh.",
    gambar: artikel1,
  },
  {
    id: 2,
    judul: "Cara Mengatasi Permasalahan Stres dengan Coping Stres",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Stres merupakan suatu keadaan dimana sumber daya seseorang tidak dapat mendukung keinginan yang ingin dicapai.",
    gambar: artikel2,
  },
  {
    id: 3,
    judul: "Manajemen Waktu Untuk Menguramgi Stres",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Ini adalah era yang semakin memahami pentingnya kesehatan mental. Dalam masyarakat yang terus berkembang",
    gambar: artikel3,
  },
  {
    id: 4,
    judul: "Mengenal Academic Burnout Lelah Psikis dalam Belajar",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Academic burnout merupakan puncak dari segala rasa capek yang terlalu lama mengendap di tubuh dan pikiran",
    gambar: artikel4,
  },
  {
    id: 5,
    judul: "Membangun Kebiasaan Sehat: Cara Mengoptimalkan Fokus",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Rencanakan Waktu Belajar dengan Bijak: Buatlah jadwal belajar yang teratur dan realistis.",
    gambar: artikel5,
  },
  {
    id: 6,
    judul: "Sulit Fokus dan Sering Overthinking",
    tanggal: "16 Maret 2024",
    deskripsi:
      "Ada berbagai penyebab sulit berkonsentrasi mulai dari stres, pikiran dan perasaan berlebihan.",
    gambar: artikel6,
  },
];

const Artikelterbaru = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPageMobile = 3;
  const itemsPerPageLg = 6;
  const itemsPerPage =
    window.innerWidth >= 640 ? itemsPerPageLg : itemsPerPageMobile;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = terbaru.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(terbaru.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-fourt text-primary font-Montserrat p-5 lg:px-20 lg:py-12">
      <div>
        <h1 className="text-base font-medium my-2 lg:text-3xl">
          Artikel Terbaru
        </h1>
      </div>
      <div
        className={`grid ${
          window.innerWidth >= 640
            ? "lg:grid-cols-3 lg:grid-rows-2"
            : "grid-cols-1"
        } gap-5`}
      >
        {currentItems.map((data) => (
          <div
            key={data.id}
            className="w-[320px] h-[290px] bg-fifth rounded-lg"
          >
            <div>
              <img
                src={data.gambar}
                className="rounded-t-lg w-full h-[174px] object-cover"
                alt={data.judul}
              />
            </div>
            <div className="m-2">
              <h3 className="text-xs font-light">{data.tanggal}</h3>
              <h1 className="text-xl font-bold">{data.judul}</h1>
              <p className="text-xs font-medium line-clamp-2">
                {data.deskripsi}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary w-full h-1 mt-6 rounded-md"></div>
      <div className="mt-5 flex justify-center">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={terbaru.length}
          paginate={paginate}
        />
      </div>
      <div className="flex justify-between text-xs lg:text-xl font-bold h-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex flex-row gap-1 my-auto disabled:opacity-50"
        >
          <GrFormPreviousLink className="size-4 lg:size-7" />
          <h1>Sebelumnya</h1>
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(terbaru.length / itemsPerPage)}
          className="flex flex-row gap-1 my-auto disabled:opacity-50"
        >
          <h1>Selanjutnya</h1>
          <GrFormNextLink className="size-4 lg:size-7" />
        </button>
      </div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex flex-row gap-2">
      <ul className="pagination flex gap-2">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className="page-link text-base font-semibold lg:text-xl"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Artikelterbaru;
