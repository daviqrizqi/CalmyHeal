// src/rekap.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const data = [
  {
    id: 1,
    tanggal: "8 Mei 2024",
    foto: "foto1.jpg",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
  {
    id: 2,
    tanggal: "9 Mei 2024",
    foto: "foto2.jpg",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
  {
    id: 3,
    tanggal: "9 Mei 2024",
    foto: "foto3.jpg",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
  {
    id: 4,
    tanggal: "10 Mei 2024",
    foto: "foto4.jpg",
    deskripsi:
      "Hari ini saya membaca buku “Filosofi teras” oleh Henry Manampiring sampai chap...",
  },
];

function RekapJurnal() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container md:mx-auto px-10 p-20 ">
        <h1 className="text-2xl font-bold mb-4 ">Rekap Jurnal Kamu</h1>
        <div className="table-fixed p-8 shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white ">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No</th>
                  <th className="py-2 px-4 border-b">Tanggal</th>
                  <th className="py-2 px-4 border-b"></th>
                  <th className="py-2 px-4 border-b text-left">Hasil catatan kemajuan harian</th>
                  <th className="py-2 px-4 border-b">Tindakan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry) => (
                  <tr key={entry.id}>
                    <td className="py-2 px-4 border-b text-center">
                      {entry.id}
                    </td>
                    <td className="py-2 px-4 border-b">{entry.tanggal}</td>
                    <td className="py-2 px-4 border-b">
  {/* <img src={entry.foto} alt={`Foto harian ${entry.id}`} className="w-16 h-16 object-cover rounded-full" /> */}
</td>

                    <td className="py-2 px-4 border-b">{entry.deskripsi}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM7 12H4v-3l7.586-7.586a4 4 0 015.656 5.656L9.414 12H7z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-4">
            <span>Showing 1 to 4 of 4 entries</span>
            <div>
              <button className="px-4 py-2 border rounded-l bg-[#C5EBE9] text-[#176B87] ">
                Previous
              </button>
              <button className="px-4 py-2 border rounded-none bg-[#04364A] text-[#F9FAF9]">
                1
              </button>
              <button className="px-4 py-2 border rounded-r bg-[#C5EBE9] text-[#176B87] ">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default RekapJurnal;