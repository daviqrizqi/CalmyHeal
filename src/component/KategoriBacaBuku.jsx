import React from "react";
import { Link } from "react-router-dom";
import minggu1 from "../assets/image/minggu1.png";
import minggu2 from "../assets/image/minggu2.png";
import minggu3 from "../assets/image/minggu3.png";
import minggu4 from "../assets/image/minggu4.png";

export default function KategoriBacaBuku() {
  const weeks = [
    { src: minggu1, label: "Minggu 1", link: " " },
    { src: minggu2, label: "Minggu 2", link: " " },
    { src: minggu3, label: "Minggu 3", link: " " },
    { src: minggu4, label: "Minggu 4", link: " " },
  ];

  return (
    <div className="bg-fourt font-Montserrat text-primary p-5 lg:px-[171px] lg:py-12">
      <div className="flex flex-col gap-6 my-4 lg:my-16 lg:grid lg:grid-cols-2 lg:gap-20 lg:justify-center">
        {weeks.map((week, index) => (
          <Link
            to={week.link}
            key={index}
            className="w-full max-w-[320px] h-[316px] bg-third rounded-xl hover:bg-sixth mx-auto border-2 border-transparent"
          >
            <div className="w-full max-w-[264px] h-[211px] mx-auto mt-6">
              <img
                src={week.src}
                className="rounded-lg h-[211px] w-full object-cover"
                alt={week.label}
              />
            </div>
            <h1 className="text-lg font-bold text-center mt-6">{week.label}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
