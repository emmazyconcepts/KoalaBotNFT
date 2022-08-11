import React from "react";
import t4 from "../public/image/gr.svg";
import t5 from "../public/image/grr.svg";

import Image from "next/image";

function Roadmap() {
  return (
    <div id="ROADMAP" className="bg-[#08A53F] mt-36">
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
