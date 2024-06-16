import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import ArtikelBacaBuku from "../../component/ArtikelBacaBuku";
import KategoriBacaBuku from "../../component/KategoriBacaBuku";

export default function ChallengeBacaBuku() {
  return (
    <div>
      <Navbar />
      <ArtikelBacaBuku />
      <KategoriBacaBuku />
      <Footer />
    </div>
  );
}
