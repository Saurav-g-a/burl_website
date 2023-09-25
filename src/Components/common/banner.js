import React, { useEffect, useState } from "react";
import Countdown from "./coundown";
import { homeBanner } from "../api/all_api";

function Banner() {
  const [banner, setBanner] = useState("");
  useEffect(() => {
    homeBanner()
      .then((result) => {
        setBanner(result[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="grid grid-cols-12 bg-banner bg-cover	bg-no-repeat">
      <div className="md:col-span-7 col-span-12 self-center text-center py-8">
        <div>
          <div className="mx-auto">
            <Countdown />
          </div>
          <h2 className="text-[#699dea] uppercase mt-8 text-4xl font-bold">
            {banner.banner_text}
          </h2>
          <div className="bg-[#fdc9f0] w-[60%] mt-3 mb-8 mx-auto h-[2px]"></div>
          <div>
            <a
              href="https://www.babybrands.ca/../regcon-v3-f4/"
              target="_blank"
              className="px-5 rounded-lg text-white py-3 bg-[#fd92b4] mb-10"
            >
              Register now
            </a>
          </div>
        </div>
      </div>
      <div className="md:col-span-5 col-span-12">
        <img
          src={banner.banner_image}
          className="h-full w-full"
          alt="banner image"
        />
      </div>
    </div>
  );
}

export default Banner;
