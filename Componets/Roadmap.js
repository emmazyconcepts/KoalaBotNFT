import React from "react";
import t4 from "../public/image/Road.svg";

import Image from "next/image";

function Roadmap() {
  return (
    <div className="bg-[#62EA10] mt-36">
      <Image src={t4} className="w-full h-full" />
    </div>
  );
}

export default Roadmap;
