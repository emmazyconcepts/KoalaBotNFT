import React from "react";
import t4 from "../public/image/Road.svg";
import t5 from "../public/image/roadd.svg";

import Image from "next/image";

function Roadmap() {
  return (
    <div id="ROADMAP" className="bg-[#62EA10] mt-36">
      <div className="w hidden sm:flex ">
        <Image src={t4} className="w-full h-full" />
      </div>
      <div className=" flex sm:hidden">
        <Image src={t5} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Roadmap;
