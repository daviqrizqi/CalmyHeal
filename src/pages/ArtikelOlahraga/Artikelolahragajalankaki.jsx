import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarjalankaki from "../../assets/image/gambarjalankaki.png";
import Gambarjalankaki1 from "../../assets/image/gambarjalankaki1.png";
import Gambarjalankaki2 from "../../assets/image/gambarjalankaki2.png";
import Gambarjalankaki3 from "../../assets/image/gambarjalankaki3.png";
import Gambarjalankaki4 from "../../assets/image/gambarjalankaki4.png";
import Gambarjalankaki5 from "../../assets/image/gambarjalankaki5.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";

const ArtikelOlahragaJalanKaki = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-10 mx-auto md:px-6 font-Montserrat ">
        <Link to="/ChallengeOlahraga">
          <button
            type="button"
            className="flex items-center py-3 px-8 text-base font-semibold text-[#176B87] rounded-xl outline-none hover:shadow-form"
          >
            <img src={iconleft} alt="IconLeft" className="mr-2" />
            Kembali
          </button>
        </Link>

        <section className="mb-32">
          <p className="mb-6 text-center text-3xl font-bold text-[#04364A]">
            Hari 1 : Panduan Aktifitas Jalan Kaki
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Jalan kaki adalah salah satu aktivitas fisik yang mudah dan murah
            yang dapat membantu Anda mengatasi stres.
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambarjalankaki1}
              alt="GambarJalanKaki1"
            />
          </div>
        </section>

        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img
                src={Gambarjalankaki}
                alt="GambarJalanKaki"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-7 ">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Tentukan Tujuan dan Waktu
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tujuan :
                </span>
                Tetapkan tujuan jalan kaki Anda, seperti menjelajahi lingkungan
                sekitar, menikmati alam, atau hanya untuk bersantai.
              </p>
              <p className="text-[#04364A]">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Waktu :
                </span>
                Pilih waktu yang tepat untuk jalan kaki, seperti pagi hari untuk
                suasana segar atau sore hari untuk menenangkan pikiran setelah
                beraktivitas.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img src={Gambarjalankaki2} alt="GambarJalanKaki2" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Persiapkan Diri
              </h3>
              <p className="text-[#04364A] ">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Pakaian :
                </span>
                Kenakan pakaian yang nyaman dan sesuai dengan cuaca.
              </p>

              <p className="text-[#04364A] mt-3">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Sepatu :
                </span>
                Gunakan sepatu yang nyaman dan mendukung langkah Anda.
              </p>
              <p className="text-[#04364A] mt-3">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Aksesoris :
                </span>
                Bawa air minum, topi atau payung (jika diperlukan), dan ponsel.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse mt-24 ">
            <div className="w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0 ">
              <img
                src={Gambarjalankaki3}
                alt="GambarJalanKaki3"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A]">
                Mulailah dengan Langkah-langkah Ringan
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Pemanasan :
                </span>
                Lakukan pemanasan ringan seperti stretching sebelum memulai
                perjalanan.
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Kecepatan :
                </span>
                Mulailah dengan langkah ringan dan perlahan-lahan tingkatkan
                kecepatan jika merasa nyaman.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img className="" src={Gambarjalankaki4} alt="GambarJalanKaki4" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Perhatikan Sekitar
              </h3>
              <p className="text-[#04364A] mt-5">
                Amati alam sekitar, suara-suara alam, dan hirup udara segar.
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Bernapas :
                </span>
                Praktikkan teknik pernapasan dalam untuk menenangkan pikiran.
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tingkatkan Intensitas :
                </span>
                Jika merasa nyaman, tambahkan beberapa tanjakan atau kecepatan
                untuk meningkatkan intensitas latihan.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse mt-24 ">
            <div className="w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <img
                src={Gambarjalankaki5}
                alt="GambarJalanKaki5"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A]">
                Berakhir dengan Pendinginan
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Pelankan Langkah :
                </span>
                Setelah jalan kaki selesai, pelan-pelan kurangi kecepatan
                langkah Anda.
              </p>
              <p className="text-[#04364A]">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Stretching :
                </span>
                Lakukan stretching ringan untuk mendinginkan otot-otot yang
                bekerja selama perjalanan.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-12 font-Montserrat">
          <div className="mx-auto w-full max-w-[1080px]">
            <h2 className="mb-5 text-center text-[#04364A] text-3xl font-bold mt-15">
              Yeay Aktifitas Jalan Kaki Telah Selesai !!
            </h2>
            <form action="" method="POST">
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-bold text-[#07074D]"
                >
                  Catat hasil pengalaman challenge mu hari ini!
                </label>
                <textarea
                  rows="10"
                  columns="10"
                  name="message"
                  id="message"
                  placeholder=""
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#4FA7A9] py-3 px-6 text-base font-medium text-[#F9FAF9] outline-none focus:shadow-md"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="hover:shadow-form rounded-xl bg-[#176B87] py-3 px-8 text-base font-semibold text-[#F9FAF9]"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtikelOlahragaJalanKaki;
