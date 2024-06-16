import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambarsepeda from "../../assets/image/gambarsepeda.png";
import Gambarsepeda1 from "../../assets/image/gambarsepeda1.png";
import Gambarsepeda2 from "../../assets/image/gambarsepeda2.png";
import Gambarsepeda3 from "../../assets/image/gambarsepeda3.png";
import Gambarsepeda4 from "../../assets/image/gambarsepeda4.png";
import Gambarsepeda5 from "../../assets/image/gambarsepeda5.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";

const ArtikelOlahragaBersepeda = () => {
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
            Hari 2 : Panduan Aktifitas Bersepeda
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Bersepeda adalah aktivitas fisik yang baik untuk tubuh. Rutin
            bersepeda dapat menghindarkan seseorang dari perasaan stres,
            tertekan bahkan depresi.
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambarsepeda}
              alt="gambar sepeda"
            />
          </div>
        </section>

        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img
                src={Gambarsepeda1}
                alt="Gambar sepeda 1"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-7 ">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Persiapan Sepeda dan Peralatan
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Manfaat :
                </span>
                Persiapan yang baik dapat meningkatkan keselamatan dan membantu
                mengurangi kecemasan sebelum mulai beraktivitas.
              </p>
              <p className="text-[#04364A]">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara melakukan :
                </span>
                Pastikan sepeda dalam kondisi baik dengan memeriksa ban, rem,
                dan perlengkapan keselamatan seperti helm. Persiapkan juga
                peralatan tambahan seperti air minum, peta rute, dan alat
                perbaikan sepeda.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img src={Gambarsepeda2} alt="Gambar sepeda 2" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Pilih Rute yang Menenangkan
              </h3>
              <p className="text-[#04364A] ">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Manfaat :
                </span>
                Rute yang indah dan tenang dapat membantu meredakan stres dan
                mengembalikan ketenangan pikiran Anda.
              </p>

              <p className="text-[#04364A] mt-3">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                Temukan jalur yang sesuai dengan preferensi Anda. Cobalah untuk
                menghindari jalan yang ramai dan pilihlah rute yang melewati
                taman, jalur hijau, atau daerah pedesaan yang tenang.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse mt-24 ">
            <div className="w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0 ">
              <img
                src={Gambarsepeda3}
                alt="Gambar sepeda 3"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A]">
                Tetapkan Tujuan yang Realistis
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Manfaat :
                </span>
                Menetapkan tujuan yang terukur dapat memberikan motivasi dan
                rasa pencapaian setelah selesai bersepeda.
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                Tentukan jarak atau durasi yang ingin Anda tempuh sesuai dengan
                kondisi fisik dan waktu luang Anda. Mulailah dengan tujuan yang
                ringan dan tingkatkan secara bertahap seiring waktu.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img className="" src={Gambarsepeda4} alt="Gambar sepeda 4" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Fokus pada Pernapasan dan Gerakan
              </h3>
              <p className="text-[#04364A] mt-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Manfaat :
                </span>
                Bersepeda dapat menjadi meditasi aktif yang membantu memusatkan
                perhatian pada pernapasan dan gerakan tubuh.
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                Selama bersepeda, sadari setiap napas Anda dan fokuslah pada
                gerakan mengayuh pedal. Hindari pikiran yang melayang jauh dan
                biarkan diri Anda terhubung sepenuhnya dengan pengalaman
                bersepeda.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse mt-24 ">
            <div className="w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <img
                src={Gambarsepeda5}
                alt="Gambarsepeda5"
                className="ml-auto"
              />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A]">
                Nikmati Alam dan Lingkungan Sekitar
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Manfaat :
                </span>
                Menikmati alam dan lingkungan sekitar, yang dapat meningkatkan
                suasana hati dan mengurangi stres.
              </p>
              <p className="text-[#04364A]">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                Selama perjalanan, berhenti sejenak untuk mengagumi pemandangan
                alam atau untuk bersantai di tempat-tempat yang indah. Jadikan
                momen ini sebagai waktu untuk bersyukur dan mengapresiasi
                keindahan sekitar Anda.
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

export default ArtikelOlahragaBersepeda;
