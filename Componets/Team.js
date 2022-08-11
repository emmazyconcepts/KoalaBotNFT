import React from "react";
import t1 from "../public/image/Teams.png";
import t2 from "../public/image/t2.png";
import t3 from "../public/image/t3.png";
import t4 from "../public/image/t4.png";

import Image from "next/image";

function Team() {
  return (
    <div id="TEAM" className=" bg-[#151515]">
      <div className="  justify-center sm:flex      ">
        {" "}
        <div className=" w-[360px] mt-28  md:w-[514px] p-8 md:p-0   ">
          <h1 className="team1 ">Meet the Team</h1>{" "}
          <h2 className=" nftd">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            pharetra, ullamcorper arcu orci non luctus est aliquet. In tortor
            magna ac egestas sagittis, sed massa. A tortor, aliquet in purus est
            sagittis habitant. Dignissim ut pellentesque aliquam turpis turpis
            pretium fringilla sit donec.
          </h2>
        </div>{" "}
        <div className=" -mt-0 md:-mt-36">
          <a href="https://twitter.com/RinkarKBC?t=2cx5hf6IVT7bbe8ADgrcig&s=08">
            <Image src={t1} className="w-full h-full " />
          </a>
        </div>
      </div>

      <div className="  justify-center md:flex">
        <a href="https://twitter.com/EmmarkGadgets?t=P7u6I2AX5DwJT1KpLGVTFA&s=08">
          <Image src={t2} className="w-full h-full" />
        </a>
        <a href="https://twitter.com/Warlordyt1?t=b0HEJH5Ffuo9ck_het7YUg&s=08">
          <Image src={t3} className="w-full h-full" />
        </a>
        <a href="https://twitter.com/Warlordyt1?t=b0HEJH5Ffuo9ck_het7YUg&s=08">
          <Image src={t4} className="w-full h-full" />
        </a>
      </div>
    </div>
  );
}

export default Team;
