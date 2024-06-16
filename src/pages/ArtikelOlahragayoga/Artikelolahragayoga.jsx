import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Gambaryoga from "../../assets/image/gambaryoga.png";
import Gambaryoga1 from "../../assets/image/gambaryoga1.png";
import Gambaryoga2 from "../../assets/image/gambaryoga2.png";
import Gambaryoga3 from "../../assets/image/gambaryoga3.png";
import Gambaryoga4 from "../../assets/image/gambaryoga4.png";
import Gambaryoga5 from "../../assets/image/gambaryoga5.png";
import iconring from "../../assets/image/iconring.png";
import iconleft from "../../assets/image/iconleft.png";


const ArtikelOlahragaYoga = () => {
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
            Hari 3 : Panduan Aktifitas Yoga
          </p>
          <p className="mb-6 text-center text-[#176B87]">
            Yoga dapat membantu mengurangi stres, karena aktivitas fisik ini
            bisa meningkatkan relaksasi. 
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-lg rounded-lg"
              src={Gambaryoga}
              alt="gambar yoga"
            />
          </div>
        </section>

        <div className="mb-24">
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse items-center">
            <div className="w-full lg:w-6/12 lg:pl-15 mb-6 lg:mb-0">
              <img src={Gambaryoga1} alt="Gambaryoga1" className="ml-auto" />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-7 ">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Gerakan Forward Bend
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tujuan :
                </span>
                Gerakan menekuk ke depan akan meningkatkan pernapasan, yang
                mengarah ke respons relaksasi.
              </p>
              <p className="text-[#04364A]">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara melakukan :
                </span>
                Pilih waktu yang tepat untuk jalan kaki, seperti pagi hari untuk
                suasana segar atau sore hari untuk menenangkan pikiran setelah
                beraktivitas.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img src={Gambaryoga2} alt="Gambaryoga2" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Standing Forward Bend with Opener Shoulder
              </h3>
              <p className="text-[#04364A] ">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tujuan :
                </span>
                Selain untuk relaksasi, gerakan ini memiliki tujuan melepaskan
                ketegangan bahu serta melepaskan stres di paha belakang.
              </p>

              <p className="text-[#04364A] mt-3">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                Arahkan kedua tangan ke belakang punggung dan jalin jari-jari
                tangan. Angkat kedua lengan sejauh mungkin. Tahan selama 5
                napas, lalu ubah jalinan dengan meletakkan jari telunjuk lainnya
                di atas dan tahan selama 5 napas lagi. 
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse mt-24 ">
            <div className="w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0 ">
              <img src={Gambaryoga3} alt="Gambaryoga3" className="ml-auto" />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6 ">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A]">
                Wide-Legged Standing Forward Bend
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tujuan :
                </span>
                Pose ini tidak hanya meredakan stres tetapi juga melepaskan
                sebagian tekanan di kepala.
              </p>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                Buka kedua kaki lebar kemudian luruskan badan ke depan dengan
                wajah menghadap ke kaki yang terbuka. Posisi kedua tangan
                menyentuh betis atau pun ditumpukan di belakang tumit. Tahan
                pose ini selama 10 tarikan napas sembari ratakan punggung dan
                angkat pinggul.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-24">
            <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <img className="" src={Gambaryoga4} alt="Gambaryoga4" />
            </div>
            <div className="w-full lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-[#04364A]">
                Side Stretch
              </h3>
              <p className="text-[#04364A] mt-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tujuan :
                </span>
                Gerakan ini dapat melepaskan stres dari leher, kepala, dan bahu.
              </p>
              <p className="text-[#04364A] mt-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                Duduk bersila lalu angkat kedua tangan menjauh dari lantai dan
                tempatkan di samping telinga. Kemudian gerakan tubuh ke sisi
                kiri dan kanan bergantian. Masing-masing sisi 5-8 tarikan
                napas. 
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse mt-24 ">
            <div className="w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <img src={Gambaryoga5} alt="Gambaryoga5" className="ml-auto" />
            </div>
            <div className="w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-5 text-[#04364A]">
                Pendinginan dengan Savasana
              </h3>
              <p className="text-[#04364A] mb-5">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Tujuan :
                </span>
                Pendinginan membantu mengembalikan suhu tubuh, tekanan darah dan
                detak jantung. setidaknya membutuhkan waktu selama 5 - 10 menit
              </p>
              <p className="text-[#04364A]">
                <span className="font-bold flex items-center mr-12">
                  <img src={iconring} alt="IconRing" className="mr-2" />
                  Cara Melakukan :
                </span>
                embaringkan badan menghadap langit-langit. Buka kedua kaki
                selebar paha, posisikan tangan dengan telapak tangan membuka
                menghadap langit-langit. Tutup mata dan tarik napas perlahan.
                Rasakan napasmu, embuskan perlahan. Pusatkan perhatian pada
                aliran napas.
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

export default ArtikelOlahragaYoga;
