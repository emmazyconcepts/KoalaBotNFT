import React from "react";
import Image from "next/image";
import nft1 from "../public/image/1.png";
import nft2 from "../public/image/2.png";
import nft3 from "../public/image/3.png";
import nft4 from "../public/image/4.png";
import nft5 from "../public/image/5.png";
import nft6 from "../public/image/6.png";
import nft7 from "../public/image/7.png";
import nft8 from "../public/image/8.png";
import nft9 from "../public/image/9.png";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRef } from "react";

function Nft() {
  if (typeof window !== "undefined") {
    let imgWrapper = document.querySelectorAll(".img-wrapper"),
      dots = document.querySelectorAll(".dots > .dot"),
      i = 0;

    function reset() {
      for (let i = 0; i < imgWrapper.length; i++) {
        imgWrapper[i].style.display = "none";
      }
    }

    function autoSlide() {
      if (i >= imgWrapper.length) {
        i = 0;
      }
      reset();
      imgWrapper[i].style.display = "block";
      i++;
      setTimeout(autoSlide, 2000);
    }
    autoSlide();
  }

  const scrollRef = useRef(null);

  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };

  return (
    <div className="bg-[#62EA10]  sm:w-auto">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        transition={config}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        className=" nft  pt-36   md:ml-52   md:space-x-16  md:px-44 "
      >
        <div class="slideshow slideoo p-10 md:p-0 butt">
          <div class="img-wrapper">
            {" "}
            <Image src={nft1} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft2} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft3} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft4} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft5} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft6} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft7} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft8} className="w-full h-full" />
          </div>
          <div class="img-wrapper">
            {" "}
            <Image src={nft9} className="w-full h-full" />
          </div>

          <div class="dots">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div className="  -ml-28  ">
          <h1 className="nftu text-black text-left -mt-64 ml-32 md:ml-0 md:-mt-0">
            Mint Em NFTs
          </h1>{" "}
          <h2 className="nftd text-black mt-14 text-left  ml-32 sm:ml-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            pharetra, ullamcorper arcu orci non luctus est aliquet. In tortor
            magna ac egestas sagittis, sed massa. A tortor, aliquet in purus est
            sagittis habitant. Dignissim ut pellentesque aliquam turpis turpis
            pretium fringilla sit donec. Ac, eget enim et tincidunt mauris sit
            fusce viverra. Elit, aliquam, adipiscing velit nunc. Placerat
            sapien, dignissim nibh porta penatibus in sed ut amet.{" "}
          </h2>
          <button class="button mt-32  ml-32 sm:ml-0  ">Buy Collection </button>
        </div>
      </motion.div>
      <div class="scroll-left">
        <p className="fontbig  ">KOALA COLLECTIONS </p>
      </div>
    </div>
  );
}

export default Nft;
