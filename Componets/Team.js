import React from "react";
import t1 from "../../koala/public/image/Teams.png";
import t2 from "../../koala/public/image/t2.png";
import t3 from "../../koala/public/image/t3.png";
import t4 from "../../koala/public/image/t4.png";

import Image from "next/image";

function Team() {
  return (
    <div className=" bg-[#151515]">
      <div className="  justify-center sm:flex      ">
        {" "}
        <div className=" w-[425px] mt-28  md:w-[514px] p-8 md:p-0   ">
          <h1 className="team1 ">Meet the Team</h1>{" "}
          <h2 className="team2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            pharetra, ullamcorper arcu orci non luctus est aliquet. In tortor
            magna ac egestas sagittis, sed massa. A tortor, aliquet in purus est
            sagittis habitant. Dignissim ut pellentesque aliquam turpis turpis
            pretium fringilla sit donec.
          </h2>
        </div>{" "}
        <div className=" -mt-0 md:-mt-36">
          <Image src={t1} className="w-full h-full " />
        </div>
      </div>

      <div className="  justify-center md:flex">
        <Image src={t2} className="w-full h-full" />

        <Image src={t3} className="w-full h-full" />
        <Image src={t4} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Team;
