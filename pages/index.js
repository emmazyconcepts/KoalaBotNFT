import Head from "next/head";
import Image from "next/image";
import Navbar from "../Componets/Navbar";
import Nft from "../Componets/Nft";
import Team from "../Componets/Team";
import Roadmap from "../Componets/Roadmap";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Nft />
      <Team />
      <Roadmap />
    </div>
  );
}
