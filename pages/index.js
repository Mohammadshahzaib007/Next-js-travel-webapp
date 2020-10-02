import React from "react";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Section2 } from "../components/Section2/Section2";
import { Section3 } from "../components/Section3/Section3";
import { Section4 } from "../components/Section4/Section4";
import { Section5 } from "../components/Section5/Section5";
import { Section6 } from "../components/Section6/Section6";

//color : #FB8F1D

export default function Home() {
  return (
    <>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}
