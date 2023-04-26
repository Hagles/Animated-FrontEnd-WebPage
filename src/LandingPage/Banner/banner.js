import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import './banner.css'

const pipe = (
  <svg
    class="h-6 w-6 text-white"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {" "}
    <path stroke="none" d="M0 0h24v24H0z" /> <path d="M5 12l5 5l10 -10" />
  </svg>
);
export default function Banner() {
  return (
    <div className="">
      <div class=" w-[1920px] h-[977px] mx-auto relative bg-bannerPic  bg-cover max-2xl:bg-cover  ">
        <div className=" absolute  right-[28px] bottom-[28px] ">
          <button className="  h-[71px] w-[71px]  rounded-[40px] bg-[#0065C9] flex items-center justify-center">
            <img
              className="h-[50px] w-[50px]   "
              src={require("./ch.png")}
              alt=""
            />
          </button>
        </div>
        <div className="block pl-[252px] pt-[98px] ">
          <div className="Calibri overflow-hidden relative flex justify-center items-center text-[#FFFFFF] rounded-[40px] h-[75px] w-[272px] bg-gradient-to-r from-[#ff4d43] via-[#ff7e03] to-[#ff8000]  ">
            30% KEDVEZMÉNY
            <p className="absolute pt-[32px]   font-bold  opacity-20 text-[137px]">
              30%
            </p>
          </div>
          <p className="Legyen text-[#FFFFFF]  w-[350px]  font-semibold pt-[48px] ">
            Legyen 2023 a nyelvtanulás éve
          </p>
          <div className="Vekony text-[#FFFFFF]  font-light opacity-90 pt-[30px] ">
            <p className="flex items-center">{pipe} FOLYAMATOS ÓRÁK 7/24 </p>
            <p className=" flex items-center pt-[20px] ">
              {pipe} ANYANYELVI TÍNÁROK
            </p>
            <p className=" flex items-center pt-[20px]">
              {pipe} 7 NAPOS INGYENES BETEKINTÉS
            </p>
            <p className=" flex items-center pt-[20px]">
              {pipe} TOVÁBBIMEGGYŐZŐ ÉRVEK
            </p>
            <p className=" flex items-center pt-[20px]">
              {pipe} MÉG EGY HASZNOS ÉRV JÖN IDE
            </p>
          </div>
          <p className="Vagjuk text-[#FFFFFF] w-[340px] opacity-90 font-semibold pt-[55px] ">
            VÁGJUNK IS BELE
          </p>
          <p className="VA text-[#FFFFFF]  opacity-90 ">
            Válassz nyelvet az alábbi opciók közül
          </p>
        </div>
        <div className="flex  w-[1200px] pl-[252px] max-sm:block pt-[60px]">
          <div className="pr-[40px]">
            <button className="relative w-[309px] h-[75px] bg-[#FFFFFF] rounded-[40px]  ">
              <label
                for="language-select"
                className="block text-[#001F3D] text-[28px] font-bold  pr-[50px] "
              >
                 <img
              className="absolute pl-[15px] pb-[10px]  h-[55px]    "
              src={require("./ukusa.png")}
              alt=""
            />
                <select className="SelArrBg pl-[20px]">
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="italian">Italian</option>
                </select>
              </label>
            </button>
          </div>
          <button className="K w-[206px] h-[75px]  justify-center text-[#FFFFFF]  rounded-[20px] bg-[#0065C9]">
            Kiválasztom
          </button>
        </div>
      </div>
    </div>
  );
}
